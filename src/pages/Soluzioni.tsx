import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Users, Target, Shield, Bot, Briefcase, BarChart3, Wallet, Code, Globe, ShoppingCart, LayoutDashboard } from 'lucide-react';

const Soluzioni = () => {
  return (
    <div className="pt-24">
      {/* Header */}
      <section className="py-16">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-center md:justify-between gap-6"
          >
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Soluzioni AI per <span className="font-serif-accent font-normal text-primary">PMI</span>
              </h1>
              <p className="text-muted-foreground text-lg max-w-xl">
                Dalla formazione all'implementazione, tutto ciò che serve per portare l'AI nella tua azienda.
              </p>
            </div>
            <Link
              to="/prenota-call"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-full font-medium transition-all duration-300 glow-box inline-flex items-center gap-2 shrink-0"
              data-cursor="spotlight"
            >
              Prenota Call
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* AI Education & Strategy */}
      <section className="py-16">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              AI Education & <span className="font-serif-accent font-normal text-primary">Strategy</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-10 max-w-2xl">
              Formiamo il tuo team e costruiamo insieme una roadmap AI concreta e misurabile.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: BookOpen, title: 'Workshop executive', desc: 'Sessione di 2h per il management' },
                { icon: Users, title: 'Training team', desc: '1–4 settimane di formazione pratica' },
                { icon: Target, title: 'AI Roadmap', desc: 'Priorità e ROI definiti' },
                { icon: Shield, title: 'Governance & policy', desc: 'Uso sicuro e conforme' }
              ].map((item, i) => (
                <div key={i} className="glass-card p-6" data-cursor="spotlight">
                  <item.icon className="text-primary mb-4" size={28} />
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* AI Agents & Automazioni */}
      <section className="py-16 bg-gradient-blue-subtle">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              AI Agents & <span className="font-serif-accent font-normal text-primary">Automazioni</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-10 max-w-2xl">
              Agenti e flussi automatici che eliminano lavoro manuale e liberano tempo per attività strategiche.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Users, title: 'HR', desc: 'Report, presenze, performance' },
                { icon: Briefcase, title: 'Sales', desc: 'Lead, CRM enrichment' },
                { icon: BarChart3, title: 'Operations', desc: 'Ticket, processi' },
                { icon: Wallet, title: 'Finance', desc: 'Riepiloghi, estrazioni' }
              ].map((item, i) => (
                <div key={i} className="glass-card p-6" data-cursor="spotlight">
                  <item.icon className="text-primary mb-4" size={28} />
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Link
                to="/prenota-call"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-full font-medium transition-all inline-flex items-center gap-2"
                data-cursor="spotlight"
              >
                Richiedi demo
                <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* AI Products Teaser */}
      <section className="py-16">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-10 flex flex-col md:flex-row items-center justify-between gap-6"
            data-cursor="spotlight"
          >
            <div className="flex items-center gap-4">
              <Bot className="text-primary" size={40} />
              <div>
                <h3 className="text-xl font-semibold">Preferisci un prodotto pronto?</h3>
                <p className="text-muted-foreground">Scopri i nostri agent AI pronti all'uso</p>
              </div>
            </div>
            <Link
              to="/prodotti-ai"
              className="glass hover:bg-white/10 text-foreground px-6 py-3 rounded-full font-medium transition-all inline-flex items-center gap-2"
              data-cursor="spotlight"
            >
              Vai a Prodotti AI
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Soluzioni Digitali Custom */}
      <section className="py-16">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Soluzioni Digitali <span className="font-serif-accent font-normal text-primary">Custom</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-10 max-w-2xl">
              Abilitatori digitali quando servono al sistema AI.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Code, title: 'Web app interne', desc: 'Strumenti su misura' },
                { icon: Globe, title: 'Siti e landing', desc: 'Presenza online efficace' },
                { icon: ShoppingCart, title: 'E-commerce', desc: 'Vendita online integrata' },
                { icon: LayoutDashboard, title: 'Portali e dashboard', desc: 'Visualizzazione dati' }
              ].map((item, i) => (
                <div key={i} className="glass-card p-6" data-cursor="spotlight">
                  <item.icon className="text-primary mb-4" size={28} />
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
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
              Pronto a iniziare?
            </h2>
            <p className="text-muted-foreground mb-8">
              Prenota una call strategica gratuita di 30 minuti.
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

export default Soluzioni;
