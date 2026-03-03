import { RefreshCw, TrendingUp, Zap, Eye } from 'lucide-react';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import techHtml from '@/assets/tech/icon-html.png';
import techCss from '@/assets/tech/icon-css.png';
import techJs from '@/assets/tech/icon-js.png';
import techReact from '@/assets/tech/icon-react.png';
import iconFigma from '@/assets/icons/icon-figma.png';

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
      { title: 'Audit sito attuale', items: ['Analisi performance', 'Audit UX/UI', 'SEO check', 'Analytics review'] },
      { title: 'Redesign', items: ['Nuovo design', 'Nuova UX', 'Prototipi'] },
      { title: 'Sviluppo', items: ['Codifica nuovo sito', 'Migrazione contenuti', 'Redirect 301'] },
      { title: 'Go-live', items: ['Zero downtime switch', 'Monitoring', 'Ottimizzazione'] },
    ]}
    outcomes={['Sito moderno e professionale', 'Velocità di caricamento migliorata', 'SEO preservato e migliorato', 'Più lead e conversioni', 'Design responsive aggiornato', 'Migrazione senza downtime']}
    outcomesSubtitle="Trasformiamo il tuo sito esistente in un asset digitale moderno e performante, preservando il posizionamento SEO e massimizzando le conversioni."
    outcomeCards={[
      { title: 'Modernizzazione & Performance', desc: 'Design contemporaneo con velocità ottimizzata, Core Web Vitals al top e user experience rinnovata.' },
      { title: 'SEO & Continuità', desc: 'Migrazione gestita con redirect 301, zero downtime e posizionamento SEO preservato e migliorato.' },
    ]}
    outcomesCtaText="Rinnova il tuo sito"
    capabilities={{
      title: 'Le nostre competenze nel *website redesign*',
      subtitle: 'Dall\'audit del sito attuale alla migrazione — rinnoviamo il tuo sito senza perdere posizionamento.',
      columns: [
        { heading: 'Audit & Analisi', items: ['Performance audit', 'UX/UI review', 'SEO analysis', 'Content audit', 'Analytics review', 'Competitor benchmark'] },
        { heading: 'Redesign', items: ['Nuovo visual design', 'UX migliorata', 'Responsive update', 'Animazioni moderne', 'Design system', 'Accessibility'] },
        { heading: 'Migrazione', items: ['Redirect 301', 'Content migration', 'Zero downtime', 'SEO preservation', 'URL structure', 'Post-launch monitoring'] },
      ],
    }}
    techStack={{
      title: 'Le tecnologie per il *redesign del tuo sito*',
      subtitle: 'Stack moderno per rinnovare il tuo sito con velocità, accessibilità e SEO ottimizzati.',
      items: [
        { name: 'HTML', image: techHtml },
        { name: 'CSS3', image: techCss },
        { name: 'JavaScript', image: techJs },
        { name: 'ReactJS', image: techReact },
        { name: 'Figma', image: iconFigma },
      ],
    }}
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
