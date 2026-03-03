import { Code, Globe, Smartphone, Layers, FileCode2, Palette, Braces, Atom, Cog, Terminal, Server, ShoppingBag } from 'lucide-react';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import heroSviluppoWeb from '@/assets/hero-sviluppo-web.svg';
import { useLanguage } from '@/context/LanguageContext';

const SviluppoWebApp = () => {
  const { lang } = useLanguage();
  const isEN = lang === 'en';

  return (
    <ServicePageTemplate
      seoTitle="Sviluppo Web & App — NEXUS Agency"
      seoDescription="Sviluppo web, app, landing page, software gestionale e prodotti SaaS su misura per PMI italiane."
      badge="Sviluppo Web & App"
      h1="Sviluppo Web & App su misura per la tua PMI"
      subtitle="Siti web, applicazioni e piattaforme digitali performanti, scalabili e progettati per convertire."
      heroIcon={Code}
      heroImage={heroSviluppoWeb}
      stats={[
        { value: '50+', label: 'Progetti consegnati' },
        { value: '99.9%', label: 'Uptime garantito' },
        { value: '<48h', label: 'Tempo di risposta' },
      ]}
      heroQuote={{ text: "NEXUS ha trasformato la nostra idea in una piattaforma funzionante in tempi record. Professionalità e competenza al top.", name: "Mattia T.", role: "Founder, Homeleven" }}
      caseStudies={[
        { name: 'Homeleven', category: 'Web App', description: 'Piattaforma gestionale per il settore immobiliare con dashboard analytics.', metrics: ['+40% efficienza', 'Lancio in 8 settimane'], slug: 'homeleven' },
        { name: 'ONE UP', category: 'Sito Web', description: 'Sito web istituzionale con design moderno e ottimizzato per la lead generation.', metrics: ['+65% lead', 'PageSpeed 98'], slug: 'oneup' },
      ]}
      ctaBannerText="Pronto a digitalizzare la tua azienda?"
      ctaBannerDescription="Ti offriamo una prova gratuita di 3 giorni con uno dei nostri sviluppatori web per rispondere alle tue domande sul nostro processo di lavoro."
      benefitsTitle="Servizi di sviluppo web personalizzati e ad alte prestazioni"
      benefits={[
        { icon: Globe, title: 'Performance al top', desc: 'Siti e app ottimizzati per velocità, SEO e conversioni.' },
        { icon: Smartphone, title: 'Responsive su ogni device', desc: 'Design perfetto su desktop, tablet e smartphone.' },
        { icon: Layers, title: 'Architettura scalabile', desc: 'Codice modulare pronto a crescere con il tuo business.' },
      ]}
      process={[
        { title: 'Discovery & Analisi', items: ['Briefing & onboarding', 'Obiettivi di business', 'Analisi competitors', 'Ricerca di mercato'] },
        { title: 'Progettazione UX', items: ['Wireframe', 'Prototipi interattivi', 'User flow'] },
        { title: 'UI Design & Dev', items: ['Visual design', 'Design system', 'Sviluppo frontend', 'Backend & API'] },
        { title: 'Lancio & Supporto', items: ['Testing & QA', 'Deploy', 'Monitoraggio', 'Supporto continuo'] },
      ]}
      outcomes={['Sviluppatori qualificati', 'Approccio flessibile', 'Ottimizzazione delle prestazioni', 'Trasparenza dei processi', 'Supporto continuo', 'Sicurezza completa', 'Servizi di integrazione', 'Scalabilità e crescita']}
      outcomesSubtitle="I nostri sviluppatori front-end e back-end offrono soluzioni di sviluppo siti web personalizzate e a lungo termine, con un ampio stack tecnologico, interfacce responsive e misure di sicurezza."
      outcomeCards={[
        { title: 'Competenza & Esperienza', desc: 'Il nostro team porta conoscenza approfondita del settore ed esperienza pratica nello sviluppo di soluzioni digitali su misura.' },
        { title: 'Supporto & Sicurezza', desc: 'Prioritizziamo sicurezza e supporto per garantire un\'esperienza senza problemi, con protocolli robusti e monitoraggio continuo.' },
      ]}
      outcomesCtaText="Inizia il tuo progetto"
      faqs={[
        { q: 'Quanto tempo serve per sviluppare un sito web?', a: 'Dipende dalla complessità: un sito vetrina richiede 3-4 settimane, una web app complessa 8-12 settimane.' },
        { q: 'Che tecnologie utilizzate?', a: 'React, TypeScript, Tailwind CSS, Node.js e Supabase per il backend. Stack moderno e performante.' },
        { q: 'Il codice sarà di mia proprietà?', a: 'Sì, al 100%. Tutto il codice sorgente e gli asset sono tuoi.' },
        { q: 'Offrite supporto dopo il lancio?', a: 'Certamente. Offriamo piani di manutenzione e supporto tecnico continuativo.' },
        { q: 'Posso vedere esempi di lavori precedenti?', a: 'Sì, visita la sezione Casi Studio per vedere i nostri progetti recenti.' },
      ]}
      capabilities={isEN ? {
        title: 'Our capabilities and what we can offer in *web development*',
        subtitle: 'From creating visually stunning and functional websites to implementing dynamic features - our developers are experienced to cover your needs.',
        columns: [
          { heading: 'Blockchain', items: ['Layer 2 and Layer 3', 'Web3 dApps', 'DeFi, DEX, CEX', 'Play2Earn', 'NFT', 'SmartContracts'] },
          { heading: 'SaaS', items: ['CRM, Analytics', 'Automation tools', 'HR management', 'ERP softwares', 'AI data tools', 'Marketings platforms'] },
          { heading: 'E-commerce', items: ['Retail', 'B2C & B2B', 'Subscription', 'Marketplace', 'Integrations for ERP, PIM, WMS', 'Payment and tax services'] },
        ],
      } : {
        title: 'Le nostre competenze e cosa possiamo offrirti nello *sviluppo web*',
        subtitle: 'Dalla creazione di siti web visivamente straordinari e funzionali all\'implementazione di funzionalità dinamiche - i nostri sviluppatori hanno l\'esperienza per coprire ogni tua esigenza.',
        columns: [
          { heading: 'Blockchain', items: ['Layer 2 e Layer 3', 'App Web3 decentralizzate', 'DeFi, DEX, CEX', 'Play2Earn', 'NFT', 'Smart Contract'] },
          { heading: 'SaaS', items: ['CRM, Analytics', 'Strumenti di automazione', 'Gestione delle risorse umane', 'Software ERP', 'Strumenti AI per i dati', 'Piattaforme di marketing'] },
          { heading: 'E-commerce', items: ['Retail', 'B2C & B2B', 'Abbonamenti', 'Marketplace', 'Integrazioni per ERP, PIM, WMS', 'Servizi di pagamento e fiscali'] },
        ],
      }}
      techStack={isEN ? {
        title: 'You hire a professional developer with suitable *experience*',
        subtitle: 'From creating visually stunning and functional websites to implementing dynamic features - our developers are experienced to cover your needs.',
        items: [
          { name: 'HTML', icon: FileCode2 },
          { name: 'CSS3', icon: Palette },
          { name: 'JavaScript', icon: Braces },
          { name: 'ReactJS', icon: Atom },
          { name: 'TypeScript', icon: Code },
          { name: 'Python', icon: Terminal },
          { name: 'NodeJS', icon: Server },
          { name: 'Shopify', icon: ShoppingBag },
        ],
      } : {
        title: 'Assumi uno sviluppatore professionista con *esperienza adeguata*',
        subtitle: 'Dalla creazione di siti web visivamente straordinari e funzionali all\'implementazione di funzionalità dinamiche - i nostri sviluppatori hanno l\'esperienza per coprire le tue esigenze.',
        items: [
          { name: 'HTML', icon: FileCode2 },
          { name: 'CSS3', icon: Palette },
          { name: 'JavaScript', icon: Braces },
          { name: 'ReactJS', icon: Atom },
          { name: 'TypeScript', icon: Code },
          { name: 'Python', icon: Terminal },
          { name: 'NodeJS', icon: Server },
          { name: 'Shopify', icon: ShoppingBag },
        ],
      }}
      finalCtaH2="Vuoi un sito web che converte per la tua PMI?"
    />
  );
};

export default SviluppoWebApp;
