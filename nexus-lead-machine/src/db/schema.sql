-- ============================================================
-- NEXUS LEAD MACHINE — Schema Supabase
-- Esegui questo SQL nel SQL Editor del tuo progetto Supabase
-- ============================================================

-- Campaigns: ogni sessione di ricerca lead
CREATE TABLE IF NOT EXISTS campaigns (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  target_type TEXT NOT NULL CHECK (target_type IN ('pmi', 'professional', 'agency')),
  service_focus TEXT NOT NULL CHECK (service_focus IN ('sito_web', 'gestionale', 'automazione', 'app', 'sistema_agentico')),
  geo TEXT NOT NULL,
  keywords TEXT[],
  status TEXT NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'paused', 'completed')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Leads: ogni potenziale cliente trovato
CREATE TABLE IF NOT EXISTS leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  campaign_id UUID REFERENCES campaigns(id) ON DELETE CASCADE,
  source TEXT NOT NULL CHECK (source IN ('linkedin', 'google_maps', 'csv', 'pagineggialle', 'manual')),
  -- Identità
  name TEXT NOT NULL,
  company TEXT,
  role TEXT,
  -- Contatti
  email TEXT,
  linkedin_url TEXT,
  website TEXT,
  phone TEXT,
  -- Geo
  city TEXT,
  region TEXT,
  -- Qualificazione (valorizzata da Claude)
  score INTEGER CHECK (score BETWEEN 1 AND 10),
  recommended_service TEXT CHECK (recommended_service IN ('sito_web', 'gestionale', 'automazione', 'app', 'sistema_agentico')),
  pain_points TEXT[],
  qualification_notes TEXT,
  -- Stato pipeline
  status TEXT NOT NULL DEFAULT 'discovered' CHECK (status IN (
    'discovered', 'qualified', 'enriched', 'outreach_ready',
    'contacted', 'replied', 'converted', 'rejected'
  )),
  raw_data JSONB,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Outreach: messaggi generati per ogni lead
CREATE TABLE IF NOT EXISTS outreach_messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  lead_id UUID REFERENCES leads(id) ON DELETE CASCADE,
  channel TEXT NOT NULL CHECK (channel IN ('linkedin_dm', 'email')),
  subject TEXT,
  body TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending_review' CHECK (status IN ('pending_review', 'approved', 'sent', 'bounced')),
  sent_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Follow-up programmati
CREATE TABLE IF NOT EXISTS follow_ups (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  lead_id UUID REFERENCES leads(id) ON DELETE CASCADE,
  outreach_id UUID REFERENCES outreach_messages(id) ON DELETE CASCADE,
  body TEXT NOT NULL,
  send_after_days INTEGER NOT NULL DEFAULT 4,
  status TEXT NOT NULL DEFAULT 'pending_review' CHECK (status IN ('pending_review', 'approved', 'sent', 'bounced')),
  sent_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indici per query veloci
CREATE INDEX IF NOT EXISTS idx_leads_campaign ON leads(campaign_id);
CREATE INDEX IF NOT EXISTS idx_leads_status ON leads(status);
CREATE INDEX IF NOT EXISTS idx_leads_score ON leads(score DESC);
CREATE INDEX IF NOT EXISTS idx_outreach_lead ON outreach_messages(lead_id);
CREATE INDEX IF NOT EXISTS idx_followup_lead ON follow_ups(lead_id);

-- Trigger: aggiorna updated_at automaticamente
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN NEW.updated_at = NOW(); RETURN NEW; END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER leads_updated_at BEFORE UPDATE ON leads
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER campaigns_updated_at BEFORE UPDATE ON campaigns
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();
