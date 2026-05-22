import Anthropic from '@anthropic-ai/sdk'
import { Lead, QualificationResult, ServiceType } from '../../types'

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

const SERVICES: Record<ServiceType, string> = {
  sito_web: 'Realizzazione o restyling sito web professionale',
  gestionale: 'Software gestionale custom (CRM, ERP, prenotazioni, inventario)',
  automazione: 'Automazione processi aziendali e workflow',
  app: 'Applicazione mobile o web app custom',
  sistema_agentico: 'Sistema AI agentico per automatizzare task complessi',
}

const SYSTEM_PROMPT = `Sei un analista commerciale esperto per Nexus Agency, una software house italiana specializzata in:
- Siti web professionali
- Gestionali custom (CRM, ERP, sistemi di prenotazione, inventario)
- Automazione processi aziendali
- Applicazioni web/mobile
- Sistemi agentici con AI

Il tuo compito è analizzare profili di potenziali clienti e determinare se hanno bisogno di questi servizi.
Rispondi SEMPRE in formato JSON valido, senza markdown.`

export async function qualifyLead(lead: Partial<Lead>): Promise<QualificationResult> {
  const context = buildLeadContext(lead)

  const response = await client.messages.create({
    model: 'claude-sonnet-4-6',
    max_tokens: 1024,
    system: SYSTEM_PROMPT,
    messages: [
      {
        role: 'user',
        content: `Analizza questo potenziale cliente per Nexus Agency e rispondi in JSON:

${context}

Rispondi con questo JSON esatto:
{
  "score": <numero 1-10>,
  "recommended_service": <"sito_web" | "gestionale" | "automazione" | "app" | "sistema_agentico">,
  "pain_points": [<lista di 2-4 problemi specifici che probabilmente ha>],
  "notes": "<spiegazione in 2-3 frasi del perché questo lead è interessante o no>",
  "worthy": <true se score >= 6, false altrimenti>
}

Criteri di scoring:
- 8-10: ha chiaramente bisogno del servizio, il timing è buono, facile da approcciare
- 6-7: potenziale concreto ma con qualche incertezza
- 4-5: potenziale ma non prioritario
- 1-3: non idoneo (troppo grande, già ben servito, fuori target)`,
      },
    ],
  })

  const text = response.content[0].type === 'text' ? response.content[0].text : ''

  try {
    const result = JSON.parse(text) as QualificationResult
    return result
  } catch {
    // fallback se Claude non produce JSON valido
    return {
      score: 0,
      recommended_service: 'sito_web',
      pain_points: [],
      notes: 'Errore parsing risposta Claude',
      worthy: false,
    }
  }
}

export async function qualifyBatch(leads: Partial<Lead>[]): Promise<QualificationResult[]> {
  // Processiamo in batch da 5 per non sovraccaricare l'API
  const results: QualificationResult[] = []
  const batchSize = 5

  for (let i = 0; i < leads.length; i += batchSize) {
    const batch = leads.slice(i, i + batchSize)
    const batchResults = await Promise.all(batch.map(qualifyLead))
    results.push(...batchResults)

    // Breve pausa tra batch per rispettare i rate limit
    if (i + batchSize < leads.length) {
      await new Promise(r => setTimeout(r, 1000))
    }
  }

  return results
}

function buildLeadContext(lead: Partial<Lead>): string {
  const parts: string[] = []

  if (lead.name) parts.push(`Nome attività: ${lead.name}`)
  if (lead.role) parts.push(`Ruolo: ${lead.role}`)
  if (lead.city || lead.region) parts.push(`Città: ${[lead.city, lead.region].filter(Boolean).join(', ')}`)
  if (lead.phone) parts.push(`Telefono: disponibile`)

  if (lead.raw_data) {
    const raw = lead.raw_data

    if (raw.sector) parts.push(`Settore: ${raw.sector}`)
    if (raw.address) parts.push(`Indirizzo: ${raw.address}`)

    // Segnali forti per la qualificazione
    parts.push(`Sito web: ASSENTE (confermato dalla lista)`)
    if (raw.rating != null) {
      const stars = raw.rating as number
      const count = raw.review_count as number ?? 0
      parts.push(`Rating Google Maps: ${stars}/5 con ${count} recensioni`)
      // Attività con molte recensioni = buon volume di clienti = ROI alto per un sito
      if (count > 100) parts.push(`Nota: alta reputazione online (${count} rec.) — ottimo candidato per sito con prenotazioni/menu`)
      if (stars >= 4.5) parts.push(`Nota: rating eccellente — può capitalizzare la reputazione con presenza web`)
    }

    if (raw.headline) parts.push(`Headline LinkedIn: ${raw.headline}`)
    if (raw.website_tech) parts.push(`Tecnologia sito attuale: ${raw.website_tech}`)
  }

  return parts.join('\n')
}
