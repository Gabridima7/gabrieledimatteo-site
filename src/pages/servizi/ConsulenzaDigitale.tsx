import { Search, Target, BarChart3, Lightbulb, FileText, TrendingUp, Rocket, ClipboardCheck } from 'lucide-react';
import ServicePageTemplate from '@/components/ServicePageTemplate';

const ConsulenzaDigitale = () => (
  <ServicePageTemplate
    seoTitle="Consulenza Digitale — NEXUS Agency"
    seoDescription="Consulenza digitale, audit UX/UI e strategia digitale per PMI italiane."
    badge="Consulenza Digitale"
    h1="Strategia digitale per la tua crescita"
    subtitle="Ti guidiamo nella trasformazione digitale con analisi, audit e una roadmap su misura per la tua PMI."
    heroIcon={Lightbulb}
    stats={[
      { value: '100%', label: 'Roadmap actionable' },
      { value: '+35%', label: 'Efficienza media' },
      { value: '1:1', label: 'Consulenza diretta' },
    ]}
    heroQuote={{ text: "La consulenza di NEXUS ci ha dato una visione chiara su dove investire nel digitale. Ogni euro speso ha avuto un ritorno.", name: "Andrea Z.", role: "CEO, ONE UP" }}
    caseStudies={[
      { name: 'Revelli Group', category: 'Consulenza', description: 'Audit digitale completo e roadmap di trasformazione per gruppo industriale.', metrics: ['+35% efficienza', 'ROI in 6 mesi'], slug: 'revelli' },
    ]}
    ctaBannerText="Pronto a definire la tua strategia digitale?"
    benefits={[
      { icon: Search, title: 'Analisi approfondita', desc: 'Audit completo della tua presenza digitale e dei processi.' },
      { icon: Target, title: 'Strategia mirata', desc: 'Roadmap personalizzata con priorità e KPI chiari.' },
      { icon: TrendingUp, title: 'Risultati misurabili', desc: 'Ogni azione è tracciata e ottimizzata per il ROI.' },
    ]}
    process={[
      { icon: ClipboardCheck, title: 'Assessment', desc: 'Valutiamo lo stato attuale della tua azienda digitale.' },
      { icon: Search, title: 'Analisi', desc: 'Identifichiamo opportunità e priorità di intervento.' },
      { icon: FileText, title: 'Roadmap', desc: 'Definiamo il piano operativo con timeline e budget.' },
      { icon: Rocket, title: 'Execution', desc: 'Ti affianchiamo nell\'implementazione della strategia.' },
    ]}
    outcomes={['Visione chiara del percorso digitale', 'Priorità di investimento definite', 'KPI misurabili e tracking', 'Riduzione sprechi e inefficienze', 'Vantaggio competitivo concreto']}
    outcomesCtaText="Prenota la consulenza"
    faqs={[
      { q: 'Cosa include una consulenza digitale?', a: 'Audit della presenza digitale, analisi competitors, roadmap strategica con priorità, timeline e budget stimati.' },
      { q: 'Quanto dura il percorso di consulenza?', a: 'L\'assessment iniziale richiede 1-2 settimane. L\'affiancamento strategico può durare 1-6 mesi.' },
      { q: 'È adatta anche a piccole aziende?', a: 'Assolutamente sì. Adattiamo la strategia alla dimensione e al budget della tua azienda.' },
      { q: 'Posso richiedere solo l\'audit UX/UI?', a: 'Sì, offriamo anche audit specifici sul prodotto digitale come servizio standalone.' },
      { q: 'Come misurate i risultati?', a: 'Definiamo KPI chiari all\'inizio del progetto e monitoriamo costantemente i progressi.' },
    ]}
    finalCtaH2="Vuoi una strategia digitale chiara per la tua PMI?"
  />
);

export default ConsulenzaDigitale;
