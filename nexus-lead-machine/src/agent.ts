import 'dotenv/config'
import { CampaignInput, Lead } from './types'
import { discoverGoogleMapsLeads } from './modules/discovery/googlemaps'
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
  console.log(`\n🚀 Avvio campagna: ${input.name}`)
  console.log(`   Target: ${input.target_type} | Servizio: ${input.service_focus} | Geo: ${input.geo}\n`)

  // 1. Crea la campagna nel DB
  const campaign = await createCampaign({
    name: input.name,
    target_type: input.target_type,
    service_focus: input.service_focus,
    geo: input.geo,
    keywords: input.keywords,
    status: 'active',
  })
  console.log(`✅ Campagna creata: ${campaign.id}`)

  // 2. DISCOVERY — trova lead da più fonti in parallelo
  console.log('\n📡 Discovery in corso...')
  const maxLeads = input.max_leads ?? 50
  const [gmapLeads, linkedinLeads] = await Promise.allSettled([
    discoverGoogleMapsLeads(input, Math.floor(maxLeads * 0.7)),
    discoverLinkedInLeads(input, Math.floor(maxLeads * 0.3)),
  ])

  const rawLeads: Omit<Lead, 'id' | 'created_at' | 'updated_at'>[] = []

  if (gmapLeads.status === 'fulfilled') {
    console.log(`   Google Maps: ${gmapLeads.value.length} lead trovati`)
    for (const place of gmapLeads.value) {
      rawLeads.push({
        campaign_id: campaign.id,
        source: 'google_maps',
        name: place.name,
        city: place.city,
        website: place.website,
        phone: place.phone,
        status: 'discovered',
        raw_data: {
          rating: place.rating,
          review_count: place.review_count,
          types: place.types,
          place_id: place.place_id,
          has_website: !!place.website,
        },
      })
    }
  } else {
    console.warn('   Google Maps: errore —', gmapLeads.reason)
  }

  if (linkedinLeads.status === 'fulfilled') {
    console.log(`   LinkedIn: ${linkedinLeads.value.length} lead trovati`)
    for (const profile of linkedinLeads.value) {
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
  } else {
    console.warn('   LinkedIn: errore —', linkedinLeads.reason)
  }

  if (rawLeads.length === 0) {
    console.error('❌ Nessun lead trovato. Verifica le API key e i parametri.')
    return
  }

  // 3. Salva i lead grezzi
  const savedLeads = await insertLeads(rawLeads)
  console.log(`\n💾 ${savedLeads.length} lead salvati nel DB`)

  // 4. QUALIFICATION — Claude analizza ogni lead
  console.log('\n🧠 Qualificazione con Claude in corso...')
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
  console.log(`   ✅ ${qualified} lead qualificati (score ≥ 6)`)
  console.log(`   ❌ ${savedLeads.length - qualified} lead scartati`)

  // 5. ENRICHMENT — trova email per i lead qualificati
  console.log('\n🔍 Enrichment email in corso...')
  const topLeads = await getTopLeads(campaign.id)

  let enriched = 0
  for (const lead of topLeads) {
    if (lead.website) {
      const domain = extractDomain(lead.website)
      const result = await findEmail(domain, lead.name)
      if (result.email) {
        await updateLead(lead.id, {
          email: result.email,
          status: 'enriched',
        })
        enriched++
      } else {
        await updateLead(lead.id, { status: 'outreach_ready' })
      }
    } else {
      await updateLead(lead.id, { status: 'outreach_ready' })
    }
    await new Promise(r => setTimeout(r, 200))
  }
  console.log(`   📧 ${enriched}/${topLeads.length} email trovate`)

  // 6. OUTREACH GENERATION — Claude genera i messaggi
  console.log('\n✍️  Generazione messaggi outreach...')
  const outreachLeads = await getTopLeads(campaign.id)
  const outreachResults = await generateOutreachBatch(outreachLeads)

  for (let i = 0; i < outreachLeads.length; i++) {
    const lead = outreachLeads[i]
    const { linkedin_dm, email, follow_up } = outreachResults[i]

    const messages = [linkedin_dm, email]
    if (lead.email) {
      const inserted = await insertOutreach(messages)
      // Crea il follow-up collegato all'email
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
    } else {
      // Solo LinkedIn DM se non abbiamo email
      await insertOutreach([linkedin_dm])
    }

    await updateLead(lead.id, { status: 'outreach_ready' })
  }

  // 7. RIEPILOGO FINALE
  console.log('\n' + '='.repeat(50))
  console.log('📊 RIEPILOGO CAMPAGNA')
  console.log('='.repeat(50))
  console.log(`Campagna:          ${campaign.name}`)
  console.log(`Lead trovati:      ${savedLeads.length}`)
  console.log(`Lead qualificati:  ${qualified}`)
  console.log(`Email trovate:     ${enriched}`)
  console.log(`Messaggi pronti:   ${outreachLeads.length * 2}`)
  console.log('')
  console.log('👀 Vai su Supabase o nel gestionale Nexus per')
  console.log('   revisionare e approvare i messaggi.')
  console.log('='.repeat(50) + '\n')
}
