import { Link } from 'react-router-dom';
import { Linkedin, Instagram, Youtube, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import logo from '@/assets/logo-nexus.png';

const CAL_LINK = 'https://cal.com/nexus-agency/30min?overlayCalendar=true';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-white/[0.06]">
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img src={logo} alt="NEXUS" className="h-10 w-auto brightness-[2] contrast-125" />
              <span className="font-bold text-xl text-white">NEXUS</span>
            </Link>
            <p className="text-nexus-gray text-sm leading-relaxed mb-5">
              {t('footer', 'tagline')}
            </p>
            <div className="flex items-center gap-3">
              <a href="https://linkedin.com/company/nexusagency" target="_blank" rel="noopener noreferrer" className="text-nexus-gray hover:text-white transition-colors"><Linkedin size={20} /></a>
              <a href="https://www.instagram.com/nexus.agency.it/" target="_blank" rel="noopener noreferrer" className="text-nexus-gray hover:text-white transition-colors"><Instagram size={20} /></a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-nexus-gray hover:text-white transition-colors"><Youtube size={20} /></a>
            </div>
          </div>

          {/* Servizi */}
          <div>
            <h4 className="font-semibold text-white mb-4">{t('footer', 'servizi')}</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/soluzioni" className="text-nexus-gray hover:text-white transition-colors">{t('mega', 'sviluppo')}</Link></li>
              <li><Link to="/soluzioni" className="text-nexus-gray hover:text-white transition-colors">{t('mega', 'ai')}</Link></li>
              <li><Link to="/soluzioni" className="text-nexus-gray hover:text-white transition-colors">{t('mega', 'branding')}</Link></li>
              <li><Link to="/soluzioni" className="text-nexus-gray hover:text-white transition-colors">{t('mega', 'consulenza')}</Link></li>
            </ul>
          </div>

          {/* Link */}
          <div>
            <h4 className="font-semibold text-white mb-4">{t('footer', 'link')}</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/casi-studio" className="text-nexus-gray hover:text-white transition-colors">{t('footer', 'casiStudio')}</Link></li>
              <li><Link to="/templates" className="text-nexus-gray hover:text-white transition-colors">{t('footer', 'risorse')}</Link></li>
              <li><Link to="/chi-siamo" className="text-nexus-gray hover:text-white transition-colors">{t('footer', 'chiSiamo')}</Link></li>
            </ul>
          </div>

          {/* Contatti */}
          <div>
            <h4 className="font-semibold text-white mb-4">{t('footer', 'contatti')}</h4>
            <p className="text-nexus-gray text-sm mb-4">gabriele@nexusagency.it</p>
            <a
              href={CAL_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm">

              {t('nav', 'prenotaCall')}
              <ArrowRight size={14} />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-12 mt-12 border-t border-white/[0.06] gap-4">
          <p className="text-nexus-gray text-xs">
            © 2026 NEXUS Connect. P.IVA 01766560054
          </p>
          <div className="flex items-center gap-4 text-xs">
            <Link to="/privacy" className="text-nexus-gray hover:text-white transition-colors">{t('footer', 'privacy')}</Link>
            <Link to="/cookie" className="text-nexus-gray hover:text-white transition-colors">{t('footer', 'cookie')}</Link>
          </div>
        </div>
      </div>
    </footer>);

};

export default Footer;