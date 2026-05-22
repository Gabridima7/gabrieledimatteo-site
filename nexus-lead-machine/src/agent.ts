import 'dotenv/config'
import { CampaignInput, Lead } from './types'
import { importFromFile } from './modules/discovery/csv-import'
import { discoverLinkedInLeads } from './modules/discovery/linkedin'
import { qualifyBatch } from './modules/qualification/claude'
import { findEmail, extractDomain } from './modules/enrichment/hunter'
import { generateOutreachBatch } from './modules/outreach/generator'
import {
  createCampaign,
  insertLeads,
  updateLead,
  getTopLeads,
  insertOutreach,
  insertFollowUp,
} from './db/client'

export async function runCampaign(input: CampaignInput): Promise<void> {
  console.log(`\n--- NEXUS LEAD MACHINE ---`)
  console.log(`Campagna: ${input.name}`)
  console.log(`Target: ${input.target_type} | Servizio: ${input.service_focus} | Geo: ${input.geo}`)
  if (input.csv_file) console.log(`File: ${input.csv_file}`)
  console.log('')

  // 1. Crea la campagna nel DB
  const campaign = await createCampaign({
    name: input.name,
    target_type: input.target_type,
    service_focus: input.service_focus,
    geo: input.geo,
    keywords: input.keywords,
    status: 'active',
  })
  console.log(`Campagna creata: ${campaign.id}`)

  // 2. DISCOVERY
  console.log('\n[1/5] Discovery...')
  const maxLeads = input.max_leads ?? 50
  const rawLeads: Omit<Lead, 'id' | 'created_at' | 'updated_at'>[] = []

  // Fonte primaria: CSV (gratis, 43k aziende)
  if (input.csv_file) {
    const csvLeads = await importFromFile(input.csv_file, {
      campaignId: campaign.id,
      filter: {
        geo: input.geo,
        sectors: input.sectors ?? input.keywords,
      },
      maxLeads: input.use_linkedin ? Math.floor(maxLeads * 0.7) : maxLeads,
      offset: input.csv_offset ?? 0,
    })
    rawLeads.push(...csvLeads)
    console.log(`   CSV: ${csvLeads.length} lead importati`)
  }

  // Fonte opzionale: LinkedIn (solo se esplicitamente abilitato)
  if (input.use_linkedin) {
    console.log('   LinkedIn: ricerca in corso (Apify)...')
    const linkedinLeads = await discoverLinkedInLeads(input, Math.floor(maxLeads * 0.3))
      .catch(err => { console.warn(`   LinkedIn: errore — ${err.message}`); return [] })

    for (const profile of linkedinLeads) {
      rawLeads.push({
        campaign_id: campaign.id,
        source: 'linkedin',
        name: profile.name,
        role: profile.headline,
        company: profile.company,
        city: profile.location,
        linkedin_url: profile.linkedin_url,
        status: 'discovered',
        raw_data: { headline: profile.headline },
      })
    }
    console.log(`   LinkedIn: ${linkedinLeads.length} lead trovati`)
  }

  // Google Maps: disabilitato di default (costo elevato)
  if (input.use_google_maps) {
    console.warn('   ATTENZIONE: Google Maps abilitato — può generare costi elevati!')
    // Se serve, importare e usare discoverGoogleMapsLeads qui
  }

  if (rawLeads.length === 0) {
    console.error('\nNessun lead trovato. Verifica il percorso del file CSV o i filtri.')
    return
  }

  // 3. Salva i lead grezzi
  const savedLeads = await insertLeads(rawLeads)
  console.log(`\n[2/5] ${savedLeads.length} lead salvati nel DB`)

  // 4. QUALIFICATION con Claude
  console.log('\n[3/5] Qualificazione con Claude...')
  const qualifications = await qualifyBatch(savedLeads)

  let qualified = 0
  for (let i = 0; i < savedLeads.length; i++) {
    const q = qualifications[i]
    await updateLead(savedLeads[i].id, {
      score: q.score,
      recommended_service: q.recommended_service,
      pain_points: q.pain_points,
      qualification_notes: q.notes,
      status: q.worthy ? 'qualified' : 'rejected',
    })
    if (q.worthy) qualified++
  }
  console.log(`   Qualificati: ${qualified}/${savedLeads.length} (score >= 6)`)
  console.log(`   Scartati: ${savedLeads.length - qualified}`)

  // 5. ENRICHMENT — solo se non abbiamo già email dal CSV
  console.log('\n[4/5] Enrichment email...')
  const topLeads = await getTopLeads(campaign.id)

  let alreadyHaveEmail = 0
  let enriched = 0

  for (const lead of topLeads) {
    if (lead.email) {
      // Email già presente nel CSV — nessuna chiamata API
      alreadyHaveEmail++
      await updateLead(lead.id, { status: 'enriched' })
    } else if (lead.website) {
      // Prova Hunter.io solo se non abbiamo email e abbiamo il sito
      const domain = extractDomain(lead.website)
      const result = await findEmail(domain, lead.name)
      if (result.email) {
        await updateLead(lead.id, { email: result.email, status: 'enriched' })
        enriched++
      } else {
        await updateLead(lead.id, { status: 'outreach_ready' })
      }
      await new Promise(r => setTimeout(r, 200))
    } else {
      await updateLead(lead.id, { status: 'outreach_ready' })
    }
  }
  console.log(`   Email dal CSV: ${alreadyHaveEmail}`)
  console.log(`   Email trovate via Hunter: ${enriched}`)

  // 6. GENERAZIONE OUTREACH con Claude
  console.log('\n[5/5] Generazione messaggi outreach...')
  const outreachLeads = await getTopLeads(campaign.id)
  const outreachResults = await generateOutreachBatch(outreachLeads)

  let messagesCreated = 0
  for (let i = 0; i < outreachLeads.length; i++) {
    const lead = outreachLeads[i]
    const { linkedin_dm, email, follow_up } = outreachResults[i]

    if (lead.email) {
      const inserted = await insertOutreach([linkedin_dm, email])
      const emailMsg = inserted.find(m => m.channel === 'email')
      if (emailMsg) {
        await insertFollowUp({
          lead_id: lead.id,
          outreach_id: emailMsg.id,
          body: follow_up,
          send_after_days: 4,
          status: 'pending_review',
        })
      }
      messagesCreated += 2
    } else {
      // Solo LinkedIn DM se non abbiamo email
      await insertOutreach([linkedin_dm])
      messagesCreated += 1
    }

    await updateLead(lead.id, { status: 'outreach_ready' })
  }

  // RIEPILOGO
  console.log('\n' + '='.repeat(50))
  console.log('RIEPILOGO CAMPAGNA')
  console.log('='.repeat(50))
  console.log(`Nome:              ${campaign.name}`)
  console.log(`Lead importati:    ${savedLeads.length}`)
  console.log(`Lead qualificati:  ${qualified}`)
  console.log(`Con email:         ${alreadyHaveEmail + enriched}`)
  console.log(`Messaggi pronti:   ${messagesCreated}`)
  console.log('')
  console.log('Vai su Supabase o nel gestionale Nexus per')
  console.log('revisionare e approvare i messaggi prima di inviare.')
  console.log('='.repeat(50) + '\n')
}
