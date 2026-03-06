import { Smartphone, Database, Layers, Lock } from 'lucide-react';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import heroWebApp from '@/assets/hero-web-app.png';
import techJs from '@/assets/tech/icon-js.png';
import techReact from '@/assets/tech/icon-react.png';
import techNodejs from '@/assets/tech/icon-nodejs.png';
import techPython from '@/assets/tech/icon-python.png';

const WebAppService = () => (
  <ServicePageTemplate
    seoTitle="Sviluppo Web App su Misura per PMI | NEXUS Agency"
    seoDescription="Applicazioni web personalizzate per PMI italiane. Scalabili, sicure, con UX curata. Da €3.000."
    seoCanonical="https://nexusagency.it/servizi/web-app"
    badge="Web App"
      h1="Sviluppo web app personalizzate"
      subtitle="Applicazioni web progressive su misura, scalabili e sicure che i tuoi utenti ameranno usare ogni giorno."
    heroIcon={Layers}
    heroImage={heroWebApp}
    stats={[
      { value: '99.9%', label: 'Uptime garantito' },
      { value: 'PWA', label: 'Progressive Web App' },
      { value: '<1s', label: 'First paint' },
    ]}
    heroQuote={{ text: "La web app sviluppata da NEXUS ha sostituito 3 tool diversi. Ora abbiamo tutto in un'unica piattaforma.", name: "Mattia T.", role: "Founder, Homeleven" }}
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
    outcomes={['Piattaforma unificata per il tuo team', 'Accessibile ovunque, senza installazione', 'Dati in tempo reale', 'Scalabile con la crescita aziendale', 'Integrazione con sistemi esistenti', 'Sicurezza enterprise']}
    outcomesSubtitle="Sviluppiamo web app progressive e interattive su misura, accessibili da qualsiasi dispositivo e scalabili con la crescita della tua azienda."
    outcomeCards={[
      { title: 'Tecnologia & Performance', desc: 'PWA cross-platform con dati in tempo reale, first paint sotto il secondo e uptime garantito al 99.9%.' },
      { title: 'Sicurezza & Scalabilità', desc: 'Autenticazione enterprise, crittografia end-to-end e architettura pronta a gestire migliaia di utenti.' },
    ]}
    outcomesCtaText="Inizia il tuo progetto"
    capabilities={{
      title: 'Le nostre competenze nello sviluppo di *web app*',
      subtitle: 'Dalla PWA alla piattaforma enterprise — costruiamo web app su misura per ogni esigenza aziendale.',
      columns: [
        { heading: 'Frontend', items: ['React & TypeScript', 'PWA & offline-first', 'Responsive design', 'Real-time updates', 'Animazioni fluide', 'Accessibility'] },
        { heading: 'Backend', items: ['API RESTful', 'Database design', 'Auth & authorization', 'File storage', 'Webhook & events', 'Background jobs'] },
        { heading: 'DevOps', items: ['CI/CD pipeline', 'Cloud hosting', 'Monitoring & alerts', 'Auto-scaling', 'Backup automatici', 'SSL & security'] },
      ],
    }}
    techStack={{
      title: 'Lo stack tecnologico per la tua *web app*',
      subtitle: 'Tecnologie moderne per web app performanti, scalabili e sicure.',
      items: [
        { name: 'ReactJS', image: techReact },
        { name: 'JavaScript', image: techJs },
        { name: 'NodeJS', image: techNodejs },
        { name: 'Python', image: techPython },
      ],
    }}
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
