import { ClipboardCheck, Eye, TrendingUp, AlertCircle } from 'lucide-react';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import iconFigma from '@/assets/icons/icon-figma.png';
import heroProductAudit from '@/assets/hero-product-audit.png';

const ProductAuditService = () => (
  <ServicePageTemplate
    seoTitle="Product UX/UI Audit — Analisi e Ottimizzazione | NEXUS"
    seoDescription="Audit UX/UI completo del tuo prodotto digitale. Insights azionabili per migliorare conversioni e user experience."
    seoCanonical="https://nexusagency.it/servizi/product-ux-ui-audit"
    badge="Product UX/UI Audit"
    h1="Audit UX/UI del tuo prodotto digitale"
    subtitle="Analisi approfondita dell'esperienza utente con insights actionable per migliorare conversioni e usabilità."
    heroIcon={ClipboardCheck}
    heroImage={heroProductAudit}
    stats={[
      { value: '50+', label: 'Punti di analisi' },
      { value: '100%', label: 'Actionable insights' },
      { value: '1-2', label: 'Settimane delivery' },
    ]}
    heroQuote={{ text: "L'audit di NEXUS ha rivelato problemi che non avevamo notato. Le correzioni hanno portato +40% di conversioni.", name: "Andrea Z.", role: "CEO, ONE UP" }}
    caseStudies={[
      { name: 'ONE UP', category: 'UX Audit', description: 'Audit completo della piattaforma con roadmap di miglioramenti prioritizzati.', metrics: ['+40% conversioni', '50+ insights'], slug: 'one-up' },
    ]}
    ctaBannerText="Pronto a scoprire come migliorare il tuo prodotto?"
    benefits={[
      { icon: Eye, title: 'Analisi esperta', desc: 'Occhio critico di designer esperti su ogni flusso del tuo prodotto.' },
      { icon: AlertCircle, title: 'Problem discovery', desc: 'Identifichiamo problemi di usabilità nascosti e friction points.' },
      { icon: TrendingUp, title: 'Roadmap prioritizzata', desc: 'Piano di azione concreto con priorità basate sull\'impatto.' },
    ]}
    process={[
      { title: 'Raccolta dati', items: ['Analytics review', 'Heatmap analysis', 'Comportamenti utente'] },
      { title: 'Analisi euristica', items: ['Valutazione usabilità', 'Best practice check', 'Accessibility audit'] },
      { title: 'Report & insights', items: ['Documento dettagliato', 'Screenshot annotati', 'Roadmap prioritizzata'] },
      { title: 'Presentazione', items: ['Call dedicata', 'Q&A', 'Prossimi passi'] },
    ]}
    outcomes={['Problemi di usabilità identificati', 'Roadmap di miglioramento chiara', 'Insights basati su dati reali', 'Aumento delle conversioni', 'Esperienza utente migliorata', 'Priorità di intervento definite']}
    outcomesSubtitle="Analizziamo ogni aspetto del tuo prodotto digitale con un approccio data-driven per identificare problemi e opportunità di miglioramento."
    outcomeCards={[
      { title: 'Analisi Approfondita', desc: 'Valutazione esperta su 50+ punti di analisi tra usabilità, performance, accessibilità e coerenza visiva.' },
      { title: 'Roadmap Actionable', desc: 'Report dettagliato con screenshot annotati, raccomandazioni prioritizzate e piano di azione concreto.' },
    ]}
    outcomesCtaText="Prenota il tuo audit"
    capabilities={{
      title: 'Le nostre competenze nel *product audit*',
      subtitle: 'Dall\'analisi euristica al benchmark competitivo — valutiamo ogni aspetto del tuo prodotto digitale.',
      columns: [
        { heading: 'Usabilità', items: ['Analisi euristica', 'Task analysis', 'Error prevention', 'Learnability', 'Efficiency', 'User satisfaction'] },
        { heading: 'Performance', items: ['Core Web Vitals', 'PageSpeed analysis', 'Mobile performance', 'Load time audit', 'Bundle analysis', 'Image optimization'] },
        { heading: 'Accessibilità', items: ['WCAG compliance', 'Screen reader test', 'Color contrast', 'Keyboard navigation', 'Focus management', 'ARIA labels'] },
      ],
    }}
    techStack={{
      title: 'Gli strumenti per il tuo *product audit*',
      subtitle: 'Tool professionali per analizzare in profondità ogni aspetto del tuo prodotto digitale.',
      items: [
        { name: 'Figma', image: iconFigma },
      ],
    }}
    faqs={[
      { q: 'Cosa analizzate durante l\'audit?', a: 'Analizziamo UX, UI, flussi utente, performance, accessibilità, copy e coerenza visiva del prodotto.' },
      { q: 'Quanto dura un audit?', a: 'L\'analisi richiede 1-2 settimane. La presentazione dei risultati avviene con una call dedicata.' },
      { q: 'Che deliverable ricevo?', a: 'Un report dettagliato con screenshot annotati, insights, raccomandazioni prioritizzate e una roadmap.' },
      { q: 'Serve anche per app mobile?', a: 'Sì, analizziamo sia web che mobile app.' },
      { q: 'Posso poi affidarvi le correzioni?', a: 'Certamente. Possiamo implementare le migliorie identificate nell\'audit.' },
    ]}
    finalCtaH2="Vuoi scoprire come migliorare il tuo prodotto?"
  />
);

export default ProductAuditService;
