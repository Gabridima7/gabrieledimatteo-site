import { motion } from 'framer-motion';
import SEOHead from '@/components/SEOHead';

const Cookie = () => {
    <>
      <SEOHead
        title="Cookie Policy | NEXUS Agency"
        description="Cookie policy di NEXUS Agency. Informazioni sui cookie utilizzati sul nostro sito."
        canonical="https://nexusagency.it/cookie"
      />
    <div className="pt-24">
      <section className="py-16">
        <div className="section-container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold mb-4">Cookie Policy</h1>
            <p className="text-muted-foreground text-sm mb-8">Ultimo aggiornamento: 04/01/2026</p>
            
            <div className="prose prose-invert prose-lg max-w-none">
              <h2 className="text-2xl font-semibold mt-8 mb-4">1. Cosa sono i cookie</h2>
              <p className="text-muted-foreground">
                I cookie sono piccoli file di testo che i siti visitati inviano al browser dell'utente, dove vengono memorizzati per essere poi ritrasmessi agli stessi siti alla visita successiva.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">2. Tipologie di cookie utilizzati</h2>
              
              <h3 className="text-xl font-medium mt-6 mb-3">2.1 Cookie tecnici essenziali</h3>
              <p className="text-muted-foreground mb-4">
                Questi cookie sono necessari per il funzionamento del sito e non possono essere disattivati. Includono:
              </p>
              <ul className="text-muted-foreground list-disc list-inside space-y-1 mb-4">
                <li>Cookie di sessione per la gestione del login</li>
                <li>Cookie per il salvataggio delle preferenze di consenso</li>
                <li>Cookie di sicurezza</li>
              </ul>

              <h3 className="text-xl font-medium mt-6 mb-3">2.2 Cookie analitici</h3>
              <p className="text-muted-foreground mb-4">
                Utilizziamo Google Analytics per raccogliere informazioni anonime su come gli utenti interagiscono con il nostro sito:
              </p>
              <ul className="text-muted-foreground list-disc list-inside space-y-1 mb-4">
                <li>Statistiche di visualizzazione delle pagine</li>
                <li>Tempo di permanenza sul sito</li>
                <li>Provenienza geografica degli utenti</li>
              </ul>

              <h3 className="text-xl font-medium mt-6 mb-3">2.3 Cookie di marketing</h3>
              <p className="text-muted-foreground mb-4">
                Questi cookie vengono utilizzati per tracciare i visitatori attraverso i siti web. L'intento è quello di mostrare annunci pertinenti e coinvolgenti:
              </p>
              <ul className="text-muted-foreground list-disc list-inside space-y-1 mb-4">
                <li>Cookie per il retargeting pubblicitario</li>
                <li>Cookie per l'analisi del comportamento degli utenti</li>
                <li>Cookie dei social media</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4">3. Durata dei cookie</h2>
              <p className="text-muted-foreground mb-4">I cookie hanno durate diverse:</p>
              <ul className="text-muted-foreground list-disc list-inside space-y-1">
                <li>Cookie di sessione: vengono eliminati alla chiusura del browser</li>
                <li>Cookie persistenti: rimangono attivi fino alla loro data di scadenza</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4">4. Come gestire i cookie</h2>
              <p className="text-muted-foreground mb-4">Puoi gestire le tue preferenze sui cookie in diversi modi:</p>
              <ul className="text-muted-foreground list-disc list-inside space-y-1">
                <li>Attraverso il banner dei cookie presente sul nostro sito</li>
                <li>Dalle impostazioni del tuo browser</li>
                <li>Utilizzando strumenti di opt-out specifici per i cookie di terze parti</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4">5. Cookie di terze parti</h2>
              <p className="text-muted-foreground mb-4">Il nostro sito utilizza servizi di terze parti che potrebbero impostare i loro cookie:</p>
              <ul className="text-muted-foreground list-disc list-inside space-y-1">
                <li>Google Analytics</li>
                <li>Google Ads</li>
                <li>Meta Pixel</li>
                <li>LinkedIn Insight Tag</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4">6. Aggiornamenti della Cookie Policy</h2>
              <p className="text-muted-foreground">
                Ci riserviamo il diritto di modificare questa cookie policy in qualsiasi momento. Le modifiche saranno effettive dal momento della pubblicazione sul sito.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">7. Contatti</h2>
              <p className="text-muted-foreground">
                Per qualsiasi domanda relativa alla nostra cookie policy, puoi contattarci all'indirizzo email: <strong>info@nexusagency.it</strong>
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Cookie;
