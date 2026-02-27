import { useState, useEffect, useRef, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Globe, Code, Bot, Palette, Lightbulb, ArrowRight, ArrowUpRight, ArrowDownRight, MessageCircle, Pencil, Layout, Rocket, RefreshCw, Users, Layers, Monitor, Smartphone, Search, LayoutDashboard, GitMerge } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import logo from '@/assets/logo-nexus.png';
import iconSviluppoWebApp from '@/assets/icons/icon-sviluppo-web-app.png';
import iconLandingPage from '@/assets/icons/icon-landing-page.png';
import iconWebApp from '@/assets/icons/icon-web-app.webp';
import iconSoftwareGestionale from '@/assets/icons/icon-software-gestionale.webp';
import iconProdottoSaas from '@/assets/icons/icon-prodotto-saas.webp';
import iconAiAutomation from '@/assets/icons/icon-ai-automation.png';
import iconAiChatbot from '@/assets/icons/icon-ai-chatbot.png';
import iconConsulenzaDigitale from '@/assets/icons/icon-consulenza-digitale.webp';
import iconUiUxDesign from '@/assets/icons/icon-ui-ux-design.png';
import iconIntegrazioniApi from '@/assets/icons/icon-integrazioni-api.png';
import iconWebsiteDesign from '@/assets/icons/icon-website-design.png';

const CAL_LINK = 'https://cal.com/nexus-agency/30min?overlayCalendar=true';

/* ── Sub-components for mega menu ── */

const MegaItem = ({ to, icon, gradient, title, desc, onClick }: { to: string; icon: React.ReactNode; gradient: string; title: string; desc: string; onClick: () => void }) => (
  <Link to={to} onClick={onClick} className="flex items-center gap-3.5 px-3 py-2.5 rounded-xl hover:bg-[#F8FAFC] transition-colors duration-150 group">
    <div className={`w-11 h-11 rounded-[10px] bg-gradient-to-br ${gradient} flex items-center justify-center shrink-0`}>
      <span className="text-white">{icon}</span>
    </div>
    <div>
      <p className="text-[14px] font-semibold text-[#111827] group-hover:text-[#1C35C8] transition-colors">{title}</p>
      <p className="text-[12px] text-[#6B7280] mt-0.5">{desc}</p>
    </div>
  </Link>
);

const SolutionCard = ({ to, icon, gradient, title, subtitle, desc, onClick }: { to: string; icon: React.ReactNode; gradient: string; title: string; subtitle: string; desc: string; onClick: () => void }) => (
  <Link to={to} onClick={onClick} className="flex items-start gap-3.5 group">
    <div className={`w-11 h-11 rounded-[10px] bg-gradient-to-br ${gradient} flex items-center justify-center shrink-0 mt-0.5`}>
      <span className="text-white">{icon}</span>
    </div>
    <div>
      <p className="text-[14px] font-bold text-[#111827] group-hover:text-[#1C35C8] transition-colors">{title}</p>
      <p className="text-[12px] text-[#6B7280] mt-0.5">{subtitle}</p>
      <p className="text-[12px] text-[#9CA3AF] mt-1.5 leading-snug">{desc}</p>
    </div>
  </Link>
);

const MobileServiceItem = ({ to, icon, gradient, title, desc, onClick, last }: { to: string; icon: React.ReactNode; gradient: string; title: string; desc: string; onClick: () => void; last?: boolean }) => (
  <Link to={to} onClick={onClick} className={`flex items-center gap-3.5 py-3 ${last ? '' : 'border-b border-[#E5E7EB]'}`}>
    <div className={`w-10 h-10 rounded-[10px] bg-gradient-to-br ${gradient} flex items-center justify-center shrink-0`}>
      <span className="text-white">{icon}</span>
    </div>
    <div>
      <p className="text-[15px] font-semibold text-[#111827]">{title}</p>
      <p className="text-[12px] text-[#6B7280] mt-0.5">{desc}</p>
    </div>
  </Link>
);

const CLOSE_DELAY = 150;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [servicesExpanded, setServicesExpanded] = useState(false);
  const { lang, setLang, t } = useLanguage();
  const location = useLocation();
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openMega = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setMegaOpen(true);
  }, []);

  const closeMega = useCallback(() => {
    closeTimer.current = setTimeout(() => setMegaOpen(false), CLOSE_DELAY);
  }, []);

  // Close on click outside
  useEffect(() => {
    if (!megaOpen) return;
    const handler = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('[data-mega-root]')) setMegaOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [megaOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setMegaOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const navLinks = [
    { href: '/casi-studio', label: t('nav', 'casiStudio') },
    { href: '/chi-siamo', label: t('nav', 'chiSiamo') },
  ];

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 glass-nav transition-all duration-300 ${scrolled ? 'glass-nav-scrolled' : ''}`}>
        <div className="section-container lg:pl-2 flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <img src={logo} alt="NEXUS Agency" className="h-8 w-auto brightness-[2] contrast-125" />
            <span className="font-bold text-lg text-white">NEXUS</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {/* Servizi with mega menu */}
            <div
              data-mega-root
              className="static"
              onMouseEnter={openMega}
              onMouseLeave={closeMega}
            >
              <button className={`nav-link px-4 py-2 flex items-center gap-1 ${megaOpen ? 'after:scale-x-100' : ''}`}>
                {t('nav', 'servizi')}
                <ChevronDown size={14} className={`transition-transform duration-200 ${megaOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {megaOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="fixed top-[80px] left-0 w-full z-[200] flex justify-center pointer-events-none"
                  >
                    <div className="w-[1240px] max-w-[95vw] rounded-[20px] bg-white shadow-[0_24px_80px_rgba(0,0,0,0.12),0_4px_16px_rgba(0,0,0,0.06)] pointer-events-auto">
                    {/* Services section */}
                    <div className="px-10 pt-8 pb-6">
                      <div className="flex items-start gap-10">
                        {/* Badge */}
                        <div className="shrink-0 pt-1">
                          <span className="inline-block text-[11px] font-semibold tracking-[0.1em] uppercase text-white bg-[#10B981] rounded-full px-3 py-1">
                            {lang === 'it' ? 'SERVIZI' : 'SERVICES'}
                          </span>
                        </div>

                        {/* 3 columns with dividers */}
                        <div className="flex-1 grid grid-cols-3 gap-0 divide-x divide-[#E5E7EB]">
                          {/* Col 1 — SVILUPPO */}
                          <div className="pr-6">
                            <p className="text-[11px] font-semibold tracking-[0.1em] uppercase text-[#9CA3AF] mb-5">
                              {t('mega', 'colSviluppo')}
                            </p>
                            <div className="space-y-1">
                              <MegaItem to="/soluzioni" icon={<img src={iconSviluppoWebApp} alt="Sviluppo Web & App" className="w-7 h-7 object-contain" />} gradient="from-transparent to-transparent" title={t('mega', 'sviluppo')} desc={lang === 'it' ? 'Siti web e applicazioni su misura' : 'Custom websites & applications'} onClick={() => setMegaOpen(false)} />
                              <MegaItem to="/soluzioni" icon={<img src={iconLandingPage} alt="Landing Page" className="w-7 h-7 object-contain" />} gradient="from-transparent to-transparent" title="Landing Page" desc={lang === 'it' ? 'Sito ad alta conversione' : 'High-converting website'} onClick={() => setMegaOpen(false)} />
                              <MegaItem to="/soluzioni" icon={<img src={iconWebApp} alt="Web App" className="w-7 h-7 object-contain" />} gradient="from-transparent to-transparent" title="Web App" desc={lang === 'it' ? 'Applicazioni su misura' : 'Custom applications'} onClick={() => setMegaOpen(false)} />
                              <MegaItem to="/soluzioni" icon={<img src={iconSoftwareGestionale} alt="Software Gestionale" className="w-7 h-7 object-contain" />} gradient="from-transparent to-transparent" title={lang === 'it' ? 'Software Gestionale' : 'Management Software'} desc={lang === 'it' ? 'CRM, ERP e tool interni su misura' : 'Custom CRM, ERP & internal tools'} onClick={() => setMegaOpen(false)} />
                              <MegaItem to="/soluzioni" icon={<img src={iconProdottoSaas} alt="Prodotto SaaS" className="w-7 h-7 object-contain" />} gradient="from-transparent to-transparent" title={lang === 'it' ? 'Prodotto SaaS' : 'SaaS Product'} desc={lang === 'it' ? 'Da idea a prodotto scalabile' : 'From idea to scalable product'} onClick={() => setMegaOpen(false)} />
                            </div>
                          </div>

                          {/* Col 2 — AI & AUTOMATION */}
                          <div className="px-6">
                            <p className="text-[11px] font-semibold tracking-[0.1em] uppercase text-[#9CA3AF] mb-5">
                              {t('mega', 'colAi')}
                            </p>
                            <div className="space-y-1">
                              <MegaItem to="/soluzioni" icon={<img src={iconAiAutomation} alt="AI Automation" className="w-7 h-7 object-contain" />} gradient="from-transparent to-transparent" title={t('mega', 'ai')} desc={lang === 'it' ? 'Automatizza i processi con l\'AI' : 'Automate processes with AI'} onClick={() => setMegaOpen(false)} />
                              <MegaItem to="/soluzioni" icon={<img src={iconAiChatbot} alt="AI Chatbot" className="w-7 h-7 object-contain" />} gradient="from-transparent to-transparent" title="AI Chatbot" desc={lang === 'it' ? 'Assistenti virtuali intelligenti' : 'Smart virtual assistants'} onClick={() => setMegaOpen(false)} />
                              <MegaItem to="/soluzioni" icon={<img src={iconConsulenzaDigitale} alt="Consulenza Digitale" className="w-7 h-7 object-contain" />} gradient="from-transparent to-transparent" title={t('mega', 'consulenza')} desc={lang === 'it' ? 'Strategia e roadmap per la tua PMI' : 'Strategy & roadmap for your SME'} onClick={() => setMegaOpen(false)} />
                              <MegaItem to="/soluzioni" icon={<img src={iconIntegrazioniApi} alt="Integrazioni API" className="w-7 h-7 object-contain" />} gradient="from-transparent to-transparent" title={lang === 'it' ? 'Integrazioni API' : 'API Integrations'} desc={lang === 'it' ? 'Connetti i tuoi sistemi aziendali' : 'Connect your business systems'} onClick={() => setMegaOpen(false)} />
                            </div>
                          </div>

                          {/* Col 3 — DESIGN */}
                          <div className="pl-6">
                            <p className="text-[11px] font-semibold tracking-[0.1em] uppercase text-[#9CA3AF] mb-5">
                              {t('mega', 'colDesign')}
                            </p>
                            <div className="space-y-1">
                              <MegaItem to="/soluzioni" icon={<img src={iconUiUxDesign} alt="UI/UX Design" className="w-7 h-7 object-contain" />} gradient="from-transparent to-transparent" title="UI/UX Design" desc={lang === 'it' ? 'Web & mobile app design' : 'Web & mobile app design'} onClick={() => setMegaOpen(false)} />
                              <MegaItem to="/soluzioni" icon={<img src={iconWebsiteDesign} alt="Website Design" className="w-7 h-7 object-contain" />} gradient="from-transparent to-transparent" title="Website Design" desc={lang === 'it' ? 'Siti custom e landing page' : 'Custom sites & landing pages'} onClick={() => setMegaOpen(false)} />
                              <MegaItem to="/soluzioni" icon={<Smartphone size={20} strokeWidth={1.5} />} gradient="from-[#EC4899] to-[#BE185D]" title="Mobile App Design" desc={lang === 'it' ? 'App che gli utenti amano' : 'Apps your users love'} onClick={() => setMegaOpen(false)} />
                              <MegaItem to="/soluzioni" icon={<RefreshCw size={20} strokeWidth={1.5} />} gradient="from-[#F59E0B] to-[#B45309]" title="Website Redesign" desc={lang === 'it' ? 'Look moderno, impatto maggiore' : 'Modern look, higher impact'} onClick={() => setMegaOpen(false)} />
                              <MegaItem to="/soluzioni" icon={<Search size={20} strokeWidth={1.5} />} gradient="from-[#10B981] to-[#047857]" title="Product UX/UI Audit" desc={lang === 'it' ? 'Insights che guidano i risultati' : 'Insights that drive results'} onClick={() => setMegaOpen(false)} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Divider */}
                    <hr className="border-[#E5E7EB] mx-10" />

                    {/* Solutions section */}
                    <div className="mx-10 my-6 bg-[#F9FAFB] rounded-xl px-6 py-5">
                      <div className="flex items-start gap-10">
                        <div className="shrink-0 pt-1">
                          <span className="inline-block text-[11px] font-semibold tracking-[0.1em] uppercase text-white bg-[#FACC15] rounded-full px-3 py-1">
                            {lang === 'it' ? 'SOLUZIONI' : 'SOLUTIONS'}
                          </span>
                        </div>
                        <div className="flex-1 grid grid-cols-3 gap-4">
                          <SolutionCard to="/soluzioni" icon={<Rocket size={20} strokeWidth={1.5} />} gradient="from-[#6366F1] to-[#4F46E5]" title={t('mega', 'mvp')} subtitle={lang === 'it' ? 'Per startup e imprenditori' : 'For startups & entrepreneurs'} desc={lang === 'it' ? 'Crea un prodotto digitale, attrai investitori e nuovi clienti.' : 'Create a digital product, attract investors and new clients.'} onClick={() => setMegaOpen(false)} />
                          <SolutionCard to="/soluzioni" icon={<RefreshCw size={20} strokeWidth={1.5} />} gradient="from-[#F59E0B] to-[#D97706]" title={t('mega', 'redesign')} subtitle={lang === 'it' ? 'Per PMI e aziende' : 'For SMEs & enterprises'} desc={lang === 'it' ? 'Un look fresco, UX migliorata e funzionalità potenziate.' : 'A fresh look, improved UX, and enhanced functionality.'} onClick={() => setMegaOpen(false)} />
                          <SolutionCard to="/prenota-call" icon={<Users size={20} strokeWidth={1.5} />} gradient="from-[#10B981] to-[#059669]" title={t('mega', 'retainer')} subtitle={lang === 'it' ? 'Per aziende esistenti' : 'For existing companies'} desc={lang === 'it' ? 'Espandi il tuo team con i nostri esperti dedicati.' : 'Expand your team with our dedicated experts.'} onClick={() => setMegaOpen(false)} />
                        </div>
                      </div>
                    </div>

                    {/* Bottom padding */}
                    <div className="h-2" />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {navLinks.map((link) => (
              <Link key={link.href} to={link.href} className="nav-link px-4 py-2">
                {link.label}
              </Link>
            ))}

            <Link to="/templates" className="nav-link px-4 py-2">
              {t('nav', 'risorse')}
            </Link>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* Language toggle */}
            <div className="flex items-center text-sm">
              <button
                onClick={() => setLang('it')}
                className={`transition-colors ${lang === 'it' ? 'text-white font-semibold' : 'text-white/40'}`}
              >
                IT
              </button>
              <span className="text-white/30 mx-1.5">|</span>
              <button
                onClick={() => setLang('en')}
                className={`transition-colors ${lang === 'en' ? 'text-white font-semibold' : 'text-white/40'}`}
              >
                EN
              </button>
            </div>

            {/* CTA */}
            <a
              href={CAL_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary hidden sm:inline-flex"
            >
              {t('nav', 'prenotaCall')}
              <ArrowRight size={16} />
            </a>

            {/* Mobile hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-white"
              aria-label="Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu — Arounda style */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[60] flex flex-col lg:hidden">
            {/* Dark backdrop behind navbar area */}
            <div className="bg-[#080C14] h-[72px] shrink-0 flex items-center justify-between px-5">
              <Link to="/" onClick={() => setIsOpen(false)} className="flex items-center gap-2">
                <img src={logo} alt="NEXUS" className="h-8 w-auto brightness-[2] contrast-125" />
                <span className="font-bold text-lg text-white">NEXUS</span>
              </Link>
              <div className="flex items-center gap-3">
                <a href={CAL_LINK} target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)} className="btn-primary text-sm py-2 px-4">
                  {t('nav', 'prenotaCall')} <ArrowRight size={14} />
                </a>
                <button onClick={() => setIsOpen(false)} className="p-2 text-white">
                  <X size={24} />
                </button>
              </div>
            </div>

            {/* White panel */}
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="mx-4 mt-2 bg-white rounded-[20px] shadow-[0_8px_40px_rgba(0,0,0,0.15)] overflow-hidden flex-1 flex flex-col"
              style={{ maxHeight: 'calc(100vh - 72px - 88px)' }}
            >
              <div className="flex-1 overflow-y-auto py-2">
                {/* Casi Studio */}
                <Link to="/casi-studio" onClick={() => setIsOpen(false)} className="block px-6 py-5 text-[28px] font-semibold text-[#111827] border-b border-[#F3F4F6] hover:bg-[#F9FAFB] transition-colors">
                  {t('nav', 'casiStudio')}
                </Link>

                {/* Servizi — accordion */}
                <div className="border-b border-[#F3F4F6]">
                  <button
                    onClick={() => setServicesExpanded(!servicesExpanded)}
                    className="flex items-center justify-between w-full px-6 py-5 hover:bg-[#F9FAFB] transition-colors"
                  >
                    <span className="text-[28px] font-semibold text-[#111827]">{t('nav', 'servizi')}</span>
                    <ArrowUpRight size={20} className={`text-[#9CA3AF] transition-transform duration-200 ${servicesExpanded ? 'rotate-90' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {servicesExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="bg-[#F9FAFB] px-6 pb-5 pt-3">
                          {/* SVILUPPO */}
                          <p className="text-[11px] font-bold tracking-[0.08em] uppercase text-[#9CA3AF] mb-3 mt-4">SVILUPPO</p>
                          <MobileServiceItem to="/servizi/sviluppo-web-app" icon={<img src={iconSviluppoWebApp} alt="Sviluppo Web & App" className="w-6 h-6 object-contain" />} gradient="from-transparent to-transparent" title="Sviluppo Web & App" desc="Siti web e app su misura" onClick={() => setIsOpen(false)} />
                          <MobileServiceItem to="/servizi/sviluppo-web-app" icon={<img src={iconLandingPage} alt="Landing Page" className="w-6 h-6 object-contain" />} gradient="from-transparent to-transparent" title="Landing Page" desc="High-converting website" onClick={() => setIsOpen(false)} />
                          <MobileServiceItem to="/servizi/sviluppo-web-app" icon={<img src={iconWebApp} alt="Web App" className="w-6 h-6 object-contain" />} gradient="from-transparent to-transparent" title="Web App" desc="Applicazioni su misura" onClick={() => setIsOpen(false)} />
                          <MobileServiceItem to="/servizi/sviluppo-web-app" icon={<img src={iconSoftwareGestionale} alt="Software Gestionale" className="w-6 h-6 object-contain" />} gradient="from-transparent to-transparent" title="Software Gestionale" desc="CRM, ERP e tool interni" onClick={() => setIsOpen(false)} />
                          <MobileServiceItem to="/servizi/sviluppo-web-app" icon={<img src={iconProdottoSaas} alt="Prodotto SaaS" className="w-6 h-6 object-contain" />} gradient="from-transparent to-transparent" title="Prodotto SaaS" desc="Da idea a prodotto scalabile" onClick={() => setIsOpen(false)} last />

                          {/* AI & AUTOMATION */}
                          <p className="text-[11px] font-bold tracking-[0.08em] uppercase text-[#9CA3AF] mb-3 mt-5">AI & AUTOMATION</p>
                          <MobileServiceItem to="/servizi/ai-automation" icon={<img src={iconAiAutomation} alt="AI Automation" className="w-6 h-6 object-contain" />} gradient="from-transparent to-transparent" title="AI Automation" desc="Automatizza con l'AI" onClick={() => setIsOpen(false)} />
                          <MobileServiceItem to="/servizi/ai-automation" icon={<img src={iconAiChatbot} alt="AI Chatbot" className="w-6 h-6 object-contain" />} gradient="from-transparent to-transparent" title="AI Chatbot" desc="Assistenti virtuali intelligenti" onClick={() => setIsOpen(false)} />
                          <MobileServiceItem to="/servizi/consulenza-digitale" icon={<img src={iconConsulenzaDigitale} alt="Consulenza Digitale" className="w-6 h-6 object-contain" />} gradient="from-transparent to-transparent" title="Consulenza Digitale" desc="Strategia e roadmap PMI" onClick={() => setIsOpen(false)} />
                          <MobileServiceItem to="/servizi/ai-automation" icon={<img src={iconIntegrazioniApi} alt="Integrazioni API" className="w-5 h-5 object-contain" />} gradient="from-transparent to-transparent" title="Integrazioni API" desc="Connetti i tuoi sistemi" onClick={() => setIsOpen(false)} last />

                          {/* DESIGN */}
                          <p className="text-[11px] font-bold tracking-[0.08em] uppercase text-[#9CA3AF] mb-3 mt-5">DESIGN</p>
                          <MobileServiceItem to="/servizi/branding-ui-ux" icon={<img src={iconUiUxDesign} alt="UI/UX Design" className="w-5 h-5 object-contain" />} gradient="from-transparent to-transparent" title="UI/UX Design" desc="Web & mobile app design" onClick={() => setIsOpen(false)} />
                          <MobileServiceItem to="/servizi/sviluppo-web-app" icon={<img src={iconWebsiteDesign} alt="Website Design" className="w-5 h-5 object-contain" />} gradient="from-transparent to-transparent" title="Website Design" desc="Siti custom e landing" onClick={() => setIsOpen(false)} />
                          <MobileServiceItem to="/servizi/branding-ui-ux" icon={<Smartphone size={18} strokeWidth={1.5} />} gradient="from-[#EC4899] to-[#BE185D]" title="Mobile App Design" desc="App che gli utenti amano" onClick={() => setIsOpen(false)} />
                          <MobileServiceItem to="/servizi/branding-ui-ux" icon={<RefreshCw size={18} strokeWidth={1.5} />} gradient="from-[#F59E0B] to-[#B45309]" title="Website Redesign" desc="Look moderno, più impatto" onClick={() => setIsOpen(false)} />
                          <MobileServiceItem to="/servizi/consulenza-digitale" icon={<Search size={18} strokeWidth={1.5} />} gradient="from-[#10B981] to-[#047857]" title="Product UX/UI Audit" desc="Insights che guidano" onClick={() => setIsOpen(false)} />
                          <MobileServiceItem to="/servizi/branding-ui-ux" icon={<Palette size={18} strokeWidth={1.5} />} gradient="from-[#F43F5E] to-[#BE123C]" title="Branding & UI/UX" desc="Brand identity completa" onClick={() => setIsOpen(false)} />
                          <MobileServiceItem to="/servizi/branding-ui-ux" icon={<Pencil size={18} strokeWidth={1.5} />} gradient="from-[#A855F7] to-[#7C3AED]" title="Logo Design" desc="Diventa memorabile" onClick={() => setIsOpen(false)} last />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Chi Siamo */}
                <Link to="/chi-siamo" onClick={() => setIsOpen(false)} className="block px-6 py-5 text-[28px] font-semibold text-[#111827] border-b border-[#F3F4F6] hover:bg-[#F9FAFB] transition-colors">
                  {t('nav', 'chiSiamo')}
                </Link>

                {/* Risorse */}
                <Link to="/templates" onClick={() => setIsOpen(false)} className="block px-6 py-5 text-[28px] font-semibold text-[#111827] border-b border-[#F3F4F6] hover:bg-[#F9FAFB] transition-colors">
                  {t('nav', 'risorse')}
                </Link>

                {/* Lang switch */}
                <div className="flex items-center gap-3 px-6 py-4 text-sm">
                  <button onClick={() => setLang('it')} className={`font-medium ${lang === 'it' ? 'text-[#111827] font-bold' : 'text-[#9CA3AF]'}`}>IT</button>
                  <span className="text-[#D1D5DB]">|</span>
                  <button onClick={() => setLang('en')} className={`font-medium ${lang === 'en' ? 'text-[#111827] font-bold' : 'text-[#9CA3AF]'}`}>EN</button>
                </div>
              </div>
            </motion.div>

            {/* Fixed bottom CTA bar */}
            <div className="px-4 py-4 flex gap-3">
              <Link
                to="/casi-studio"
                onClick={() => setIsOpen(false)}
                className="w-14 h-14 rounded-2xl bg-[#1C35C8] flex items-center justify-center shrink-0 hover:bg-[#4F6FE8] transition-colors"
              >
                <ArrowDownRight size={22} className="text-white" />
              </Link>
              <a
                href={CAL_LINK}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="flex-1 h-14 rounded-2xl bg-[#1C35C8] text-white font-semibold text-base flex items-center justify-center gap-2 hover:bg-[#4F6FE8] transition-colors"
              >
                {t('nav', 'prenotaCall')} <ArrowRight size={18} />
              </a>
            </div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
