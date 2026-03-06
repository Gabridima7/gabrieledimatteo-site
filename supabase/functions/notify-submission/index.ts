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
    const { type, data } = await req.json();

    const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
    const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

    // Save to database
    if (type === 'contact') {
      const { error } = await supabase.from('contact_submissions').insert({
        name: data.name,
        email: data.email,
        message: data.message,
      });
      if (error) throw error;
    } else if (type === 'newsletter') {
      const { error } = await supabase.from('newsletter_subscriptions').insert({
        email: data.email,
      });
      // Ignore unique constraint violations (already subscribed)
      if (error && !error.message.includes('duplicate')) throw error;
    } else if (type === 'cookie_consent') {
      const { error } = await supabase.from('cookie_consents').insert({
        essential: data.essential,
        analytics: data.analytics,
        marketing: data.marketing,
        functional: data.functional,
        user_agent: data.user_agent,
      });
      if (error) throw error;
      // No email for cookie consent
      return new Response(JSON.stringify({ success: true }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Send notification email via Supabase's built-in SMTP (using a simple fetch to a mail API)
    // We'll use a Resend-compatible approach via edge function
    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    
    if (RESEND_API_KEY) {
      let subject = '';
      let htmlBody = '';

      if (type === 'contact') {
        subject = `Nuovo contatto da ${data.name}`;
        htmlBody = `
          <h2>Nuovo messaggio dal form Contattaci</h2>
          <p><strong>Nome:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Messaggio:</strong></p>
          <p>${data.message.replace(/\n/g, '<br>')}</p>
          <hr>
          <p style="color:#888;font-size:12px;">Inviato dal sito nexusagency.it</p>
        `;
      } else if (type === 'newsletter') {
        subject = `Nuova iscrizione newsletter: ${data.email}`;
        htmlBody = `
          <h2>Nuova iscrizione alla Newsletter</h2>
          <p><strong>Email:</strong> ${data.email}</p>
          <hr>
          <p style="color:#888;font-size:12px;">Inviato dal sito nexusagency.it</p>
        `;
      }

      if (subject) {
        const emailRes = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${RESEND_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: 'Nexus Agency <noreply@nexusagency.it>',
            to: ['info@nexusagency.it'],
            subject,
            html: htmlBody,
          }),
        });

        if (!emailRes.ok) {
          const errText = await emailRes.text();
          console.error('Resend error:', errText);
        }
      }
    } else {
      console.log('RESEND_API_KEY not configured — skipping email notification');
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
