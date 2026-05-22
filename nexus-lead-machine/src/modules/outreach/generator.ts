import Anthropic from '@anthropic-ai/sdk'
import { Lead, OutreachMessage, ServiceType } from '../../types'

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

const SERVICE_DESCRIPTIONS: Record<ServiceType, string> = {
  sito_web: 'realizzare un sito web professionale moderno e ottimizzato',
  gestionale: 'sviluppare un gestionale custom per automatizzare e ottimizzare i processi',
  automazione: 'automatizzare processi ripetitivi con sistemi di workflow intelligenti',
  app: 'sviluppare un\'applicazione web/mobile su misura',
  sistema_agentico: 'implementare un sistema AI agentico per automatizzare task complessi',
}

const BRAND_VOICE = `
Il mittente è Gabriele Di Matteo, founder di Nexus Agency, una software house italiana.
Tono: diretto, professionale ma umano, mai aggressivo o pressante.
NON usare: parole come "opportunità unica", "offerta imperdibile", clichè di vendita, emoji.
SÌ usa: specifici dettagli sul lead che dimostrano che hai fatto ricerca, valore concreto, brevità.
`

export async function generateOutreachPair(lead: Lead): Promise<{
  linkedin_dm: Omit<OutreachMessage, 'id' | 'created_at'>
  email: Omit<OutreachMessage, 'id' | 'created_at'>
  follow_up: string
}> {
  const service = lead.recommended_service ?? 'sito_web'
  const serviceDesc = SERVICE_DESCRIPTIONS[service]
  const painPoints = lead.pain_points?.join(', ') ?? 'processi manuali, mancanza di strumenti digitali'

  const prompt = `
Genera messaggi di outreach personalizzati per questo lead:

Nome: ${lead.name}
Azienda/Ruolo: ${lead.company ?? lead.role ?? 'N/D'}
Città: ${lead.city ?? 'Italia'}
Sito web: ${lead.website ?? 'assente'}
Servizio raccomandato: ${service} (${serviceDesc})
Pain points identificati: ${painPoints}
Note qualificazione: ${lead.qualification_notes ?? ''}

${BRAND_VOICE}

Genera 3 testi in JSON:
{
  "linkedin_dm": "<messaggio LinkedIn, max 280 caratteri, personalizzato, menziona qualcosa di specifico su di loro>",
  "email_subject": "<oggetto email, max 50 caratteri, specifico e curioso non clickbait>",
  "email_body": "<corpo email, max 150 parole, struttura: 1 frase di contesto sul lead → problema identificato → soluzione proposta → CTA morbida>",
  "follow_up": "<follow-up da mandare dopo 4 giorni se non rispondono, max 80 parole, diverso dall'email principale>"
}
`

  const response = await client.messages.create({
    model: 'claude-sonnet-4-6',
    max_tokens: 1500,
    messages: [{ role: 'user', content: prompt }],
  })

  const text = response.content[0].type === 'text' ? response.content[0].text : ''
  const jsonMatch = text.match(/\{[\s\S]*\}/)

  if (!jsonMatch) throw new Error('Claude non ha restituito JSON valido per outreach')

  const parsed = JSON.parse(jsonMatch[0])

  return {
    linkedin_dm: {
      lead_id: lead.id,
      channel: 'linkedin_dm',
      body: parsed.linkedin_dm,
      status: 'pending_review',
    },
    email: {
      lead_id: lead.id,
      channel: 'email',
      subject: parsed.email_subject,
      body: parsed.email_body,
      status: 'pending_review',
    },
    follow_up: parsed.follow_up,
  }
}

export async function generateOutreachBatch(leads: Lead[]): Promise<ReturnType<typeof generateOutreachPair>[]> {
  const results = []
  for (const lead of leads) {
    const result = await generateOutreachPair(lead)
    results.push(result)
    await new Promise(r => setTimeout(r, 500))
  }
  return results
}
