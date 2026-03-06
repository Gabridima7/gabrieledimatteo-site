import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { LanguageProvider } from './context/LanguageContext';
import { ApplicationFormProvider } from './context/ApplicationFormContext';
import { TooltipProvider } from './components/ui/tooltip';
import { AppContent } from './App';

export function render(url: string) {
  const helmetContext: { helmet?: any } = {};
  const queryClient = new QueryClient();

  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <QueryClientProvider client={queryClient}>
        <LanguageProvider>
          <ApplicationFormProvider>
            <TooltipProvider>
              <StaticRouter location={url}>
                <AppContent />
              </StaticRouter>
            </TooltipProvider>
          </ApplicationFormProvider>
        </LanguageProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );

  const { helmet } = helmetContext;
  return { html, helmet };
}

