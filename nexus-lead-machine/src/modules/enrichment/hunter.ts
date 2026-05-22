import axios from 'axios'

const HUNTER_API = 'https://api.hunter.io/v2'
const HUNTER_KEY = process.env.HUNTER_API_KEY!

export interface EnrichmentResult {
  email?: string
  email_confidence?: number  // 0-100
}

export async function findEmail(domain: string, name?: string): Promise<EnrichmentResult> {
  if (!HUNTER_KEY) return {}

  try {
    const params: Record<string, string> = {
      domain,
      api_key: HUNTER_KEY,
    }

    if (name) {
      const parts = name.trim().split(/\s+/)
      if (parts.length >= 2) {
        params.first_name = parts[0]
        params.last_name = parts.slice(1).join(' ')
      }
    }

    const endpoint = name ? 'email-finder' : 'domain-search'
    const response = await axios.get(`${HUNTER_API}/${endpoint}`, { params })

    if (endpoint === 'email-finder') {
      const data = response.data.data
      return {
        email: data.email,
        email_confidence: data.score,
      }
    } else {
      // domain-search: prendi il primo email trovato
      const emails = response.data.data?.emails ?? []
      if (emails.length > 0) {
        return {
          email: emails[0].value,
          email_confidence: emails[0].confidence,
        }
      }
    }
  } catch {
    // Hunter.io restituisce 404 se non trova nulla — non è un errore critico
  }

  return {}
}

export function extractDomain(website: string): string {
  try {
    const url = new URL(website.startsWith('http') ? website : `https://${website}`)
    return url.hostname.replace(/^www\./, '')
  } catch {
    return website
  }
}
