import axios from 'axios'
import { LinkedInLead, CampaignInput } from '../../types'

const APIFY_API = 'https://api.apify.com/v2'
const APIFY_KEY = process.env.APIFY_API_KEY!

// Actor Apify per LinkedIn search
const LINKEDIN_ACTOR = 'curious_coder/linkedin-profile-scraper'

export async function discoverLinkedInLeads(
  input: CampaignInput,
  maxResults = 30
): Promise<LinkedInLead[]> {
  if (!APIFY_KEY) throw new Error('Missing APIFY_API_KEY')

  const searchQuery = buildSearchQuery(input)

  // Avvia il run su Apify
  const runResponse = await axios.post(
    `${APIFY_API}/acts/${LINKEDIN_ACTOR}/runs`,
    {
      searchUrl: `https://www.linkedin.com/search/results/people/?keywords=${encodeURIComponent(searchQuery)}&geoUrn=103350119`,
      maxItems: maxResults,
    },
    {
      headers: { Authorization: `Bearer ${APIFY_KEY}` },
    }
  )

  const runId = runResponse.data.data.id

  // Attendi il completamento (polling)
  const results = await waitForRun(runId)
  return results
}

async function waitForRun(runId: string, maxWaitMs = 120_000): Promise<LinkedInLead[]> {
  const start = Date.now()

  while (Date.now() - start < maxWaitMs) {
    await new Promise(r => setTimeout(r, 5000))

    const statusRes = await axios.get(
      `${APIFY_API}/actor-runs/${runId}`,
      { headers: { Authorization: `Bearer ${APIFY_KEY}` } }
    )

    const status = statusRes.data.data.status
    if (status === 'SUCCEEDED') {
      return await fetchRunResults(runId)
    }
    if (status === 'FAILED' || status === 'ABORTED') {
      throw new Error(`Apify run ${runId} failed with status: ${status}`)
    }
  }

  throw new Error('Apify run timeout')
}

async function fetchRunResults(runId: string): Promise<LinkedInLead[]> {
  const response = await axios.get(
    `${APIFY_API}/actor-runs/${runId}/dataset/items`,
    { headers: { Authorization: `Bearer ${APIFY_KEY}` } }
  )

  return response.data.map((item: Record<string, unknown>) => ({
    name: item.fullName as string ?? item.name as string ?? 'Unknown',
    headline: item.headline as string | undefined,
    company: item.currentCompany as string | undefined,
    location: item.location as string | undefined,
    linkedin_url: item.profileUrl as string ?? item.url as string,
    profile_image: item.profilePicture as string | undefined,
  }))
}

function buildSearchQuery(input: CampaignInput): string {
  const roleMap: Record<CampaignInput['target_type'], string> = {
    pmi: 'titolare OR imprenditore OR proprietario',
    professional: 'avvocato OR commercialista OR consulente OR coach',
    agency: 'agenzia marketing OR agenzia comunicazione OR direttore creativo',
  }

  const role = roleMap[input.target_type]
  return `${role} ${input.geo}`
}
