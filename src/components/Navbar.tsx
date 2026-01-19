import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '@/assets/logo-nexus.png';

const navLinks = [
  { href: '/soluzioni', label: 'Soluzioni' },
  { href: '/prodotti-ai', label: 'Prodotti AI' },
  { href: '/casi-studio', label: 'Casi Studio' },
  { href: '/chi-siamo', label: 'Chi Siamo' },
  { href: '/templates', label: 'Templates' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [lang, setLang] = useState<'IT' | 'EN'>('IT');
  const location = useLocation();

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl">
      <div className="glass rounded-full px-4 md:px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2" data-cursor="spotlight">
          <img src={logo} alt="Nexus" className="h-8 w-auto brightness-[2] contrast-125" />
          <span className="font-semibold text-lg hidden sm:block">Nexus</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`px-4 py-2 rounded-full text-sm transition-all duration-200 ${
                location.pathname === link.href
                  ? 'text-primary-foreground bg-primary/20'
                  : 'text-muted-foreground hover:text-foreground hover:bg-white/5'
              }`}
              data-cursor="spotlight"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {/* Language toggle */}
          <div className="glass rounded-full p-1 flex text-xs">
            <button
              onClick={() => setLang('IT')}
              className={`px-2.5 py-1 rounded-full transition-all ${
                lang === 'IT' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground'
              }`}
              data-cursor="spotlight"
            >
              IT
            </button>
            <button
              onClick={() => setLang('EN')}
              className={`px-2.5 py-1 rounded-full transition-all ${
                lang === 'EN' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground'
              }`}
              data-cursor="spotlight"
            >
              EN
            </button>
          </div>

          {/* CTA Button */}
          <a
            href="https://cal.com/nexus-agency/30min?overlayCalendar=true"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 glow-box animate-pulse-glow hidden sm:block"
            data-cursor="spotlight"
          >
            Prenota Call
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground"
            data-cursor="spotlight"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden glass rounded-2xl mt-2 p-4"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-xl text-sm transition-all ${
                    location.pathname === link.href
                      ? 'text-primary-foreground bg-primary/20'
                      : 'text-muted-foreground hover:text-foreground hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://cal.com/nexus-agency/30min?overlayCalendar=true"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="bg-primary text-primary-foreground px-4 py-3 rounded-xl text-sm font-medium text-center mt-2"
              >
                Prenota Call
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
