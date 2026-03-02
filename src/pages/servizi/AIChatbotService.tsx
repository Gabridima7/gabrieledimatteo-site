import { Bot, Brain, Zap, Clock } from 'lucide-react';
import ServicePageTemplate from '@/components/ServicePageTemplate';

const AIChatbotService = () => (
  <ServicePageTemplate
    seoTitle="AI Chatbot — NEXUS Agency"
    seoDescription="Assistenti virtuali intelligenti per automatizzare il supporto clienti e le vendite."
    badge="AI Chatbot"
    h1="Chatbot AI per supporto clienti e vendite"
    subtitle="Assistenti virtuali intelligenti addestrati sui tuoi dati per rispondere 24/7 e generare lead qualificati."
    heroIcon={Bot}
    stats={[
      { value: '24/7', label: 'Disponibilità' },
      { value: '-70%', label: 'Ticket di supporto' },
      { value: '<3s', label: 'Tempo di risposta' },
    ]}
    heroQuote={{ text: "Il chatbot AI di NEXUS risponde all'80% delle domande dei clienti senza intervento umano. Un game changer.", name: "Marco R.", role: "Founder, Homeleven" }}
    caseStudies={[
      { name: 'Homeleven', category: 'AI Chatbot', description: 'Chatbot per assistenza clienti integrato con il CRM aziendale.', metrics: ['-70% ticket', '+30% lead'], slug: 'homeleven' },
    ]}
    ctaBannerText="Pronto a mettere l'AI al servizio dei tuoi clienti?"
    benefits={[
      { icon: Clock, title: 'Sempre attivo', desc: 'Risponde ai tuoi clienti 24 ore su 24, 7 giorni su 7.' },
      { icon: Brain, title: 'Addestrato sui tuoi dati', desc: 'Conosce il tuo business, prodotti e procedure alla perfezione.' },
      { icon: Zap, title: 'Lead generation', desc: 'Qualifica i lead automaticamente e li passa al team vendite.' },
    ]}
    process={[
      { title: 'Knowledge base', items: ['Raccolta FAQ', 'Organizzazione dati', 'Definizione tono'] },
      { title: 'Training AI', items: ['Addestramento modello', 'Personalizzazione risposte', 'Test conversazioni'] },
      { title: 'Integrazione', items: ['Embed nel sito', 'Connessione CRM', 'Multi-canale'] },
      { title: 'Ottimizzazione', items: ['Monitoring risposte', 'Fine-tuning', 'Report performance'] },
    ]}
    outcomes={['Supporto clienti automatizzato', 'Riduzione drastica dei ticket', 'Lead qualificati 24/7', 'Risposte immediate e accurate', 'Integrazione con CRM e tool']}
    outcomesCtaText="Attiva il tuo chatbot AI"
    faqs={[
      { q: 'Su quali canali funziona il chatbot?', a: 'Sito web, WhatsApp, Telegram e qualsiasi piattaforma con API. Lo integriamo dove ti serve.' },
      { q: 'Come lo addestrate sui miei dati?', a: 'Carichiamo la tua knowledge base (FAQ, documenti, procedure) e addestriamo il modello AI.' },
      { q: 'Può trasferire la chat a un operatore umano?', a: 'Sì. Se il chatbot non riesce a risolvere, passa la conversazione al tuo team con tutto il contesto.' },
      { q: 'Quanto costa un chatbot AI?', a: 'Il costo dipende dalla complessità. Prenota una call per un preventivo su misura.' },
      { q: 'Quante lingue supporta?', a: 'Il chatbot può comunicare in italiano, inglese e nelle principali lingue europee.' },
    ]}
    finalCtaH2="Vuoi un assistente AI per la tua PMI?"
  />
);

export default AIChatbotService;
