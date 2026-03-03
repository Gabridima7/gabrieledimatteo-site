import { Database, BarChart3, Cog, Users } from 'lucide-react';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import techJs from '@/assets/tech/icon-js.png';
import techReact from '@/assets/tech/icon-react.png';
import techNodejs from '@/assets/tech/icon-nodejs.png';
import techPython from '@/assets/tech/icon-python.png';

const SoftwareGestionaleService = () => (
  <ServicePageTemplate
    seoTitle="Software Gestionale — NEXUS Agency"
    seoDescription="Soluzioni gestionali su misura: CRM, ERP e tool interni per ottimizzare i processi aziendali."
    badge="Software Gestionale"
    h1="Software gestionale su misura per la tua azienda"
    subtitle="CRM, ERP e tool interni personalizzati per ottimizzare ogni processo e far crescere la tua PMI."
    heroIcon={Cog}
    stats={[
      { value: '-50%', label: 'Tempo di gestione' },
      { value: '0', label: 'Licenze mensili' },
      { value: '100%', label: 'Personalizzato' },
    ]}
    heroQuote={{ text: "Il gestionale di NEXUS ci ha cambiato la vita operativa. Tutto centralizzato, tutto sotto controllo.", name: "Mattia T.", role: "Founder, Homeleven" }}
    caseStudies={[
      { name: 'Homeleven', category: 'Gestionale', description: 'CRM e gestionale immobiliare con automazioni e reportistica avanzata.', metrics: ['-50% tempo operativo', '100% custom'], slug: 'homeleven' },
    ]}
    ctaBannerText="Pronto a ottimizzare i tuoi processi?"
    benefits={[
      { icon: Database, title: 'Tutto centralizzato', desc: 'Dati, clienti, ordini e processi in un unico posto.' },
      { icon: Users, title: 'Multi-utente', desc: 'Ruoli e permessi personalizzati per ogni membro del team.' },
      { icon: BarChart3, title: 'Report automatici', desc: 'Dashboard e report generati automaticamente in tempo reale.' },
    ]}
    process={[
      { title: 'Analisi processi', items: ['Mappatura flussi', 'Pain points', 'Requisiti funzionali'] },
      { title: 'Progettazione', items: ['Architettura dati', 'User flow', 'Prototipo interattivo'] },
      { title: 'Sviluppo modulare', items: ['Moduli core', 'Dashboard & report', 'Integrazioni'] },
      { title: 'Migrazione & go-live', items: ['Import dati', 'Formazione team', 'Supporto post-lancio'] },
    ]}
    outcomes={['Processi aziendali ottimizzati', 'Zero licenze software mensili', 'Dati centralizzati e accessibili', 'Automazioni sui flussi operativi', 'Report e analytics in tempo reale', 'Proprietà totale del software']}
    outcomesSubtitle="Sviluppiamo software gestionali su misura che centralizzano dati e processi, eliminando licenze mensili e inefficienze operative."
    outcomeCards={[
      { title: 'Centralizzazione & Controllo', desc: 'Dati, clienti, ordini e processi in un unico posto con dashboard in tempo reale e report automatici.' },
      { title: 'Personalizzazione & Proprietà', desc: 'Software 100% personalizzato sulle tue esigenze, di tua proprietà e senza costi ricorrenti di licenza.' },
    ]}
    outcomesCtaText="Digitalizza i tuoi processi"
    capabilities={{
      title: 'Le nostre competenze nei *software gestionali*',
      subtitle: 'Dal CRM all\'ERP — costruiamo strumenti gestionali su misura per digitalizzare ogni processo aziendale.',
      columns: [
        { heading: 'CRM & Vendite', items: ['Gestione clienti', 'Pipeline vendite', 'Lead tracking', 'Email automation', 'Preventivi & fatture', 'Customer portal'] },
        { heading: 'ERP & Operazioni', items: ['Gestione ordini', 'Magazzino & inventario', 'Contabilità', 'Risorse umane', 'Pianificazione risorse', 'Workflow automation'] },
        { heading: 'Analytics & Report', items: ['Dashboard real-time', 'Report automatici', 'KPI tracking', 'Data export', 'Business intelligence', 'Forecasting'] },
      ],
    }}
    techStack={{
      title: 'Le tecnologie per il tuo *software gestionale*',
      subtitle: 'Stack moderno per gestionali performanti, sicuri e scalabili con la crescita della tua azienda.',
      items: [
        { name: 'ReactJS', image: techReact },
        { name: 'JavaScript', image: techJs },
        { name: 'NodeJS', image: techNodejs },
        { name: 'Python', image: techPython },
      ],
    }}
    faqs={[
      { q: 'Quanto costa un software gestionale su misura?', a: 'Dipende dalla complessità. Prenota una call per un preventivo personalizzato basato sulle tue esigenze.' },
      { q: 'Posso migrare i dati dal mio gestionale attuale?', a: 'Sì, ci occupiamo della migrazione completa dei dati dal tuo sistema esistente.' },
      { q: 'Devo pagare licenze mensili?', a: 'No. Il software è di tua proprietà, senza costi ricorrenti per licenze.' },
      { q: 'Quanto tempo serve per lo sviluppo?', a: 'Un gestionale medio-complesso richiede 8-16 settimane.' },
      { q: 'Include formazione per il mio team?', a: 'Sì, forniamo formazione completa e documentazione per il tuo team.' },
    ]}
    finalCtaH2="Vuoi un gestionale su misura per la tua PMI?"
  />
);

export default SoftwareGestionaleService;
