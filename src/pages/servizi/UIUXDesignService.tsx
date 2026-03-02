import { PenTool, Eye, Layout, Search, Palette, Code, Rocket, MousePointerClick, Users } from 'lucide-react';
import ServicePageTemplate from '@/components/ServicePageTemplate';

const UIUXDesignService = () => (
  <ServicePageTemplate
    seoTitle="UI/UX Design — NEXUS Agency"
    seoDescription="Design di interfacce web e mobile app che convertono i visitatori in clienti."
    badge="UI/UX Design"
    h1="Interfacce che gli utenti amano usare"
    subtitle="Design di interfacce web e mobile app che convertono i visitatori in clienti con UX research-driven."
    heroIcon={PenTool}
    stats={[
      { value: '+120%', label: 'Conversioni medie' },
      { value: '5.0', label: 'Rating clienti' },
      { value: 'Figma', label: 'Prototipi interattivi' },
    ]}
    heroQuote={{ text: "Il redesign dell'interfaccia ha reso la nostra piattaforma intuitiva e i clienti lo notano subito.", name: "Marco R.", role: "Founder, Homeleven" }}
    caseStudies={[
      { name: 'Homeleven', category: 'UI/UX Design', description: 'Redesign completo dell\'interfaccia utente della piattaforma gestionale.', metrics: ['+50% retention', '-40% ticket supporto'], slug: 'homeleven' },
    ]}
    ctaBannerText="Pronto a migliorare la tua user experience?"
    benefits={[
      { icon: Eye, title: 'Research-driven', desc: 'Decisioni di design basate su dati e ricerca utente.' },
      { icon: MousePointerClick, title: 'Conversione', desc: 'Ogni interazione è progettata per guidare l\'utente.' },
      { icon: Users, title: 'User-centered', desc: 'Design centrato sugli utenti reali del tuo prodotto.' },
    ]}
    process={[
      { icon: Search, title: 'UX Research', desc: 'Analizziamo utenti, flussi e pain points.' },
      { icon: Layout, title: 'Wireframe', desc: 'Strutturiamo layout e architettura informativa.' },
      { icon: Palette, title: 'UI Design', desc: 'Creiamo il visual design in alta fedeltà.' },
      { icon: Rocket, title: 'Handoff', desc: 'Consegniamo file Figma pronti per lo sviluppo.' },
    ]}
    outcomes={['Interfaccia intuitiva e moderna', 'Aumento delle conversioni', 'Riduzione dei ticket di supporto', 'Maggiore retention degli utenti', 'Design system consistente']}
    outcomesCtaText="Migliora la tua UX"
    faqs={[
      { q: 'Che software utilizzate per il design?', a: 'Figma per design e prototipi interattivi. Consegniamo file organizzati e pronti per lo sviluppo.' },
      { q: 'Fate anche lo sviluppo?', a: 'Sì, possiamo gestire design e sviluppo come progetto completo.' },
      { q: 'Cosa include un progetto UI/UX?', a: 'UX research, wireframe, prototipi interattivi, UI design in alta fedeltà e design system.' },
      { q: 'Quanto dura un progetto di UI/UX?', a: '2-6 settimane a seconda della complessità del prodotto.' },
      { q: 'Fate test con utenti reali?', a: 'Sì, includiamo user testing per validare le scelte di design.' },
    ]}
    finalCtaH2="Vuoi un\'interfaccia che converte per la tua PMI?"
  />
);

export default UIUXDesignService;
