import { ClipboardCheck, Eye, TrendingUp, AlertCircle } from 'lucide-react';
import ServicePageTemplate from '@/components/ServicePageTemplate';

const ProductAuditService = () => (
  <ServicePageTemplate
    seoTitle="Product UX/UI Audit — NEXUS Agency"
    seoDescription="Analisi approfondita della UX/UI del tuo prodotto digitale con insights actionable."
    badge="Product UX/UI Audit"
    h1="Audit UX/UI del tuo prodotto digitale"
    subtitle="Analisi approfondita dell'esperienza utente con insights actionable per migliorare conversioni e usabilità."
    heroIcon={ClipboardCheck}
    stats={[
      { value: '50+', label: 'Punti di analisi' },
      { value: '100%', label: 'Actionable insights' },
      { value: '1-2', label: 'Settimane delivery' },
    ]}
    heroQuote={{ text: "L'audit di NEXUS ha rivelato problemi che non avevamo notato. Le correzioni hanno portato +40% di conversioni.", name: "Andrea Z.", role: "CEO, ONE UP" }}
    caseStudies={[
      { name: 'ONE UP', category: 'UX Audit', description: 'Audit completo della piattaforma con roadmap di miglioramenti prioritizzati.', metrics: ['+40% conversioni', '50+ insights'], slug: 'oneup' },
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
    outcomes={['Problemi di usabilità identificati', 'Roadmap di miglioramento chiara', 'Insights basati su dati reali', 'Aumento delle conversioni', 'Esperienza utente migliorata']}
    outcomesCtaText="Prenota il tuo audit"
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
