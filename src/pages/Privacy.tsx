import { motion } from 'framer-motion';

const Privacy = () => {
  return (
    <div className="pt-24">
      <section className="py-16">
        <div className="section-container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
            
            <div className="prose prose-invert prose-lg max-w-none">
              <p className="text-muted-foreground">
                Ultimo aggiornamento: Gennaio 2026
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">1. Titolare del trattamento</h2>
              <p className="text-muted-foreground">
                NexusAgency S.r.l. è il titolare del trattamento dei dati personali raccolti attraverso questo sito web.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">2. Dati raccolti</h2>
              <p className="text-muted-foreground">
                Raccogliamo i seguenti tipi di dati: dati di navigazione (IP, browser, pagine visitate), 
                dati forniti volontariamente (nome, email, telefono tramite form di contatto).
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">3. Finalità del trattamento</h2>
              <p className="text-muted-foreground">
                I dati vengono trattati per: rispondere alle richieste di contatto, fornire i servizi richiesti, 
                migliorare l'esperienza utente sul sito.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">4. Base giuridica</h2>
              <p className="text-muted-foreground">
                Il trattamento si basa sul consenso dell'interessato e sull'esecuzione di un contratto.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">5. Conservazione dei dati</h2>
              <p className="text-muted-foreground">
                I dati vengono conservati per il tempo necessario alle finalità per cui sono stati raccolti.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">6. Diritti dell'interessato</h2>
              <p className="text-muted-foreground">
                Hai il diritto di accedere, rettificare, cancellare i tuoi dati e di opporti al trattamento. 
                Per esercitare questi diritti, contattaci a: privacy@nexusagency.it
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">7. Contatti</h2>
              <p className="text-muted-foreground">
                Per qualsiasi domanda sulla privacy, scrivi a: privacy@nexusagency.it
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
