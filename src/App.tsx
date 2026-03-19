import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { LanguageProvider } from "./context/LanguageContext";
import { ApplicationFormProvider } from "./context/ApplicationFormContext";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import Servizi from "./pages/Servizi";
import ProdottiAI from "./pages/ProdottiAI";
import CasiStudio from "./pages/CasiStudio";
import ChiSiamo from "./pages/ChiSiamo";
import Blog from "./pages/Blog";
import BlogPostPage from "./pages/BlogPost";
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
import MvpDesign from "./pages/soluzioni/MvpDesign";
import ProductRedesign from "./pages/soluzioni/ProductRedesign";
import EstensioneTeam from "./pages/soluzioni/EstensioneTeam";
import ProjectDetail from "./pages/ProjectDetail";
import PrenotaCall from "./pages/PrenotaCall";
import Guida from "./pages/Guida";
import Leads from "./pages/Leads";

const queryClient = new QueryClient();

export const AppContent = () => (
  <>
    <ScrollToTop />
    <Routes>
      <Route path="/guida" element={<Guida />} />
      <Route path="/leads" element={<Leads />} />
      <Route path="/unsubscribe" element={<Unsubscribe />} />
      <Route path="*" element={
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/servizi" element={<Servizi />} />
            <Route path="/prodotti-ai" element={<ProdottiAI />} />
            <Route path="/casi-studio" element={<CasiStudio />} />
            <Route path="/chi-siamo" element={<ChiSiamo />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contatti" element={<Contatti />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/cookie" element={<Cookie />} />
            <Route path="/prenota-call" element={<PrenotaCall />} />
            <Route path="/servizi/sviluppo-web" element={<SviluppoWebApp />} />
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
            <Route path="/servizi/product-ux-ui-audit" element={<ProductAuditService />} />
            <Route path="/soluzioni/mvp" element={<MvpDesign />} />
            <Route path="/soluzioni/product-redesign" element={<ProductRedesign />} />
            <Route path="/soluzioni/estensione-team" element={<EstensioneTeam />} />
            <Route path="/progetto/:slug" element={<ProjectDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      } />
    </Routes>
  </>
);

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <ApplicationFormProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <AppContent />
            </BrowserRouter>
          </TooltipProvider>
        </ApplicationFormProvider>
      </LanguageProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
