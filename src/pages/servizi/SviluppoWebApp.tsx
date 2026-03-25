import { Code, Globe, Smartphone, Layers } from 'lucide-react';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import heroSviluppoWeb from '@/assets/hero-sviluppo-web.svg';
import { useLanguage } from '@/context/LanguageContext';
import techHtml from '@/assets/tech/icon-html.png';
import techCss from '@/assets/tech/icon-css.png';
import techJs from '@/assets/tech/icon-js.png';
import techReact from '@/assets/tech/icon-react.png';
import techRust from '@/assets/tech/icon-rust.png';
import techPython from '@/assets/tech/icon-python.png';
import techNodejs from '@/assets/tech/icon-nodejs.png';
import techShopify from '@/assets/tech/icon-shopify.png';

const SviluppoWebApp = () => {
  const { lang } = useLanguage();
  const isEN = lang === 'en';

  return (
    <ServicePageTemplate
      seoTitle="Sviluppo Web Front-End e Back-End per PMI | NEXUS Agency"
      seoDescription="Sviluppo web professionale front-end e back-end per PMI italiane. React, Node.js, architetture scalabili. Risultati misurabili."
      seoCanonical="https://nexusagency.it/servizi/sviluppo-web"
      badge="Sviluppo Web & App"
      h1="Sviluppo siti web professionali"
      subtitle="Siti web, applicazioni e piattaforme digitali performanti, scalabili e progettati per convertire visitatori in clienti."
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
        { name: 'ONE UP', category: 'Sito Web', description: 'Sito web istituzionale con design moderno e ottimizzato per la lead generation.', metrics: ['+65% lead', 'PageSpeed 98'], slug: 'one-up' },
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
      faqs={isEN ? [
        { q: 'What kind of web development projects do you handle?', a: 'We create various websites, corporate platforms, and web applications. Whether you need a Webflow landing page or a scalable React-based platform, our developers will create customized, high-performance solutions that meet your business goals.' },
        { q: 'How long does it take to develop a website or web app?', a: 'Timelines depend on the scope and functionality. We can launch a small website in 4 weeks, but complex web platforms or SaaS dashboards take 10+ weeks.' },
        { q: 'Can you build both the design and development of my product?', a: 'Yes, that is our main strength. We are a design and development partner that provides a consistent user experience, flawless interface implementation, and faster delivery because there is no gap between concept and code. This unified approach helps our clients reduce production time by 40% and ensures that the final product matches the design pixel by pixel.' },
        { q: 'Will my website be optimized for SEO and performance?', a: 'Absolutely. Every site we build follows SEO best practices: clean code, fast loading speed, mobile responsiveness, and proper meta structure.' },
        { q: 'Do you provide post-launch support?', a: 'Yes, we offer support after launch. Our team monitors performance, applies updates, and can add new features as your business grows.' },
      ] : [
        { q: 'Che tipo di progetti di sviluppo web gestite?', a: 'Realizziamo siti web, piattaforme aziendali e applicazioni web di vario tipo. Che tu abbia bisogno di una landing page in Webflow o di una piattaforma scalabile basata su React, i nostri sviluppatori creeranno soluzioni personalizzate e ad alte prestazioni che soddisfano i tuoi obiettivi di business.' },
        { q: 'Quanto tempo ci vuole per sviluppare un sito web o una web app?', a: 'I tempi dipendono dall\'ampiezza e dalle funzionalità del progetto. Possiamo lanciare un sito semplice in 4 settimane, ma piattaforme web complesse o dashboard SaaS richiedono 10+ settimane.' },
        { q: 'Potete occuparvi sia del design che dello sviluppo del mio prodotto?', a: 'Sì, è il nostro punto di forza principale. Siamo un partner che si occupa sia di design che di sviluppo, garantendo un\'esperienza utente coerente, un\'implementazione dell\'interfaccia impeccabile e consegne più rapide grazie all\'assenza di gap tra concept e codice. Questo approccio integrato aiuta i nostri clienti a ridurre i tempi di produzione del 40% e assicura che il prodotto finale corrisponda al design pixel per pixel.' },
        { q: 'Il mio sito sarà ottimizzato per la SEO e le performance?', a: 'Assolutamente sì. Ogni sito che realizziamo segue le best practice SEO: codice pulito, velocità di caricamento elevata, responsività mobile e struttura dei meta tag corretta.' },
        { q: 'Fornite supporto dopo il lancio?', a: 'Sì, offriamo supporto post-lancio. Il nostro team monitora le performance, applica aggiornamenti e può aggiungere nuove funzionalità man mano che il tuo business cresce.' },
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
          { name: 'HTML', image: techHtml },
          { name: 'CSS3', image: techCss },
          { name: 'JavaScript', image: techJs },
          { name: 'ReactJS', image: techReact },
          { name: 'Rust', image: techRust },
          { name: 'Python', image: techPython },
          { name: 'NodeJS', image: techNodejs },
          { name: 'Shopify', image: techShopify },
        ],
      } : {
        title: 'Il partner digitale che porta AI e *sviluppo nella tua PMI*',
        subtitle: 'Dalla creazione di siti web visivamente straordinari e funzionali all\'implementazione di funzionalità dinamiche - i nostri sviluppatori hanno l\'esperienza per coprire le tue esigenze.',
        items: [
          { name: 'HTML', image: techHtml },
          { name: 'CSS3', image: techCss },
          { name: 'JavaScript', image: techJs },
          { name: 'ReactJS', image: techReact },
          { name: 'Rust', image: techRust },
          { name: 'Python', image: techPython },
          { name: 'NodeJS', image: techNodejs },
          { name: 'Shopify', image: techShopify },
        ],
      }}
      finalCtaH2="Vuoi un sito web che converte per la tua PMI?"
    />
  );
};

export default SviluppoWebApp;
