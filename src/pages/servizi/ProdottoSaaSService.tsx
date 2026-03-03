import { Rocket, TrendingUp, Zap, Users } from 'lucide-react';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import techJs from '@/assets/tech/icon-js.png';
import techReact from '@/assets/tech/icon-react.png';
import techNodejs from '@/assets/tech/icon-nodejs.png';
import techPython from '@/assets/tech/icon-python.png';
import heroProdottoSaas from '@/assets/hero-prodotto-saas.png';

const ProdottoSaaSService = () => (
  <ServicePageTemplate
    seoTitle="Prodotto SaaS — NEXUS Agency"
    seoDescription="Sviluppo di prodotti SaaS scalabili dalla MVP al lancio sul mercato."
    badge="Prodotto SaaS"
    h1="Da idea a prodotto SaaS scalabile"
    subtitle="Sviluppiamo il tuo SaaS dalla MVP al lancio, con architettura pronta a scalare e monetizzare."
    heroIcon={Rocket}
    heroImage={heroProdottoSaas}
    stats={[
      { value: '4-8', label: 'Settimane per la MVP' },
      { value: '∞', label: 'Utenti scalabili' },
      { value: 'MRR', label: 'Revenue ricorrente' },
    ]}
    heroQuote={{ text: "NEXUS ci ha aiutato a passare dall'idea alla MVP in 6 settimane. Ora abbiamo i primi clienti paganti.", name: "Andrea Z.", role: "CEO, ONE UP" }}
    caseStudies={[
      { name: 'ONE UP', category: 'SaaS', description: 'Piattaforma SaaS B2B con subscription management e onboarding automatizzato.', metrics: ['MVP in 6 settimane', '50+ utenti beta'], slug: 'oneup' },
    ]}
    ctaBannerText="Pronto a lanciare il tuo SaaS?"
    benefits={[
      { icon: Zap, title: 'Time-to-market rapido', desc: 'MVP funzionante in 4-8 settimane per validare l\'idea.' },
      { icon: Users, title: 'Multi-tenant', desc: 'Architettura pronta a gestire migliaia di utenti.' },
      { icon: TrendingUp, title: 'Revenue model integrato', desc: 'Stripe, billing e subscription management inclusi.' },
    ]}
    process={[
      { title: 'Validazione idea', items: ['Analisi mercato', 'Competitors', 'Product-market fit'] },
      { title: 'MVP Design', items: ['Feature core', 'User flow', 'Prototipo clickable'] },
      { title: 'Sviluppo MVP', items: ['Stack scalabile', 'Multi-tenant', 'Stripe billing'] },
      { title: 'Go-to-market', items: ['Onboarding automatico', 'Analytics', 'Iterazione continua'] },
    ]}
    outcomes={['MVP validata sul mercato', 'Architettura scalabile', 'Revenue ricorrente (MRR)', 'Onboarding utenti automatizzato', 'Dashboard analytics integrata', 'Billing & subscription management']}
    outcomesSubtitle="Sviluppiamo il tuo prodotto SaaS dalla validazione dell'idea al lancio sul mercato, con architettura scalabile e modello di revenue integrato."
    outcomeCards={[
      { title: 'MVP & Validazione', desc: 'Time-to-market rapido con MVP funzionante in 4-8 settimane per validare l\'idea e acquisire i primi clienti.' },
      { title: 'Scalabilità & Revenue', desc: 'Architettura multi-tenant pronta a crescere con Stripe billing, subscription management e analytics integrati.' },
    ]}
    outcomesCtaText="Lancia il tuo SaaS"
    capabilities={{
      title: 'Le nostre competenze per il tuo *prodotto SaaS*',
      subtitle: 'Dalla validazione dell\'idea al go-to-market — costruiamo prodotti SaaS pronti a scalare e monetizzare.',
      columns: [
        { heading: 'Product', items: ['MVP development', 'Product-market fit', 'User onboarding', 'Feature prioritization', 'Analytics & metrics', 'Pricing strategy'] },
        { heading: 'Architettura', items: ['Multi-tenant', 'API RESTful', 'Database design', 'Microservizi', 'CI/CD pipeline', 'Auto-scaling'] },
        { heading: 'Monetizzazione', items: ['Stripe billing', 'Subscription plans', 'Trial management', 'Invoice automation', 'Usage-based pricing', 'Revenue analytics'] },
      ],
    }}
    techStack={{
      title: 'Lo stack tecnologico per il tuo *prodotto SaaS*',
      subtitle: 'Tecnologie moderne e scalabili per costruire un SaaS performante e pronto a crescere.',
      items: [
        { name: 'ReactJS', image: techReact },
        { name: 'JavaScript', image: techJs },
        { name: 'NodeJS', image: techNodejs },
        { name: 'Python', image: techPython },
      ],
    }}
    faqs={[
      { q: 'Che differenza c\'è tra web app e SaaS?', a: 'Un SaaS è un prodotto software venduto in abbonamento a più clienti, con architettura multi-tenant e billing integrato.' },
      { q: 'Quanto costa sviluppare una MVP SaaS?', a: 'Il costo dipende dalla complessità. Prenota una call per discutere la tua idea e ricevere un preventivo.' },
      { q: 'Quale stack tecnologico usate?', a: 'React, TypeScript, Supabase, Stripe. Stack moderno, veloce e scalabile.' },
      { q: 'Posso evolvere la MVP dopo il lancio?', a: 'Assolutamente. Progettiamo l\'architettura per evolvere facilmente con nuove feature.' },
      { q: 'Include la gestione dei pagamenti?', a: 'Sì, integriamo Stripe con gestione abbonamenti, fatturazione e trial period.' },
    ]}
    finalCtaH2="Vuoi trasformare la tua idea in un SaaS?"
  />
);

export default ProdottoSaaSService;
