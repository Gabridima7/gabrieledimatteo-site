import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, FileText, Settings, Database, TrendingUp } from 'lucide-react';

const products = [
  {
    icon: FileText,
    name: 'NEXUS REPORT Agent',
    tagline: 'Da messaggi, file e note → report strutturati.',
    forWho: 'Team che raccolgono info da fonti multiple',
    output: 'Report PDF/Word formattati automaticamente',
    pricing: 'Setup + Canone mensile'
  },
  {
    icon: Settings,
    name: 'NEXUS OPS Agent',
    tagline: 'Riassume, assegna task, aggiorna dashboard.',
    forWho: 'Operations manager e team leader',
    output: 'Task assegnati + dashboard real-time',
    pricing: 'Setup + Canone mensile'
  },
  {
    icon: Database,
    name: 'NEXUS KNOWLEDGE Agent',
    tagline: 'Trasforma documenti in knowledge base interrogabile.',
    forWho: 'Aziende con molte procedure e documenti',
    output: 'Risposte istantanee da documenti aziendali',
    pricing: 'Una tantum + manutenzione'
  },
  {
    icon: TrendingUp,
    name: 'NEXUS SALES Agent',
    tagline: 'Lead scoring + follow-up + note call.',
    forWho: 'Team commerciali B2B',
    output: 'Lead qualificati e follow-up automatici',
    pricing: 'Setup + Canone mensile'
  }
];

const ProdottiAI = () => {
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
              Prodotti AI <span className="font-serif-accent font-normal text-primary">pronti</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Acquista un modulo, integralo nei tuoi processi, scala.
              <br />
              Personalizzabili per le tue esigenze specifiche.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-8">
            {products.map((product, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="glass-card p-8"
                data-cursor="spotlight"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                    <product.icon className="text-primary" size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{product.name}</h3>
                    <p className="text-muted-foreground">{product.tagline}</p>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex gap-3">
                    <span className="text-xs uppercase tracking-wide text-muted-foreground w-20">Per chi:</span>
                    <span className="text-sm">{product.forWho}</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-xs uppercase tracking-wide text-muted-foreground w-20">Output:</span>
                    <span className="text-sm">{product.output}</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-xs uppercase tracking-wide text-muted-foreground w-20">Modalità:</span>
                    <span className="text-sm text-primary">{product.pricing}</span>
                  </div>
                </div>

                <a
                  href="https://cal.com/nexus-agency/30min?overlayCalendar=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-primary/10 hover:bg-primary/20 text-primary py-3 rounded-full font-medium transition-all inline-flex items-center justify-center gap-2"
                  data-cursor="spotlight"
                >
                  Prenota demo
                  <ArrowRight size={18} />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-12 text-center max-w-3xl mx-auto"
            data-cursor="spotlight"
          >
            <h2 className="text-3xl font-bold mb-4">
              Richiedi accesso
            </h2>
            <p className="text-muted-foreground mb-8">
              Parla con noi per scoprire quale prodotto fa al caso tuo.
            </p>
            <a
              href="https://cal.com/nexus-agency/30min?overlayCalendar=true"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-4 rounded-full text-lg font-medium transition-all duration-300 glow-box inline-flex items-center gap-2"
              data-cursor="spotlight"
            >
              Prenota Call
              <ArrowRight size={20} />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProdottiAI;
