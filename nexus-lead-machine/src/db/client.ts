import { createClient } from '@supabase/supabase-js'
import { Campaign, Lead, OutreachMessage, FollowUp } from '../types'

const supabaseUrl = process.env.SUPABASE_URL!
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in .env')
}

export const db = createClient(supabaseUrl, supabaseKey)

// --- Campaigns ---

export async function createCampaign(data: Omit<Campaign, 'id' | 'created_at'>): Promise<Campaign> {
  const { data: row, error } = await db.from('campaigns').insert(data).select().single()
  if (error) throw error
  return row
}

export async function getCampaign(id: string): Promise<Campaign> {
  const { data, error } = await db.from('campaigns').select('*').eq('id', id).single()
  if (error) throw error
  return data
}

// --- Leads ---

export async function insertLeads(leads: Omit<Lead, 'id' | 'created_at' | 'updated_at'>[]): Promise<Lead[]> {
  const { data, error } = await db.from('leads').insert(leads).select()
  if (error) throw error
  return data
}

export async function updateLead(id: string, update: Partial<Lead>): Promise<void> {
  const { error } = await db.from('leads').update(update).eq('id', id)
  if (error) throw error
}

export async function getLeadsByStatus(campaignId: string, status: Lead['status']): Promise<Lead[]> {
  const { data, error } = await db
    .from('leads')
    .select('*')
    .eq('campaign_id', campaignId)
    .eq('status', status)
    .order('score', { ascending: false })
  if (error) throw error
  return data ?? []
}

export async function getTopLeads(campaignId: string, minScore = 6): Promise<Lead[]> {
  const { data, error } = await db
    .from('leads')
    .select('*')
    .eq('campaign_id', campaignId)
    .gte('score', minScore)
    .order('score', { ascending: false })
  if (error) throw error
  return data ?? []
}

// --- Outreach ---

export async function insertOutreach(messages: Omit<OutreachMessage, 'id' | 'created_at'>[]): Promise<OutreachMessage[]> {
  const { data, error } = await db.from('outreach_messages').insert(messages).select()
  if (error) throw error
  return data
}

export async function getPendingOutreach(campaignId: string): Promise<(OutreachMessage & { lead: Lead })[]> {
  const { data, error } = await db
    .from('outreach_messages')
    .select('*, lead:leads(*)')
    .eq('status', 'pending_review')
    .eq('leads.campaign_id', campaignId)
  if (error) throw error
  return data ?? []
}

export async function approveOutreach(id: string): Promise<void> {
  const { error } = await db.from('outreach_messages').update({ status: 'approved' }).eq('id', id)
  if (error) throw error
}

// --- Follow-ups ---

export async function insertFollowUp(followUp: Omit<FollowUp, 'id' | 'created_at'>): Promise<FollowUp> {
  const { data, error } = await db.from('follow_ups').insert(followUp).select().single()
  if (error) throw error
  return data
}
