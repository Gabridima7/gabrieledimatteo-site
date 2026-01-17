import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Eye, Target, Palette } from 'lucide-react';

const ChiSiamo = () => {
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
              Nexus è uno <span className="font-serif-accent font-normal text-primary">studio</span>.
              <br />
              Non una web agency.
            </h1>
            <p className="text-muted-foreground text-lg">
              Progettiamo e costruiamo sistemi AI operativi per le PMI italiane.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-10 md:p-16 text-center max-w-4xl mx-auto"
            data-cursor="spotlight"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6">La nostra missione</h2>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              "Portare l'<span className="text-foreground">AI operativa</span> nelle PMI italiane, 
              trasformando processi manuali in sistemi intelligenti che generano 
              <span className="text-primary"> ROI misurabile</span>."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold">I nostri valori</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Zap, title: 'Speed', desc: 'Dalla strategia al deploy in settimane' },
              { icon: Eye, title: 'Clarity', desc: 'Comunicazione trasparente, sempre' },
              { icon: Target, title: 'ROI', desc: 'Ogni progetto deve essere misurabile' },
              { icon: Palette, title: 'Design', desc: 'L\'esperienza utente viene prima' }
            ].map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="glass-card p-6 text-center"
                data-cursor="spotlight"
              >
                <value.icon className="text-primary mx-auto mb-4" size={32} />
                <h3 className="font-semibold mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stack */}
      <section className="py-16 bg-gradient-blue-subtle">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-8">Il nostro stack</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {['Lovable', 'Supabase', 'GPT-4', 'Claude', 'n8n', 'Make', 'Vercel', 'React'].map((tech, i) => (
                <span 
                  key={i} 
                  className="px-4 py-2 rounded-full bg-secondary/50 text-secondary-foreground text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-16">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-10 max-w-2xl mx-auto"
            data-cursor="spotlight"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-2xl font-bold text-primary">
                G
              </div>
              <div>
                <h3 className="text-xl font-semibold">Gabriele</h3>
                <p className="text-muted-foreground text-sm">Founder & AI Product Builder</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Costruisco sistemi AI e prodotti digitali che funzionano davvero. 
              Dopo anni nel mondo delle startup e della consulenza, ho fondato Nexus 
              per portare l'AI operativa nelle PMI italiane con un approccio concreto e misurabile.
            </p>
            <div className="flex gap-2 mt-4">
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs">AI Product</span>
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs">Systems</span>
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs">Strategy</span>
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
            className="text-center"
          >
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

export default ChiSiamo;
