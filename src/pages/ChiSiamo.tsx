import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Eye, Target, Palette } from 'lucide-react';
import SectionBackground from '@/components/SectionBackground';
import TrustBar from '@/components/TrustBar';

const CAL_LINK = 'https://cal.com/nexus-agency/30min?overlayCalendar=true';

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];
const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.5, ease },
};

const ChiSiamo = () => {
  return (
    <div>
      {/* ═══ HERO ═══ */}
      <section className="relative min-h-[85vh] flex items-center pt-[120px]">
        <SectionBackground variant="hero" />
        <div className="section-container w-full relative z-[2]">
          <div className="flex flex-col lg:grid lg:grid-cols-[60%_40%] gap-8 lg:gap-12 items-center">
            <motion.div {...fadeUp}>
              <p className="text-[13px] mb-8 uppercase tracking-wide" style={{ color: 'rgba(255,255,255,0.45)' }}>
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
                {' / '}
                <span className="text-white/70">Chi siamo</span>
              </p>
              <h1 className="font-extrabold text-white leading-[1.1] tracking-[-0.02em] max-w-[600px]" style={{ fontSize: 'clamp(40px,5vw,72px)' }}>
                Offriamo soluzioni di design <span className="font-serif-accent font-normal text-primary">innovative</span> & talenti esperti
              </h1>
              <p className="text-lg max-w-[520px] mt-5 leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>
                Da un piccolo team di cinque persone a un team remoto globale di designer e sviluppatori professionisti che si impegnano a creare prodotti digitali di valore per persone in tutto il mondo.
              </p>
              <a href={CAL_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full px-8 py-4 font-semibold text-black text-sm transition-all duration-200 hover:shadow-[0_0_20px_rgba(208,246,1,0.4)] mt-9" style={{ background: '#d0f601' }}>
                Prenota una call gratuita <ArrowRight size={16} />
              </a>
              <div className="flex flex-wrap gap-10 mt-12 pt-12" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                {[
                  { value: '2024', label: 'Anno di fondazione' },
                  { value: '10+', label: 'Progetti completati' },
                  { value: '100%', label: 'Clienti soddisfatti' },
                ].map((s, i) => (
                  <div key={i} className="flex items-start gap-10">
                    {i > 0 && <div className="hidden sm:block w-px h-12 -ml-10 flex-shrink-0" style={{ background: 'rgba(255,255,255,0.1)' }} />}
                    <div>
                      <p className="font-bold text-white" style={{ fontSize: 'clamp(28px,3vw,40px)' }}>{s.value}</p>
                      <p className="text-[13px] mt-1" style={{ color: 'rgba(255,255,255,0.5)' }}>{s.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ TRUST BAR ═══ */}
      <TrustBar />

      {/* ═══ ABOUT / TEAM ═══ */}
      <section className="relative py-24">
        <SectionBackground variant="dark" />
        <div className="section-container relative z-[2]">
          {/* Intro text */}
          <motion.div {...fadeUp} className="mb-20 max-w-[900px]">
            <p className="text-sm uppercase tracking-wide mb-8" style={{ color: 'rgba(255,255,255,0.45)' }}>
              Conosciamoci meglio
            </p>
            <h2 className="text-3xl md:text-[44px] lg:text-[52px] font-bold text-white leading-[1.2]">
              A partire dal 2024, il nostro fondatore Gabriele ha costruito il team per portare innovazione nello spazio digitale, sviluppando prodotti di valore. Forte motivazione, passione per il{' '}
              <span style={{ color: 'rgba(255,255,255,0.4)' }}>design e l'apprendimento continuo è ciò che ci spinge ad andare avanti.</span>
            </h2>
          </motion.div>

          {/* Team grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Founder — large card */}
            <motion.div
              {...fadeUp}
              className="relative rounded-2xl overflow-hidden md:row-span-2 min-h-[400px] md:min-h-[560px] flex flex-col justify-between p-8"
              style={{ background: 'linear-gradient(180deg, #c4b5fd 0%, #a78bfa 40%, #7c3aed 100%)' }}
            >
              <div className="relative z-[1]">
                <h3 className="text-2xl font-bold text-white">Gabriele Di Matteo</h3>
                <p className="text-white/70 text-sm mt-1">Founder & CEO</p>
              </div>
              <div className="absolute bottom-0 right-0 w-[65%] h-[80%]">
                <img src={founderGd} alt="Gabriele Di Matteo" className="w-full h-full object-contain object-bottom" />
              </div>
              <a href="https://www.linkedin.com/in/gabrieledimatteo/" target="_blank" rel="noopener noreferrer" className="relative z-[1] w-10 h-10 rounded-full bg-white flex items-center justify-center mt-auto">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z" fill="#000"/></svg>
              </a>
            </motion.div>

            {/* Placeholder team cards */}
            {[
              { name: 'Prossimamente', role: 'Head of Design', bg: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)' },
              { name: 'Prossimamente', role: 'Lead Developer', bg: 'rgba(255,255,255,0.05)' },
            ].map((member, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: (i + 1) * 0.1 }}
                className="relative rounded-2xl overflow-hidden min-h-[260px] flex flex-col justify-between p-8"
                style={{ background: member.bg, border: '1px solid rgba(255,255,255,0.08)' }}
              >
                <div>
                  <h3 className="text-xl font-bold text-white">{member.name}</h3>
                  <p className="text-white/50 text-sm mt-1">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
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

export default ChiSiamo;
