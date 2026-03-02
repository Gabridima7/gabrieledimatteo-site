import { Plug, Link2, Database, RefreshCw } from 'lucide-react';
import ServicePageTemplate from '@/components/ServicePageTemplate';

const IntegrazioniAPIService = () => (
  <ServicePageTemplate
    seoTitle="Integrazioni API — NEXUS Agency"
    seoDescription="Connetti i tuoi sistemi aziendali con integrazioni API personalizzate."
    badge="Integrazioni API"
    h1="Connetti tutti i tuoi sistemi aziendali"
    subtitle="Integrazioni API personalizzate per far comunicare i tuoi software e automatizzare i flussi di dati."
    heroIcon={Plug}
    stats={[
      { value: '50+', label: 'API integrate' },
      { value: '0', label: 'Data silos' },
      { value: 'Real-time', label: 'Sincronizzazione' },
    ]}
    heroQuote={{ text: "NEXUS ha collegato tutti i nostri strumenti in un ecosistema unico. Ora i dati fluiscono automaticamente.", name: "Andrea Z.", role: "CEO, ONE UP" }}
    caseStudies={[
      { name: 'ONE UP', category: 'Integrazione API', description: 'Integrazione tra CRM, gestionale e piattaforma e-commerce con sync real-time.', metrics: ['5 sistemi connessi', '-90% data entry'], slug: 'oneup' },
    ]}
    ctaBannerText="Pronto a connettere i tuoi sistemi?"
    benefits={[
      { icon: Link2, title: 'Ecosistema unificato', desc: 'Tutti i tuoi software comunicano tra loro in tempo reale.' },
      { icon: RefreshCw, title: 'Sync automatica', desc: 'I dati si aggiornano automaticamente senza intervento manuale.' },
      { icon: Database, title: 'Single source of truth', desc: 'Un unico punto di verità per tutti i tuoi dati aziendali.' },
    ]}
    process={[
      { title: 'Mappatura sistemi', items: ['Audit tool esistenti', 'Flussi dati attuali', 'Requisiti integrazione'] },
      { title: 'Architettura', items: ['Design API', 'Definizione endpoint', 'Schema dati'] },
      { title: 'Sviluppo & test', items: ['Implementazione API', 'Webhook & sync', 'Testing end-to-end'] },
      { title: 'Go-live & monitoring', items: ['Attivazione', 'Alert & logging', 'Manutenzione'] },
    ]}
    outcomes={['Eliminazione del data entry manuale', 'Dati sincronizzati in tempo reale', 'Zero errori di trascrizione', 'Visione unificata del business', 'Processi automatizzati end-to-end']}
    outcomesCtaText="Collega i tuoi sistemi"
    faqs={[
      { q: 'Quali software potete integrare?', a: 'Qualsiasi software con API disponibile: CRM, ERP, e-commerce, email marketing, payment gateway e altri.' },
      { q: 'Usate Make o Zapier?', a: 'Sì, per integrazioni no-code. Per scenari complessi sviluppiamo integrazioni custom.' },
      { q: 'Quanto tempo serve per un\'integrazione?', a: 'Un\'integrazione standard richiede 1-2 settimane. Progetti complessi 4-8 settimane.' },
      { q: 'Come gestite gli errori?', a: 'Implementiamo retry automatici, logging e alerting per garantire affidabilità.' },
      { q: 'Le integrazioni sono sicure?', a: 'Sì. Utilizziamo OAuth, API key encryption e protocolli sicuri per ogni connessione.' },
    ]}
    finalCtaH2="Vuoi un ecosistema digitale connesso per la tua PMI?"
  />
);

export default IntegrazioniAPIService;
