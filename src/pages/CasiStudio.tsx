import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, TrendingDown, Zap } from 'lucide-react';

const caseStudies = [
  {
    title: 'HR Reporting Automation',
    context: 'PMI manifatturiera con 80 dipendenti',
    problem: 'HR passava 10 ore/settimana a compilare report presenze e performance da 3 sistemi diversi.',
    solution: 'Agent AI che raccoglie dati automaticamente, genera report formattati e li invia via email.',
    stack: ['Lovable', 'GPT-4', 'Supabase', 'Google Sheets API'],
    result: '8 ore/settimana risparmiate',
    resultIcon: Clock
  },
  {
    title: 'Customer Support AI Agent',
    context: 'E-commerce B2C con 50k ordini/mese',
    problem: 'Team support oberato, tempi di risposta medi di 4 ore per richieste semplici.',
    solution: 'Chatbot AI integrato con sistema ordini che gestisce 70% delle richieste automaticamente.',
    stack: ['Lovable', 'Claude', 'Supabase', 'WhatsApp API'],
    result: '-60% tempo risposta medio',
    resultIcon: TrendingDown
  },
  {
    title: 'Operations Dashboard',
    context: 'Agenzia di servizi con 5 sedi',
    problem: 'Dati operativi sparsi in Excel, Notion, CRM e email. Nessuna visione d\'insieme.',
    solution: 'Dashboard unificata con AI che riassume KPI e segnala anomalie.',
    stack: ['Lovable', 'GPT-4', 'Supabase', 'API integrations'],
    result: 'Decisioni 3x più veloci',
    resultIcon: Zap
  }
];

const CasiStudio = () => {
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
              Risultati <span className="font-serif-accent font-normal text-primary">misurabili</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Non promesse. Use case reali con ROI documentato.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16">
        <div className="section-container">
          <div className="space-y-8">
            {caseStudies.map((study, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="glass-card p-8 md:p-10"
                data-cursor="spotlight"
              >
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Left: Content */}
                  <div className="lg:col-span-2 space-y-6">
                    <div>
                      <span className="text-xs uppercase tracking-wide text-muted-foreground">{study.context}</span>
                      <h3 className="text-2xl font-bold mt-2">{study.title}</h3>
                    </div>

                    <div>
                      <h4 className="text-sm uppercase tracking-wide text-muted-foreground mb-2">La sfida</h4>
                      <p className="text-foreground">{study.problem}</p>
                    </div>

                    <div>
                      <h4 className="text-sm uppercase tracking-wide text-muted-foreground mb-2">La nostra soluzione</h4>
                      <p className="text-foreground">{study.solution}</p>
                    </div>

                    <div>
                      <h4 className="text-sm uppercase tracking-wide text-muted-foreground mb-2">Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {study.stack.map((tech, j) => (
                          <span key={j} className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right: Result */}
                  <div className="flex items-center justify-center">
                    <div className="text-center">
                      <study.resultIcon className="text-primary mx-auto mb-4" size={40} />
                      <p className="text-3xl md:text-4xl font-bold text-primary">{study.result}</p>
                    </div>
                  </div>
                </div>
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
              Vuoi lo stesso risultato?
            </h2>
            <p className="text-muted-foreground mb-8">
              Prenota una call e scopri come possiamo aiutarti.
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

export default CasiStudio;
