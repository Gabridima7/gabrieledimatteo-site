import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import SEOHead from '@/components/SEOHead';

import iconSviluppoWebAppNew from '@/assets/icons/icon-sviluppo-web-app-new.webp';
import iconLandingPage from '@/assets/icons/icon-landing-page.png';
import iconWebApp from '@/assets/icons/icon-web-app.webp';
import iconSoftwareGestionaleNew from '@/assets/icons/icon-software-gestionale-new.webp';
import iconProdottoSaas from '@/assets/icons/icon-prodotto-saas.webp';
import iconAiAutomation from '@/assets/icons/icon-ai-automation.png';
import iconAiChatbot from '@/assets/icons/icon-ai-chatbot.png';
import iconConsulenzaDigitale from '@/assets/icons/icon-consulenza-digitale.webp';
import iconIntegrazioniApi from '@/assets/icons/icon-integrazioni-api.png';
import iconUiUxDesign from '@/assets/icons/icon-ui-ux-design.png';
import iconWebsiteDesign from '@/assets/icons/icon-website-design.png';
import iconSviluppoWebApp from '@/assets/icons/icon-sviluppo-web-app.png';
import iconWebsiteRedesign from '@/assets/icons/icon-website-redesign.webp';
import iconSoftwareGestionale from '@/assets/icons/icon-software-gestionale.webp';
import iconMvpDesign from '@/assets/icons/icon-mvp-design.webp';
import iconProductRedesign from '@/assets/icons/icon-product-redesign.webp';
import iconRetainer from '@/assets/icons/icon-retainer.webp';

const columns = [
  {
    title: 'Sviluppo',
    items: [
      { label: 'Sviluppo Web & App', desc: 'Sviluppo Front-End e Back-End', href: '/servizi/sviluppo-web', icon: iconSviluppoWebAppNew },
      { label: 'Landing Page', desc: 'Sito ad alta conversione', href: '/servizi/landing-page', icon: iconLandingPage },
      { label: 'Web App', desc: 'Applicazioni su misura', href: '/servizi/web-app', icon: iconWebApp },
      { label: 'Software Gestionale', desc: 'CRM, ERP e tool interni su misura', href: '/servizi/software-gestionale', icon: iconSoftwareGestionaleNew },
      { label: 'Prodotto SaaS', desc: 'Da idea a prodotto scalabile', href: '/servizi/prodotto-saas', icon: iconProdottoSaas },
    ],
  },
  {
    title: 'AI & Automation',
    items: [
      { label: 'AI Automation', desc: 'Automatizza i processi con l\'AI', href: '/servizi/ai-automation', icon: iconAiAutomation },
      { label: 'AI Chatbot', desc: 'Assistenti virtuali intelligenti', href: '/servizi/ai-chatbot', icon: iconAiChatbot },
      { label: 'Consulenza Digitale', desc: 'Strategia e roadmap per la tua PMI', href: '/servizi/consulenza-digitale', icon: iconConsulenzaDigitale },
      { label: 'Integrazioni API', desc: 'Connetti i tuoi sistemi aziendali', href: '/servizi/integrazioni-api', icon: iconIntegrazioniApi },
    ],
  },
  {
    title: 'Design',
    items: [
      { label: 'UI/UX Design', desc: 'Web & mobile app design', href: '/servizi/ui-ux-design', icon: iconUiUxDesign },
      { label: 'Website Design', desc: 'Siti custom e landing page', href: '/servizi/website-design', icon: iconWebsiteDesign },
      { label: 'Mobile App Design', desc: 'App che gli utenti amano', href: '/servizi/mobile-app-design', icon: iconSviluppoWebApp },
      { label: 'Website Redesign', desc: 'Look moderno, impatto maggiore', href: '/servizi/website-redesign', icon: iconWebsiteRedesign },
      { label: 'Product UX/UI Audit', desc: 'Insights che guidano i risultati', href: '/servizi/product-audit', icon: iconSoftwareGestionale },
    ],
  },
];

const solutions = [
  { title: 'MVP Design', subtitle: 'Per startup e imprenditori', desc: 'Crea un prodotto digitale, attrai investitori e nuovi clienti.', href: '/soluzioni/mvp', icon: iconMvpDesign },
  { title: 'Product Redesign', subtitle: 'Per PMI e aziende', desc: 'Un look fresco, UX migliorata e funzionalità potenziate.', href: '/soluzioni/product-redesign', icon: iconProductRedesign },
  { title: 'Estensione Team', subtitle: 'Per aziende esistenti', desc: 'Espandi il tuo team con i nostri esperti dedicati.', href: '/soluzioni/estensione-team', icon: iconRetainer },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const } },
};

const Servizi = () => {
  return (
    <>
      <SEOHead
        title="Servizi digitali per aziende | sviluppo web, AI e automazioni"
        description="Scopri i servizi di Nexus Agency: sviluppo siti web, web app, automazioni AI e consulenza digitale per aziende e PMI."
        canonical="https://nexusagency.it/servizi"
        breadcrumbs={[
          { name: "Home", url: "https://nexusagency.it" },
          { name: "Servizi", url: "https://nexusagency.it/servizi" },
        ]}
      />

      <section className="py-20 md:py-28 px-6 md:px-10">
        <div className="max-w-[1240px] mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-14"
          >
            <span className="inline-block text-[11px] font-semibold tracking-[0.1em] uppercase text-white bg-[#10B981] rounded-full px-4 py-1.5 mb-5">
              SERVIZI
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4">
              I nostri servizi digitali per aziende e PMI
            </h1>
            <p className="text-base md:text-lg text-white/60 max-w-[700px] mx-auto">
              Nexus Agency offre servizi digitali progettati per supportare la crescita di aziende e PMI. Ci occupiamo di sviluppo web, creazione di piattaforme digitali e sistemi di automazione che migliorano l'efficienza dei processi aziendali.
            </p>
          </motion.div>

          {/* Services — white panel like mega menu */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-[20px] bg-white shadow-[0_24px_80px_rgba(0,0,0,0.12),0_4px_16px_rgba(0,0,0,0.06)]"
          >
            <div className="px-6 md:px-10 pt-8 pb-6">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-3 gap-0 md:divide-x md:divide-[#E5E7EB]"
              >
                {columns.map((col, colIdx) => (
                  <motion.div
                    key={colIdx}
                    variants={itemVariants}
                    className={`${colIdx === 0 ? 'md:pr-6' : colIdx === 1 ? 'md:px-6' : 'md:pl-6'} ${colIdx > 0 ? 'mt-8 md:mt-0' : ''}`}
                  >
                    <p className="text-[11px] font-semibold tracking-[0.1em] uppercase text-[#9CA3AF] mb-5">
                      {col.title}
                    </p>
                    <div className="space-y-1">
                      {col.items.map((item, i) => (
                        <Link
                          key={i}
                          to={item.href}
                          className="flex items-center gap-3.5 px-3 py-2.5 rounded-xl hover:bg-[#F8FAFC] transition-colors duration-150 group"
                        >
                          <div className="w-11 h-11 rounded-[10px] flex items-center justify-center shrink-0">
                            <img src={item.icon} alt={item.label} className="w-7 h-7 object-contain" />
                          </div>
                          <div>
                            <p className="text-[14px] font-semibold text-[#111827] group-hover:text-[#1C35C8] transition-colors">
                              {item.label}
                            </p>
                            <p className="text-[12px] text-[#6B7280] mt-0.5">{item.desc}</p>
                          </div>
                          <ArrowRight size={16} className="ml-auto shrink-0 text-[#D1D5DB] group-hover:text-[#1C35C8] transition-colors" />
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Divider */}
            <hr className="border-[#E5E7EB] mx-6 md:mx-10" />

            {/* Solutions section */}
            <div className="mx-6 md:mx-10 my-6 bg-[#F9FAFB] rounded-xl px-6 py-5">
              <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-10">
                <div className="shrink-0 pt-1">
                  <span className="inline-block text-[11px] font-semibold tracking-[0.1em] uppercase text-white bg-[#FACC15] rounded-full px-3 py-1">
                    SOLUZIONI
                  </span>
                </div>
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4"
                >
                  {solutions.map((sol, i) => (
                    <motion.div key={i} variants={itemVariants}>
                      <Link to={sol.href} className="flex items-start gap-3.5 group">
                        <div className="w-11 h-11 rounded-[10px] flex items-center justify-center shrink-0 mt-0.5">
                          <img src={sol.icon} alt={sol.title} className="w-7 h-7 object-contain" />
                        </div>
                        <div>
                          <p className="text-[14px] font-bold text-[#111827] group-hover:text-[#1C35C8] transition-colors">
                            {sol.title}
                          </p>
                          <p className="text-[12px] text-[#6B7280] mt-0.5">{sol.subtitle}</p>
                          <p className="text-[12px] text-[#9CA3AF] mt-1.5 leading-snug">{sol.desc}</p>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
            <div className="h-2" />
          </motion.div>

          {/* ─── SERVICE DESCRIPTION BLOCKS ─── */}
          <div className="mt-16 space-y-10 max-w-[900px] mx-auto">
            {[
              { title: 'Sviluppo siti web professionali', text: 'Progettiamo e sviluppiamo siti web su misura per aziende e PMI italiane. Ogni sito è costruito con tecnologie moderne, ottimizzato per i motori di ricerca e progettato per offrire un\'esperienza utente eccellente. Dalla struttura alla pubblicazione, seguiamo ogni fase del progetto per garantire un prodotto finale che rappresenti al meglio la tua attività e converta i visitatori in clienti. I nostri siti sono responsive, veloci e pensati per crescere insieme al tuo business.', link: '/servizi/sviluppo-web' },
              { title: 'Sviluppo web app e piattaforme digitali', text: 'Creiamo web app e piattaforme digitali personalizzate per digitalizzare i processi operativi della tua azienda. Dalle dashboard gestionali ai portali clienti, sviluppiamo applicazioni scalabili e sicure che semplificano il lavoro quotidiano del tuo team. Ogni piattaforma è progettata partendo dalle esigenze reali del business, con un focus su usabilità, prestazioni e integrazione con i sistemi esistenti.', link: '/servizi/web-app' },
              { title: 'Automazioni AI per aziende', text: 'Implementiamo sistemi di automazione basati su intelligenza artificiale per eliminare le attività ripetitive e migliorare l\'efficienza operativa della tua azienda. Dalle risposte automatiche ai clienti alla gestione documentale, dall\'analisi dati ai workflow interni, integriamo AI nei processi aziendali per risparmiare tempo, ridurre gli errori e liberare risorse per attività a maggiore valore aggiunto.', link: '/servizi/ai-automation' },
              { title: 'Branding e design digitale', text: 'Costruiamo identità visive e interfacce digitali che comunicano il valore del tuo brand. Dal logo alla user interface di un\'applicazione, ogni elemento è progettato per creare un\'esperienza coerente e memorabile. Il nostro approccio al design è orientato ai risultati: ogni scelta estetica è guidata da obiettivi di business e principi di usabilità.', link: '/servizi/ui-ux-design' },
              { title: 'Consulenza strategica digitale', text: 'Offriamo consulenza digitale per aiutare aziende e PMI a definire la strategia tecnologica più adatta ai propri obiettivi. Analizziamo i processi esistenti, identifichiamo le opportunità di miglioramento e creiamo una roadmap concreta per la trasformazione digitale. Dalla scelta degli strumenti alla pianificazione dello sviluppo, ti accompagniamo in ogni fase del percorso.', link: '/servizi/consulenza-digitale' },
            ].map((block, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-xl md:text-2xl font-bold text-white mb-3">{block.title}</h2>
                <p className="text-white/60 text-base leading-relaxed mb-3">{block.text}</p>
                <Link to={block.link} className="text-[#d0f601] text-sm font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all">
                  Scopri il servizio <ArrowRight size={14} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Servizi;
