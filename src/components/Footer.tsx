import { Link } from 'react-router-dom';
import { Linkedin, Instagram, Youtube, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { useApplicationForm } from '@/context/ApplicationFormContext';
import logo from '@/assets/logo-nexus.png';
import bgFooterDesktop from '@/assets/bg-footer-desktop.png';
import bgFooterMobile from '@/assets/bg-footer-mobile.png';

const Footer = () => {
  const { t, lang } = useLanguage();
  const { openApplicationForm } = useApplicationForm();

  const sviluppoServices = [
    { label: lang === 'it' ? 'Sviluppo Web' : 'Web Development', to: '/servizi/sviluppo-web' },
    { label: 'Landing Page', to: '/servizi/landing-page' },
    { label: 'Web App', to: '/servizi/web-app' },
    { label: lang === 'it' ? 'Software Gestionale' : 'Management Software', to: '/servizi/software-gestionale' },
    { label: lang === 'it' ? 'Prodotto SaaS' : 'SaaS Product', to: '/servizi/prodotto-saas' },
  ];

  const aiServices = [
    { label: 'AI Automation', to: '/servizi/ai-automation' },
    { label: 'AI Chatbot', to: '/servizi/ai-chatbot' },
    { label: lang === 'it' ? 'Consulenza Digitale' : 'Digital Consulting', to: '/servizi/consulenza-digitale' },
    { label: lang === 'it' ? 'Integrazioni API' : 'API Integrations', to: '/servizi/integrazioni-api' },
  ];

  const designServices = [
    { label: 'UI/UX Design', to: '/servizi/ui-ux-design' },
    { label: 'Website Design', to: '/servizi/website-design' },
    { label: 'Mobile App Design', to: '/servizi/mobile-app-design' },
    { label: 'Website Redesign', to: '/servizi/website-redesign' },
    { label: 'Product UX/UI Audit', to: '/servizi/product-audit' },
  ];

  const solutions = [
    { label: lang === 'it' ? 'MVP Design' : 'MVP Design', to: '/soluzioni/mvp' },
    { label: 'Product Redesign', to: '/soluzioni/product-redesign' },
    { label: lang === 'it' ? 'Estensione Team' : 'Team Extension', to: '/soluzioni/estensione-team' },
  ];

  const linkCol = [
    { label: t('footer', 'casiStudio'), to: '/casi-studio' },
    { label: t('footer', 'risorse'), to: '/templates' },
    { label: t('footer', 'chiSiamo'), to: '/chi-siamo' },
  ];

  const aziendaCol = [
    { label: lang === 'it' ? 'Chi siamo' : 'About', to: '/chi-siamo' },
    { label: 'Blog', to: '/templates' },
    { label: lang === 'it' ? 'Lavora con noi' : 'Careers', action: openApplicationForm },
    { label: t('footer', 'contattaci'), to: '/contatti' },
  ];

  const ColTitle = ({ children }: { children: React.ReactNode }) => (
    <h4 className="font-semibold text-white text-[15px] mb-5">{children}</h4>
  );

  const ColLink = ({ to, label, action }: { to?: string; label: string; action?: () => void }) => {
    if (action) {
      return (
        <li>
          <button onClick={action} className="text-muted-foreground hover:text-white transition-colors text-[14px]">
            {label}
          </button>
        </li>
      );
    }
    return (
      <li>
        <Link to={to!} className="text-muted-foreground hover:text-white transition-colors text-[14px]">
          {label}
        </Link>
      </li>
    );
  };

  return (
    <footer className="border-t border-white/[0.06] relative overflow-hidden">
      {/* Background blur images */}
      <picture className="absolute inset-0 z-0 pointer-events-none">
        <source media="(min-width: 768px)" srcSet={bgFooterDesktop} />
        <img
          src={bgFooterMobile}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-60"
          loading="lazy"
        />
      </picture>

      <div className="section-container py-16 relative z-10">
        {/* Main grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-[1.2fr_1fr_1fr_1fr_1fr_1fr] gap-x-8 gap-y-10">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-5">
              <img src={logo} alt="NEXUS" className="h-10 w-auto brightness-[2] contrast-125" />
              <span className="font-bold text-xl text-white">NEXUS</span>
            </Link>

            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              {t('footer', 'tagline')}
            </p>

            <div className="mb-6">
              <p className="text-white font-semibold text-[14px] mb-2">
                {lang === 'it' ? 'Scrivici' : 'Drop us a line'}
              </p>
              <a href="mailto:info@nexusagency.it" className="text-muted-foreground hover:text-white transition-colors text-[14px]">
                info@nexusagency.it
              </a>
            </div>

            <div className="flex items-center gap-3">
              <a href="https://linkedin.com/company/nexusagency" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-white transition-colors"><Linkedin size={20} /></a>
              <a href="https://www.instagram.com/nexus.agency.it/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-white transition-colors"><Instagram size={20} /></a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-white transition-colors"><Youtube size={20} /></a>
            </div>
          </div>

          {/* Sviluppo */}
          <div>
            <ColTitle>{lang === 'it' ? 'Sviluppo' : 'Development'}</ColTitle>
            <ul className="space-y-3">
              {sviluppoServices.map(s => <ColLink key={s.to} to={s.to} label={s.label} />)}
            </ul>
          </div>

          {/* AI & Automation */}
          <div>
            <ColTitle>AI & Automation</ColTitle>
            <ul className="space-y-3">
              {aiServices.map(s => <ColLink key={s.to} to={s.to} label={s.label} />)}
            </ul>
          </div>

          {/* Design */}
          <div>
            <ColTitle>Design</ColTitle>
            <ul className="space-y-3">
              {designServices.map(s => <ColLink key={s.to} to={s.to} label={s.label} />)}
            </ul>
          </div>

          {/* Soluzioni */}
          <div>
            <ColTitle>{lang === 'it' ? 'Soluzioni' : 'Solutions'}</ColTitle>
            <ul className="space-y-3">
              {solutions.map(s => <ColLink key={s.to} to={s.to} label={s.label} />)}
            </ul>
          </div>

          {/* Azienda */}
          <div>
            <ColTitle>{lang === 'it' ? 'Azienda' : 'Company'}</ColTitle>
            <ul className="space-y-3">
              {aziendaCol.map((item, i) => (
                <ColLink key={i} to={item.to} label={item.label} action={item.action} />
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-12 mt-12 border-t border-white/[0.06] gap-4">
          <p className="text-muted-foreground text-xs">
            © 2026 NEXUS Connect. P.IVA 01766560054
          </p>
          <div className="flex items-center gap-4 text-xs">
            <Link to="/privacy" className="text-muted-foreground hover:text-white transition-colors">{t('footer', 'privacy')}</Link>
            <Link to="/cookie" className="text-muted-foreground hover:text-white transition-colors">{t('footer', 'cookie')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
