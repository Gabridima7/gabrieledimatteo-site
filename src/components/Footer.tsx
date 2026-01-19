import { Link } from 'react-router-dom';
import { Linkedin, Instagram } from 'lucide-react';
import logo from '@/assets/logo-nexus.png';
const Footer = () => {
  return <footer className="border-t border-border/50 mt-24">
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img src={logo} alt="Nexus" className="h-10 w-auto brightness-[2] contrast-125" />
              <span className="font-semibold text-xl">Nexus</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Il tuo Partner AI a 360°.
              <br />
              Trasformiamo il modo in cui le PMI lavorano attraverso l'Intelligenza Artificiale.
            </p>
            <div className="text-muted-foreground text-xs space-y-1">
              
              <p>info@nexusagency.it</p>
            </div>
          </div>

          {/* Servizi */}
          <div>
            <h4 className="font-semibold mb-4">Servizi</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/soluzioni" className="text-muted-foreground hover:text-foreground transition-colors">
                  AI Education & Strategy
                </Link>
              </li>
              <li>
                <Link to="/soluzioni" className="text-muted-foreground hover:text-foreground transition-colors">
                  AI Agents & Automazioni
                </Link>
              </li>
              <li>
                <Link to="/prodotti-ai" className="text-muted-foreground hover:text-foreground transition-colors">
                  Prodotti AI
                </Link>
              </li>
            </ul>
          </div>

          {/* Risorse */}
          <div>
            <h4 className="font-semibold mb-4">Risorse</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/casi-studio" className="text-muted-foreground hover:text-foreground transition-colors">
                  Casi Studio
                </Link>
              </li>
              <li>
                <Link to="/templates" className="text-muted-foreground hover:text-foreground transition-colors">
                  Templates
                </Link>
              </li>
              <li>
                <a href="https://cal.com/nexus-agency/30min?overlayCalendar=true" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                  Prenota Call
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/cookie" className="text-muted-foreground hover:text-foreground transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-12 mt-12 border-t border-border/30">
          <p className="text-muted-foreground text-xs">
            © 2026 Nexus Connect di Di Matteo Gabriele. Tutti i diritti riservati.
          </p>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" data-cursor="spotlight">
              <Linkedin size={20} />
            </a>
            <a href="https://www.instagram.com/nexus.agency.it/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" data-cursor="spotlight">
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;