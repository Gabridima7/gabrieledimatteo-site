import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, FileText, Calculator, MessageSquare, CheckSquare, Download } from 'lucide-react';

const templates = [
  {
    icon: FileText,
    title: 'AI Roadmap Template',
    description: 'Template strutturato per pianificare l\'adozione AI nella tua azienda.',
    format: 'PDF / Notion'
  },
  {
    icon: Calculator,
    title: 'Use Case ROI Calculator',
    description: 'Calcola il potenziale ritorno sugli investimenti per i tuoi use case AI.',
    format: 'Excel'
  },
  {
    icon: MessageSquare,
    title: 'Prompt Pack',
    description: 'Raccolta di prompt ottimizzati per Operations, HR e Sales.',
    format: 'Notion'
  },
  {
    icon: CheckSquare,
    title: 'AI Readiness Checklist',
    description: 'Valuta se la tua azienda è pronta per implementare soluzioni AI.',
    format: 'PDF'
  }
];

const Templates = () => {
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
              Template e <span className="font-serif-accent font-normal text-primary">risorse</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Strumenti pratici per portare l'AI nella tua azienda.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Templates Grid */}
      <section className="py-16">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-6">
            {templates.map((template, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="glass-card p-8"
                data-cursor="spotlight"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <template.icon className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{template.title}</h3>
                    <span className="text-xs text-muted-foreground">{template.format}</span>
                  </div>
                </div>
                <p className="text-muted-foreground mb-6">{template.description}</p>
                <button
                  className="w-full bg-primary/10 hover:bg-primary/20 text-primary py-3 rounded-full font-medium transition-all inline-flex items-center justify-center gap-2"
                  data-cursor="spotlight"
                >
                  <Download size={18} />
                  Scarica template
                </button>
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
              Preferisci parlare con un esperto?
            </h2>
            <p className="text-muted-foreground mb-8">
              Prenota una call gratuita per discutere il tuo progetto.
            </p>
            <Link
              to="/prenota-call"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-4 rounded-full text-lg font-medium transition-all duration-300 glow-box inline-flex items-center gap-2"
              data-cursor="spotlight"
            >
              Prenota Call
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Templates;
