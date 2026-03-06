import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, '../dist');

const routes = [
  '/',
  '/servizi',
  '/servizi/sviluppo-web',
  '/servizi/landing-page',
  '/servizi/web-app',
  '/servizi/software-gestionale',
  '/servizi/prodotto-saas',
  '/servizi/ai-automation',
  '/servizi/ai-chatbot',
  '/servizi/consulenza-digitale',
  '/servizi/integrazioni-api',
  '/servizi/ui-ux-design',
  '/servizi/website-design',
  '/servizi/mobile-app-design',
  '/servizi/website-redesign',
  '/servizi/product-ux-ui-audit',
  '/servizi/branding-ui-ux',
  '/soluzioni/mvp',
  '/soluzioni/product-redesign',
  '/soluzioni/estensione-team',
  '/casi-studio',
  '/progetto/homeleven',
  '/progetto/one-up',
  '/progetto/biglia-serramenti',
  '/chi-siamo',
  '/blog',
  '/blog/gestionale-personalizzato-pmi',
  '/blog/web-app-vs-sito-web',
  '/blog/5-processi-automatizzare-ai',
  '/blog/homeleven-digitalizzazione-immobiliare',
  '/blog/guida-design-system-prodotti-digitali',
  '/blog/pmi-italiane-investire-digitale-2026',
  '/blog/react-vs-nextjs-cosa-scegliere',
  '/blog/chatbot-ai-customer-service-guida',
  '/blog/one-up-gestionale-nautico',
  '/contatti',
  '/prenota-call',
  '/privacy',
  '/cookie',
  '/prodotti-ai',
];

async function prerender() {
  const templatePath = path.resolve(distDir, 'index.html');
  const rawTemplate = fs.readFileSync(templatePath, 'utf-8');

  // Ensure we always start from a clean shell even if prerender is re-run on an already prerendered dist.
  const template = rawTemplate
    .replace(/<div id="root">[\s\S]*?<\/div>/, '<div id="root"></div>')
    .replace(/<title[^>]*data-rh="true"[^>]*>[\s\S]*?<\/title>/g, '')
    .replace(/<meta[^>]*data-rh="true"[^>]*>/g, '')
    .replace(/<link[^>]*data-rh="true"[^>]*>/g, '')
    .replace(/<script[^>]*data-rh="true"[^>]*>[\s\S]*?<\/script>/g, '');

  const serverEntry = path.resolve(distDir, 'server', 'entry-server.js');
  const { render } = await import(serverEntry);

  let successCount = 0;
  let failCount = 0;

  for (const route of routes) {
    try {
      const { html, helmet } = render(route);

      let page = template;

      // Inject app HTML into #root
      page = page.replace(
        '<div id="root"></div>',
        `<div id="root">${html}</div>`
      );

      // Inject helmet tags into <head>
      if (helmet) {
        const headTags = [
          helmet.title?.toString() || '',
          helmet.meta?.toString() || '',
          helmet.link?.toString() || '',
          helmet.script?.toString() || '',
        ].filter(Boolean).join('\n');

        console.log(`Route: ${route} → Title: ${helmet.title?.toString() || 'NO_TITLE'}`);

        if (headTags) {
          page = page.replace('</head>', `${headTags}\n</head>`);
        }
      }

      // Determine output path
      const filePath = route === '/'
        ? path.resolve(distDir, 'index.html')
        : path.resolve(distDir, route.slice(1), 'index.html');

      fs.mkdirSync(path.dirname(filePath), { recursive: true });
      fs.writeFileSync(filePath, page);
      successCount++;
      console.log(`✓ Pre-rendered: ${route}`);
    } catch (err) {
      failCount++;
      console.error(`✗ Failed to pre-render ${route}:`, err.message);
    }
  }

  console.log(`\nPre-rendering complete: ${successCount} succeeded, ${failCount} failed`);

  // Generate sitemap.xml
  const SITE_URL = 'https://nexusagency.it';
  const today = new Date().toISOString().split('T')[0];

  const priorities = {
    '/': '1.0',
    '/servizi': '0.9',
    '/casi-studio': '0.8',
    '/chi-siamo': '0.7',
    '/contatti': '0.7',
    '/blog': '0.8',
    '/prodotti-ai': '0.7',
  };

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => {
    const priority = priorities[route] || (route.startsWith('/servizi/') || route.startsWith('/soluzioni/') ? '0.8' : '0.5');
    const changefreq = route === '/' ? 'weekly' : route.startsWith('/blog') ? 'weekly' : 'monthly';
    return `  <url>
    <loc>${SITE_URL}${route}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
  }).join('\n')}
</urlset>`;

  fs.writeFileSync(path.resolve(distDir, 'sitemap.xml'), sitemap);
  console.log(`✓ Generated sitemap.xml with ${routes.length} URLs`);

  // Clean up server build
  fs.rmSync(path.resolve(distDir, 'server'), { recursive: true, force: true });
}

prerender().catch((err) => {
  console.error('Pre-rendering failed:', err);
  process.exit(1);
});
