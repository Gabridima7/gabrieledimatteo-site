import React, { useState, useEffect, useCallback } from 'react';
import SEOHead from '@/components/SEOHead';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, Star } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import SectionBackground from '@/components/SectionBackground';
import coverHomeleven from '@/assets/cover-homeleven.png';
import coverOneup from '@/assets/cover-oneup.png';
import coverBiglia from '@/assets/cover-biglia.png';
import cover500voltemeglio from '@/assets/cover-500voltemeglio.jpg';
import testimonialMarco from '@/assets/testimonial-marco.png';
import logoHomeleven from '@/assets/logos/logo-homeleven-white.png';
import logoOneup from '@/assets/logos/logo-oneup-color.png';
import logoBiglia from '@/assets/logos/logo-biglia-white.png';

const CAL_LINK = 'https://cal.com/nexus-agency/30min?overlayCalendar=true';
const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];
const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.5, ease },
};

/* ── Testimonials data ── */
const testimonials = [
  {
    name: 'Mattia T.',
    role: 'Founder, Homeleven',
    quote: '"NEXUS ha capito subito le nostre esigenze. Il gestionale ci ha cambiato la vita operativa. *Professionalità e attenzione ai dettagli* che raramente si trovano."',
    img: testimonialMarco,
    logo: logoHomeleven,
    bgColor: '#d0f601',
    textColor: '#111',
  },
  {
    name: 'Andrea Z.',
    role: 'CEO, ONE UP',
    quote: '"Professionalità e velocità di esecuzione fuori dal comune. *Hanno trasformato la nostra idea in un prodotto funzionante* in tempi record. Consigliato a qualsiasi PMI italiana."',
    logo: logoOneup,
    bgColor: 'linear-gradient(135deg, #f5f5ff 0%, #e8d5ff 50%, #d5c5ff 100%)',
    textColor: '#111',
  },
  {
    name: 'Gianni B.',
    role: 'Titolare, Biglia Serramenti',
    quote: '"Il sito rifatto da NEXUS ha portato un aumento immediato delle richieste di preventivo. *Comunicazione diretta e risultati concreti,* esattamente quello che cercavamo."',
    logo: logoBiglia,
    bgColor: 'linear-gradient(135deg, #6B21A8 0%, #7C3AED 50%, #9333EA 100%)',
    textColor: '#fff',
  },
];

const renderQuote = (text: string) => {
  const parts = text.split(/\*(.*?)\*/);
  return parts.map((part, i) =>
    i % 2 === 1 ? <em key={i} className="italic font-semibold">{part}</em> : <span key={i}>{part}</span>
  );
};

/* ── Testimonials Section Component ── */
const TestimonialsSection = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const current = testimonials[activeIdx];

  return (
    <section className="relative py-24">
      <SectionBackground variant="dark" fade={false} />
      <div className="section-container relative z-[2]">
        <motion.div {...fadeUp} className="mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-[1.15]">
            I nostri <em className="text-[#d0f601]" style={{ fontStyle: 'italic' }}>Clienti</em> hanno ottime{' '}
            <br className="hidden md:block" />
            ragioni per <em className="text-[#d0f601]" style={{ fontStyle: 'italic' }}>Sceglierci</em>
          </h2>
        </motion.div>

        {/* Desktop layout */}
        <motion.div {...fadeUp} className="hidden md:grid md:grid-cols-[280px_1fr] gap-4 items-stretch">
          {/* Left: client logos as separate cards */}
          <div className="flex flex-col gap-3">
            {testimonials.map((item, i) => (
              <button
                key={i}
                onClick={() => setActiveIdx(i)}
                className={`flex items-center justify-center flex-1 rounded-2xl transition-all duration-300 cursor-pointer border hover:scale-[1.03] ${
                  i === activeIdx
                    ? 'bg-[rgba(255,255,255,0.12)] border-[#d0f601]/40 scale-[1.02]'
                    : 'bg-[rgba(255,255,255,0.04)] hover:bg-[rgba(255,255,255,0.08)] border-white/[0.06]'
                }`}
              >
                <img src={item.logo} alt={item.name} className="h-14 w-auto object-contain max-w-[80%]" />
              </button>
            ))}
          </div>

          {/* Right: testimonial card */}
          <div className="relative min-h-[300px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-[220px_1fr] h-full rounded-r-2xl overflow-hidden"
                style={{ background: current.bgColor }}
              >
                {/* Photo */}
                <div className="relative p-4 flex items-stretch">
                  {current.img ? (
                    <img src={current.img} alt={current.name} className="w-full h-full object-cover rounded-xl" />
                  ) : (
                    <div className="w-full h-full rounded-xl flex items-center justify-center text-6xl font-bold" style={{ background: 'rgba(0,0,0,0.08)', color: current.textColor, opacity: 0.3 }}>
                      {current.name.split(' ').map(w => w[0]).join('')}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col justify-between" style={{ color: current.textColor }}>
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="font-bold text-base">{current.name}</p>
                      <p className="text-sm opacity-70">{current.role}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-4xl font-bold">5.0</p>
                      <div className="flex gap-0.5 justify-end mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={14} fill="currentColor" />
                        ))}
                      </div>
                    </div>
                  </div>

                  <p className="text-lg leading-relaxed mt-6">{renderQuote(current.quote)}</p>

                  <div className="flex gap-2 justify-end mt-6">
                    <button
                      onClick={() => setActiveIdx(prev => (prev - 1 + testimonials.length) % testimonials.length)}
                      className="w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                      style={{ border: `1px solid ${current.textColor === '#fff' ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.2)'}` }}
                    >
                      <ArrowLeft size={16} />
                    </button>
                    <button
                      onClick={() => setActiveIdx(prev => (prev + 1) % testimonials.length)}
                      className="w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                      style={{ border: `1px solid ${current.textColor === '#fff' ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.2)'}` }}
                    >
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Mobile layout */}
        <motion.div {...fadeUp} className="md:hidden space-y-6">
          <div className="flex items-center justify-center h-[80px] rounded-2xl bg-[rgba(255,255,255,0.06)]">
            <img src={current.logo} alt={current.name} className="h-7 w-auto object-contain max-w-[60%]" />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeIdx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl overflow-hidden p-6"
              style={{ background: current.bgColor, color: current.textColor }}
            >
              <p className="text-lg leading-relaxed font-medium">{renderQuote(current.quote)}</p>

              <div className="flex items-center gap-3 mt-8">
                {current.img ? (
                  <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                    <img src={current.img} alt={current.name} className="w-full h-full object-cover" />
                  </div>
                ) : (
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0" style={{ background: 'rgba(0,0,0,0.1)' }}>
                    {current.name.split(' ').map(w => w[0]).join('')}
                  </div>
                )}
                <div>
                  <p className="font-bold text-sm">{current.name}</p>
                  <p className="text-sm opacity-70">{current.role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => setActiveIdx(i)} className="flex-1 h-[3px] rounded-full overflow-hidden" style={{ background: i === activeIdx ? '#d0f601' : 'rgba(255,255,255,0.15)' }} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

/* ── Main Page Component ── */
const CasiStudio = () => {
  const { t } = useLanguage();
  const [activeSlide, setActiveSlide] = useState(0);

  const heroSlides = [
    {
      cover: coverHomeleven,
      title: t('cases', 'c1Title'),
      desc: t('cases', 'c1Desc'),
      badge: t('cases', 'c1Badge'),
      tags: [t('works', 'serviceSviluppoWebApp'), t('works', 'serviceUiUx'), t('works', 'serviceAutomazione')],
      flag: '🇮🇹',
    },
    {
      cover: coverOneup,
      title: t('cases', 'c2Title'),
      desc: t('cases', 'c2Desc'),
      badge: t('cases', 'c2Badge'),
      tags: [t('works', 'serviceSviluppoWebApp'), t('works', 'serviceUiUx')],
      flag: '🇮🇹',
    },
    {
      cover: coverBiglia,
      title: t('cases', 'c3Title'),
      desc: t('cases', 'c3Desc'),
      badge: t('cases', 'c3Badge'),
      tags: [t('works', 'serviceWebDesign'), t('works', 'serviceSviluppoWeb')],
      flag: '🇮🇹',
    },
    {
      cover: cover500voltemeglio,
      title: t('cases', 'c4Title'),
      desc: t('cases', 'c4Desc'),
      badge: t('cases', 'c4Badge'),
      tags: [t('works', 'serviceSviluppoWeb'), 'UI/UX Design', 'Software Gestionale'],
      flag: '🇮🇹',
    },
  ];

  const nextSlide = useCallback(() => {
    setActiveSlide(prev => (prev + 1) % heroSlides.length);
  }, [heroSlides.length]);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const counters = [
    { value: "30+", label: t('works', 'counterProjects') },
    { value: "100%", label: t('works', 'counterClients') },
    { value: "9", label: t('works', 'counterSectors') },
  ];

  const currentSlide = heroSlides[activeSlide];

  return (
    <>
      <SEOHead
        title="Case study sviluppo web e AI | Nexus Agency"
        description="Scopri i progetti realizzati da Nexus Agency: siti web, web app, automazioni AI e piattaforme digitali sviluppati per aziende e PMI italiane."
        canonical="https://nexusagency.it/casi-studio"
        breadcrumbs={[
          { name: "Home", url: "https://nexusagency.it" },
          { name: "Casi Studio", url: "https://nexusagency.it/casi-studio" },
        ]}
      />
    <div className="min-h-screen">
      {/* ═══ HERO ═══ */}
      <section className="relative min-h-[85vh] flex items-center pt-[120px]">
        <SectionBackground variant="hero" />
        <div className="section-container w-full relative z-[2]">
          <div className="flex flex-col lg:grid lg:grid-cols-[55%_45%] gap-8 lg:gap-12 items-center">
            {/* Slider — mobile/tablet first */}
            <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }} className="lg:hidden w-full flex justify-center">
              <div className="w-full max-w-[500px]">
                <div className="relative rounded-3xl overflow-hidden bg-white">
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={activeSlide}
                        src={currentSlide.cover}
                        alt={currentSlide.title}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </AnimatePresence>
                  </div>
                  <div className="p-5 pb-6">
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      {currentSlide.tags.map((tag, j) => (
                        <span key={j} className="px-4 py-1.5 rounded-full text-sm bg-[#f0f0f0] text-[#333] font-medium">{tag}</span>
                      ))}
                      <span className="w-9 h-9 rounded-full bg-[#f0f0f0] flex items-center justify-center text-lg">{currentSlide.flag}</span>
                    </div>
                    <p className="text-[#111] font-bold text-lg leading-snug">{currentSlide.desc}</p>
                    <div className="flex gap-2 mt-5">
                      {heroSlides.map((_, i) => (
                        <div key={i} className="flex-1 h-[3px] rounded-full overflow-hidden bg-[#e0e0e0] cursor-pointer" onClick={() => setActiveSlide(i)}>
                          <motion.div
                            className="h-full rounded-full"
                            style={{ background: i === activeSlide ? '#1C35C8' : 'transparent' }}
                            initial={{ width: '0%' }}
                            animate={{ width: i === activeSlide ? '100%' : i < activeSlide ? '100%' : '0%' }}
                            transition={i === activeSlide ? { duration: 5, ease: 'linear' } : { duration: 0 }}
                            key={`bar-${activeSlide}-${i}`}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Text */}
            <motion.div {...fadeUp}>
              <p className="text-[13px] mb-8 uppercase tracking-wide" style={{ color: 'rgba(255,255,255,0.45)' }}>
                <Link to="/" className="hover:text-white transition-colors">{t('works', 'breadcrumbHome')}</Link>
                {' / '}
                <span className="text-white/70">{t('works', 'breadcrumbWorks')}</span>
              </p>
              <h1 className="font-extrabold text-white leading-[1.1] tracking-[-0.02em] max-w-[600px]" style={{ fontSize: 'clamp(40px,5vw,72px)' }}>
                Progetti e{' '}
                <em className="font-extrabold text-[#d0f601]" style={{ fontStyle: 'italic' }}>case study</em>
              </h1>
              <p className="text-lg max-w-[520px] mt-5 leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>
                In questa sezione presentiamo alcuni dei progetti digitali sviluppati per aziende e startup italiane. Ogni progetto nasce da un problema reale e si traduce in una soluzione concreta, misurabile e scalabile.
              </p>
              <a
                href={CAL_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-8 py-4 font-semibold text-black text-sm transition-all duration-200 hover:shadow-[0_0_20px_rgba(208,246,1,0.4)] mt-9"
                style={{ background: '#d0f601' }}
              >
                {t('works', 'heroCta')} <ArrowRight size={16} />
              </a>
              <div className="flex flex-wrap gap-10 mt-12 pt-12" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                {counters.map((s, i) => (
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

            {/* Slider — desktop */}
            <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.2 }} className="hidden lg:block">
              <div className="relative rounded-3xl overflow-hidden bg-white shadow-2xl">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={activeSlide}
                      src={currentSlide.cover}
                      alt={currentSlide.title}
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </AnimatePresence>
                </div>
                <div className="p-6 pb-7">
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    {currentSlide.tags.map((tag, j) => (
                      <span key={j} className="px-5 py-2 rounded-full text-sm bg-[#f0f0f0] text-[#333] font-medium">{tag}</span>
                    ))}
                    <span className="w-10 h-10 rounded-full bg-[#f0f0f0] flex items-center justify-center text-xl">{currentSlide.flag}</span>
                  </div>
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={activeSlide}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="text-[#111] font-bold text-xl leading-snug"
                    >
                      {currentSlide.desc}
                    </motion.p>
                  </AnimatePresence>
                  <div className="flex gap-2 mt-6">
                    {heroSlides.map((_, i) => (
                      <div key={i} className="flex-1 h-[3px] rounded-full overflow-hidden bg-[#e0e0e0] cursor-pointer" onClick={() => setActiveSlide(i)}>
                        <motion.div
                          className="h-full rounded-full"
                          style={{ background: i === activeSlide ? '#1C35C8' : 'transparent' }}
                          initial={{ width: '0%' }}
                          animate={{ width: i === activeSlide ? '100%' : i < activeSlide ? '100%' : '0%' }}
                          transition={i === activeSlide ? { duration: 5, ease: 'linear' } : { duration: 0 }}
                          key={`bar-desktop-${activeSlide}-${i}`}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* COUNTER SECTION */}
      <section className="relative pt-20 pb-10">
        <SectionBackground variant="blue-left" fade={false} />
        <div className="section-container relative z-[2]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <p className="text-xs uppercase tracking-widest text-[#888]">{t('works', 'gridLabel')}</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              {t('works', 'gridTitle')}{' '}
              <em className="text-[#d0f601]" style={{ fontStyle: 'italic' }}>{t('works', 'gridTitleAccent')}</em>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex items-center mt-10"
          >
            {counters.map((c, i) => (
              <React.Fragment key={i}>
                <div>
                  <p className="text-3xl font-bold text-[#d0f601]">{c.value}</p>
                  <p className="text-sm text-[#888]">{c.label}</p>
                </div>
                {i < counters.length - 1 && (
                  <div className="hidden sm:block w-px h-12 bg-[rgba(255,255,255,0.1)] mx-auto" />
                )}
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      </section>

      {/* PROJECT GRID */}
      <section className="relative pb-24">
        <SectionBackground variant="blue-right" fade={false} />
        <div className="section-container relative z-[2]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } } }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { title: t('cases', 'c1Title'), desc: t('cases', 'c1Desc'), badge: t('cases', 'c1Badge'), cover: coverHomeleven, slug: 'homeleven' },
              { title: t('cases', 'c2Title'), desc: t('cases', 'c2Desc'), badge: t('cases', 'c2Badge'), cover: coverOneup, slug: 'one-up' },
              { title: t('cases', 'c3Title'), desc: t('cases', 'c3Desc'), badge: t('cases', 'c3Badge'), cover: coverBiglia, slug: 'biglia-serramenti' },
              { title: t('cases', 'c4Title'), desc: t('cases', 'c4Desc'), badge: t('cases', 'c4Badge'), cover: cover500voltemeglio, slug: '500-volte-meglio' },
            ].map((c, i) => (
              <motion.div
                key={i}
                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } } }}
              >
                <Link to={`/progetto/${c.slug}`} className="block bg-white/[0.04] border border-white/[0.08] rounded-2xl overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <img src={c.cover} alt={c.title} className="absolute inset-0 w-full h-full object-cover" />
                  </div>
                  <div className="p-6">
                    <span className="badge-pill mb-3 inline-block">{c.badge}</span>
                    <h3 className="text-card-title text-white mb-2">{c.title}</h3>
                    <p className="text-body text-white/60 mb-4 line-clamp-2">{c.desc}</p>
                    <span className="text-[#d0f601] text-sm font-semibold inline-flex items-center gap-1">
                      {t('cases', 'viewCase')} <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <TestimonialsSection />

      {/* CTA FINALE */}
      <section className="relative py-24" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <SectionBackground variant="blue-center" />
        <div className="section-container relative z-[2]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl px-8 py-16 md:px-16 md:py-20 text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl lg:text-[56px] font-bold text-[#111] leading-[1.1] tracking-tight">
              {t('works', 'ctaTitle1')}{' '}
              <em className="text-[#111]" style={{ fontStyle: 'italic' }}>{t('works', 'ctaTitleAccent')}</em>
              {' '}{t('works', 'ctaTitle2')}
            </h2>

            <p className="text-[#555] text-lg mt-6 max-w-lg mx-auto">
              {t('works', 'ctaDescription')}
            </p>

            <div className="flex items-center justify-center gap-3 mt-8">
              <Link
                to="/contatti"
                className="inline-flex items-center gap-2 bg-[#d0f601] hover:bg-[#c5e800] text-black font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(208,246,1,0.4)]"
              >
                <ArrowRight size={18} className="rotate-45" />
              </Link>
              <Link
                to="/contatti"
                className="inline-flex items-center gap-2 bg-[#d0f601] hover:bg-[#c5e800] text-black font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(208,246,1,0.4)]"
              >
                {t('works', 'ctaPrimary')}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
    </>
  );
};

export default CasiStudio;
