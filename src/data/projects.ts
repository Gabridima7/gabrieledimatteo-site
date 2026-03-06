import gallery500voltemeglio from '@/assets/gallery-500voltemeglio-hero.png';

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
    heroImage: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1400",
    coverImage: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800",
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
      { src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200", alt: "Dashboard PropManager", caption: "Dashboard principale con overview di tutte le proprietà" },
      { src: "https://images.unsplash.com/photo-1560184897-ae75f418493e?w=1200", alt: "Gestione calendari", caption: "Vista calendario per gestione prenotazioni" },
      { src: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200", alt: "Report finanziari", caption: "Report finanziari automatici mensili" },
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
    name: "One Up",
    tagline: "Piattaforma Digitale per la *Gestione* di *Flotte Nautiche*",
    heroImage: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1400",
    coverImage: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800",
    client: "One Up",
    industry: "Gestione Nautica",
    services: ["Sviluppo Web App", "UI/UX Design"],
    country: "🇮🇹 Italia",
    year: "2024",
    about: "*One Up* nasce dall'esigenza di un operatore del settore imbarcazioni di *digitalizzare l'intera operatività* della sua flotta. Prenotazioni, manutenzioni, disponibilità e documentazione erano gestiti su strumenti separati e incompatibili tra loro, creando inefficienze e rischi operativi.",
    challenge: "La gestione di una flotta nautica richiede coordinamento tra prenotazioni, manutenzione programmata, ispezioni di sicurezza e disponibilità in tempo reale. Il cliente perdeva prenotazioni per mancanza di visibilità sulla disponibilità e rischiava sanzioni per documentazione non aggiornata.",
    solution: "Abbiamo sviluppato una web app con sistema di prenotazione in tempo reale, calendario manutenzioni con alert automatici, gestione documentale integrata e dashboard operativa per il team. Ogni barca ha il suo profilo completo con storico completo.",
    phases: [
      { number: "1", title: "Discovery", items: ["Analisi operativa flotta", "Mappatura processi esistenti", "Definizione requisiti tecnici", "Prioritizzazione feature"] },
      { number: "2", title: "UX & UI Design", items: ["Architettura informazione", "Wireframe mobile-first", "Interfaccia calendario", "Prototipo validato"] },
      { number: "3", title: "Sviluppo", items: ["Web app React", "Sistema prenotazioni real-time", "Notifiche automatiche", "Testing e deploy"] },
    ],
    galleryImages: [
      { src: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=1200", alt: "Dashboard flotta", caption: "Overview flotta con stato di ogni imbarcazione" },
      { src: "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?w=1200", alt: "Sistema prenotazioni", caption: "Calendario prenotazioni con disponibilità real-time" },
      { src: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1200", alt: "Gestione manutenzioni", caption: "Modulo manutenzioni con alert programmati" },
    ],
    results: [
      { metric: "+45%", label: "Prenotazioni gestite", description: "Aumento delle prenotazioni grazie alla visibilità in tempo reale sulla disponibilità." },
      { metric: "-60%", label: "Tempo amministrativo", description: "Riduzione drastica delle ore spese in gestione documentale e coordinamento." },
      { metric: "0", label: "Manutenzioni dimenticate", description: "Il sistema di alert ha eliminato completamente le manutenzioni saltate." },
    ],
    testimonial: {
      quote: "Professionalità e velocità di esecuzione fuori dal comune. Hanno trasformato la nostra idea in un prodotto funzionante in tempi record. Consigliato a qualsiasi PMI italiana.",
      author: "Andrea Z.",
      role: "CEO, ONE UP",
    },
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
    heroImage: "https://500voltemeglio.it/wp-content/uploads/2025/10/CQU7WRW-min.jpg",
    coverImage: "https://500voltemeglio.it/wp-content/uploads/2025/10/CQU7WRW-min.jpg",
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
      { src: "https://500voltemeglio.it/wp-content/uploads/2025/10/about.png", alt: "Chi Siamo", caption: "Sezione Chi Siamo del ristorante" },
      { src: "https://500voltemeglio.it/wp-content/uploads/2025/10/antipasti.png", alt: "Menù antipasti", caption: "Sezione menù con i piatti del ristorante" },
    ],
    results: [
      { metric: "+200%", label: "Prenotazioni online", description: "Prenotazioni tavoli tramite il sito web, prima inesistenti." },
      { metric: "-50%", label: "Chiamate telefoniche", description: "Riduzione delle chiamate per prenotazione grazie al sistema online integrato." },
      { metric: "Top 3", label: "SEO Locale Sanremo", description: "Posizionamento nelle prime posizioni per ricerche locali di pizzerie a Sanremo." },
    ],
  },
];
