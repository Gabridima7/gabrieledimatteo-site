import { motion } from 'framer-motion';
import { Mail, CheckCircle, Calendar } from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/button';

const PrenotaCall = () => {
  const handleBooking = () => {
    window.open('https://cal.com/nexus-agency/30min?overlayCalendar=true', '_blank');
  };

  return (
    <>
      <SEOHead
        title="Prenota una Call Gratuita — 30 Minuti | NEXUS Agency"
        description="Call gratuita 30 min con Gabriele Di Matteo. Analizziamo il tuo progetto digitale."
        canonical="https://nexusagency.it/prenota-call"
      />
    <div className="pt-24">
      {/* Header */}
      <section className="py-16">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Prenota una Call <span className="font-serif-accent font-normal text-primary">Strategica</span>
            </h1>
            <p className="text-muted-foreground text-lg mb-8">
              30 minuti per capire insieme le opportunità AI per la tua azienda.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-8">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Left: Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold mb-6">Cosa discuteremo:</h2>
              <ul className="space-y-4">
                {[
                  'I tuoi processi attuali e dove l\'AI può fare la differenza',
                  'Il prodotto o agent più adatto alle tue esigenze',
                  'Tempistiche realistiche e costi indicativi',
                  'I prossimi passi concreti'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="text-primary shrink-0 mt-0.5" size={20} />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 p-6 glass-card" data-cursor="spotlight">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-primary text-2xl">📅</span>
                  <span className="font-semibold">30 minuti</span>
                </div>
                <p className="text-muted-foreground text-sm">
                  Call gratuita e senza impegno. Potrai fare tutte le domande che vuoi.
                </p>
              </div>

              <div className="mt-6 flex items-center gap-2 text-muted-foreground">
                <Mail size={18} />
                <span className="text-sm">Oppure scrivici: info@nexusagency.it</span>
              </div>
            </motion.div>

            {/* Right: CTA Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glass-card p-8 flex flex-col items-center justify-center text-center min-h-[400px]"
              data-cursor="spotlight"
            >
              <Calendar className="w-16 h-16 text-primary mb-6" />
              <h3 className="text-2xl font-bold mb-4">Scegli il tuo slot</h3>
              <p className="text-muted-foreground mb-8 max-w-sm">
                Clicca il pulsante per aprire il calendario e prenotare la tua call strategica gratuita.
              </p>
              <Button
                size="lg"
                className="text-lg px-8 py-6"
                onClick={handleBooking}
              >
                <Calendar className="mr-2" size={20} />
                Prenota Ora
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default PrenotaCall;
