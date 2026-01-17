import { motion } from 'framer-motion';

const Cookie = () => {
  return (
    <div className="pt-24">
      <section className="py-16">
        <div className="section-container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>
            
            <div className="prose prose-invert prose-lg max-w-none">
              <p className="text-muted-foreground">
                Ultimo aggiornamento: Gennaio 2026
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">1. Cosa sono i cookie</h2>
              <p className="text-muted-foreground">
                I cookie sono piccoli file di testo che i siti visitati inviano al browser dell'utente, 
                dove vengono memorizzati per essere ritrasmessi agli stessi siti alla visita successiva.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">2. Tipi di cookie utilizzati</h2>
              <p className="text-muted-foreground">
                Questo sito utilizza:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li><strong>Cookie tecnici:</strong> necessari per il funzionamento del sito</li>
                <li><strong>Cookie analitici:</strong> per raccogliere statistiche anonime sulle visite</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4">3. Cookie di terze parti</h2>
              <p className="text-muted-foreground">
                Il sito potrebbe utilizzare servizi di terze parti che installano cookie propri 
                (es. Google Analytics, Calendly).
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">4. Come gestire i cookie</h2>
              <p className="text-muted-foreground">
                Puoi gestire le preferenze sui cookie attraverso le impostazioni del tuo browser. 
                La disabilitazione dei cookie potrebbe limitare alcune funzionalità del sito.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">5. Contatti</h2>
              <p className="text-muted-foreground">
                Per qualsiasi domanda sui cookie, scrivi a: privacy@nexusagency.it
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Cookie;
