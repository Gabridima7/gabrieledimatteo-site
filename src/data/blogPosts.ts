export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  category: string;
  date: string;
  readTime: string;
  featured: boolean;
}

export const blogCategories = [
  'Tutti',
  'Sviluppo Web',
  'AI & Automazione',
  'Business Digitale',
  'Case Study',
  'Guide & Tutorial',
];

export const blogPosts: BlogPost[] = [
  {
    slug: 'gestionale-personalizzato-pmi',
    title: 'Come un gestionale personalizzato può trasformare la tua PMI',
    excerpt: 'Scopri come un software gestionale su misura può ottimizzare i processi interni, ridurre i costi operativi e aumentare la produttività della tua azienda.',
    coverImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    category: 'Business Digitale',
    date: '15 Mar 2026',
    readTime: '6 min',
    featured: true,
  },
  {
    slug: 'web-app-vs-sito-web',
    title: 'Web App vs Sito Web: quale soluzione per la tua azienda?',
    excerpt: 'Analizziamo le differenze tra un sito web tradizionale e una web app, aiutandoti a scegliere la soluzione migliore per il tuo business.',
    coverImage: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80',
    category: 'Sviluppo Web',
    date: '10 Mar 2026',
    readTime: '5 min',
    featured: false,
  },
  {
    slug: '5-processi-automatizzare-ai',
    title: '5 processi aziendali da automatizzare subito con l\'AI',
    excerpt: 'Dall\'assistenza clienti alla gestione documentale: ecco i processi che puoi automatizzare oggi per risparmiare tempo e risorse.',
    coverImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
    category: 'AI & Automazione',
    date: '5 Mar 2026',
    readTime: '7 min',
    featured: false,
  },
  {
    slug: 'homeleven-digitalizzazione-immobiliare',
    title: 'Homeleven: come abbiamo digitalizzato la gestione immobiliare',
    excerpt: 'Il caso studio completo di Homeleven: dalla sfida alla soluzione, passando per il design e lo sviluppo della piattaforma.',
    coverImage: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80',
    category: 'Case Study',
    date: '28 Feb 2026',
    readTime: '8 min',
    featured: false,
  },
  {
    slug: 'guida-design-system-prodotti-digitali',
    title: 'Guida completa al design system per prodotti digitali',
    excerpt: 'Tutto quello che devi sapere per creare un design system efficace: componenti, token, documentazione e best practice.',
    coverImage: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
    category: 'Guide & Tutorial',
    date: '22 Feb 2026',
    readTime: '10 min',
    featured: false,
  },
  {
    slug: 'pmi-italiane-investire-digitale-2026',
    title: 'Perché le PMI italiane devono investire nel digitale nel 2026',
    excerpt: 'I dati parlano chiaro: le aziende che investono nella trasformazione digitale crescono 3 volte più velocemente. Ecco perché non puoi più aspettare.',
    coverImage: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80',
    category: 'Business Digitale',
    date: '18 Feb 2026',
    readTime: '5 min',
    featured: false,
  },
  {
    slug: 'react-vs-nextjs-cosa-scegliere',
    title: 'React vs Next.js: cosa scegliere per il tuo progetto',
    excerpt: 'Un confronto tecnico tra React e Next.js per aiutarti a scegliere il framework più adatto alle esigenze del tuo progetto digitale.',
    coverImage: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80',
    category: 'Sviluppo Web',
    date: '12 Feb 2026',
    readTime: '6 min',
    featured: false,
  },
  {
    slug: 'chatbot-ai-customer-service-guida',
    title: 'Chatbot AI per il customer service: guida pratica',
    excerpt: 'Come implementare un chatbot AI per migliorare il servizio clienti, ridurre i tempi di risposta e aumentare la soddisfazione degli utenti.',
    coverImage: 'https://images.unsplash.com/photo-1531746790095-e5995e1e8e97?w=800&q=80',
    category: 'AI & Automazione',
    date: '5 Feb 2026',
    readTime: '7 min',
    featured: false,
  },
  {
    slug: 'one-up-gestionale-nautico',
    title: 'ONE UP: il gestionale nautico che semplifica la gestione flotte',
    excerpt: 'Come abbiamo progettato e sviluppato ONE UP, la piattaforma che rivoluziona la gestione delle flotte nautiche per charter e armatori.',
    coverImage: 'https://images.unsplash.com/photo-1540946485063-a40da27545f8?w=800&q=80',
    category: 'Case Study',
    date: '30 Gen 2026',
    readTime: '9 min',
    featured: false,
  },
];
