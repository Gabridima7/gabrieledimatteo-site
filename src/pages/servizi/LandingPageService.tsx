import { Zap, BarChart3, Target, MousePointerClick } from 'lucide-react';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import heroLandingPage from '@/assets/hero-landing-page.png';
import techHtml from '@/assets/tech/icon-html.png';
import techCss from '@/assets/tech/icon-css.png';
import techJs from '@/assets/tech/icon-js.png';
import techReact from '@/assets/tech/icon-react.png';
import techShopify from '@/assets/tech/icon-shopify.png';

const LandingPageService = () => (
  <ServicePageTemplate
    seoTitle="Landing Page — NEXUS Agency"
    seoDescription="Creiamo landing page ad alta conversione per campagne marketing e lancio prodotti."
    badge="Landing Page"
    h1="Landing page ad alta conversione"
    subtitle="Pagine di atterraggio progettate per convertire visitatori in lead e clienti, ottimizzate per ogni campagna."
    heroIcon={MousePointerClick}
    heroImage={heroLandingPage}
    stats={[
      { value: '+180%', label: 'Tasso conversione medio' },
      { value: '< 2s', label: 'Tempo di caricamento' },
      { value: '100', label: 'PageSpeed Score' },
    ]}
    heroQuote={{ text: "La landing page di NEXUS ha triplicato le conversioni della nostra campagna Google Ads.", name: "Gianni B.", role: "Titolare, Biglia Serramenti" }}
    caseStudies={[
      { name: 'Biglia Serramenti', category: 'Landing Page', description: 'Landing page per campagna lead generation con form ottimizzato.', metrics: ['+180% conversioni', 'CPA -40%'], slug: 'biglia' },
    ]}
    ctaBannerText="Pronto a lanciare una landing page che converte?"
    benefits={[
      { icon: Target, title: 'Focalizzata sulla conversione', desc: 'Ogni elemento è progettato per guidare l\'utente verso l\'azione.' },
      { icon: Zap, title: 'Ultra veloce', desc: 'Caricamento sotto i 2 secondi per non perdere nessun visitatore.' },
      { icon: BarChart3, title: 'A/B testing ready', desc: 'Struttura pronta per test e ottimizzazioni continue.' },
    ]}
    process={[
      { title: 'Briefing & strategia', items: ['Obiettivi campagna', 'Target audience', 'Messaging & USP'] },
      { title: 'Design & copy', items: ['Layout wireframe', 'Copywriting persuasivo', 'Visual design'] },
      { title: 'Sviluppo', items: ['Codifica responsive', 'Ottimizzazione velocità', 'Tracking & pixel'] },
      { title: 'Lancio & test', items: ['Go-live', 'A/B testing', 'Monitoring conversioni'] },
    ]}
    outcomes={['Tasso di conversione elevato', 'Costo per acquisizione ridotto', 'Pagina veloce e SEO-friendly', 'Design professionale e persuasivo', 'Tracking e analytics integrati', 'Ottimizzazione continua']}
    outcomesSubtitle="Progettiamo landing page ad alta conversione con design persuasivo, copy efficace e performance ottimizzate per ogni campagna."
    outcomeCards={[
      { title: 'Conversione & Performance', desc: 'Ogni elemento è progettato per massimizzare il tasso di conversione con velocità di caricamento sotto i 2 secondi.' },
      { title: 'Testing & Ottimizzazione', desc: 'Struttura pronta per A/B test con tracking avanzato e analytics per migliorare continuamente i risultati.' },
    ]}
    outcomesCtaText="Crea la tua landing page"
    capabilities={{
      title: 'Le nostre competenze per le tue *landing page*',
      subtitle: 'Dalla strategia di conversione all\'implementazione tecnica — creiamo pagine che trasformano il traffico in clienti.',
      columns: [
        { heading: 'Conversione', items: ['Copy persuasivo', 'Call-to-action efficaci', 'Form optimization', 'Social proof', 'A/B testing', 'Heatmap analysis'] },
        { heading: 'Design', items: ['Layout responsivo', 'Visual storytelling', 'Hero section', 'Above the fold', 'Micro-animazioni', 'Mobile-first'] },
        { heading: 'Performance', items: ['PageSpeed 100', 'Core Web Vitals', 'SEO on-page', 'Pixel & tracking', 'Google Ads ready', 'Meta Ads ready'] },
      ],
    }}
    techStack={{
      title: 'Le tecnologie per le tue *landing page ad alta conversione*',
      subtitle: 'Stack tecnologico ottimizzato per velocità, SEO e integrazioni con le principali piattaforme advertising.',
      items: [
        { name: 'HTML', image: techHtml },
        { name: 'CSS3', image: techCss },
        { name: 'JavaScript', image: techJs },
        { name: 'ReactJS', image: techReact },
        { name: 'Shopify', image: techShopify },
      ],
    }}
    faqs={[
      { q: 'Quanto costa una landing page?', a: 'Il costo varia in base alla complessità. Una landing page standard parte da €1.500.' },
      { q: 'In quanto tempo è pronta?', a: 'Una landing page viene consegnata in 1-2 settimane dal briefing iniziale.' },
      { q: 'Include anche il copywriting?', a: 'Sì, ci occupiamo di design, copy e sviluppo. Servizio completo.' },
      { q: 'Posso collegare Google Ads o Meta Ads?', a: 'Certamente. Configuriamo pixel, tracking e conversion API.' },
      { q: 'Fate anche A/B test?', a: 'Sì, possiamo implementare varianti per testare e ottimizzare le performance.' },
    ]}
    finalCtaH2="Vuoi una landing page che converte davvero?"
  />
);

export default LandingPageService;
