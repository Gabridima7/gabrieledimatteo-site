import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { email } = await req.json();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return new Response(JSON.stringify({ error: 'Email non valida' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
    const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

    const { error: dbError } = await supabase.from('leads').upsert(
      { email, source: 'youtube_guida' },
      { onConflict: 'email' }
    );
    if (dbError) {
      console.error('DB error:', dbError);
      throw new Error(dbError.message);
    }

    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    if (!RESEND_API_KEY) {
      console.error('RESEND_API_KEY not configured');
      return new Response(JSON.stringify({ success: true, email_sent: false }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const PDF_URL = 'https://qiztbdaflhjqnybhflhu.supabase.co/storage/v1/object/public/guides/guida-prospecting.pdf';
    const unsubscribeUrl = `https://nexusagencyitalia.lovable.app/unsubscribe?email=${encodeURIComponent(email)}`;

    const textEmail = `Ciao!

Grazie per aver scaricato la guida. Qui dentro trovi tutto quello che ti serve per iniziare:

- Come ottenere la chiave API di Google (gratis)
- Lo script Python che trova le attività senza sito web
- Come creare un sito web in 15 minuti con l'AI
- I messaggi pronti per contattare e vendere
- Quanto chiedere e come gestire le obiezioni

Scarica la guida PDF: ${PDF_URL}

Se hai domande o vuoi approfondire, scrivi a g.dimatteo@nexusagency.it — rispondo personalmente.

A presto,
Gabriele
Nexus Agency

---
Non vuoi più ricevere email? Rispondi con oggetto "Unsubscribe".`;

    const htmlEmail = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#f0f0f0;font-family:'Inter',Arial,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f0f0f0;padding:30px 10px;">
<tr><td align="center">
<table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:12px;overflow:hidden;">

<!-- Header -->
<tr><td style="background:linear-gradient(135deg,#0a0a0f 0%,#1a1040 50%,#6c5ce7 100%);padding:50px 30px;text-align:center;">
  <h1 style="color:#ffffff !important;font-size:24px;font-weight:700;margin:0 0 8px 0;font-family:'Inter',Arial,sans-serif;"><span style="color:#ffffff !important;">NEXUS AGENCY</span></h1>
  <p style="color:#a29bfe !important;font-size:16px;margin:0;font-family:'Inter',Arial,sans-serif;"><span style="color:#a29bfe !important;">La tua guida è pronta</span></p>
</td></tr>

<!-- Body -->
<tr><td style="padding:35px 30px;color:#333333;font-size:15px;line-height:1.7;">
  <p style="margin:0 0 18px 0;">Ciao!</p>
  <p style="margin:0 0 18px 0;">Grazie per aver scaricato la guida. Qui dentro trovi tutto quello che ti serve per iniziare:</p>
  <p style="margin:0 0 5px 0;">&#10003; Come ottenere la chiave API di Google (gratis)</p>
  <p style="margin:0 0 5px 0;">&#10003; Lo script Python che trova le attività senza sito web</p>
  <p style="margin:0 0 5px 0;">&#10003; Come creare un sito web in 15 minuti con l'AI</p>
  <p style="margin:0 0 5px 0;">&#10003; I messaggi pronti per contattare e vendere</p>
  <p style="margin:0 0 22px 0;">&#10003; Quanto chiedere e come gestire le obiezioni</p>

  <table width="100%" cellpadding="0" cellspacing="0"><tr><td align="center" style="padding:10px 0 25px 0;">
    <a href="${PDF_URL}" target="_blank" style="display:inline-block;background:#6c5ce7;color:#ffffff;font-size:16px;font-weight:700;text-decoration:none;padding:14px 36px;border-radius:8px;font-family:'Inter',Arial,sans-serif;">Scarica la Guida PDF</a>
  </td></tr></table>

  <p style="margin:0 0 18px 0;">Se hai domande o vuoi approfondire, scrivi a g.dimatteo@nexusagency.it — rispondo personalmente.</p>
  <p style="margin:0;">A presto,<br><strong>Gabriele</strong><br>Nexus Agency</p>
</td></tr>

<!-- Footer -->
<tr><td style="background:#f5f5f5;padding:25px 30px;text-align:center;font-size:12px;color:#999999;line-height:1.6;">
  <p style="margin:0 0 6px 0;"><strong>Nexus Agency</strong> — nexusagency.it</p>
  <p style="margin:0 0 10px 0;">Hai ricevuto questa email perché hai scaricato la nostra guida gratuita.</p>
  <p style="margin:0 0 10px 0;">
    <a href="https://www.instagram.com/itsgabridima/" style="color:#6c5ce7;text-decoration:none;margin:0 8px;">Instagram</a> ·
    <a href="https://www.youtube.com/@gabridimatteo" style="color:#6c5ce7;text-decoration:none;margin:0 8px;">YouTube</a>
  </p>
  <p style="margin:0;"><a href="${unsubscribeUrl}" style="color:#bbbbbb;text-decoration:underline;">Non vuoi più ricevere email? Cancellati qui</a></p>
</td></tr>

</table>
</td></tr>
</table>
</body>
</html>`;

    const emailRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Gabriele di Nexus Agency <noreply@nexusagency.it>',
        to: [email],
        subject: 'La tua guida è qui — Come trovare 40.000+ clienti senza sito web',
        reply_to: 'g.dimatteo@nexusagency.it',
        html: htmlEmail,
        text: textEmail,
        headers: {
          'List-Unsubscribe': `<${unsubscribeUrl}>`,
          'List-Unsubscribe-Post': 'List-Unsubscribe=One-Click',
        },
      }),
    });

    if (!emailRes.ok) {
      const errText = await emailRes.text();
      console.error('Resend error:', errText);
    }

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error:', error);
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
