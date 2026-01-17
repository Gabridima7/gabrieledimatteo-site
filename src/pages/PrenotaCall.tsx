import { motion } from 'framer-motion';
import { Calendar, Mail, CheckCircle } from 'lucide-react';

const PrenotaCall = () => {
  return (
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
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
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
                  <Calendar className="text-primary" size={24} />
                  <span className="font-semibold">30 minuti</span>
                </div>
                <p className="text-muted-foreground text-sm">
                  Call gratuita e senza impegno. Potrai fare tutte le domande che vuoi.
                </p>
              </div>

              <div className="mt-6 flex items-center gap-2 text-muted-foreground">
                <Mail size={18} />
                <span className="text-sm">Oppure scrivici: contact@nexusagency.it</span>
              </div>
            </motion.div>

            {/* Right: Calendar embed placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glass-card p-8 min-h-[500px] flex items-center justify-center"
              data-cursor="spotlight"
            >
              <div className="text-center">
                <Calendar className="text-primary mx-auto mb-6" size={48} />
                <h3 className="text-xl font-semibold mb-3">Calendario</h3>
                <p className="text-muted-foreground mb-6">
                  Qui verrà integrato il calendario Calendly.
                </p>
                <div className="text-xs text-muted-foreground p-4 bg-secondary/30 rounded-xl">
                  <code>
                    {`<!-- Calendly inline widget -->`}
                    <br />
                    {`<div class="calendly-inline-widget" data-url="..." />`}
                  </code>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrenotaCall;
