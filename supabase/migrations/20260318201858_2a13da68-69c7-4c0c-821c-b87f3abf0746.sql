
CREATE TABLE public.leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL,
  source text NOT NULL DEFAULT 'youtube_guida',
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  ip_address text
);

CREATE UNIQUE INDEX leads_email_unique ON public.leads (email);

ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anonymous inserts on leads"
ON public.leads
FOR INSERT
TO anon
WITH CHECK (true);
