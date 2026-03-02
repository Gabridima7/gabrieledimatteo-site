import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, FileSearch, PenTool, Code, TestTube, Rocket } from 'lucide-react';
import iconSviluppoWebAppNew from '@/assets/icons/icon-sviluppo-web-app-new.webp';
import iconAiAutomation from '@/assets/icons/icon-ai-automation.png';
import iconUiUxDesign from '@/assets/icons/icon-ui-ux-design.png';
import iconConsulenzaDigitale from '@/assets/icons/icon-consulenza-digitale.webp';
import heroNexus from '@/assets/hero-nexus.png';
import { useLanguage } from '@/context/LanguageContext';
import { fadeUpVariants, staggerContainer, viewportConfig } from '@/lib/animations';
import SEOHead from '@/components/SEOHead';
import logoHomeleven from '@/assets/logos/logo-homeleven.png';
import logoBigliaSerramenti from '@/assets/logos/logo-biglia-serramenti.png';
import logoAllfiber from '@/assets/logos/logo-allfiber.png';
import logoBigliaDesign from '@/assets/logos/logo-biglia-design.png';
import logoRevelliGroup from '@/assets/logos/logo-revelli-group.png';
import logoNewClient from '@/assets/logos/logo-new-client.png';
import logoOneUp from '@/assets/logos/logo-oneup.png';

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
const GeoShapes = () =>
<div className="absolute inset-0 overflow-hidden pointer-events-none">
    <svg className="absolute top-[15%] left-[5%] w-32 h-32 animate-float opacity-[0.05]" viewBox="0 0 100 100"><polygon points="50,10 90,90 10,90" fill="white" /></svg>
    <svg className="absolute top-[30%] right-[8%] w-24 h-24 animate-float opacity-[0.04]" style={{ animationDelay: '1s' }} viewBox="0 0 100 60"><polygon points="0,60 30,0 60,60" fill="white" /></svg>
    <svg className="absolute bottom-[20%] left-[12%] w-20 h-20 animate-float opacity-[0.06]" style={{ animationDelay: '2s' }} viewBox="0 0 80 80"><rect x="10" y="10" width="60" height="60" transform="rotate(20 40 40)" fill="white" /></svg>
  </div>;


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
      ([e]) => {if (e.isIntersecting) {setStatsInView(true);obs.disconnect();}},
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
  { icon: iconSviluppoWebAppNew, title: t('services', 's1Title'), desc: t('services', 's1Desc'), link: '/soluzioni' },
  { icon: iconAiAutomation, title: t('services', 's2Title'), desc: t('services', 's2Desc'), link: '/soluzioni' },
  { icon: iconUiUxDesign, title: t('services', 's3Title'), desc: t('services', 's3Desc'), link: '/soluzioni' },
  { icon: iconConsulenzaDigitale, title: t('services', 's4Title'), desc: t('services', 's4Desc'), link: '/soluzioni' }];


  const processSteps = [
  { icon: Phone, title: t('process', 's1'), desc: t('process', 's1d') },
  { icon: FileSearch, title: t('process', 's2'), desc: t('process', 's2d') },
  { icon: PenTool, title: t('process', 's3'), desc: t('process', 's3d') },
  { icon: Code, title: t('process', 's4'), desc: t('process', 's4d') },
  { icon: TestTube, title: t('process', 's5'), desc: t('process', 's5d') },
  { icon: Rocket, title: t('process', 's6'), desc: t('process', 's6d') }];


  const caseStudies = [
  { title: t('cases', 'c1Title'), desc: t('cases', 'c1Desc'), badge: t('cases', 'c1Badge'), link: '/casi-studio' },
  { title: t('cases', 'c2Title'), desc: t('cases', 'c2Desc'), badge: t('cases', 'c2Badge'), link: '/casi-studio' },
  { title: t('cases', 'c3Title'), desc: t('cases', 'c3Desc'), badge: t('cases', 'c3Badge'), link: '/casi-studio' }];


  return (
    <>
      <SEOHead
        title="NEXUS Agency — AI e Sviluppo Web per PMI Italiane"
        description="NEXUS è l'agenzia digitale italiana specializzata in AI automation, sviluppo web e app, branding per PMI. Prenota una call gratuita."
        canonical="https://nexusagency.it" />


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
            contactPoint: { "@type": "ContactPoint", email: "gabriele@nexusagency.it", availableLanguage: ["Italian", "English"] }
          })
        }} />


      {/* ─── HERO ─── */}
      <section className="relative h-screen flex flex-col overflow-hidden">

        <div className="section-container lg:pl-2 relative z-10 flex flex-col flex-1 pt-8 md:pt-2 pb-6">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center flex-1 md:max-lg:gap-4">
            {/* Left – Text */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}>

                <span className="badge-pill inline-block mb-4 md:max-lg:mb-2">{t('hero', 'badge')}</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-[28px] md:text-hero text-white mb-4 md:max-lg:mb-2 leading-[1.1] tracking-[-0.02em] font-extrabold">

                {t('hero', 'title1')}
                <br />
                <span className="italic font-light text-[hsl(var(--nexus-electric,228_85%_60%))]">{t('hero', 'title2')}</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="text-body-lg text-white/60 max-w-lg mb-6 md:max-lg:mb-4">

                {t('hero', 'subtitle')}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center gap-3">

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
              className="hidden lg:flex items-center justify-center relative">
              <img src={heroNexus} alt="NEXUS Agency Hero" className="w-full max-w-[480px] h-auto object-contain drop-shadow-2xl" />
            </motion.div>
          </div>

          {/* ─── Bottom info bar ─── */}
          <div className="pb-6 pt-6 md:max-lg:pt-3 md:max-lg:pb-3 border-t border-white/[0.06]">
            <div className="flex flex-col md:flex-row md:justify-center">
              {/* Left block */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="py-4 md:pr-10 md:max-w-md">

                <p className="font-mono text-[16px] text-white/25 mb-2">{'{/'}</p>
                <p className="text-white font-medium leading-[1.4] max-w-md" style={{ fontSize: 'clamp(16px, 1.5vw, 20px)' }}>
                  Lavoriamo con PMI italiane,<br />artigiani e imprenditori digitali
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {['PMI', 'Startup', 'E-commerce'].map((tag) =>
                  <span key={tag} className="px-4 py-1.5 rounded-full text-[13px] font-medium text-white/70 bg-white/[0.08] border border-white/[0.12]">
                      {tag}
                    </span>
                  )}
                </div>
              </motion.div>

              {/* Divider */}
              <div className="w-full h-px md:w-px md:h-24 bg-white/10 md:self-center" />

              {/* Right block */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="py-4 md:pl-10 md:max-w-md">

                <p className="font-mono text-[16px] text-white/25 mb-2">{'{/'}</p>
                <p className="text-white font-medium leading-[1.4] max-w-md" style={{ fontSize: 'clamp(16px, 1.5vw, 20px)' }}>
                  Aiutiamo le aziende a<br />crescere con AI e digitale
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {['AI Automation', 'Web App', 'Branding'].map((tag) =>
                  <span key={tag} className="px-4 py-1.5 rounded-full text-[13px] font-medium text-white/70 bg-white/[0.08] border border-white/[0.12]">
                      {tag}
                    </span>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TRUST BAR ─── */}
      <section className="py-12 border-t border-white/[0.06]">
        <div className="section-container">
          <div className="grid grid-cols-2 md:flex md:items-center md:justify-center gap-8 md:gap-24 lg:gap-32 place-items-center">
            {[
                { src: logoHomeleven, name: 'Homeleven' },
                { src: logoBigliaSerramenti, name: 'Biglia Serramenti' },
                { src: logoRevelliGroup, name: 'Revelli Group' },
                { src: logoOneUp, name: 'One Up Sailing', noFilter: true }].
                map((logo, i) =>
                <img
                  key={i}
                  src={logo.src}
                  alt={logo.name}
                  className={`h-10 md:h-12 lg:h-14 w-auto object-contain transition-opacity duration-300 ${logo.noFilter ? 'opacity-80 hover:opacity-100' : 'brightness-0 invert opacity-60 hover:opacity-100'}`}
                  loading="lazy"
                  width={120}
                  height={48} />
                )}
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section className="py-24">
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
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            {services.map((s, i) =>
            <motion.div key={i} variants={fadeUpVariants}>
                <Link to={s.link} className="group block h-full relative rounded-[20px] border border-white/[0.15] bg-white/[0.08] backdrop-blur-xl overflow-hidden transition-all duration-500 hover:border-[hsl(228,76%,45%)]/50 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(28,53,200,0.2)] hover:bg-white/[0.12]">
                  {/* Top glow effect */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[2px] bg-gradient-to-r from-transparent via-[hsl(228,76%,45%)] to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40%] h-20 bg-[hsl(228,76%,45%)]/10 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative p-8 flex flex-col items-center text-center">
                    {/* Icon in glass sphere */}
                    <div className="w-20 h-20 rounded-full bg-white/[0.06] border border-white/[0.12] flex items-center justify-center mb-6 group-hover:bg-white/[0.1] group-hover:border-white/[0.2] transition-all duration-300 shadow-[0_0_30px_rgba(28,53,200,0.1)]">
                      <img src={s.icon} alt={s.title} className="w-10 h-10 object-contain" />
                    </div>
                    
                    <h3 className="text-card-title text-white mb-3">{s.title}</h3>
                    <p className="text-body text-white/50 mb-6 line-clamp-2">{s.desc}</p>
                    
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-white/70 group-hover:text-white transition-colors">
                      {t('services', 'scopri')} <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* ─── STATS — arounda style ─── */}
      <section className="py-24">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-3">
            {[
              {
                metric: '-80%',
                metricSize: 'clamp(80px,10vw,140px)',
                title: 'Processi automatizzati',
                desc: 'Eliminiamo il lavoro ripetitivo con AI e automazioni su misura',
                badges: [
                  { name: 'Claude', logo: 'https://www.anthropic.com/favicon.ico', top: '8%', left: '2%', rot: -6, delay: 0.6, size: 'lg', variant: 'light' },
                  { name: 'n8n', logo: 'https://n8n.io/favicon.ico', top: '2%', right: '8%', rot: 3, delay: 0, size: 'md', variant: 'light' },
                  { name: 'Make', logo: 'https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/6baa5827-07ac-4a1e-b498-08568a446994/Make_Logo/w=128,quality=90,fit=scale-down', top: '38%', right: '4%', rot: -3, delay: 1.2, size: 'md', variant: 'dark' },
                ],
              },
              {
                metric: '2-4 sett.',
                metricSize: 'clamp(50px,6vw,90px)',
                title: 'Dal brief al lancio',
                desc: 'Dallo strategy call al sito live, in tempi certi e trasparenti',
                badges: [
                  { name: 'Lovable', logo: 'https://lovable.dev/favicon.ico', top: '8%', left: '2%', rot: -5, delay: 0.3, size: 'lg', variant: 'light' },
                  { name: 'Vercel', logo: 'https://vercel.com/favicon.ico', top: '2%', right: '8%', rot: 3, delay: 0.9, size: 'md', variant: 'light' },
                  { name: 'React', logo: 'https://react.dev/favicon.ico', top: '38%', right: '4%', rot: -3, delay: 1.5, size: 'md', variant: 'dark' },
                ],
              },
              {
                metric: '100%',
                metricSize: 'clamp(80px,10vw,140px)',
                title: 'Nessun template',
                desc: 'Ogni progetto è progettato da zero sulla tua identità e obiettivi',
                badges: [
                  { name: 'Figma', logo: 'https://figma.com/favicon.ico', top: '8%', left: '2%', rot: -5, delay: 0.5, size: 'lg', variant: 'light' },
                  { name: 'Tailwind', logo: 'https://tailwindcss.com/favicon.ico', top: '2%', right: '8%', rot: 3, delay: 0.8, size: 'md', variant: 'light' },
                  { name: 'Framer', logo: 'https://framer.com/favicon.ico', top: '38%', right: '4%', rot: -3, delay: 1.3, size: 'md', variant: 'dark' },
                ],
              },
            ].map((col, colIdx) => (
              <motion.div
                key={colIdx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: colIdx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className={`relative px-6 lg:px-10 py-8 md:py-0 ${
                  colIdx < 2 ? 'border-b md:border-b-0 md:border-r border-white/[0.08]' : ''
                }`}
              >
                {/* Upper area with metric + floating badges */}
                <div className="relative h-[200px]">
                  {/* Large background metric */}
                  <span
                    className="absolute bottom-0 left-0 font-extrabold text-white/[0.07] leading-none select-none z-0"
                    style={{ fontSize: col.metricSize }}
                  >
                    {col.metric}
                  </span>

                  {/* Floating badges — absolute on desktop, flex-wrap on mobile */}
                  <div className="hidden md:block">
                    {col.badges.map((badge, bIdx) => (
                      <motion.div
                        key={bIdx}
                        className="absolute z-[2]"
                        style={{
                          top: badge.top,
                          left: badge.left,
                          right: badge.right,
                          animation: `floatBadge 4s ease-in-out infinite`,
                          animationDelay: `${badge.delay}s`,
                        }}
                        whileHover={{ y: -6, scale: 1.05 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                      >
                        <div
                          className={`flex items-center gap-2.5 ${badge.size === 'lg' ? 'px-5 py-3' : 'px-4 py-2.5'} rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.25)] transition-all duration-300 ${
                            badge.variant === 'light'
                              ? 'bg-white text-gray-900 hover:shadow-[0_12px_40px_rgba(0,0,0,0.3)]'
                              : 'bg-[rgba(20,20,40,0.8)] backdrop-blur-xl border border-white/[0.12] text-white hover:border-white/[0.25]'
                          }`}
                          style={{ transform: `rotate(${badge.rot}deg)` }}
                        >
                          <div className={`${badge.size === 'lg' ? 'w-8 h-8' : 'w-7 h-7'} rounded-lg overflow-hidden flex items-center justify-center flex-shrink-0 ${badge.variant === 'light' ? 'bg-gray-100' : 'bg-white/10'}`}>
                            <img
                              src={badge.logo}
                              alt={badge.name}
                              className="w-5 h-5 object-contain"
                              onError={(e) => {
                                const target = e.currentTarget;
                                const parent = target.parentElement;
                                if (parent) {
                                  const fallback = document.createElement('div');
                                  fallback.className = 'w-5 h-5 rounded bg-primary flex items-center justify-center text-[11px] font-bold text-white';
                                  fallback.textContent = badge.name.charAt(0);
                                  parent.replaceChild(fallback, target);
                                }
                              }}
                            />
                          </div>
                          <span className={`${badge.size === 'lg' ? 'text-[15px]' : 'text-[14px]'} font-semibold whitespace-nowrap`}>{badge.name}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Mobile: badges in flex-wrap */}
                  <div className="flex md:hidden flex-wrap gap-2 mb-4 relative z-[1]">
                    {col.badges.map((badge, bIdx) => (
                      <div
                        key={bIdx}
                        className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[rgba(20,20,35,0.85)] backdrop-blur-[12px] border border-white/[0.12] shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
                      >
                        <img
                          src={badge.logo}
                          alt={badge.name}
                          className="w-4 h-4 object-contain"
                          onError={(e) => {
                            const target = e.currentTarget;
                            const parent = target.parentElement;
                            if (parent) {
                              const fallback = document.createElement('div');
                              fallback.className = 'w-4 h-4 rounded bg-primary flex items-center justify-center text-[9px] font-bold text-white';
                              fallback.textContent = badge.name.charAt(0);
                              parent.replaceChild(fallback, target);
                            }
                          }}
                        />
                        <span className="text-[12px] font-semibold text-white whitespace-nowrap">{badge.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Lower area — title + description */}
                <h3 className="text-[16px] font-bold text-white mt-6">{col.title}</h3>
                <p className="text-[14px] text-white/50 mt-1.5 leading-relaxed">{col.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CASE STUDIES ─── */}
      <section className="py-24 border-t border-white/[0.06]">
        <div className="section-container">
          <div className="flex items-end justify-between mb-12">
            <motion.h2 variants={fadeUpVariants} initial="hidden" whileInView="visible" viewport={viewportConfig} className="text-section text-white">
              {t('cases', 'title')}
            </motion.h2>
            <Link to="/casi-studio" className="text-nexus-electric font-semibold text-sm hover:text-white transition-colors inline-flex items-center gap-1">
              {t('cases', 'viewAll')} <ArrowRight size={14} />
            </Link>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="grid md:grid-cols-3 gap-6">

            {caseStudies.map((c, i) =>
            <motion.div key={i} variants={fadeUpVariants}>
                <Link to={c.link} className="block bg-white/[0.04] border border-white/[0.08] rounded-2xl overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
                  {/* Placeholder cover */}
                  <div className="aspect-video bg-gradient-to-br from-nexus-blue/30 to-nexus-electric/20 relative">
                    <div className="absolute inset-0 flex items-center justify-center text-white/30 text-2xl font-bold">{c.title}</div>
                  </div>
                  <div className="p-6">
                    <span className="badge-pill mb-3 inline-block">{c.badge}</span>
                    <h3 className="text-card-title text-white mb-2">{c.title}</h3>
                    <p className="text-body text-white/60 mb-4 line-clamp-2">{c.desc}</p>
                    <span className="text-nexus-electric text-sm font-semibold inline-flex items-center gap-1">
                      {t('cases', 'viewCase')} <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* ─── LEAD MAGNET ─── */}
      <section className="py-24 border-t border-white/[0.06]">
        <div className="section-container max-w-2xl mx-auto text-center">
          <motion.h2 variants={fadeUpVariants} initial="hidden" whileInView="visible" viewport={viewportConfig} className="text-section text-white mb-4">
            {t('lead', 'title')}
          </motion.h2>
          <motion.p variants={fadeUpVariants} initial="hidden" whileInView="visible" viewport={viewportConfig} className="text-body-lg text-white/80 mb-8">
            {t('lead', 'subtitle')}
          </motion.p>

          {emailSubmitted ?
          <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-white text-xl font-semibold">
              {t('lead', 'success')}
            </motion.div> :

          <motion.form
            onSubmit={handleEmailSubmit}
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="flex flex-col sm:flex-row gap-3">

              <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t('lead', 'placeholder')}
              required
              className="flex-1 rounded-xl bg-white/[0.06] border border-white/[0.15] text-white placeholder:text-white/40 px-4 py-3 focus:outline-none focus:border-white/30 focus:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all" />

              <button type="submit" className="bg-[#d0f601] text-nexus-navy px-6 py-3 rounded-xl font-semibold hover:bg-[#bde001] transition-colors inline-flex items-center justify-center gap-2">
                {t('lead', 'cta')} <ArrowRight size={16} />
              </button>
            </motion.form>
          }
          <p className="text-xs text-white/60 mt-4">{t('lead', 'disclaimer')}</p>
        </div>
      </section>

      {/* ─── PROCESS ─── */}
      <section className="py-24 border-t border-white/[0.06]">
        <div className="section-container">
          <motion.h2
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="text-section text-white text-center mb-14">

            {t('process', 'title')}
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 relative">

            {/* Dashed connector (desktop) */}
            <div className="hidden lg:block absolute top-10 left-[8%] right-[8%] h-px border-t-2 border-dashed border-white/15 z-0" />

            {processSteps.map((step, i) =>
            <motion.div key={i} variants={fadeUpVariants} className="text-center relative z-10">
                <div className="w-14 h-14 rounded-full bg-nexus-blue flex items-center justify-center mx-auto mb-4 text-white font-bold text-sm">
                  {i + 1}
                </div>
                <step.icon size={20} className="text-nexus-electric mx-auto mb-2" />
                <h4 className="text-sm font-semibold text-white mb-1">{step.title}</h4>
                <p className="text-xs text-white/50">{step.desc}</p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* ─── TESTIMONIAL ─── */}
      <section className="py-24 border-t border-white/[0.06]">
        <div className="section-container max-w-3xl mx-auto text-center">
          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}>

            <span className="text-[120px] leading-none text-nexus-electric/15 font-serif block -mb-10">"</span>
            <p className="text-2xl italic text-white/80 mb-8 leading-relaxed">
              {t('testimonial', 'quote')}
            </p>
            <p className="text-sm font-semibold text-white">{t('testimonial', 'name')}</p>
            <p className="text-sm text-white/45">{t('testimonial', 'company')}</p>
          </motion.div>
        </div>
      </section>

      {/* ─── CTA FINALE ─── */}
      <section className="py-24 border-t border-white/[0.06]">
        <div className="section-container text-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}>

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
    </>);

};

export default Index;