INSERT INTO storage.buckets (id, name, public) VALUES ('guides', 'guides', true) ON CONFLICT (id) DO NOTHING;

CREATE POLICY "Public read access for guides" ON storage.objects FOR SELECT TO anon, authenticated USING (bucket_id = 'guides');