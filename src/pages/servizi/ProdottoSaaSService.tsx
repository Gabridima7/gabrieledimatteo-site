import { Layers, Rocket, TrendingUp, Search, PenTool, Code, BarChart3, Zap, Users } from 'lucide-react';
import ServicePageTemplate from '@/components/ServicePageTemplate';

const ProdottoSaaSService = () => (
  <ServicePageTemplate
    seoTitle="Prodotto SaaS — NEXUS Agency"
    seoDescription="Sviluppo di prodotti SaaS scalabili dalla MVP al lancio sul mercato."
    badge="Prodotto SaaS"
    h1="Da idea a prodotto SaaS scalabile"
    subtitle="Sviluppiamo il tuo SaaS dalla MVP al lancio, con architettura pronta a scalare e monetizzare."
    heroIcon={Rocket}
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
      { icon: Search, title: 'Validazione', desc: 'Analizziamo mercato, competitors e product-market fit.' },
      { icon: PenTool, title: 'MVP Design', desc: 'Progettiamo le feature core per il lancio.' },
      { icon: Code, title: 'Sviluppo', desc: 'Codifichiamo la MVP con stack scalabile.' },
      { icon: Rocket, title: 'Lancio', desc: 'Go-to-market con onboarding e billing.' },
    ]}
    outcomes={['MVP validata sul mercato', 'Architettura scalabile', 'Revenue ricorrente (MRR)', 'Onboarding utenti automatizzato', 'Dashboard analytics integrata']}
    outcomesCtaText="Lancia il tuo SaaS"
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
