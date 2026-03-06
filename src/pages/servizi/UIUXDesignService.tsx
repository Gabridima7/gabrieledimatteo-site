import { PenTool, Eye, MousePointerClick, Users } from 'lucide-react';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import iconFigma from '@/assets/icons/icon-figma.png';
import heroUiUx from '@/assets/hero-ui-ux-design.png';

const UIUXDesignService = () => (
  <ServicePageTemplate
    seoTitle="UI/UX Design per Web e Mobile App | NEXUS Agency"
    seoDescription="Design di interfacce intuitive per web e mobile app. User research, wireframe, prototipi interattivi, design system."
    seoCanonical="https://nexusagency.it/servizi/ui-ux-design"
    badge="UI/UX Design"
    h1="Interfacce che gli utenti amano usare"
    subtitle="Design di interfacce web e mobile app che convertono i visitatori in clienti con UX research-driven."
    heroIcon={PenTool}
    heroImage={heroUiUx}
    stats={[
      { value: '+120%', label: 'Conversioni medie' },
      { value: '5.0', label: 'Rating clienti' },
      { value: 'Figma', label: 'Prototipi interattivi' },
    ]}
    heroQuote={{ text: "Il redesign dell'interfaccia ha reso la nostra piattaforma intuitiva e i clienti lo notano subito.", name: "Mattia T.", role: "Founder, Homeleven" }}
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
      { title: 'UX Research', items: ['Interviste utenti', 'Analisi flussi', 'Personas & journey map'] },
      { title: 'Wireframe & IA', items: ['Architettura informativa', 'Wireframe low-fi', 'Prototipi navigabili'] },
      { title: 'UI Design', items: ['Visual design hi-fi', 'Design system', 'Micro-interazioni'] },
      { title: 'Handoff & test', items: ['File Figma dev-ready', 'Specifiche tecniche', 'User testing'] },
    ]}
    outcomes={['Interfaccia intuitiva e moderna', 'Aumento delle conversioni', 'Riduzione dei ticket di supporto', 'Maggiore retention degli utenti', 'Design system consistente', 'User testing validato']}
    outcomesSubtitle="Progettiamo interfacce basate su ricerca utente e dati reali, per massimizzare usabilità, conversioni e soddisfazione degli utenti."
    outcomeCards={[
      { title: 'Research & Design', desc: 'Decisioni di design basate su UX research, interviste utenti e analisi dei flussi per un\'esperienza ottimale.' },
      { title: 'Conversione & Retention', desc: 'Interfacce progettate per ridurre i ticket di supporto e aumentare conversioni e fidelizzazione degli utenti.' },
    ]}
    outcomesCtaText="Migliora la tua UX"
    capabilities={{
      title: 'Le nostre competenze in *UI/UX design*',
      subtitle: 'Dalla ricerca utente al design di interfacce — progettiamo esperienze digitali intuitive e orientate alla conversione.',
      columns: [
        { heading: 'UX Research', items: ['User interviews', 'Usability testing', 'Personas', 'Journey mapping', 'Heatmap analysis', 'A/B testing'] },
        { heading: 'UI Design', items: ['Visual design', 'Design system', 'Iconography', 'Micro-interazioni', 'Responsive design', 'Dark/light mode'] },
        { heading: 'Prototyping', items: ['Wireframe low-fi', 'Prototipi hi-fi', 'Clickable prototype', 'User flow', 'Interaction design', 'Handoff dev-ready'] },
      ],
    }}
    techStack={{
      title: 'Gli strumenti che utilizziamo per il *design delle tue interfacce*',
      subtitle: 'Tool professionali per progettare, prototipare e consegnare interfacce di alto livello.',
      items: [
        { name: 'Figma', image: iconFigma },
      ],
    }}
    faqs={[
      { q: 'Che software utilizzate per il design?', a: 'Figma per design e prototipi interattivi. Consegniamo file organizzati e pronti per lo sviluppo.' },
      { q: 'Fate anche lo sviluppo?', a: 'Sì, possiamo gestire design e sviluppo come progetto completo.' },
      { q: 'Cosa include un progetto UI/UX?', a: 'UX research, wireframe, prototipi interattivi, UI design in alta fedeltà e design system.' },
      { q: 'Quanto dura un progetto di UI/UX?', a: '2-6 settimane a seconda della complessità del prodotto.' },
      { q: 'Fate test con utenti reali?', a: 'Sì, includiamo user testing per validare le scelte di design.' },
    ]}
    finalCtaH2="Vuoi un'interfaccia che converte per la tua PMI?"
  />
);

export default UIUXDesignService;
