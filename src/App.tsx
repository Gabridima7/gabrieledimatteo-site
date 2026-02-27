import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import Soluzioni from "./pages/Soluzioni";
import ProdottiAI from "./pages/ProdottiAI";
import CasiStudio from "./pages/CasiStudio";
import ChiSiamo from "./pages/ChiSiamo";
import Templates from "./pages/Templates";
import PrenotaCall from "./pages/PrenotaCall";
import Privacy from "./pages/Privacy";
import Cookie from "./pages/Cookie";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/soluzioni" element={<Soluzioni />} />
              <Route path="/prodotti-ai" element={<ProdottiAI />} />
              <Route path="/casi-studio" element={<CasiStudio />} />
              <Route path="/chi-siamo" element={<ChiSiamo />} />
              <Route path="/templates" element={<Templates />} />
              <Route path="/prenota-call" element={<PrenotaCall />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/cookie" element={<Cookie />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
