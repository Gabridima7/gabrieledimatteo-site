import { Smartphone, Database, Layers, Lock } from 'lucide-react';
import ServicePageTemplate from '@/components/ServicePageTemplate';

const WebAppService = () => (
  <ServicePageTemplate
    seoTitle="Web App — NEXUS Agency"
    seoDescription="Applicazioni web progressive e interattive su misura per la tua azienda."
    badge="Web App"
    h1="Web app interattive e scalabili"
    subtitle="Applicazioni web progressive su misura che i tuoi utenti ameranno usare ogni giorno."
    heroIcon={Layers}
    stats={[
      { value: '99.9%', label: 'Uptime garantito' },
      { value: 'PWA', label: 'Progressive Web App' },
      { value: '<1s', label: 'First paint' },
    ]}
    heroQuote={{ text: "La web app sviluppata da NEXUS ha sostituito 3 tool diversi. Ora abbiamo tutto in un'unica piattaforma.", name: "Marco R.", role: "Founder, Homeleven" }}
    caseStudies={[
      { name: 'Homeleven', category: 'Web App', description: 'Piattaforma gestionale con dashboard in tempo reale e notifiche push.', metrics: ['-60% tempo gestione', '99.9% uptime'], slug: 'homeleven' },
    ]}
    ctaBannerText="Pronto a creare la tua web app?"
    benefits={[
      { icon: Smartphone, title: 'Cross-platform', desc: 'Funziona su desktop, tablet e mobile senza installazione.' },
      { icon: Database, title: 'Real-time data', desc: 'Dati aggiornati in tempo reale con sincronizzazione cloud.' },
      { icon: Lock, title: 'Sicurezza enterprise', desc: 'Autenticazione, autorizzazioni e crittografia end-to-end.' },
    ]}
    process={[
      { title: 'Discovery & requisiti', items: ['Raccolta requisiti', 'User flow mapping', 'Definizione MVP'] },
      { title: 'Prototipo & design', items: ['Wireframe interattivi', 'Validazione utenti', 'UI design'] },
      { title: 'Sviluppo agile', items: ['Sprint bisettimanali', 'Demo & feedback', 'Testing continuo'] },
      { title: 'Deploy & scaling', items: ['Go-live', 'Monitoring', 'Iterazioni continue'] },
    ]}
    outcomes={['Piattaforma unificata per il tuo team', 'Accessibile ovunque, senza installazione', 'Dati in tempo reale', 'Scalabile con la crescita aziendale', 'Integrazione con sistemi esistenti']}
    outcomesCtaText="Inizia il tuo progetto"
    faqs={[
      { q: 'Che differenza c\'è tra sito web e web app?', a: 'Un sito web è informativo, una web app è interattiva: permette agli utenti di compiere azioni, gestire dati e automatizzare processi.' },
      { q: 'Posso usarla anche da smartphone?', a: 'Sì, le nostre web app sono PWA: funzionano su qualsiasi dispositivo con un browser.' },
      { q: 'Come gestite i dati sensibili?', a: 'Utilizziamo crittografia, autenticazione sicura e hosting conforme GDPR.' },
      { q: 'Quanto tempo richiede lo sviluppo?', a: 'Una web app medio-complessa richiede 6-12 settimane con approccio agile.' },
      { q: 'Posso integrare API di terze parti?', a: 'Assolutamente. Integriamo qualsiasi servizio con API disponibile.' },
    ]}
    finalCtaH2="Vuoi una web app su misura per la tua PMI?"
  />
);

export default WebAppService;
