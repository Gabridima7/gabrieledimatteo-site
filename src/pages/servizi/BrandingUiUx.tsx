import { Palette, Layout, RefreshCw, Eye } from 'lucide-react';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import iconFigma from '@/assets/icons/icon-figma.png';

const BrandingUiUx = () => (
  <ServicePageTemplate
    seoTitle="Branding & UI/UX Design — NEXUS Agency"
    seoDescription="UI/UX design, branding, mobile app design e website redesign per PMI italiane."
    badge="Branding & UI/UX"
    h1="Design che comunica e converte"
    subtitle="Creiamo identità visive coerenti e interfacce che trasformano visitatori in clienti."
    heroIcon={Palette}
    stats={[
      { value: '+120%', label: 'Conversioni medie' },
      { value: '5.0', label: 'Rating clienti' },
      { value: '30+', label: 'Brand progettati' },
    ]}
    heroQuote={{ text: "Il redesign del nostro brand ha completamente trasformato la percezione del mercato nei nostri confronti.", name: "Gianni B.", role: "Titolare, Biglia Serramenti" }}
    caseStudies={[
      { name: 'Biglia Serramenti', category: 'Branding & Web', description: 'Rebranding completo con nuovo sito web e identità visiva coordinata.', metrics: ['+85% richieste', 'Brand coerente'], slug: 'biglia' },
      { name: 'Homeleven', category: 'UI/UX Design', description: 'Design dell\'interfaccia utente per piattaforma gestionale immobiliare.', metrics: ['UX intuitiva', '+50% retention'], slug: 'homeleven' },
    ]}
    ctaBannerText="Pronto a rinnovare il tuo brand?"
    benefits={[
      { icon: Eye, title: 'Design memorabile', desc: 'Identità visiva che ti distingue dalla concorrenza.' },
      { icon: Layout, title: 'UX che converte', desc: 'Interfacce progettate per guidare l\'utente verso l\'azione.' },
      { icon: RefreshCw, title: 'Coerenza totale', desc: 'Brand guideline per mantenere coerenza su ogni touchpoint.' },
    ]}
    process={[
      { title: 'Brand Research', items: ['Analisi brand attuale', 'Competitors & mercato', 'Target audience'] },
      { title: 'Concept & Moodboard', items: ['Moodboard visivo', 'Proposte creative', 'Direzione stilistica'] },
      { title: 'Design System', items: ['Logo & varianti', 'Palette & tipografia', 'UI components', 'Brand guideline'] },
      { title: 'Delivery', items: ['Asset finali', 'Documentazione', 'Template social'] },
    ]}
    outcomes={['Identità visiva professionale', 'Aumento della brand awareness', 'Design coerente su ogni canale', 'Maggiore fiducia dei clienti', 'Interfacce ad alta conversione', 'Comunicazione visiva memorabile']}
    outcomesSubtitle="Creiamo identità visive distintive e interfacce intuitive che comunicano il valore del tuo brand e convertono visitatori in clienti."
    outcomeCards={[
      { title: 'Brand Identity', desc: 'Un\'identità visiva coerente e memorabile che distingue il tuo brand dalla concorrenza su ogni touchpoint.' },
      { title: 'Design & Conversione', desc: 'Interfacce progettate con UX research-driven per massimizzare engagement, retention e conversioni.' },
    ]}
    outcomesCtaText="Rinnova il tuo brand"
    capabilities={{
      title: 'Le nostre competenze in *branding e design*',
      subtitle: 'Dalla brand identity al design di interfacce — creiamo esperienze visive coerenti e memorabili.',
      columns: [
        { heading: 'Brand Identity', items: ['Logo design', 'Palette colori', 'Tipografia', 'Brand guideline', 'Tone of voice', 'Visual language'] },
        { heading: 'UI/UX Design', items: ['Wireframing', 'Prototipi interattivi', 'Design system', 'Micro-interazioni', 'Responsive design', 'Accessibility'] },
        { heading: 'Applicazioni', items: ['Web design', 'Mobile app design', 'Social media kit', 'Presentazioni', 'Packaging digitale', 'Template email'] },
      ],
    }}
    techStack={{
      title: 'Gli strumenti che utilizziamo per il tuo *branding e design*',
      subtitle: 'Tool professionali per creare identità visive e interfacce di alto livello.',
      items: [
        { name: 'Figma', image: iconFigma },
      ],
    }}
    faqs={[
      { q: 'Cosa include un progetto di branding?', a: 'Logo, palette colori, tipografia, brand guideline, template social e tutti gli asset necessari.' },
      { q: 'Quanto dura un progetto di branding?', a: 'Un branding completo richiede 3-5 settimane, dal concept alla consegna finale.' },
      { q: 'Posso richiedere solo il logo?', a: 'Sì, ma consigliamo sempre un branding completo per massimizzare l\'impatto.' },
      { q: 'Fate anche il design di app mobile?', a: 'Sì, progettiamo UI/UX per web e mobile app con focus su usabilità e conversioni.' },
      { q: 'Come funziona il processo di revisione?', a: 'Includiamo 2-3 round di revisioni per ogni fase del progetto.' },
    ]}
    finalCtaH2="Vuoi un brand che lascia il segno?"
  />
);

export default BrandingUiUx;
