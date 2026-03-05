import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { projectsData } from '@/data/projects';
import SEOHead from '@/components/SEOHead';

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];
const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.5, ease },
};

function renderTagline(text: string) {
  const parts = text.split(/\*([^*]+)\*/g);
  return parts.map((part, i) =>
    i % 2 === 1
      ? <em key={i} className="italic text-[#0025FF]">{part}</em>
      : <span key={i}>{part}</span>
  );
}

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const projectIndex = projectsData.findIndex(p => p.slug === slug);
  const project = projectIndex !== -1 ? projectsData[projectIndex] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: '#0A0A0A' }}>
        <div className="text-center">
          <h1 className="text-6xl font-bold text-white mb-4">404</h1>
          <p className="text-[#888] text-lg mb-8">Questo progetto non esiste</p>
          <Link to="/casi-studio" className="inline-flex items-center gap-2 text-[#0025FF] font-semibold hover:underline">
            <ArrowLeft size={16} /> Torna ai progetti
          </Link>
        </div>
      </div>
    );
  }


  return (
    <div className="min-h-screen" style={{ background: '#0A0A0A' }}>
      <SEOHead
        title={`${project.name} — Nexus Agency`}
        description={project.about.replace(/\*/g, '').slice(0, 155)}
      />

      {/* ═══ SECTION 1 — HERO ═══ */}
      <section className="relative pt-[85px] md:pt-[95px] pb-16 md:pb-24">
        <div className="section-container w-full lg:pl-2">
          {/* Breadcrumb */}
          <motion.p {...fadeUp} className="text-[13px] mb-8 md:mb-12 uppercase tracking-wide text-[#888]">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            {' / '}
            <Link to="/casi-studio" className="hover:text-white transition-colors">Progetti</Link>
            {' / '}
            <span className="text-white/70">{project.name}</span>
          </motion.p>

          {/* Centered Title */}
          <motion.div {...fadeUp} className="text-center max-w-[900px] mx-auto">
            <h1 className="font-bold text-white leading-[1.08] tracking-[-0.03em]" style={{ fontSize: 'clamp(32px, 6vw, 72px)' }}>
              {renderTagline(project.tagline)}
            </h1>
          </motion.div>

          {/* Service Tags */}
          <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }} className="flex flex-wrap justify-center gap-3 mt-8 md:mt-10">
            {project.services.map((s, i) => (
              <span key={i} className="px-5 py-2.5 rounded-full text-sm border border-[rgba(255,255,255,0.12)] text-white/80 bg-[rgba(255,255,255,0.04)]">
                {s}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Hero Image + Tagline — two-column on desktop */}
        <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.2 }} className="relative mt-12 md:mt-16">
          <div className="section-container">
            <div className="flex flex-col xl:flex-row xl:items-end gap-6 xl:gap-0">
              {/* Left: tagline overlay text */}
              <div className="xl:flex-shrink-0 xl:w-[35%] xl:pr-8 xl:pb-4 order-2 xl:order-1">
                <p className="text-white text-xl md:text-2xl xl:text-[28px] leading-snug font-light">
                  {renderTagline(project.tagline)}
                </p>
              </div>
              {/* Right: hero image */}
              <div className="relative xl:w-[65%] order-1 xl:order-2">
                <div className="relative rounded-[20px] overflow-hidden aspect-[16/10] xl:aspect-[2/1]">
                  <img src={project.heroImage} alt={project.name} className="w-full h-full object-cover" />
                  {/* Year badge */}
                  <span className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium text-white bg-[rgba(0,0,0,0.7)] backdrop-blur-sm">
                    {project.year}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ═══ WHITE BACKGROUND FROM HERE ═══ */}
      <div style={{ background: '#ffffff' }}>

      {/* ═══ SECTION 2 — METADATI ═══ */}
      <section className="py-6 md:py-8">
        <div className="section-container">
          <motion.div {...fadeUp} className="bg-[#f5f5f5] rounded-2xl px-6 md:px-10 py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-[#e0e0e0]">
              {[
                { label: 'Cliente', value: project.client },
                { label: 'Industry', value: project.industry },
                { label: 'Servizi', value: project.services.join(', ') },
                { label: 'Paese', value: project.country },
              ].map((item, i) => (
                <div key={i} className="md:px-8 first:md:pl-0 last:md:pr-0">
                  <p className="text-[#888] text-xs uppercase tracking-widest mb-2">{item.label}</p>
                  <p className="text-[#111] font-semibold text-base md:text-lg">{item.value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ SECTION 3 — ABOUT ═══ */}
      <section className="py-24">
        <div className="section-container">
          <div className="flex flex-col xl:grid xl:grid-cols-[35%_65%] gap-12">
            <motion.div {...fadeUp} className="xl:sticky xl:top-8 xl:self-start">
              <p className="text-[#888] text-xs uppercase tracking-widest mb-4">Panoramica</p>
              <h2 className="text-3xl font-bold text-[#111]">Sul Progetto</h2>
              <div className="w-12 h-[2px] bg-[#0025FF] mt-6" />
            </motion.div>
            <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }}>
              <p className="text-lg text-[#444] leading-relaxed">
                {renderTagline(project.about)}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 4 — CHALLENGE & SOLUTION ═══ */}
      <section className="pb-16">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div {...fadeUp} className="bg-[#f5f5f5] border border-[#e8e8e8] rounded-2xl p-8">
              <p className="text-[#888] text-xs uppercase tracking-widest mb-3">Problema</p>
              <h3 className="text-xl font-bold text-[#111] mb-4">La Sfida</h3>
              <p className="text-[#555] text-base leading-relaxed">{project.challenge}</p>
            </motion.div>
            <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }} className="bg-[#f5f5f5] border border-[#e8e8e8] border-l-[3px] border-l-[#0025FF] rounded-2xl p-8">
              <p className="text-[#888] text-xs uppercase tracking-widest mb-3">Soluzione</p>
              <h3 className="text-xl font-bold text-[#111] mb-4">Il Nostro Approccio</h3>
              <p className="text-[#555] text-base leading-relaxed">{project.solution}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 5 — PROCESSO ═══ */}
      <section className="py-24">
        <div className="section-container">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#111]">
              Il nostro {renderTagline("*Processo*")}
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {project.phases.map((phase, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.1, ease }}
                className="relative border-b xl:border-b-0 xl:border-r border-[#e8e8e8] last:border-0 pb-6 xl:pb-0 xl:pr-6"
              >
                <span className="text-6xl font-bold text-[rgba(0,37,255,0.12)] leading-none">{phase.number}</span>
                <h3 className="text-lg font-bold text-[#111] mt-2 mb-4">{phase.title}</h3>
                <ul className="space-y-2">
                  {phase.items.map((item, j) => (
                    <li key={j} className="text-sm text-[#666] flex items-start gap-2">
                      <span className="text-[#0025FF] mt-0.5">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SECTION 6 — GALLERIA ═══ */}
      <section className="py-16">
        <div className="section-container">
          <motion.h2 {...fadeUp} className="text-3xl font-bold text-[#111] mb-10">Galleria</motion.h2>
          {/* First image — full width */}
          {project.galleryImages[0] && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, ease }}
            >
              <div className="overflow-hidden rounded-2xl aspect-[16/9]">
                <img src={project.galleryImages[0].src} alt={project.galleryImages[0].alt} loading="lazy" className="w-full h-full object-cover transition-all duration-300 hover:brightness-105 hover:scale-[1.01]" />
              </div>
              {project.galleryImages[0].caption && (
                <p className="text-sm text-[#999] mt-2 italic">{project.galleryImages[0].caption}</p>
              )}
            </motion.div>
          )}

          {/* Remaining images — 2-col grid with gap */}
          {project.galleryImages.length > 1 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              {project.galleryImages.slice(1).map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease }}
                >
                  <div className="overflow-hidden rounded-2xl aspect-[4/3]">
                    <img src={img.src} alt={img.alt} loading="lazy" className="w-full h-full object-cover transition-all duration-300 hover:brightness-105 hover:scale-[1.01]" />
                  </div>
                  {img.caption && (
                    <p className="text-sm text-[#999] mt-2 italic">{img.caption}</p>
                  )}
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ═══ SECTION 7 — RISULTATI ═══ */}
      <section className="py-24 bg-[#f5f5f5]">
        <div className="section-container">
          <motion.div {...fadeUp} className="text-center mb-4">
            <h2 className="text-3xl md:text-4xl font-bold text-[#111]">
              I {renderTagline("*Risultati*")}
            </h2>
          </motion.div>
          <motion.p {...fadeUp} className="text-[#888] text-center mb-14">
            Numeri reali da un progetto reale.
          </motion.p>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {project.results.map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.1, ease }}
                className="bg-white border border-[#e8e8e8] rounded-2xl p-8"
              >
                <p className="text-5xl font-bold text-[#0025FF]">{r.metric}</p>
                <p className="text-[#111] font-semibold text-lg mt-2">{r.label}</p>
                <p className="text-[#888] text-sm mt-3 leading-relaxed">{r.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SECTION 8 — TESTIMONIAL ═══ */}
      {project.testimonial && (
        <section className="py-20">
          <div className="section-container">
            <motion.div {...fadeUp} className="relative max-w-3xl mx-auto text-center">
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-8xl text-[#0025FF] opacity-30 font-serif leading-none select-none">"</span>
              <p className="text-2xl font-medium text-[#111] leading-relaxed relative z-10 pt-8">
                {project.testimonial.quote}
              </p>
              <div className="flex items-center justify-center gap-3 mt-8">
                <div className="w-12 h-12 bg-[#e8e8e8] rounded-full flex items-center justify-center text-sm font-bold text-[#111]">
                  {project.testimonial.author.split(' ').map(w => w[0]).join('')}
                </div>
                <div className="text-left">
                  <p className="text-[#111] font-semibold text-sm">{project.testimonial.author}</p>
                  <p className="text-[#888] text-sm">{project.testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}


      </div>{/* end white background */}

      {/* ═══ SECTION 10 — CTA FINALE ═══ */}
      <section className="bg-[#06080F] py-24 md:py-32">
        <div className="section-container">
          <motion.h2 {...fadeUp} className="text-3xl md:text-5xl font-bold text-white text-center leading-[1.15] mb-12 md:mb-16">
            Lavoriamo{' '}
            <em className="italic text-white/80">insieme</em>
          </motion.h2>

          <motion.div {...fadeUp} className="relative max-w-3xl mx-auto rounded-3xl bg-white p-10 md:p-14 text-center overflow-hidden">
            {/* Subtle gradient glow */}
            <div className="absolute bottom-0 right-0 w-[60%] h-[60%] bg-gradient-to-tl from-purple-200/40 via-transparent to-transparent rounded-3xl pointer-events-none" />

            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold text-[#111] leading-[1.2] mb-4">
                Hai un progetto simile?<br />Parliamoci.
              </h3>
              <p className="text-[#666] text-base md:text-lg max-w-md mx-auto mb-8">
                Dalla prima idea al prodotto funzionante. Prenota una call gratuita per discutere il tuo progetto.
              </p>
              <div className="flex items-center justify-center gap-3">
                <Link
                  to="/contatti"
                  className="inline-flex items-center gap-2 bg-[#d0f601] hover:shadow-[0_0_20px_rgba(208,246,1,0.4)] text-black font-semibold px-8 py-4 rounded-full transition-all duration-300"
                >
                  Prenota Call <ArrowRight size={16} className="-rotate-45" />
                </Link>
                <Link
                  to="/casi-studio"
                  className="inline-flex items-center gap-2 text-[#111] font-semibold px-8 py-4 rounded-full border border-[#ddd] hover:border-[#111] hover:bg-[rgba(0,0,0,0.03)] transition-all duration-300"
                >
                  Vedi altri progetti
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default ProjectDetail;
