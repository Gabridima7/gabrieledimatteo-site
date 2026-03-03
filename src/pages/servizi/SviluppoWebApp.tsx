import { Code, Globe, Smartphone, Layers } from 'lucide-react';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import heroSviluppoWeb from '@/assets/hero-sviluppo-web.svg';

const SviluppoWebApp = () => (
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
    outcomes={['Sito web veloce e ottimizzato SEO', 'Aumento delle conversioni', 'Codice proprietario al 100%', 'Supporto tecnico continuativo', 'Design moderno e professionale', 'Integrazione con i tuoi sistemi']}
    outcomesCtaText="Inizia il tuo progetto"
    faqs={[
      { q: 'Quanto tempo serve per sviluppare un sito web?', a: 'Dipende dalla complessità: un sito vetrina richiede 3-4 settimane, una web app complessa 8-12 settimane.' },
      { q: 'Che tecnologie utilizzate?', a: 'React, TypeScript, Tailwind CSS, Node.js e Supabase per il backend. Stack moderno e performante.' },
      { q: 'Il codice sarà di mia proprietà?', a: 'Sì, al 100%. Tutto il codice sorgente e gli asset sono tuoi.' },
      { q: 'Offrite supporto dopo il lancio?', a: 'Certamente. Offriamo piani di manutenzione e supporto tecnico continuativo.' },
      { q: 'Posso vedere esempi di lavori precedenti?', a: 'Sì, visita la sezione Casi Studio per vedere i nostri progetti recenti.' },
    ]}
    finalCtaH2="Vuoi un sito web che converte per la tua PMI?"
  />
);

export default SviluppoWebApp;
