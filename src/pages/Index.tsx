import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Globe, Bot, Palette, Lightbulb, Phone, FileSearch, PenTool, Code, TestTube, Rocket } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { fadeUpVariants, staggerContainer, viewportConfig } from '@/lib/animations';
import SEOHead from '@/components/SEOHead';
import logoHomeleven from '@/assets/logos/logo-homeleven.png';
import logoBigliaSerramenti from '@/assets/logos/logo-biglia-serramenti.png';
import logoAllfiber from '@/assets/logos/logo-allfiber.png';
import logoBigliaDesign from '@/assets/logos/logo-biglia-design.png';
import logoRevelliGroup from '@/assets/logos/logo-revelli-group.png';

const CAL_LINK = 'https://cal.com/nexus-agency/30min?overlayCalendar=true';

/* ─── useCountUp Hook ─── */
function useCountUp(end: number, duration = 1500, trigger = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    let start = 0;
    const startTime = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [trigger, end, duration]);
  return count;
}

/* ─── Geometric decoration SVGs ─── */
const GeoShapes = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <svg className="absolute top-[15%] left-[5%] w-32 h-32 animate-float opacity-[0.05]" viewBox="0 0 100 100"><polygon points="50,10 90,90 10,90" fill="white"/></svg>
    <svg className="absolute top-[30%] right-[8%] w-24 h-24 animate-float opacity-[0.04]" style={{animationDelay:'1s'}} viewBox="0 0 100 60"><polygon points="0,60 30,0 60,60" fill="white"/></svg>
    <svg className="absolute bottom-[20%] left-[12%] w-20 h-20 animate-float opacity-[0.06]" style={{animationDelay:'2s'}} viewBox="0 0 80 80"><rect x="10" y="10" width="60" height="60" transform="rotate(20 40 40)" fill="white"/></svg>
  </div>
);

/* ═══════════════════════════════════
   HOMEPAGE COMPONENT
═══════════════════════════════════ */
const Index = () => {
  const { t } = useLanguage();
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [email, setEmail] = useState('');
  const [statsInView, setStatsInView] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  // Stats intersection observer
  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setStatsInView(true); obs.disconnect(); } },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const contractsCount = useCountUp(52850, 1500, statsInView);
  const clientsCount = useCountUp(5, 1500, statsInView);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setEmailSubmitted(true);
  };

  const services = [
    { icon: Globe, title: t('services', 's1Title'), desc: t('services', 's1Desc'), link: '/soluzioni' },
    { icon: Bot, title: t('services', 's2Title'), desc: t('services', 's2Desc'), link: '/soluzioni' },
    { icon: Palette, title: t('services', 's3Title'), desc: t('services', 's3Desc'), link: '/soluzioni' },
    { icon: Lightbulb, title: t('services', 's4Title'), desc: t('services', 's4Desc'), link: '/soluzioni' },
  ];

  const processSteps = [
    { icon: Phone, title: t('process', 's1'), desc: t('process', 's1d') },
    { icon: FileSearch, title: t('process', 's2'), desc: t('process', 's2d') },
    { icon: PenTool, title: t('process', 's3'), desc: t('process', 's3d') },
    { icon: Code, title: t('process', 's4'), desc: t('process', 's4d') },
    { icon: TestTube, title: t('process', 's5'), desc: t('process', 's5d') },
    { icon: Rocket, title: t('process', 's6'), desc: t('process', 's6d') },
  ];

  const caseStudies = [
    { title: t('cases', 'c1Title'), desc: t('cases', 'c1Desc'), badge: t('cases', 'c1Badge'), link: '/casi-studio' },
    { title: t('cases', 'c2Title'), desc: t('cases', 'c2Desc'), badge: t('cases', 'c2Badge'), link: '/casi-studio' },
    { title: t('cases', 'c3Title'), desc: t('cases', 'c3Desc'), badge: t('cases', 'c3Badge'), link: '/casi-studio' },
  ];

  return (
    <>
      <SEOHead
        title="NEXUS Agency — AI e Sviluppo Web per PMI Italiane"
        description="NEXUS è l'agenzia digitale italiana specializzata in AI automation, sviluppo web e app, branding per PMI. Prenota una call gratuita."
        canonical="https://nexusagency.it"
      />

      {/* JSON-LD Organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "NEXUS Agency",
            url: "https://nexusagency.it",
            logo: "https://nexusagency.it/logo.png",
            foundingDate: "2025",
            founder: { "@type": "Person", name: "Gabriele Di Matteo" },
            sameAs: ["https://linkedin.com/company/nexusagency", "https://instagram.com/nexusagency"],
            contactPoint: { "@type": "ContactPoint", email: "gabriele@nexusagency.it", availableLanguage: ["Italian", "English"] },
          }),
        }}
      />

      {/* ─── HERO ─── */}
      <section className="relative h-screen flex flex-col overflow-hidden bg-[#070B1A]">
        {/* Deep blue radial glow */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 80% 60% at 30% 50%, rgba(28,53,200,0.35) 0%, rgba(28,53,200,0.08) 40%, transparent 70%), radial-gradient(ellipse 50% 50% at 70% 60%, rgba(79,111,232,0.15) 0%, transparent 60%)',
          }}
        />
        {/* Subtle noise texture overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'0.5\'/%3E%3C/svg%3E")', backgroundSize: '128px 128px' }} />

        <div className="section-container relative z-10 flex flex-col flex-1 pt-8 md:pt-4 pb-6">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center flex-1">
            {/* Left – Text */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="badge-pill inline-block mb-4">{t('hero', 'badge')}</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-[28px] md:text-hero text-white mb-4 leading-[1.1] tracking-[-0.02em] font-extrabold"
              >
                {t('hero', 'title1')}
                <br />
                <span className="italic font-light text-[hsl(var(--nexus-electric,228_85%_60%))]">{t('hero', 'title2')}</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="text-body-lg text-white/60 max-w-lg mb-6"
              >
                {t('hero', 'subtitle')}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center gap-3"
              >
                <Link to="/casi-studio" className="w-12 h-12 rounded-full bg-[#d0f601] flex items-center justify-center hover:scale-105 transition-transform">
                  <ArrowRight size={20} className="text-black -rotate-45" />
                </Link>
                <a href={CAL_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary px-6 py-3 text-sm md:px-8 md:py-4 md:text-base rounded-full bg-[#d0f601] hover:bg-[#bde001] text-nexus-navy whitespace-nowrap">
                  {t('hero', 'cta1')}
                  <ArrowRight size={18} />
                </a>
              </motion.div>
            </div>

            {/* Right – Glassmorphism visual */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="hidden lg:flex items-center justify-center relative"
            >
              {/* Glow behind cards */}
              <div className="absolute w-64 h-64 rounded-full bg-nexus-electric/20 blur-[80px]" />
              <div className="absolute w-40 h-40 rounded-full bg-nexus-blue/30 blur-[60px] translate-x-16 translate-y-16" />

              {/* Glass cards stack */}
              <div className="relative w-[340px] h-[420px]">
                {/* Back card */}
                <div className="absolute top-8 -left-4 w-[300px] h-[380px] rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md rotate-[-6deg] shadow-2xl" />
                {/* Middle card */}
                <div className="absolute top-4 left-2 w-[300px] h-[380px] rounded-2xl border border-white/10 bg-white/[0.06] backdrop-blur-md rotate-[-2deg] shadow-2xl" />
                {/* Front card */}
                <div className="absolute top-0 left-8 w-[300px] h-[380px] rounded-2xl border border-white/[0.15] bg-white/[0.08] backdrop-blur-xl rotate-[3deg] shadow-2xl p-6 flex flex-col gap-4">
                  {/* Fake UI lines */}
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full border border-white/20" />
                      <div
                        className="h-2.5 rounded-full"
                        style={{
                          width: `${60 + Math.sin(i * 2) * 30}%`,
                          background: i === 2 || i === 4
                            ? 'linear-gradient(90deg, #4F6FE8, #10B981)'
                            : 'rgba(255,255,255,0.12)',
                        }}
                      />
                    </div>
                  ))}
                  {/* Accent icons */}
                  <div className="absolute -top-5 -right-5 w-14 h-14 rounded-full bg-gradient-to-br from-nexus-electric to-nexus-blue flex items-center justify-center shadow-lg shadow-nexus-electric/30">
                    <Bot size={22} className="text-white" />
                  </div>
                  <div className="absolute -bottom-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-500/30">
                    <Lightbulb size={18} className="text-white" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* ─── Bottom info bar ─── */}
          <div className="pb-6 pt-6 border-t border-white/[0.06]">
            <div className="flex flex-col md:flex-row">
              {/* Left block */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex-1 py-4 md:pr-10"
              >
                <p className="font-mono text-[16px] text-white/25 mb-2">{'{/'}</p>
                <p className="text-white font-medium leading-[1.4] max-w-md" style={{ fontSize: 'clamp(16px, 1.5vw, 20px)' }}>
                  Lavoriamo con PMI italiane,<br />artigiani e imprenditori digitali
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {['PMI', 'Startup', 'E-commerce'].map((tag) => (
                    <span key={tag} className="px-4 py-1.5 rounded-full text-[13px] font-medium text-white/70 bg-white/[0.08] border border-white/[0.12]">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Divider */}
              <div className="w-full h-px md:w-px md:h-auto bg-white/10" />

              {/* Right block */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex-1 py-4 md:pl-10"
              >
                <p className="font-mono text-[16px] text-white/25 mb-2">{'{/'}</p>
                <p className="text-white font-medium leading-[1.4] max-w-md" style={{ fontSize: 'clamp(16px, 1.5vw, 20px)' }}>
                  Aiutiamo le aziende a<br />crescere con AI e digitale
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {['AI Automation', 'Web App', 'Branding'].map((tag) => (
                    <span key={tag} className="px-4 py-1.5 rounded-full text-[13px] font-medium text-white/70 bg-white/[0.08] border border-white/[0.12]">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TRUST BAR ─── */}
      <section className="bg-nexus-offwhite py-12 section-light">
        <div className="section-container">
          <div className="flex items-center gap-8 md:gap-0">
            <p className="text-nexus-gray text-sm font-medium shrink-0 mr-8 hidden md:block">{t('trust', 'label')}</p>
            <div className="flex-1 overflow-hidden marquee-mask">
              <div className="flex animate-marquee hover:[animation-play-state:paused] gap-16 items-center" style={{ width: 'max-content' }}>
                {[
                  { src: logoHomeleven, name: 'Homeleven' },
                  { src: logoBigliaSerramenti, name: 'Biglia Serramenti' },
                  { src: logoAllfiber, name: 'All Fiber' },
                  { src: logoBigliaDesign, name: 'Biglia Design' },
                  { src: logoRevelliGroup, name: 'Revelli Group' },
                  // Duplicate for seamless loop
                  { src: logoHomeleven, name: 'Homeleven' },
                  { src: logoBigliaSerramenti, name: 'Biglia Serramenti' },
                  { src: logoAllfiber, name: 'All Fiber' },
                  { src: logoBigliaDesign, name: 'Biglia Design' },
                  { src: logoRevelliGroup, name: 'Revelli Group' },
                ].map((logo, i) => (
                  <img
                    key={i}
                    src={logo.src}
                    alt={logo.name}
                    className="h-10 md:h-12 w-auto object-contain opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                    loading="lazy"
                    width={120}
                    height={48}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section className="bg-nexus-navy py-20">
        <div className="section-container">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportConfig} className="text-center mb-14">
            <motion.span variants={fadeUpVariants} className="badge-pill inline-block mb-4">{t('services', 'badge')}</motion.span>
            <motion.h2 variants={fadeUpVariants} className="text-section text-white">{t('services', 'title')}</motion.h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {services.map((s, i) => (
              <motion.div key={i} variants={fadeUpVariants}>
                <Link to={s.link} className="service-card block h-full">
                  <div className="icon-glass mb-5">
                    <s.icon size={22} className="text-nexus-electric" />
                  </div>
                  <h3 className="text-card-title text-white mb-2">{s.title}</h3>
                  <p className="text-body text-white/70 mb-4 line-clamp-2">{s.desc}</p>
                  <span className="text-nexus-electric text-sm font-medium inline-flex items-center gap-1 group">
                    {t('services', 'scopri')} <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── STATS ─── */}
      <section ref={statsRef} className="py-20 bg-gradient-nexus">
        <div className="section-container">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-0">
            {[
              { value: `€${contractsCount.toLocaleString('it-IT')}`, label: t('stats', 's1Label') },
              { value: String(clientsCount), label: t('stats', 's2Label') },
              { value: t('stats', 's3Value'), label: t('stats', 's3Label') },
            ].map((stat, i) => (
              <div key={i} className="text-center flex-1 relative">
                {i > 0 && <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-px h-16 bg-white/20" />}
                <p className="text-[clamp(48px,5vw,72px)] font-bold text-white tracking-tight tabular-nums leading-none mb-2">
                  {stat.value}
                </p>
                <p className="text-caption text-white/60">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CASE STUDIES ─── */}
      <section className="bg-nexus-offwhite py-20 section-light">
        <div className="section-container">
          <div className="flex items-end justify-between mb-12">
            <motion.h2 variants={fadeUpVariants} initial="hidden" whileInView="visible" viewport={viewportConfig} className="text-section text-nexus-navy">
              {t('cases', 'title')}
            </motion.h2>
            <Link to="/casi-studio" className="text-nexus-blue font-semibold text-sm hover:text-nexus-electric transition-colors inline-flex items-center gap-1">
              {t('cases', 'viewAll')} <ArrowRight size={14} />
            </Link>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="grid md:grid-cols-3 gap-6"
          >
            {caseStudies.map((c, i) => (
              <motion.div key={i} variants={fadeUpVariants}>
                <Link to={c.link} className="block bg-white rounded-2xl shadow-md overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
                  {/* Placeholder cover */}
                  <div className="aspect-video bg-gradient-nexus relative">
                    <div className="absolute inset-0 flex items-center justify-center text-white/30 text-2xl font-bold">{c.title}</div>
                  </div>
                  <div className="p-6">
                    <span className="badge-pill mb-3 inline-block">{c.badge}</span>
                    <h3 className="text-card-title text-nexus-navy mb-2">{c.title}</h3>
                    <p className="text-body text-nexus-gray mb-4 line-clamp-2">{c.desc}</p>
                    <span className="text-nexus-blue text-sm font-semibold inline-flex items-center gap-1">
                      {t('cases', 'viewCase')} <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── LEAD MAGNET ─── */}
      <section className="bg-nexus-blue py-20">
        <div className="section-container max-w-2xl mx-auto text-center">
          <motion.h2 variants={fadeUpVariants} initial="hidden" whileInView="visible" viewport={viewportConfig} className="text-section text-white mb-4">
            {t('lead', 'title')}
          </motion.h2>
          <motion.p variants={fadeUpVariants} initial="hidden" whileInView="visible" viewport={viewportConfig} className="text-body-lg text-white/80 mb-8">
            {t('lead', 'subtitle')}
          </motion.p>

          {emailSubmitted ? (
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-white text-xl font-semibold">
              {t('lead', 'success')}
            </motion.div>
          ) : (
            <motion.form
              onSubmit={handleEmailSubmit}
              variants={fadeUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="flex flex-col sm:flex-row gap-3"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t('lead', 'placeholder')}
                required
                className="flex-1 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 px-4 py-3 focus:outline-none focus:border-white focus:shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-all"
              />
              <button type="submit" className="bg-white text-nexus-blue px-6 py-3 rounded-xl font-semibold hover:bg-white/90 transition-colors inline-flex items-center justify-center gap-2">
                {t('lead', 'cta')} <ArrowRight size={16} />
              </button>
            </motion.form>
          )}
          <p className="text-xs text-white/60 mt-4">{t('lead', 'disclaimer')}</p>
        </div>
      </section>

      {/* ─── PROCESS ─── */}
      <section className="bg-nexus-navy py-20">
        <div className="section-container">
          <motion.h2
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="text-section text-white text-center mb-14"
          >
            {t('process', 'title')}
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 relative"
          >
            {/* Dashed connector (desktop) */}
            <div className="hidden lg:block absolute top-10 left-[8%] right-[8%] h-px border-t-2 border-dashed border-white/15 z-0" />

            {processSteps.map((step, i) => (
              <motion.div key={i} variants={fadeUpVariants} className="text-center relative z-10">
                <div className="w-14 h-14 rounded-full bg-nexus-blue flex items-center justify-center mx-auto mb-4 text-white font-bold text-sm">
                  {i + 1}
                </div>
                <step.icon size={20} className="text-nexus-electric mx-auto mb-2" />
                <h4 className="text-sm font-semibold text-white mb-1">{step.title}</h4>
                <p className="text-xs text-white/50">{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── TESTIMONIAL ─── */}
      <section className="bg-nexus-offwhite py-20 section-light">
        <div className="section-container max-w-3xl mx-auto text-center">
          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <span className="text-[120px] leading-none text-nexus-blue/15 font-serif block -mb-10">"</span>
            <p className="text-2xl italic text-gray-800 mb-8 leading-relaxed">
              {t('testimonial', 'quote')}
            </p>
            <p className="text-sm font-semibold text-nexus-navy">{t('testimonial', 'name')}</p>
            <p className="text-sm text-nexus-gray">{t('testimonial', 'company')}</p>
          </motion.div>
        </div>
      </section>

      {/* ─── CTA FINALE ─── */}
      <section className="bg-nexus-navy py-24">
        <div className="section-container text-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <motion.h2 variants={fadeUpVariants} className="text-section text-white mb-4">
              {t('cta', 'title')}
            </motion.h2>
            <motion.p variants={fadeUpVariants} className="text-body-lg text-white/60 mb-10 max-w-xl mx-auto">
              {t('cta', 'subtitle')}
            </motion.p>
            <motion.div variants={fadeUpVariants}>
              <a href={CAL_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary px-10 py-4 text-base">
                {t('cta', 'button')}
                <ArrowRight size={18} />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Index;
