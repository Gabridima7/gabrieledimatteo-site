import { Globe, Zap, Eye, BarChart3 } from 'lucide-react';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import techHtml from '@/assets/tech/icon-html.png';
import techCss from '@/assets/tech/icon-css.png';
import techJs from '@/assets/tech/icon-js.png';
import techReact from '@/assets/tech/icon-react.png';
import techShopify from '@/assets/tech/icon-shopify.png';
import iconFigma from '@/assets/icons/icon-figma.png';
import heroWebsiteDesign from '@/assets/hero-website-design.png';

const WebsiteDesignService = () => (
  <ServicePageTemplate
    seoTitle="Website Design — Siti Custom e Landing Page | NEXUS Agency"
    seoDescription="Siti web dal design moderno e professionale. Mobile-first, ottimizzati SEO, Lighthouse >90. Per PMI italiane."
    seoCanonical="https://nexusagency.it/servizi/website-design"
    badge="Website Design"
    h1="Siti web dal design moderno e professionale"
    subtitle="Siti web custom che comunicano il valore del tuo brand e convertono i visitatori in clienti."
    heroIcon={Globe}
    heroImage={heroWebsiteDesign}
    stats={[
      { value: '98+', label: 'PageSpeed medio' },
      { value: '+65%', label: 'Lead generati' },
      { value: '100%', label: 'Responsive' },
    ]}
    heroQuote={{ text: "Il sito rifatto da NEXUS ha portato un aumento immediato delle richieste di preventivo.", name: "Gianni B.", role: "Titolare, Biglia Serramenti" }}
    caseStudies={[
      { name: 'Biglia Serramenti', category: 'Website Design', description: 'Sito web istituzionale con design premium e ottimizzazione SEO.', metrics: ['+65% lead', 'PageSpeed 98'], slug: 'biglia' },
      { name: 'ONE UP', category: 'Sito Web', description: 'Sito corporate con animazioni e storytelling del brand.', metrics: ['+80% traffico', 'Bounce -35%'], slug: 'oneup' },
    ]}
    ctaBannerText="Pronto a rinnovare il tuo sito web?"
    benefits={[
      { icon: Eye, title: 'Design premium', desc: 'Estetica moderna che riflette la qualità del tuo brand.' },
      { icon: Zap, title: 'Performance', desc: 'Siti veloci, ottimizzati per SEO e Core Web Vitals.' },
      { icon: BarChart3, title: 'Conversione', desc: 'Layout e copy progettati per generare contatti e vendite.' },
    ]}
    process={[
      { title: 'Analisi & briefing', items: ['Studio brand', 'Analisi competitors', 'Definizione obiettivi'] },
      { title: 'Design', items: ['Moodboard', 'Mockup pagine', 'Prototipi interattivi'] },
      { title: 'Sviluppo', items: ['Codifica responsive', 'Ottimizzazione SEO', 'Performance tuning'] },
      { title: 'Lancio', items: ['Go-live', 'Monitoraggio', 'Ottimizzazione continua'] },
    ]}
    outcomes={['Sito web professionale e moderno', 'Ottimizzazione SEO integrata', 'Velocità di caricamento top', 'Lead generation efficace', 'Compatibilità cross-browser', 'Design responsive su ogni device']}
    outcomesSubtitle="Creiamo siti web custom che comunicano il valore del tuo brand con design moderno, performance elevate e ottimizzazione SEO integrata."
    outcomeCards={[
      { title: 'Design & Performance', desc: 'Estetica moderna con velocità di caricamento ottimale e punteggi PageSpeed ai massimi livelli.' },
      { title: 'SEO & Conversione', desc: 'Struttura ottimizzata per i motori di ricerca con layout e copy progettati per generare contatti e vendite.' },
    ]}
    outcomesCtaText="Rinnova il tuo sito"
    capabilities={{
      title: 'Le nostre competenze nel *website design*',
      subtitle: 'Dal design visivo all\'ottimizzazione tecnica — creiamo siti web che combinano estetica e performance.',
      columns: [
        { heading: 'Design', items: ['Layout responsive', 'Visual design', 'Animazioni & interazioni', 'Tipografia custom', 'Palette cromatica', 'Design system'] },
        { heading: 'Sviluppo', items: ['HTML semantico', 'CSS moderno', 'JavaScript performante', 'CMS integration', 'Cross-browser', 'Mobile-first'] },
        { heading: 'Ottimizzazione', items: ['SEO on-page', 'Core Web Vitals', 'PageSpeed optimization', 'Image optimization', 'Schema markup', 'Analytics setup'] },
      ],
    }}
    techStack={{
      title: 'Le tecnologie per il tuo *sito web professionale*',
      subtitle: 'Stack moderno per siti veloci, accessibili e ottimizzati per i motori di ricerca.',
      items: [
        { name: 'HTML', image: techHtml },
        { name: 'CSS3', image: techCss },
        { name: 'JavaScript', image: techJs },
        { name: 'ReactJS', image: techReact },
        { name: 'Shopify', image: techShopify },
        { name: 'Figma', image: iconFigma },
      ],
    }}
    faqs={[
      { q: 'Quanto costa un sito web?', a: 'Un sito vetrina parte da €2.000, un sito più complesso con funzionalità custom da €4.000.' },
      { q: 'In quanto tempo è pronto?', a: 'Un sito vetrina richiede 3-4 settimane, progetti più complessi 6-8 settimane.' },
      { q: 'Il sito sarà ottimizzato per Google?', a: 'Sì, tutti i nostri siti sono ottimizzati per SEO: meta tag, velocità, struttura e contenuti.' },
      { q: 'Posso aggiornare i contenuti in autonomia?', a: 'Sì, implementiamo un CMS semplice da usare per aggiornare testi e immagini.' },
      { q: 'Include anche hosting e dominio?', a: 'Possiamo gestire hosting e dominio oppure configurarli sul tuo provider preferito.' },
    ]}
    finalCtaH2="Vuoi un sito web che genera clienti?"
  />
);

export default WebsiteDesignService;
