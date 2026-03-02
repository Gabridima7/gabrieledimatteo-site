import { Cpu, Bot, Zap, Workflow } from 'lucide-react';
import ServicePageTemplate from '@/components/ServicePageTemplate';

const AiAutomation = () => (
  <ServicePageTemplate
    seoTitle="AI Automation — NEXUS Agency"
    seoDescription="Automazioni AI, chatbot intelligenti e integrazioni API per PMI italiane."
    badge="AI Automation"
    h1="Automatizza i processi con l'intelligenza artificiale"
    subtitle="Elimina il lavoro manuale e libera tempo per attività strategiche con automazioni AI su misura."
    heroIcon={Cpu}
    stats={[
      { value: '-80%', label: 'Tempo manuale risparmiato' },
      { value: '48h', label: 'Prima automazione attiva' },
      { value: 'ROI', label: 'Misurabile dal giorno 1' },
    ]}
    heroQuote={{ text: "Grazie a NEXUS abbiamo automatizzato il 70% dei processi ripetitivi. Il team ora si concentra su attività ad alto valore.", name: "Andrea Z.", role: "CEO, ONE UP" }}
    caseStudies={[
      { name: 'ONE UP', category: 'AI Automation', description: 'Automazione dei flussi operativi con Make e AI per ridurre i tempi di gestione.', metrics: ['-70% lavoro manuale', 'ROI in 30 giorni'], slug: 'oneup' },
    ]}
    ctaBannerText="Pronto ad automatizzare la tua azienda?"
    benefits={[
      { icon: Zap, title: 'Velocità operativa', desc: 'Processi che richiedevano ore ora completati in secondi.' },
      { icon: Bot, title: 'AI personalizzata', desc: 'Soluzioni AI addestrate sui tuoi dati e processi specifici.' },
      { icon: Workflow, title: 'Integrazioni seamless', desc: 'Collegamento con tutti i tuoi strumenti esistenti.' },
    ]}
    process={[
      { title: 'Audit processi', items: ['Mappatura flussi', 'Identificazione opportunità', 'Analisi ROI potenziale'] },
      { title: 'Progettazione', items: ['Architettura automazioni', 'Scelta strumenti', 'Definizione trigger'] },
      { title: 'Implementazione', items: ['Configurazione AI', 'Test & validazione', 'Integrazione sistemi'] },
      { title: 'Ottimizzazione', items: ['Monitoring KPI', 'Fine-tuning', 'Scaling automazioni'] },
    ]}
    outcomes={['Riduzione drastica del lavoro manuale', 'ROI misurabile dal primo mese', 'Processi scalabili senza assumere', 'Meno errori umani', 'Dati centralizzati e accessibili', 'Tempo liberato per attività strategiche']}
    outcomesCtaText="Automatizza ora"
    faqs={[
      { q: 'Che tipo di processi posso automatizzare?', a: 'Qualsiasi processo ripetitivo: gestione email, data entry, generazione report, follow-up clienti, e molto altro.' },
      { q: 'Serve competenza tecnica per usare le automazioni?', a: 'No. Costruiamo interfacce semplici e intuitive. Il tuo team non ha bisogno di competenze tecniche.' },
      { q: 'Quanto costa un progetto di AI automation?', a: 'I costi variano in base alla complessità. Prenota una call per un preventivo personalizzato.' },
      { q: 'Quali strumenti integrate?', a: 'Make, Zapier, OpenAI, Google Workspace, CRM, ERP e qualsiasi tool con API disponibile.' },
      { q: 'In quanto tempo vedo i risultati?', a: 'Le prime automazioni sono attive in 48h. Il ROI è misurabile entro il primo mese.' },
    ]}
    finalCtaH2="Vuoi automatizzare i processi della tua PMI?"
  />
);

export default AiAutomation;
