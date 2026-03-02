import { Smartphone, Eye, Fingerprint, Sparkles } from 'lucide-react';
import ServicePageTemplate from '@/components/ServicePageTemplate';

const MobileAppDesignService = () => (
  <ServicePageTemplate
    seoTitle="Mobile App Design — NEXUS Agency"
    seoDescription="Design di app mobile che gli utenti amano usare, con focus su UX e conversioni."
    badge="Mobile App Design"
    h1="App mobile che gli utenti amano"
    subtitle="Design di app mobile native e cross-platform con focus su usabilità, engagement e conversioni."
    heroIcon={Smartphone}
    stats={[
      { value: '+85%', label: 'Retention rate' },
      { value: '4.8★', label: 'Rating medio app' },
      { value: 'iOS+', label: 'Android design' },
    ]}
    heroQuote={{ text: "Il design dell'app è stato fondamentale per il successo. Gli utenti adorano l'esperienza fluida.", name: "Andrea Z.", role: "CEO, ONE UP" }}
    caseStudies={[
      { name: 'ONE UP', category: 'Mobile Design', description: 'Design di app mobile per piattaforma fitness con gamification integrata.', metrics: ['+85% retention', '4.8★ rating'], slug: 'oneup' },
    ]}
    ctaBannerText="Pronto a progettare la tua app mobile?"
    benefits={[
      { icon: Fingerprint, title: 'Native feel', desc: 'Design che rispetta le linee guida iOS e Android.' },
      { icon: Sparkles, title: 'Engagement', desc: 'Micro-interazioni e animazioni che deliziano gli utenti.' },
      { icon: Eye, title: 'Accessibilità', desc: 'Interfacce inclusive e accessibili a tutti gli utenti.' },
    ]}
    process={[
      { title: 'Discovery & UX research', items: ['Briefing & onboarding', 'Product/business goals', 'Product testing', "Competitor's research", 'Market research'] },
      { title: 'UX Design', items: ['Wireframes', 'Prototyping'] },
      { title: 'UI Design', items: ['Moodboard', 'Concept design', 'Layouts design', 'Responsive & Adaptive', 'UI style guide', 'Design system'] },
      { title: 'Design support', items: ['Team extension for design improvements'] },
    ]}
    outcomes={['App design pixel-perfect', 'User experience fluida e intuitiva', 'Aumento della retention', 'Rating elevato sugli store', 'Design pronto per lo sviluppo']}
    outcomesCtaText="Progetta la tua app"
    faqs={[
      { q: 'Progettate per iOS, Android o entrambi?', a: 'Progettiamo per entrambe le piattaforme, rispettando le linee guida specifiche di ciascuna.' },
      { q: 'Consegnate anche il codice dell\'app?', a: 'Consegniamo il design completo in Figma. Lo sviluppo può essere un servizio aggiuntivo.' },
      { q: 'Fate user testing?', a: 'Sì, testiamo i prototipi con utenti reali per validare le scelte di design.' },
      { q: 'Quanto dura un progetto di mobile app design?', a: '3-6 settimane a seconda della complessità dell\'app.' },
      { q: 'Posso richiedere solo alcune schermate?', a: 'Sì, possiamo progettare singole feature o flussi specifici dell\'app.' },
    ]}
    finalCtaH2="Vuoi un'app mobile che i tuoi utenti ameranno?"
  />
);

export default MobileAppDesignService;
