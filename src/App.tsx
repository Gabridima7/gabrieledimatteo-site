import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";
import { ApplicationFormProvider } from "./context/ApplicationFormContext";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";

import ProdottiAI from "./pages/ProdottiAI";
import CasiStudio from "./pages/CasiStudio";
import ChiSiamo from "./pages/ChiSiamo";
import Templates from "./pages/Templates";
import Contatti from "./pages/Contatti";
import Privacy from "./pages/Privacy";
import Cookie from "./pages/Cookie";
import NotFound from "./pages/NotFound";
import SviluppoWebApp from "./pages/servizi/SviluppoWebApp";
import AiAutomation from "./pages/servizi/AiAutomation";
import ConsulenzaDigitale from "./pages/servizi/ConsulenzaDigitale";
import BrandingUiUx from "./pages/servizi/BrandingUiUx";
import LandingPageService from "./pages/servizi/LandingPageService";
import WebAppService from "./pages/servizi/WebAppService";
import SoftwareGestionaleService from "./pages/servizi/SoftwareGestionaleService";
import ProdottoSaaSService from "./pages/servizi/ProdottoSaaSService";
import AIChatbotService from "./pages/servizi/AIChatbotService";
import IntegrazioniAPIService from "./pages/servizi/IntegrazioniAPIService";
import UIUXDesignService from "./pages/servizi/UIUXDesignService";
import WebsiteDesignService from "./pages/servizi/WebsiteDesignService";
import MobileAppDesignService from "./pages/servizi/MobileAppDesignService";
import WebsiteRedesignService from "./pages/servizi/WebsiteRedesignService";
import ProductAuditService from "./pages/servizi/ProductAuditService";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <ApplicationFormProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Layout>
            <Routes>
              <Route path="/" element={<Index />} />
              
              <Route path="/prodotti-ai" element={<ProdottiAI />} />
              <Route path="/casi-studio" element={<CasiStudio />} />
              <Route path="/chi-siamo" element={<ChiSiamo />} />
              <Route path="/templates" element={<Templates />} />
              <Route path="/contatti" element={<Contatti />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/cookie" element={<Cookie />} />
              <Route path="/servizi/sviluppo-web-app" element={<SviluppoWebApp />} />
              <Route path="/servizi/ai-automation" element={<AiAutomation />} />
              <Route path="/servizi/consulenza-digitale" element={<ConsulenzaDigitale />} />
              <Route path="/servizi/branding-ui-ux" element={<BrandingUiUx />} />
              <Route path="/servizi/landing-page" element={<LandingPageService />} />
              <Route path="/servizi/web-app" element={<WebAppService />} />
              <Route path="/servizi/software-gestionale" element={<SoftwareGestionaleService />} />
              <Route path="/servizi/prodotto-saas" element={<ProdottoSaaSService />} />
              <Route path="/servizi/ai-chatbot" element={<AIChatbotService />} />
              <Route path="/servizi/integrazioni-api" element={<IntegrazioniAPIService />} />
              <Route path="/servizi/ui-ux-design" element={<UIUXDesignService />} />
              <Route path="/servizi/website-design" element={<WebsiteDesignService />} />
              <Route path="/servizi/mobile-app-design" element={<MobileAppDesignService />} />
              <Route path="/servizi/website-redesign" element={<WebsiteRedesignService />} />
              <Route path="/servizi/product-audit" element={<ProductAuditService />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </TooltipProvider>
      </ApplicationFormProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
