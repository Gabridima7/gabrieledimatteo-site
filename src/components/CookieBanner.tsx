import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Settings, X, Check } from 'lucide-react';
import { Switch } from '@/components/ui/switch';

export interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
  timestamp: string;
}

const defaultPreferences: CookiePreferences = {
  essential: true,
  analytics: false,
  marketing: false,
  functional: false,
  timestamp: '',
};

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>(defaultPreferences);

  useEffect(() => {
    const savedPreferences = localStorage.getItem('cookie_preferences');
    if (!savedPreferences) {
      setIsVisible(true);
    }
  }, []);

  const savePreferences = (prefs: CookiePreferences) => {
    const prefsWithTimestamp = {
      ...prefs,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem('cookie_preferences', JSON.stringify(prefsWithTimestamp));
    setIsVisible(false);
    setShowSettings(false);
  };

  const handleAcceptAll = () => {
    savePreferences({
      essential: true,
      analytics: true,
      marketing: true,
      functional: true,
      timestamp: '',
    });
  };

  const handleRejectAll = () => {
    savePreferences({
      essential: true,
      analytics: false,
      marketing: false,
      functional: false,
      timestamp: '',
    });
  };

  const handleSavePreferences = () => {
    savePreferences(preferences);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Main Banner */}
      <AnimatePresence>
        {!showSettings && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
          >
            <div className="max-w-4xl mx-auto">
              <div className="p-6 md:p-8 border border-border/50 rounded-2xl bg-[#0a0e1a] backdrop-blur-xl shadow-2xl">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                      Informativa sui Cookie 🍪
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Utilizziamo cookie per migliorare la tua esperienza. Alcuni sono essenziali, altri ci
                      aiutano a capire come usi il sito. Puoi gestire le tue preferenze o leggere la
                      nostra <Link to="/cookie" className="text-primary hover:text-primary/80 underline">Cookie Policy</Link>.
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center gap-3">
                    <button
                      onClick={handleRejectAll}
                      className="px-5 py-2.5 rounded-lg border border-border/50 text-sm font-medium hover:bg-muted/50 transition-colors"
                    >
                      Rifiuta
                    </button>
                    <button
                      onClick={() => setShowSettings(true)}
                      className="px-5 py-2.5 rounded-lg border border-border/50 text-sm font-medium hover:bg-muted/50 transition-colors flex items-center gap-2"
                    >
                      <Settings size={16} />
                      Personalizza
                    </button>
                    <button
                      onClick={handleAcceptAll}
                      className="px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
                    >
                      Accetta Tutti
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Settings Modal */}
      <AnimatePresence>
        {showSettings && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="w-full max-w-2xl p-6 md:p-8 border border-border/50 rounded-2xl bg-[#0a0e1a] shadow-2xl"
            >
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-semibold">Impostazioni Cookie</h2>
                <button
                  onClick={() => setShowSettings(false)}
                  className="p-2 hover:bg-muted/50 rounded-lg transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {/* Essenziali - Always Active */}
                <div className="bg-muted/30 rounded-xl p-5 border border-border/30">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Check size={18} className="text-primary" />
                      <h3 className="font-semibold">Essenziali</h3>
                    </div>
                    <span className="text-xs font-medium text-primary border border-primary/50 px-2 py-1 rounded-full">
                      SEMPRE ATTIVI
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Necessari per il funzionamento del sito.
                  </p>
                </div>

                {/* Analytics */}
                <div className="bg-muted/30 rounded-xl p-5 border border-border/30">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold">Analytics</h3>
                    <Switch
                      checked={preferences.analytics}
                      onCheckedChange={(checked) =>
                        setPreferences((prev) => ({ ...prev, analytics: checked }))
                      }
                    />
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Permettono di analizzare l'uso del sito.
                  </p>
                </div>

                {/* Marketing */}
                <div className="bg-muted/30 rounded-xl p-5 border border-border/30">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold">Marketing</h3>
                    <Switch
                      checked={preferences.marketing}
                      onCheckedChange={(checked) =>
                        setPreferences((prev) => ({ ...prev, marketing: checked }))
                      }
                    />
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Per mostrarti contenuti pertinenti.
                  </p>
                </div>

                {/* Functional */}
                <div className="bg-muted/30 rounded-xl p-5 border border-border/30">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold">Functional</h3>
                    <Switch
                      checked={preferences.functional}
                      onCheckedChange={(checked) =>
                        setPreferences((prev) => ({ ...prev, functional: checked }))
                      }
                    />
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Per funzionalità avanzate.
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-end gap-4 pt-4 border-t border-border/30">
                <button
                  onClick={handleRejectAll}
                  className="px-5 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  Rifiuta Tutti
                </button>
                <button
                  onClick={handleSavePreferences}
                  className="px-6 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
                >
                  Salva Preferenze
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CookieBanner;
