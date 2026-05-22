import axios from 'axios'
import { GooglePlaceLead, CampaignInput } from '../../types'

const PLACES_API = 'https://maps.googleapis.com/maps/api/place'
const API_KEY = process.env.GOOGLE_PLACES_API_KEY!

// Keyword per categoria target
const TARGET_KEYWORDS: Record<CampaignInput['target_type'], string[]> = {
  pmi: [
    'ristorante', 'pizzeria', 'bar', 'hotel', 'b&b', 'parrucchiere', 'estetista',
    'negozio abbigliamento', 'agenzia immobiliare', 'studio medico', 'dentista',
    'officina meccanica', 'idraulico', 'elettricista', 'falegname',
  ],
  professional: [
    'studio legale', 'avvocato', 'commercialista', 'consulente fiscale',
    'psicologo', 'coach', 'architetto', 'ingegnere', 'notaio',
  ],
  agency: [
    'agenzia marketing', 'agenzia comunicazione', 'agenzia pubblicitaria',
    'studio grafico', 'agenzia digital',
  ],
}

export async function discoverGoogleMapsLeads(
  input: CampaignInput,
  maxResults = 50
): Promise<GooglePlaceLead[]> {
  if (!API_KEY) throw new Error('Missing GOOGLE_PLACES_API_KEY')

  const keywords = input.keywords ?? TARGET_KEYWORDS[input.target_type]
  const leads: GooglePlaceLead[] = []
  const seen = new Set<string>()

  for (const keyword of keywords) {
    if (leads.length >= maxResults) break

    const query = `${keyword} ${input.geo}`
    const results = await searchPlaces(query)

    for (const place of results) {
      if (seen.has(place.place_id)) continue
      seen.add(place.place_id)
      leads.push(place)
      if (leads.length >= maxResults) break
    }

    await new Promise(r => setTimeout(r, 200))
  }

  return leads
}

async function searchPlaces(query: string): Promise<GooglePlaceLead[]> {
  try {
    const response = await axios.get(`${PLACES_API}/textsearch/json`, {
      params: {
        query,
        language: 'it',
        region: 'it',
        key: API_KEY,
      },
    })

    if (response.data.status !== 'OK') return []

    return response.data.results.map((r: Record<string, unknown>) => ({
      name: r.name as string,
      address: r.formatted_address as string,
      city: extractCity(r.formatted_address as string),
      phone: undefined,
      website: undefined,
      rating: r.rating as number | undefined,
      review_count: r.user_ratings_total as number | undefined,
      place_id: r.place_id as string,
      types: (r.types as string[]) ?? [],
    }))
  } catch {
    return []
  }
}

function extractCity(address: string): string {
  // "Via Roma 1, 20100 Milano MI, Italia" → "Milano"
  const parts = address.split(',')
  if (parts.length >= 2) {
    const cityPart = parts[parts.length - 2].trim()
    const match = cityPart.match(/\d{5}\s+(.+?)(?:\s+[A-Z]{2})?$/)
    return match ? match[1] : cityPart
  }
  return address
}
