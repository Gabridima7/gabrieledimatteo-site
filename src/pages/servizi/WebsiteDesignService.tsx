import { Globe, Zap, Eye, BarChart3 } from 'lucide-react';
import ServicePageTemplate from '@/components/ServicePageTemplate';

const WebsiteDesignService = () => (
  <ServicePageTemplate
    seoTitle="Website Design — NEXUS Agency"
    seoDescription="Siti web custom e landing page dal design moderno e professionale."
    badge="Website Design"
    h1="Siti web dal design moderno e professionale"
    subtitle="Siti web custom che comunicano il valore del tuo brand e convertono i visitatori in clienti."
    heroIcon={Globe}
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
    outcomes={['Sito web professionale e moderno', 'Ottimizzazione SEO integrata', 'Velocità di caricamento top', 'Lead generation efficace', 'Compatibilità cross-browser']}
    outcomesCtaText="Rinnova il tuo sito"
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
