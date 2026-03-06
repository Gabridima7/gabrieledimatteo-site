import { useRef } from 'react';
import SEOHead from '@/components/SEOHead';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Zap, Eye, Target, Palette } from 'lucide-react';
import SectionBackground from '@/components/SectionBackground';
import TrustBar from '@/components/TrustBar';
import founderGabriele from '@/assets/founder-gabriele.png';
import teamSara from '@/assets/team-sara.png';
import teamFabio from '@/assets/team-fabio.png';
import iconLinkedin from '@/assets/icons/icon-linkedin.png';
import iconCrescita from '@/assets/icons/icon-crescita.png';
import iconPersone from '@/assets/icons/icon-persone.png';
import iconConsapevolezza from '@/assets/icons/icon-consapevolezza.png';

const CAL_LINK = 'https://cal.com/nexus-agency/30min?overlayCalendar=true';

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];
const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.5, ease }
};

const aboutText = "A partire dal 2024, il nostro fondatore Gabriele ha costruito il team per portare innovazione nello spazio digitale, sviluppando prodotti di valore. Forte motivazione, passione per il design e l'apprendimento continuo è ciò che ci spinge ad andare avanti.";
const aboutWords = aboutText.split(' ');

const ScrollRevealWord = ({ word, index, total, scrollYProgress }: {word: string;index: number;total: number;scrollYProgress: ReturnType<typeof useScroll>['scrollYProgress'];}) => {
  const start = index / total;
  const end = (index + 1) / total;
  const color = useTransform(scrollYProgress, [start, end], ['rgba(255,255,255,0.2)', 'rgba(255,255,255,1)']);
  return <motion.span style={{ color }} className="inline-block mr-[0.3em]">{word}</motion.span>;
};

const ChiSiamo = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: aboutRef, offset: ['start 0.8', 'end 0.4'] });

  return (
    <>
      <SEOHead
        title="Chi Siamo — Gabriele Di Matteo | NEXUS Agency"
        description="NEXUS è guidata da Gabriele Di Matteo, esperto di sviluppo digitale e AI per PMI italiane."
        canonical="https://nexusagency.it/chi-siamo"
      />
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
                { value: '100%', label: 'Clienti soddisfatti' }].
                map((s, i) =>
                <div key={i} className="flex items-start gap-10">
                    {i > 0 && <div className="hidden sm:block w-px h-12 -ml-10 flex-shrink-0" style={{ background: 'rgba(255,255,255,0.1)' }} />}
                    <div>
                      <p className="font-bold text-white" style={{ fontSize: 'clamp(28px,3vw,40px)' }}>{s.value}</p>
                      <p className="text-[13px] mt-1" style={{ color: 'rgba(255,255,255,0.5)' }}>{s.label}</p>
                    </div>
                  </div>
                )}
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
          <div ref={aboutRef} className="mb-20 max-w-[900px]">
            <motion.p {...fadeUp} className="text-sm uppercase tracking-wide mb-8" style={{ color: 'rgba(255,255,255,0.45)' }}>
              Conosciamoci meglio
            </motion.p>
            <h2 className="text-3xl md:text-[44px] lg:text-[52px] font-bold leading-[1.2] flex flex-wrap">
              {aboutWords.map((word, i) =>
              <ScrollRevealWord key={i} word={word} index={i} total={aboutWords.length} scrollYProgress={scrollYProgress} />
              )}
            </h2>
          </div>

          {/* Team grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Founder — large card */}
            <motion.div
              {...fadeUp}
              className="relative rounded-2xl overflow-hidden md:row-span-2 min-h-[400px] md:min-h-[560px] flex flex-col justify-between p-8 transition-all duration-500 md:hover:shadow-[0_0_40px_rgba(167,139,250,0.3)]"
              style={{ background: 'linear-gradient(135deg, #e8e0f0 0%, #c4b5fd 30%, #a78bfa 60%, #7c6bc4 100%)' }}>
              
              <img src={founderGabriele} alt="Gabriele Di Matteo" className="absolute bottom-0 right-0 w-[95%] h-[90%] object-contain object-bottom" />
              <div className="relative z-[1]">
                <h3 className="text-2xl font-bold text-gray-900">Gabriele Di Matteo</h3>
                <p className="text-gray-600 text-sm mt-1">Founder </p>
              </div>
              <a href="https://www.linkedin.com/in/gabriele-di-matteo/" target="_blank" rel="noopener noreferrer" className="relative z-[1] w-14 h-14 rounded-xl overflow-hidden mt-auto">
                <img src={iconLinkedin} alt="LinkedIn" className="w-full h-full object-cover" />
              </a>
            </motion.div>

            {/* Placeholder team cards */}
            {[
            { name: 'Sara F.', role: 'Head of Design', bg: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)', img: teamSara },
            { name: 'Fabio L.', role: 'Lead Developer', bg: 'rgba(255,255,255,0.05)', img: teamFabio }].
            map((member, i) =>
            <motion.div
              key={i}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: (i + 1) * 0.1 }}
              className="group relative rounded-2xl overflow-hidden min-h-[260px] flex flex-col justify-between p-8 transition-all duration-500 md:hover:!bg-[rgba(28,53,200,0.3)]"
              style={{ background: member.bg, border: '1px solid rgba(255,255,255,0.08)' }}>
              
                <img src={member.img} alt={member.name} className="absolute bottom-0 right-0 w-[90%] h-[95%] object-contain object-bottom" />
                <div className="relative z-[1]">
                  <h3 className="text-xl font-bold text-white">{member.name}</h3>
                  <p className="text-white/50 text-sm mt-1">{member.role}</p>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* ═══ DNA / MISSION & VISION ═══ */}
      <section className="relative py-24">
        <SectionBackground variant="blue-center" />
        <div className="section-container relative z-[2]">
          <div className="flex flex-col lg:grid lg:grid-cols-[40%_60%] gap-16 lg:gap-20 items-start">
            {/* Left — Title */}
            <motion.div {...fadeUp}>
              <h2 className="text-4xl md:text-[56px] lg:text-[64px] font-bold text-white leading-[1.1]">
                Cosa è{' '}
                <span className="font-serif-accent font-normal text-primary">impresso</span>
                <br />
                nel nostro{' '}
                <span className="relative inline-block">
                  <span className="relative z-[1]">DNA</span>
                  <svg className="absolute -inset-x-3 -inset-y-2 w-[calc(100%+24px)] h-[calc(100%+16px)]" viewBox="0 0 100 50" fill="none" preserveAspectRatio="none">
                    <ellipse cx="50" cy="25" rx="48" ry="22" stroke="#d0f601" strokeWidth="2" fill="none" />
                  </svg>
                </span>
              </h2>
            </motion.div>

            {/* Right — Mission & Vision */}
            <div className="flex flex-col gap-16">
              <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }}>
                <p className="text-xs uppercase tracking-[0.2em] mb-4" style={{ color: 'rgba(255,255,255,0.4)' }}>MISSIONE</p>
                <p className="text-xl md:text-2xl lg:text-[28px] font-semibold text-white leading-[1.4]">
                  Siamo un partner attento che fornisce soluzioni innovative di Design & Sviluppo per Startup, PMI e aziende leader di mercato.
                </p>
              </motion.div>

              <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.2 }}>
                <p className="text-xs uppercase tracking-[0.2em] mb-4" style={{ color: 'rgba(255,255,255,0.4)' }}>VISIONE</p>
                <p className="text-xl md:text-2xl lg:text-[28px] font-semibold text-white leading-[1.4]">
                  Siamo un'agenzia di prodotto digitale a ciclo completo che costruisce e trasforma progetti straordinari con un design human-centric per le migliori aziende.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ OUR VALUES ═══ */}
      <section className="relative py-24">
        <SectionBackground variant="blue-center" />
        <div className="section-container relative z-[2]">
          {/* Header */}
          <motion.div {...fadeUp} className="text-center mb-16 max-w-[700px] mx-auto">
            <h2 className="text-4xl md:text-[56px] font-bold text-white leading-[1.1] mb-2 font-serif-accent">
              I nostri valori
            </h2>
            <svg className="mx-auto mb-8" width="180" height="20" viewBox="0 0 180 20" fill="none">
              <path d="M2 10 C20 2, 30 18, 45 10 C60 2, 70 18, 90 10 C110 2, 120 18, 135 10 C150 2, 160 18, 178 10" stroke="#d0f601" strokeWidth="3" strokeLinecap="round" fill="none" />
            </svg>
            <p className="text-base leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>
              Persone, consapevolezza e crescita. L'idea concettuale del nostro sistema di valori è una trinità coerente. Le nostre persone, essendo il valore principale dell'azienda, raggiungono una crescita efficace rimanendo sempre orientate allo scopo.
            </p>
          </motion.div>

          {/* Grid 3x2 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Row 1 — Image placeholder */}
            <motion.div {...fadeUp} className="rounded-2xl overflow-hidden min-h-[320px] flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div className="w-full h-full flex items-center justify-center p-8">
                <Zap size={48} className="text-white/20" />
              </div>
            </motion.div>

            {/* Row 1 — Growth card */}
            <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }} className="rounded-2xl overflow-hidden min-h-[320px] flex flex-col justify-end p-8" style={{ background: 'linear-gradient(180deg, #c4b5fd 0%, #a78bfa 50%, #7c6bc4 100%)' }}>
              <img src={iconCrescita} alt="Crescita" className="w-14 h-14 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Crescita</h3>
              <p className="text-gray-700 text-[15px] leading-relaxed">
                Lavoriamo costantemente per migliorare le nostre competenze e conoscenze, così da poter continuare a fornire il miglior servizio ai nostri clienti, con risultati di altissima qualità.
              </p>
            </motion.div>

            {/* Row 1 — Image placeholder */}
            <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.2 }} className="rounded-2xl overflow-hidden min-h-[320px] flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div className="w-full h-full flex items-center justify-center p-8">
                <Eye size={48} className="text-white/20" />
              </div>
            </motion.div>

            {/* Row 2 — People card */}
            <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }} className="rounded-2xl overflow-hidden min-h-[320px] flex flex-col justify-end p-8" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <img src={iconPersone} alt="Persone" className="w-14 h-14 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-3">Persone</h3>
              <p className="text-[15px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>
                Creare relazioni oneste, affidabili e reciprocamente vantaggiose con i nostri clienti. Prenderci cura di ogni membro del team. Rispondere e soddisfare le esigenze degli utenti, sempre.
              </p>
            </motion.div>

            {/* Row 2 — Image placeholder */}
            <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.2 }} className="rounded-2xl overflow-hidden min-h-[320px] flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div className="w-full h-full flex items-center justify-center p-8">
                <Target size={48} className="text-white/20" />
              </div>
            </motion.div>

            {/* Row 2 — Awareness card */}
            <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.3 }} className="rounded-2xl overflow-hidden min-h-[320px] flex flex-col justify-end p-8" style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <img src={iconConsapevolezza} alt="Consapevolezza" className="w-14 h-14 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-3">Consapevolezza</h3>
              <p className="text-[15px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>
                Rimanere sempre orientati allo scopo nel lavoro e nel completamento dei progetti. Essere consapevoli aiuta a restare pienamente coinvolti nel processo.
              </p>
            </motion.div>
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
            data-cursor="spotlight">
            
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
            className="text-center mb-12">
            
            <h2 className="text-3xl font-bold">I nostri valori</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
            { icon: Zap, title: 'Speed', desc: 'Dalla strategia al deploy in settimane' },
            { icon: Eye, title: 'Clarity', desc: 'Comunicazione trasparente, sempre' },
            { icon: Target, title: 'ROI', desc: 'Ogni progetto deve essere misurabile' },
            { icon: Palette, title: 'Design', desc: 'L\'esperienza utente viene prima' }].
            map((value, i) =>
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass-card p-6 text-center"
              data-cursor="spotlight">
              
                <value.icon className="text-primary mx-auto mb-4" size={32} />
                <h3 className="font-semibold mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.desc}</p>
              </motion.div>
            )}
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
            className="text-center max-w-3xl mx-auto">
            
            <h2 className="text-3xl font-bold mb-8">Il nostro stack</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {['Lovable', 'Supabase', 'GPT-4', 'Claude', 'n8n', 'Make', 'Vercel', 'React'].map((tech, i) =>
              <span
                key={i}
                className="px-4 py-2 rounded-full bg-secondary/50 text-secondary-foreground text-sm">
                
                  {tech}
                </span>
              )}
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
            data-cursor="spotlight">
            
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
            className="text-center">
            
            <a
              href="https://cal.com/nexus-agency/30min?overlayCalendar=true"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-4 rounded-full text-lg font-medium transition-all duration-300 glow-box inline-flex items-center gap-2"
              data-cursor="spotlight">
              
              Prenota Call
              <ArrowRight size={20} />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
    </>
  );
};

export default ChiSiamo;