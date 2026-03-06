import { motion } from 'framer-motion';
import SEOHead from '@/components/SEOHead';

const Privacy = () => {
    <>
      <SEOHead
        title="Privacy Policy | NEXUS Agency"
        description="Informativa sulla privacy di NEXUS Agency. Come raccogliamo e trattiamo i tuoi dati personali."
        canonical="https://nexusagency.it/privacy"
      />
    <div className="pt-24">
      <section className="py-16">
        <div className="section-container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-muted-foreground text-sm mb-8">Ultimo aggiornamento: 04/01/2026</p>
            
            <div className="prose prose-invert prose-lg max-w-none">
              <p className="text-muted-foreground mb-6">
                La presente informativa descrive le modalità di trattamento dei dati personali degli utenti che navigano e utilizzano il sito nexusagency.it, di proprietà di Nexus Connect di Di Matteo Gabriele, con sede legale in Via Giovanni Boccaccio, 46 – 10132 Torino (TO), Italia.
              </p>
              <p className="text-muted-foreground mb-8">
                Ai sensi degli articoli 13 e 14 del Regolamento UE 2016/679 ("GDPR"), forniamo le seguenti informazioni.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">1. Titolare del trattamento</h2>
              <div className="text-muted-foreground space-y-1 mb-4">
                <p>Nexus Connect di Di Matteo Gabriele</p>
                <p>P.IVA: [inserire]</p>
                <p>Indirizzo: Via Giovanni Boccaccio, 46 – 10132 Torino (TO)</p>
                <p>Email: info@nexusagency.it</p>
              </div>
              <p className="text-muted-foreground">
                Il Titolare può essere contattato per qualsiasi domanda relativa alla privacy.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">2. Tipologie di dati raccolti</h2>
              <p className="text-muted-foreground mb-4">Il sito raccoglie diverse categorie di dati:</p>
              
              <h3 className="text-xl font-medium mt-6 mb-3">a) Dati forniti volontariamente dall'utente</h3>
              <ul className="text-muted-foreground list-disc list-inside space-y-1 mb-4">
                <li>Nome e cognome</li>
                <li>Indirizzo email</li>
                <li>Numero di telefono</li>
                <li>Azienda / attività (se indicata)</li>
                <li>Messaggi inviati tramite modulo contatti</li>
                <li>Dati forniti via email o telefonicamente</li>
              </ul>

              <h3 className="text-xl font-medium mt-6 mb-3">b) Dati raccolti automaticamente</h3>
              <ul className="text-muted-foreground list-disc list-inside space-y-1 mb-4">
                <li>Indirizzi IP</li>
                <li>Tipologia di browser</li>
                <li>Informazioni sul dispositivo</li>
                <li>Dati di navigazione e interazioni con il sito</li>
                <li>Cookie tecnici e di tracciamento (vedi sezione dedicata)</li>
              </ul>

              <h3 className="text-xl font-medium mt-6 mb-3">c) Dati raccolti tramite strumenti di terze parti</h3>
              <ul className="text-muted-foreground list-disc list-inside space-y-1 mb-4">
                <li>Google Analytics (statistiche di utilizzo)</li>
                <li>Google Tag Manager</li>
                <li>Meta Pixel</li>
                <li>Hotjar</li>
                <li>Moduli di contatto / CRM collegati</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4">3. Finalità del trattamento</h2>
              <p className="text-muted-foreground mb-4">I tuoi dati sono trattati per le seguenti finalità:</p>
              <ul className="text-muted-foreground list-disc list-inside space-y-1">
                <li>Rispondere a richieste di informazioni inviate tramite il modulo contatti o email.</li>
                <li>Fornire servizi, preventivi e consulenze richieste dall'utente.</li>
                <li>Finalità commerciali e di marketing, previo consenso esplicito.</li>
                <li>Invio di newsletter, comunicazioni informative o promozionali (solo se l'utente si iscrive).</li>
                <li>Analisi statistica tramite strumenti come Google Analytics.</li>
                <li>Miglioramento dell'esperienza utente e monitoraggi tecnici del sito.</li>
                <li>Adempimenti legali o fiscali collegati all'attività del Titolare.</li>
                <li>Sicurezza informatica e prevenzione di utilizzi impropri del sito.</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4">4. Base giuridica del trattamento</h2>
              <p className="text-muted-foreground mb-4">A seconda della finalità, il trattamento si basa su:</p>
              <ul className="text-muted-foreground list-disc list-inside space-y-1">
                <li>Esecuzione di misure precontrattuali (richieste informazioni).</li>
                <li>Contratto (erogazione servizi).</li>
                <li>Consenso dell'utente (marketing, newsletter, cookie non tecnici).</li>
                <li>Legittimo interesse (sicurezza del sito, analisi aggregate).</li>
                <li>Obbligo legale (adempimenti fiscali / amministrativi).</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4">5. Modalità del trattamento</h2>
              <p className="text-muted-foreground mb-4">
                Il trattamento avviene con strumenti digitali e informatici nel rispetto delle misure di sicurezza del GDPR.
              </p>
              <p className="text-muted-foreground mb-2">I dati NON vengono:</p>
              <ul className="text-muted-foreground list-disc list-inside space-y-1 mb-4">
                <li>venduti,</li>
                <li>ceduti,</li>
                <li>trasferiti senza motivo a soggetti terzi.</li>
              </ul>
              <p className="text-muted-foreground">
                Solo dove necessario, possono essere condivisi con partner professionali (commercialisti, tecnici IT, fornitori SaaS).
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">6. Conservazione dei dati</h2>
              <p className="text-muted-foreground mb-4">I dati vengono conservati per:</p>
              <ul className="text-muted-foreground list-disc list-inside space-y-1">
                <li>Contatti / richieste informazioni: fino a 12 mesi.</li>
                <li>Dati amministrativi / fiscali: minimo 10 anni (per obbligo di legge).</li>
                <li>Newsletter: fino alla revoca del consenso.</li>
                <li>Dati tecnici / log: 12 mesi.</li>
                <li>Cookie: secondo le durate specificate nella Cookie Policy.</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4">7. Destinatari dei dati</h2>
              <p className="text-muted-foreground mb-4">I dati possono essere condivisi con:</p>
              <ul className="text-muted-foreground list-disc list-inside space-y-1 mb-4">
                <li>Provider hosting (server e sicurezza)</li>
                <li>Servizi email marketing</li>
                <li>Fornitori CRM utilizzati dal sito</li>
                <li>Google (Analytics, Tag Manager)</li>
                <li>Meta Platforms (Facebook Ads)</li>
                <li>Consulenti e collaboratori del Titolare</li>
                <li>Enti pubblici in caso di obblighi legali</li>
              </ul>
              <p className="text-muted-foreground">
                Tutti i fornitori rispettano il GDPR o possiedono clausole standard di protezione dati.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">8. Trasferimenti di dati extra UE</h2>
              <p className="text-muted-foreground mb-4">
                Alcuni servizi (es. Google, Meta) possono comportare trasferimenti in paesi extra-UE.
              </p>
              <p className="text-muted-foreground mb-2">Il trasferimento avviene secondo:</p>
              <ul className="text-muted-foreground list-disc list-inside space-y-1">
                <li>Standard Contractual Clauses (SCC)</li>
                <li>Adeguate misure supplementari di sicurezza</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4">9. Diritti dell'utente</h2>
              <p className="text-muted-foreground mb-4">Hai il diritto di:</p>
              <ul className="text-muted-foreground list-disc list-inside space-y-1 mb-4">
                <li>accedere ai tuoi dati;</li>
                <li>rettificare dati inesatti;</li>
                <li>richiedere la cancellazione ("diritto all'oblio");</li>
                <li>limitare il trattamento;</li>
                <li>opporti al trattamento;</li>
                <li>richiedere la portabilità dei dati;</li>
                <li>revocare il consenso in qualsiasi momento.</li>
              </ul>
              <p className="text-muted-foreground">
                Puoi esercitare i diritti scrivendo a: <strong>info@nexusagency.it</strong>
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">10. Sicurezza dei dati</h2>
              <p className="text-muted-foreground mb-4">Adottiamo misure tecniche e organizzative per proteggere i dati, tra cui:</p>
              <ul className="text-muted-foreground list-disc list-inside space-y-1">
                <li>Server sicuri con certificazione SSL</li>
                <li>Backup programmati</li>
                <li>Autenticazione rafforzata</li>
                <li>Accessi limitati al personale autorizzato</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4">11. Cookie e strumenti di tracciamento</h2>
              <p className="text-muted-foreground mb-4">Il sito utilizza:</p>
              <ul className="text-muted-foreground list-disc list-inside space-y-1 mb-4">
                <li>Cookie tecnici necessari</li>
                <li>Cookie di analisi (Google Analytics)</li>
                <li>Cookie di marketing (Meta Pixel)</li>
              </ul>
              <p className="text-muted-foreground mb-4">
                La gestione dettagliata è descritta nella Cookie Policy visibile nel banner e nella pagina dedicata.
              </p>
              <p className="text-muted-foreground">
                L'utente può modificare le preferenze in qualsiasi momento.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">12. Modulo di contatto</h2>
              <p className="text-muted-foreground mb-4">I dati inviati tramite il modulo contatto vengono utilizzati esclusivamente per:</p>
              <ul className="text-muted-foreground list-disc list-inside space-y-1 mb-4">
                <li>rispondere alla richiesta</li>
                <li>fornire un preventivo</li>
                <li>eventuale follow-up commerciale (previo consenso)</li>
              </ul>
              <p className="text-muted-foreground">
                Non vengono utilizzati per invii massivi senza autorizzazione.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">13. Newsletter</h2>
              <p className="text-muted-foreground mb-4">La newsletter viene inviata solo se l'utente:</p>
              <ul className="text-muted-foreground list-disc list-inside space-y-1 mb-4">
                <li>inserisce volontariamente l'email</li>
                <li>conferma l'iscrizione (double opt-in, se attivo)</li>
              </ul>
              <p className="text-muted-foreground">
                In ogni email è presente il link "Disiscriviti".
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">14. Link esterni</h2>
              <p className="text-muted-foreground">
                Il sito può contenere link a siti esterni (partner, clienti, piattaforme). Non siamo responsabili delle loro politiche privacy.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">15. Modifiche alla Privacy Policy</h2>
              <p className="text-muted-foreground">
                Il Titolare può aggiornare la presente informativa. Le modifiche saranno pubblicate su questa pagina.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">16. Contatti</h2>
              <p className="text-muted-foreground mb-2">Per chiarimenti, richieste o reclami:</p>
              <div className="text-muted-foreground space-y-1">
                <p>Email: info@nexusagency.it</p>
                <p>Titolare: Nexus Connect di Di Matteo Gabriele</p>
              </div>

              <h2 className="text-2xl font-semibold mt-8 mb-4">17. Reclami</h2>
              <p className="text-muted-foreground mb-2">Gli utenti possono proporre reclamo al:</p>
              <p className="text-muted-foreground">
                Garante per la Protezione dei Dati Personali<br />
                <a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80">www.garanteprivacy.it</a>
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
