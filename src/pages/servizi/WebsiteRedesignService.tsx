import { RefreshCw, TrendingUp, Zap, Search, PenTool, Code, Rocket, Eye } from 'lucide-react';
import ServicePageTemplate from '@/components/ServicePageTemplate';

const WebsiteRedesignService = () => (
  <ServicePageTemplate
    seoTitle="Website Redesign — NEXUS Agency"
    seoDescription="Rinnoviamo il tuo sito web con un design moderno, performante e ottimizzato per le conversioni."
    badge="Website Redesign"
    h1="Rinnova il tuo sito web"
    subtitle="Trasformiamo il tuo sito esistente in un asset digitale moderno, veloce e orientato alle conversioni."
    heroIcon={RefreshCw}
    stats={[
      { value: '+150%', label: 'Performance media' },
      { value: '+80%', label: 'Lead generation' },
      { value: '0', label: 'Downtime migrazione' },
    ]}
    heroQuote={{ text: "Il redesign del sito ha cambiato completamente la percezione del nostro brand online.", name: "Gianni B.", role: "Titolare, Biglia Serramenti" }}
    caseStudies={[
      { name: 'Biglia Serramenti', category: 'Redesign', description: 'Redesign completo del sito aziendale con nuova brand identity e SEO.', metrics: ['+80% lead', 'PageSpeed 98'], slug: 'biglia' },
    ]}
    ctaBannerText="Pronto a dare nuova vita al tuo sito?"
    benefits={[
      { icon: Eye, title: 'Design contemporaneo', desc: 'Estetica aggiornata che comunica affidabilità e professionalità.' },
      { icon: Zap, title: 'Performance boost', desc: 'Velocità, SEO e Core Web Vitals ottimizzati.' },
      { icon: TrendingUp, title: 'Più conversioni', desc: 'Layout e UX progettati per trasformare visitatori in clienti.' },
    ]}
    process={[
      { icon: Search, title: 'Audit', desc: 'Analizziamo il sito attuale e identifichiamo le criticità.' },
      { icon: PenTool, title: 'Redesign', desc: 'Progettiamo il nuovo design e la nuova UX.' },
      { icon: Code, title: 'Sviluppo', desc: 'Codifichiamo il nuovo sito con zero downtime.' },
      { icon: Rocket, title: 'Migrazione', desc: 'Migriamo contenuti e redirect SEO.' },
    ]}
    outcomes={['Sito moderno e professionale', 'Velocità di caricamento migliorata', 'SEO preservato e migliorato', 'Più lead e conversioni', 'Design responsive aggiornato']}
    outcomesCtaText="Rinnova il tuo sito"
    faqs={[
      { q: 'Perdo il posizionamento SEO con il redesign?', a: 'No. Gestiamo redirect 301, conserviamo le URL strategiche e ottimizziamo ulteriormente il SEO.' },
      { q: 'Quanto dura un progetto di redesign?', a: '4-8 settimane a seconda della dimensione del sito e delle funzionalità.' },
      { q: 'Posso mantenere i contenuti esistenti?', a: 'Sì, migriamo tutti i contenuti esistenti nel nuovo design.' },
      { q: 'Il sito resterà offline durante il redesign?', a: 'No, lavoriamo in staging e facciamo il go-live con zero downtime.' },
      { q: 'Include anche l\'ottimizzazione mobile?', a: 'Assolutamente. Il nuovo sito sarà responsive e ottimizzato per ogni dispositivo.' },
    ]}
    finalCtaH2="Vuoi un sito web rinnovato che converte?"
  />
);

export default WebsiteRedesignService;
