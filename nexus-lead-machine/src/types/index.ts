export type ServiceType = 'sito_web' | 'gestionale' | 'automazione' | 'app' | 'sistema_agentico'
export type LeadSource = 'linkedin' | 'google_maps' | 'csv' | 'pagineggialle' | 'manual'
export type LeadStatus = 'discovered' | 'qualified' | 'enriched' | 'outreach_ready' | 'contacted' | 'replied' | 'converted' | 'rejected'
export type OutreachChannel = 'linkedin_dm' | 'email'
export type OutreachStatus = 'pending_review' | 'approved' | 'sent' | 'bounced'

export interface Campaign {
  id: string
  name: string
  target_type: 'pmi' | 'professional' | 'agency'
  service_focus: ServiceType
  geo: string
  status: 'active' | 'paused' | 'completed'
  created_at: string
}

export interface Lead {
  id: string
  campaign_id: string
  source: LeadSource
  // Identity
  name: string
  company?: string
  role?: string
  // Contact
  email?: string
  linkedin_url?: string
  website?: string
  phone?: string
  // Location
  city?: string
  region?: string
  // Qualification
  score?: number                  // 1-10
  recommended_service?: ServiceType
  pain_points?: string[]
  qualification_notes?: string
  // State
  status: LeadStatus
  raw_data?: Record<string, unknown>
  created_at: string
  updated_at: string
}

export interface OutreachMessage {
  id: string
  lead_id: string
  channel: OutreachChannel
  subject?: string               // solo per email
  body: string
  status: OutreachStatus
  sent_at?: string
  created_at: string
}

export interface FollowUp {
  id: string
  lead_id: string
  outreach_id: string
  body: string
  send_after_days: number
  status: OutreachStatus
  sent_at?: string
}

// Input per il modulo discovery
export interface CampaignInput {
  name: string
  target_type: Campaign['target_type']
  service_focus: ServiceType
  geo: string                   // es. "Milano", "Lombardia", "Italia"
  keywords?: string[]           // keyword aggiuntive per la ricerca
  max_leads?: number
  // Fonte dati primaria
  csv_file?: string             // percorso al file .csv/.xlsx con le 43k aziende
  csv_offset?: number           // per riprendere da dove si era (paginazione)
  sectors?: string[]            // filtro settori sul CSV
  use_linkedin?: boolean        // abilita LinkedIn discovery (default: false)
  use_google_maps?: boolean     // abilita Google Maps (default: false — costa caro!)
}

// Output del modulo di qualificazione Claude
export interface QualificationResult {
  score: number
  recommended_service: ServiceType
  pain_points: string[]
  notes: string
  worthy: boolean
}

// Raw lead da Google Maps
export interface GooglePlaceLead {
  name: string
  address: string
  city: string
  phone?: string
  website?: string
  rating?: number
  review_count?: number
  place_id: string
  types: string[]
}

// Raw lead da LinkedIn (via Apify)
export interface LinkedInLead {
  name: string
  headline?: string
  company?: string
  location?: string
  linkedin_url: string
  profile_image?: string
}
