import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Globe, Code, Bot, Palette, Lightbulb, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import logo from '@/assets/logo-nexus.png';

const CAL_LINK = 'https://cal.com/nexus-agency/30min?overlayCalendar=true';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [servicesExpanded, setServicesExpanded] = useState(false);
  const { lang, setLang, t } = useLanguage();
  const location = useLocation();

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
        <div className="section-container flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <img src={logo} alt="NEXUS Agency" className="h-8 w-auto brightness-[2] contrast-125" />
            <span className="font-bold text-lg text-white">NEXUS</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {/* Servizi with mega menu */}
            <div
              className="relative"
              onMouseEnter={() => setMegaOpen(true)}
              onMouseLeave={() => setMegaOpen(false)}
            >
              <button className="nav-link px-4 py-2 flex items-center gap-1">
                {t('nav', 'servizi')}
                <ChevronDown size={14} className={`transition-transform duration-200 ${megaOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {megaOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-[calc(100%+12px)] left-1/2 -translate-x-1/2 w-[700px] glass-mega p-8"
                  >
                    <div className="grid grid-cols-3 gap-6 mb-6">
                      {/* Col 1 */}
                      <div>
                        <p className="text-[10px] font-bold tracking-widest text-nexus-gray mb-3">{t('mega', 'colSviluppo')}</p>
                        <Link to="/soluzioni" className="flex items-start gap-3 group">
                          <div className="icon-glass shrink-0">
                            <Globe size={20} className="text-nexus-electric" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-white group-hover:text-nexus-electric transition-colors">{t('mega', 'sviluppo')}</p>
                            <p className="text-xs text-nexus-gray mt-0.5">{t('mega', 'sviluppoDesc')}</p>
                          </div>
                        </Link>
                      </div>
                      {/* Col 2 */}
                      <div>
                        <p className="text-[10px] font-bold tracking-widest text-nexus-gray mb-3">{t('mega', 'colAi')}</p>
                        <Link to="/soluzioni" className="flex items-start gap-3 group">
                          <div className="icon-glass shrink-0">
                            <Bot size={20} className="text-nexus-electric" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-white group-hover:text-nexus-electric transition-colors">{t('mega', 'ai')}</p>
                            <p className="text-xs text-nexus-gray mt-0.5">{t('mega', 'aiDesc')}</p>
                          </div>
                        </Link>
                      </div>
                      {/* Col 3 */}
                      <div>
                        <p className="text-[10px] font-bold tracking-widest text-nexus-gray mb-3">{t('mega', 'colDesign')}</p>
                        <Link to="/soluzioni" className="flex items-start gap-3 group">
                          <div className="icon-glass shrink-0">
                            <Palette size={20} className="text-nexus-electric" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-white group-hover:text-nexus-electric transition-colors">{t('mega', 'branding')}</p>
                            <p className="text-xs text-nexus-gray mt-0.5">{t('mega', 'brandingDesc')}</p>
                          </div>
                        </Link>
                      </div>
                    </div>

                    {/* Full width consulenza */}
                    <div className="border-t border-white/10 pt-4 mb-4">
                      <Link to="/soluzioni" className="flex items-center gap-3 group">
                        <div className="icon-glass shrink-0">
                          <Lightbulb size={20} className="text-nexus-electric" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-white group-hover:text-nexus-electric transition-colors">{t('mega', 'consulenza')}</p>
                          <p className="text-xs text-nexus-gray">{t('mega', 'consulenzaDesc')}</p>
                        </div>
                      </Link>
                    </div>

                    {/* Solutions pills */}
                    <div className="border-t border-white/10 pt-4 flex items-center gap-2">
                      <span className="text-[10px] font-bold tracking-widest text-nexus-gray">{t('mega', 'soluzioni')}</span>
                      {['mvp', 'redesign', 'retainer'].map((key) => (
                        <span key={key} className="badge-pill">{t('mega', key)}</span>
                      ))}
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

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-nexus-navy flex flex-col"
          >
            <div className="flex items-center justify-between px-6 h-[72px]">
              <Link to="/" onClick={() => setIsOpen(false)} className="flex items-center gap-2">
                <img src={logo} alt="NEXUS" className="h-8 w-auto brightness-[2] contrast-125" />
                <span className="font-bold text-lg text-white">NEXUS</span>
              </Link>
              <button onClick={() => setIsOpen(false)} className="p-2 text-white">
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-4">
              {/* Servizi accordion */}
              <button
                onClick={() => setServicesExpanded(!servicesExpanded)}
                className="flex items-center justify-between w-full py-4 text-lg font-medium text-white border-b border-white/10"
              >
                {t('nav', 'servizi')}
                <ChevronDown size={18} className={`transition-transform ${servicesExpanded ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {servicesExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="py-2 pl-4 space-y-3">
                      <Link to="/soluzioni" onClick={() => setIsOpen(false)} className="block text-white/70 text-sm py-1">{t('mega', 'sviluppo')}</Link>
                      <Link to="/soluzioni" onClick={() => setIsOpen(false)} className="block text-white/70 text-sm py-1">{t('mega', 'ai')}</Link>
                      <Link to="/soluzioni" onClick={() => setIsOpen(false)} className="block text-white/70 text-sm py-1">{t('mega', 'branding')}</Link>
                      <Link to="/soluzioni" onClick={() => setIsOpen(false)} className="block text-white/70 text-sm py-1">{t('mega', 'consulenza')}</Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-4 text-lg font-medium text-white border-b border-white/10"
                >
                  {link.label}
                </Link>
              ))}
              <Link to="/templates" onClick={() => setIsOpen(false)} className="block py-4 text-lg font-medium text-white border-b border-white/10">
                {t('nav', 'risorse')}
              </Link>

              {/* Mobile lang switch */}
              <div className="flex items-center gap-3 py-4 text-sm">
                <button onClick={() => setLang('it')} className={lang === 'it' ? 'text-white font-semibold' : 'text-white/40'}>IT</button>
                <span className="text-white/30">|</span>
                <button onClick={() => setLang('en')} className={lang === 'en' ? 'text-white font-semibold' : 'text-white/40'}>EN</button>
              </div>
            </div>

            {/* Mobile CTA */}
            <div className="p-6">
              <a
                href={CAL_LINK}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="btn-primary w-full justify-center py-4 text-base"
              >
                {t('nav', 'prenotaCall')}
                <ArrowRight size={18} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
