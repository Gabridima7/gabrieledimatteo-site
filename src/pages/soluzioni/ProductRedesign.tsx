import { RefreshCw, TrendingUp, Palette, BarChart3 } from 'lucide-react';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import techReact from '@/assets/tech/icon-react.png';
import techJs from '@/assets/tech/icon-js.png';
import techHtml from '@/assets/tech/icon-html.png';
import techCss from '@/assets/tech/icon-css.png';
import techNodejs from '@/assets/tech/icon-nodejs.png';
import heroProductRedesign from '@/assets/hero-product-redesign.png';

const ProductRedesign = () => (
  <ServicePageTemplate
    heroImage={heroProductRedesign}
    seoTitle="Product Redesign per PMI e Aziende | NEXUS Agency"
    seoDescription="Ridisegniamo il tuo prodotto digitale. UX migliorata, look fresco, funzionalità potenziate. Risultati misurabili."
    seoCanonical="https://nexusagency.it/soluzioni/product-redesign"
    badge="Product Redesign"
    h1="Un look fresco, *UX migliorata*"
    subtitle="Rinnoviamo il tuo prodotto digitale con un design moderno, un'esperienza utente ottimizzata e funzionalità potenziate."
    heroIcon={RefreshCw}
    stats={[
      { value: '+60%', label: 'Engagement medio post-redesign' },
      { value: '-40%', label: 'Bounce rate' },
      { value: '100%', label: 'Soddisfazione clienti' },
    ]}
    heroQuote={{ text: "Il redesign di NEXUS ha dato nuova vita al nostro prodotto. Gli utenti adorano la nuova interfaccia.", name: "Andrea Z.", role: "CEO, ONE UP" }}
    caseStudies={[
      { name: 'ONE UP', category: 'Web App', description: 'Redesign completo del gestionale flotta barche.', metrics: ['+60% engagement', 'UX rinnovata'], slug: 'one-up' },
    ]}
    ctaBannerText="Il tuo prodotto ha bisogno di un refresh?"
    ctaBannerDescription="Analizziamo insieme il tuo prodotto e ti proponiamo un piano di redesign."
    benefits={[
      { icon: Palette, title: 'Design moderno', desc: 'Un\'interfaccia fresca e attuale che rispecchia l\'evoluzione del tuo brand.' },
      { icon: TrendingUp, title: 'UX ottimizzata', desc: 'Flussi utente semplificati per aumentare conversioni e soddisfazione.' },
      { icon: BarChart3, title: 'Performance migliorate', desc: 'Codice ottimizzato per velocità e scalabilità.' },
    ]}
    process={[
      { title: 'Audit & analisi', items: ['UX audit del prodotto attuale', 'Analisi metriche e feedback', 'Benchmark competitivo'] },
      { title: 'Strategia & design', items: ['Nuova architettura UX', 'Design system aggiornato', 'Prototipi interattivi'] },
      { title: 'Sviluppo', items: ['Implementazione graduale', 'Migrazione dati', 'Testing approfondito'] },
      { title: 'Lancio & monitoring', items: ['Rilascio progressivo', 'A/B testing', 'Ottimizzazione continua'] },
    ]}
    outcomes={['Interfaccia moderna e intuitiva', 'Esperienza utente migliorata', 'Performance ottimizzate', 'Engagement e conversioni in crescita', 'Codice pulito e manutenibile', 'Design system coerente']}
    outcomesSubtitle="Trasformiamo prodotti esistenti in esperienze digitali moderne, intuitive e performanti."
    outcomeCards={[
      { title: 'Design & Esperienza', desc: 'Un\'interfaccia completamente rinnovata con flussi utente ottimizzati per massimizzare engagement e conversioni.' },
      { title: 'Tecnologia & Performance', desc: 'Codebase modernizzata, performance migliorate e architettura scalabile per la crescita futura.' },
    ]}
    outcomesCtaText="Rinnova il tuo prodotto"
    capabilities={{
      title: 'Le nostre competenze per il tuo *product redesign*',
      subtitle: 'Dall\'audit alla nuova versione — un approccio completo per rinnovare il tuo prodotto digitale.',
      columns: [
        { heading: 'UX Research', items: ['UX Audit', 'User interviews', 'Heatmap analysis', 'Usability testing', 'Competitor analysis', 'Data-driven insights'] },
        { heading: 'UI Design', items: ['Design system', 'Component library', 'Responsive design', 'Micro-interactions', 'Accessibility', 'Brand alignment'] },
        { heading: 'Development', items: ['Code refactoring', 'Performance optimization', 'Progressive migration', 'API modernization', 'Testing automation', 'CI/CD'] },
      ],
    }}
    techStack={{
      title: 'Le tecnologie per il tuo *product redesign*',
      subtitle: 'Stack tecnologico moderno per un prodotto veloce, scalabile e manutenibile.',
      items: [
        { name: 'ReactJS', image: techReact },
        { name: 'JavaScript', image: techJs },
        { name: 'Node.js', image: techNodejs },
        { name: 'HTML5', image: techHtml },
        { name: 'CSS3', image: techCss },
      ],
    }}
    faqs={[
      { q: 'Quanto costa un product redesign?', a: 'Dipende dalla complessità del prodotto. Un redesign completo parte da €8.000. Contattaci per un preventivo.' },
      { q: 'Quanto tempo richiede?', a: 'Un redesign completo richiede 6-12 settimane, a seconda dell\'ampiezza dell\'intervento.' },
      { q: 'Posso mantenere le funzionalità esistenti?', a: 'Sì, il redesign migliora l\'interfaccia e l\'esperienza mantenendo e potenziando le funzionalità core.' },
      { q: 'Come gestite la migrazione?', a: 'Pianifichiamo una migrazione graduale per minimizzare l\'impatto sugli utenti esistenti.' },
      { q: 'Offrite supporto post-redesign?', a: 'Sì, monitoriamo le metriche e iteriamo per ottimizzare i risultati dopo il lancio.' },
    ]}
    finalCtaH2="Pronto a dare nuova vita al tuo prodotto?"
  />
);

export default ProductRedesign;
