import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, '../dist');

const routes = [
  '/',
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

  // Clean up server build
  fs.rmSync(path.resolve(distDir, 'server'), { recursive: true, force: true });
}

prerender().catch((err) => {
  console.error('Pre-rendering failed:', err);
  process.exit(1);
});
