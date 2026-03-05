import { Search, Target, TrendingUp, Lightbulb } from 'lucide-react';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import iconFigma from '@/assets/icons/icon-figma.png';
import iconMake from '@/assets/icons/icon-make.png';
import heroConsulenza from '@/assets/hero-consulenza-digitale.png';

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
      { title: 'Assessment digitale', items: ['Analisi presenza online', 'Audit tech stack', 'Valutazione processi'] },
      { title: 'Analisi & opportunità', items: ['Gap analysis', 'Benchmark competitors', 'Priorità intervento'] },
      { title: 'Roadmap strategica', items: ['Piano operativo', 'Timeline & budget', 'KPI & metriche'] },
      { title: 'Execution & supporto', items: ['Implementazione', 'Monitoraggio risultati', 'Iterazione continua'] },
    ]}
    outcomes={['Visione chiara del percorso digitale', 'Priorità di investimento definite', 'KPI misurabili e tracking', 'Riduzione sprechi e inefficienze', 'Vantaggio competitivo concreto', 'Roadmap operativa concreta']}
    outcomesSubtitle="Ti guidiamo con analisi approfondite e strategie concrete per trasformare il digitale in un vantaggio competitivo misurabile."
    outcomeCards={[
      { title: 'Analisi & Strategia', desc: 'Audit completo della tua presenza digitale con roadmap prioritizzata e KPI chiari per ogni investimento.' },
      { title: 'Risultati & Crescita', desc: 'Ogni azione è misurata e ottimizzata per garantire il massimo ritorno sull\'investimento digitale.' },
    ]}
    outcomesCtaText="Prenota la consulenza"
    capabilities={{
      title: 'Le nostre competenze in *consulenza digitale*',
      subtitle: 'Dall\'audit della tua presenza online alla definizione di una strategia digitale completa e actionable.',
      columns: [
        { heading: 'Audit & Analisi', items: ['Audit UX/UI', 'Performance analysis', 'SEO audit', 'Tech stack review', 'Analytics setup', 'Competitor benchmark'] },
        { heading: 'Strategia', items: ['Digital roadmap', 'Go-to-market', 'Product strategy', 'Growth hacking', 'Budget planning', 'KPI framework'] },
        { heading: 'Trasformazione', items: ['Process optimization', 'Tool selection', 'Team enablement', 'Change management', 'Vendor management', 'Digital governance'] },
      ],
    }}
    techStack={{
      title: 'Gli strumenti che utilizziamo per la tua *strategia digitale*',
      subtitle: 'Tool professionali per analisi, pianificazione e monitoraggio della tua trasformazione digitale.',
      items: [
        { name: 'Figma', image: iconFigma },
        { name: 'Make', image: iconMake },
      ],
    }}
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
