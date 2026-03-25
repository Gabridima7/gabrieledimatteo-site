import gallery500voltemeglio from '@/assets/gallery-500voltemeglio-hero.png';
import gallery500voltemeglio2 from '@/assets/gallery-500voltemeglio-2.png';
import gallery500voltemeglio3 from '@/assets/gallery-500voltemeglio-3.png';
import galleryHomelevenHero from '@/assets/gallery-homeleven-hero.png';
import galleryHomelevenServizi from '@/assets/gallery-homeleven-servizi.png';
import galleryHomelevenProperty from '@/assets/gallery-homeleven-property.png';
import galleryHomelevenMaison from '@/assets/gallery-homeleven-maison.png';

export interface ProjectImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface ProjectResult {
  metric: string;
  label: string;
  description: string;
}

export interface ProjectPhase {
  number: string;
  title: string;
  items: string[];
}

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  heroImage: string;
  coverImage: string;
  client: string;
  industry: string;
  services: string[];
  country: string;
  year: string;
  about: string;
  challenge: string;
  solution: string;
  phases: ProjectPhase[];
  galleryImages: ProjectImage[];
  results: ProjectResult[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

export const projectsData: Project[] = [
  {
    slug: "homeleven",
    name: "Homeleven",
    tagline: "Software Gestionale *Custom* per il Mercato *Immobiliare*",
    heroImage: galleryHomelevenHero,
    coverImage: galleryHomelevenHero,
    client: "Cliente Privato",
    industry: "Gestione Immobiliare",
    services: ["Sviluppo Web App", "UI/UX Design", "Automazione"],
    country: "🇮🇹 Italia",
    year: "2024",
    about: "*Homeleven* è una piattaforma web custom sviluppata per un operatore del mercato degli affitti brevi. Il cliente gestiva manualmente prenotazioni, manutenzioni e pagamenti su decine di proprietà: un processo lento, soggetto a errori e impossibile da scalare. La richiesta era *costruire uno strumento su misura* capace di centralizzare tutto in un'unica interfaccia.",
    challenge: "Il cliente operava con fogli Excel e WhatsApp per coordinare proprietà, inquilini, manutenzione e incassi. Nessun software sul mercato copriva il suo flusso operativo specifico. Ogni proprietà aveva regole diverse, e i report mensili richiedevano ore di lavoro manuale.",
    solution: "Abbiamo progettato e sviluppato una web app custom con dashboard centralizzata, gestione calendari per ogni proprietà, modulo manutenzione con notifiche automatiche, e report finanziari generati automaticamente. Il sistema è stato costruito per scalare da 10 a 100+ proprietà senza cambiare infrastruttura.",
    phases: [
      { number: "1", title: "Discovery", items: ["Workshop con il cliente", "Mappatura flussi operativi", "Definizione MVP scope", "Roadmap di sviluppo"] },
      { number: "2", title: "UX Design", items: ["User flow", "Wireframe dashboard", "Prototipo interattivo", "Validazione con il cliente"] },
      { number: "3", title: "UI Design", items: ["Design system", "Componenti UI", "Dark/Light mode", "Responsive layouts"] },
      { number: "4", title: "Sviluppo", items: ["Frontend React", "Backend API", "Automazioni N8N", "Deploy e testing"] },
    ],
    galleryImages: [
      { src: galleryHomelevenServizi, alt: "Dashboard Staff Interno Homeleven", caption: "Dashboard Staff Interno Homeleven" },
      { src: galleryHomelevenProperty, alt: "Home page Dashboard Proprietario Homeleven", caption: "Home page Dashboard Proprietario Homeleven" },
      { src: galleryHomelevenMaison, alt: "Vista Proprietà Dashboard Proprietario Homeleven", caption: "Vista Proprietà Dashboard Proprietario Homeleven" },
    ],
    results: [
      { metric: "-80%", label: "Tempo gestione operativa", description: "Da ore a minuti per le operazioni quotidiane di gestione proprietà." },
      { metric: "+3x", label: "Proprietà gestibili", description: "Il cliente ha triplicato il portafoglio gestito senza assumere personale aggiuntivo." },
      { metric: "0", label: "Errori di reportistica", description: "Eliminati completamente gli errori nei report mensili precedentemente manuali." },
      { metric: "100%", label: "Adozione del team", description: "Il team ha adottato il sistema fin dal primo giorno grazie all'UX semplificata." },
    ],
    testimonial: {
      quote: "NEXUS ha capito subito le nostre esigenze. Il gestionale ci ha cambiato la vita operativa. Professionalità e attenzione ai dettagli che raramente si trovano.",
      author: "Mattia T.",
      role: "Founder, Homeleven",
    },
  },
  {
    slug: "one-up",
    name: "ONE UP",
    tagline: "Gestionale Web *Custom* per la Flotta *Smeralda 888*",
    heroImage: "/assets/cover-oneup-0CbpMj0p.png",
    coverImage: "/assets/cover-oneup-0CbpMj0p.png",
    client: "ONE UP S.S.D. S.R.L.",
    industry: "Nautica & Sports Management",
    services: ["Sviluppo Web App", "UI/UX Design", "Software Gestionale"],
    country: "🇮🇹 Italia",
    year: "2025",
    about: "*ONE UP* è un gestionale web dedicato alla gestione operativa della flotta *Smeralda 888*. La piattaforma, accessibile da qualsiasi dispositivo tramite browser all'indirizzo teamoneup.com, coordina il lavoro di manutentori, armatori e personale tecnico attraverso un sistema strutturato di ticket, diario barca, fatture e conteggi. Il sistema è pensato per una realtà sportiva che gestisce una flotta di barche da regata con un team multidisciplinare, dove ogni ruolo ha necessità di accesso e operatività diversa sulla piattaforma.",
    challenge: "ONE UP gestiva la flotta e le attività di manutenzione in modo frammentato: comunicazioni su WhatsApp, fogli Excel per i costi, nessuna storicità degli interventi e zero visibilità centralizzata per gli armatori. Il team aveva ruoli molto differenziati — manutentori, comandanti, armatori, staff tecnico — ma nessuno strumento capace di rispecchiare questi livelli di accesso e responsabilità in modo strutturato.",
    solution: "Nexus ha sviluppato un gestionale web completamente custom con un sistema di ruoli granulare (5 livelli: Super Admin, Admin, Team Manager, Comandante, Armatore), un motore di ticket per tracciare ogni intervento con priorità e ciclo di vita completo, e sezioni dedicate per diario barca, inventario vele, posizione imbarcazioni e gestione fatture. Ogni ruolo vede e può operare solo sulle sezioni pertinenti alla propria funzione, garantendo sicurezza e semplicità d'uso contemporaneamente.",
    phases: [
      { number: "1", title: "Discovery & Architettura", items: ["Mappatura di tutti i ruoli operativi (5 profili distinti)", "Definizione della matrice di accessi per sezione", "Progettazione del ciclo di vita del ticket (Aperto → In lavorazione → Risolto → Chiuso)", "Architettura database e logica di permessi"] },
      { number: "2", title: "UI/UX Design", items: ["Design dell'interfaccia per ogni tipologia di utente", "Prototipazione dashboard, lista barche e pagina dettaglio barca", "Design del sistema ticket con livelli di urgenza (Immediato, Prossima tappa, Fine stagione)", "Mobile-first per utilizzo in banchina e in cantiere"] },
      { number: "3", title: "Sviluppo Web App", items: ["Sviluppo frontend React con autenticazione ruolo-based", "Sistema ticket completo con commenti, allegati foto/video e notifiche in-app", "Modulo Diario Barca: uscite, ore di navigazione, setup vele", "Modulo Fatture e Conteggi con visibilità dedicata agli Armatori", "Sistema di messaggistica interna real-time (1-a-1, GIF, reazioni, menzioni)", "Mappa posizioni barche con storico spostamenti"] },
      { number: "4", title: "Testing & Go Live", items: ["Testing multi-ruolo per verificare la corretta segregazione degli accessi", "Onboarding del team ONE UP con formazione all'uso della piattaforma", "Deploy su dominio dedicato teamoneup.com", "Documentazione utente completa per ogni ruolo"] },
    ],
    galleryImages: [
      { src: "/assets/cover-oneup-0CbpMj0p.png", alt: "ONE UP — Dashboard gestionale flotta", caption: "Dashboard con riepilogo flotta, ticket aperti e accesso rapido" },
      { src: "/assets/cover-oneup-0CbpMj0p.png", alt: "ONE UP — Sistema Ticket", caption: "Sistema ticket con livelli di urgenza e ciclo di vita tracciato" },
      { src: "/assets/cover-oneup-0CbpMj0p.png", alt: "ONE UP — Dettaglio Barca", caption: "Pagina barca con schede Overview, Ticket, Diario, Vele e Posizione" },
    ],
    results: [
      { metric: "5", label: "Ruoli distinti", description: "Super Admin, Admin, Team Manager, Comandante e Armatore — ognuno con accesso calibrato alle proprie funzioni operative." },
      { metric: "20+", label: "Sezioni gestite", description: "Dashboard, barche, ticket, diario, inventario vele, posizione, fatture, conteggi, messaggistica e notifiche in un'unica piattaforma." },
      { metric: "0", label: "Excel sostituiti", description: "Nessun foglio di calcolo, nessun WhatsApp operativo: tutto il flusso manutentivo e documentale è ora centralizzato e tracciato." },
      { metric: "100%", label: "Accessibile da browser", description: "Piattaforma web responsiva accessibile da qualsiasi dispositivo — in banchina, in cantiere o in ufficio — senza installazioni." },
    ],
    testimonial: undefined,
  },
  {
    slug: "biglia-serramenti",
    name: "Biglia Serramenti",
    tagline: "Sito Web Aziendale e *Catalogo Digitale* per un'Azienda di *Infissi*",
    heroImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400",
    coverImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
    client: "Infissi Rossi",
    industry: "Artigianato & Edilizia",
    services: ["Web Design", "Sviluppo Web"],
    country: "🇮🇹 Italia",
    year: "2024",
    about: "*Biglia Serramenti* è un'azienda artigiana con oltre 50 anni di esperienza nella produzione e installazione di infissi e facciate continue. Il sito precedente era obsoleto, non ottimizzato per mobile e non rifletteva la qualità del lavoro artigianale dell'azienda. L'obiettivo era *costruire una presenza digitale all'altezza* del loro posizionamento premium.",
    challenge: "Un sito datato, non responsive e senza catalogo prodotti navigabile costava clienti ogni giorno. I potenziali clienti non riuscivano a trovare le informazioni sui prodotti e il form preventivi aveva un tasso di abbandono altissimo.",
    solution: "Abbiamo progettato e sviluppato un sito web moderno con catalogo prodotti filtrabili per categoria, galleria realizzazioni con before/after, form preventivi ottimizzato e SEO locale per il territorio di riferimento. Design che comunica artigianalità e qualità.",
    phases: [
      { number: "1", title: "Strategia", items: ["Analisi competitor locali", "Definizione target clienti", "Struttura sito e SEO", "Raccolta materiali"] },
      { number: "2", title: "Design", items: ["Moodboard visivo", "Wireframe pagine chiave", "UI Design completo", "Revisioni con cliente"] },
      { number: "3", title: "Sviluppo & Launch", items: ["Sviluppo responsive", "Ottimizzazione SEO", "Integrazione form", "Go-live e monitoraggio"] },
    ],
    galleryImages: [
      { src: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200", alt: "Homepage Infissi Rossi", caption: "Homepage con hero section e catalogo in evidenza" },
      { src: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=1200", alt: "Pagina prodotti", caption: "Catalogo prodotti con filtri per tipologia e materiale" },
      { src: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=1200", alt: "Form preventivi", caption: "Form preventivi ottimizzato per la conversione" },
    ],
    results: [
      { metric: "+120%", label: "Visite organiche", description: "Crescita del traffico organico nei primi 3 mesi grazie all'ottimizzazione SEO locale." },
      { metric: "+85%", label: "Richieste preventivo", description: "Aumento delle richieste preventivo grazie al form ottimizzato e al catalogo navigabile." },
      { metric: "Mobile-first", label: "60% visite da mobile", description: "Il nuovo sito risponde perfettamente all'utenza mobile, prima completamente esclusa." },
    ],
    testimonial: {
      quote: "Il sito rifatto da NEXUS ha portato un aumento immediato delle richieste di preventivo. Comunicazione diretta e risultati concreti, esattamente quello che cercavamo.",
      author: "Gianni B.",
      role: "Titolare, Biglia Serramenti",
    },
  },
  {
    slug: "500-volte-meglio",
    name: "500 Volte Meglio",
    tagline: "Sito Web e *Sistema di Prenotazioni* per una *Pizzeria* Artigianale",
    heroImage: gallery500voltemeglio,
    coverImage: gallery500voltemeglio,
    client: "500 Volte Meglio",
    industry: "Ristorazione",
    services: ["Sviluppo Web", "UI/UX Design", "Software Gestionale"],
    country: "🇮🇹 Italia",
    year: "2025",
    about: "*500 Volte Meglio* è una pizzeria-ristorante nel cuore di Sanremo, specializzata in pizza napoletana cotta nel forno a legna con ingredienti freschi e di qualità. Il cliente aveva bisogno di una *presenza digitale moderna* che trasmettesse l'autenticità e il calore del locale, integrando un sistema di prenotazione tavoli direttamente nel sito.",
    challenge: "Il ristorante non aveva un sito web e gestiva le prenotazioni solo telefonicamente, perdendo clienti soprattutto turisti che cercavano online. Serviva un sito che comunicasse l'identità del brand e permettesse ai clienti di prenotare in autonomia, consultare il menù e trovare il locale facilmente.",
    solution: "Abbiamo progettato e sviluppato un sito web moderno con design caldo e accogliente che riflette l'identità del ristorante. Abbiamo integrato un plug-in di prenotazione tavoli, una sezione menù navigabile, galleria fotografica dei piatti e ottimizzazione SEO locale per il territorio di Sanremo.",
    phases: [
      { number: "1", title: "Strategia", items: ["Analisi brand identity", "Studio competitor locali", "Definizione struttura sito", "Raccolta contenuti e foto"] },
      { number: "2", title: "Design", items: ["Moodboard visivo", "UI Design completo", "Design responsive", "Revisioni con il cliente"] },
      { number: "3", title: "Sviluppo & Integrazioni", items: ["Sviluppo sito web", "Integrazione sistema prenotazioni", "Sezione menù interattiva", "Ottimizzazione SEO locale"] },
    ],
    galleryImages: [
      { src: gallery500voltemeglio, alt: "Hero 500 Volte Meglio", caption: "Homepage con hero section accogliente" },
      { src: gallery500voltemeglio2, alt: "Piatti del ristorante", caption: "Pizza e primi piatti del ristorante" },
      { src: gallery500voltemeglio3, alt: "Cucina del ristorante", caption: "Il team in cucina al lavoro" },
    ],
    results: [
      { metric: "+200%", label: "Prenotazioni online", description: "Prenotazioni tavoli tramite il sito web, prima inesistenti." },
      { metric: "-50%", label: "Chiamate telefoniche", description: "Riduzione delle chiamate per prenotazione grazie al sistema online integrato." },
      { metric: "Top 3", label: "SEO Locale Sanremo", description: "Posizionamento nelle prime posizioni per ricerche locali di pizzerie a Sanremo." },
    ],
  },
];
