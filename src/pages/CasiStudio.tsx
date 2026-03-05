import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import SectionBackground from '@/components/SectionBackground';
import coverHomeleven from '@/assets/cover-homeleven.png';
import coverOneup from '@/assets/cover-oneup.png';
import coverBiglia from '@/assets/cover-biglia.png';

const CAL_LINK = 'https://cal.com/nexus-agency/30min?overlayCalendar=true';
const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];
const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.5, ease },
};

const CasiStudio = () => {
  const { t } = useLanguage();

  const projects: Project[] = [
    {
      id: 1,
      name: t('works', 'featuredName1'),
      description: t('works', 'featuredDesc1'),
      category: t('works', 'featuredCategory1'),
      type: t('works', 'featuredType1'),
      country: t('works', 'country'),
      services: [t('works', 'serviceSviluppoWebApp'), t('works', 'serviceUiUx'), t('works', 'serviceAutomazione')],
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800",
      featured: true,
    },
    {
      id: 2,
      name: t('works', 'featuredName2'),
      description: t('works', 'featuredDesc2'),
      category: t('works', 'featuredCategory2'),
      type: t('works', 'featuredType2'),
      country: t('works', 'country'),
      services: [t('works', 'serviceSviluppoWebApp'), t('works', 'serviceUiUx')],
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800",
      featured: true,
    },
    {
      id: 3,
      name: t('works', 'project3Name'),
      description: t('works', 'project3Desc'),
      category: t('works', 'project3Category'),
      type: t('works', 'project3Type'),
      country: t('works', 'project3Country'),
      services: [t('works', 'serviceWebDesign'), t('works', 'serviceSviluppoWeb')],
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600",
      featured: false,
    },
  ];

  const featuredProjects = projects.filter(p => p.featured);

  const counters = [
    { value: "3+", label: t('works', 'counterProjects') },
    { value: "100%", label: t('works', 'counterClients') },
    { value: "3", label: t('works', 'counterSectors') },
  ];

  return (
    <div className="min-h-screen">
      {/* ═══ HERO ═══ */}
      <section className="relative min-h-[85vh] flex items-center pt-[120px]">
        <SectionBackground variant="hero" />
        <div className="section-container w-full relative z-[2]">
          <div className="flex flex-col lg:grid lg:grid-cols-[60%_40%] gap-8 lg:gap-12 items-center">
            {/* Hero image — mobile/tablet first */}
            <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }} className="lg:hidden w-full flex justify-center">
              <div className="relative w-full max-w-[400px] md:max-w-[500px] rounded-2xl overflow-hidden aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800"
                  alt="Digital product dashboard"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-4 right-4 bg-[#d0f601] text-black text-xs font-bold px-4 py-2 rounded-full">
                  {t('works', 'heroBadge')}
                </span>
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
                {t('works', 'heroTitle1')}{' '}
                <em className="font-extrabold text-[#d0f601]" style={{ fontStyle: 'italic' }}>{t('works', 'heroTitleIdee')}</em>
                {' '}{t('works', 'heroTitle2')}<br />{t('works', 'heroTitle3')}{' '}
                <em className="font-extrabold text-[#d0f601]" style={{ fontStyle: 'italic' }}>{t('works', 'heroTitleSuccesso')}</em>
              </h1>
              <p className="text-lg max-w-[520px] mt-5 leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>
                {t('works', 'heroDescription')}
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

            {/* Hero image — desktop */}
            <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.2 }} className="hidden lg:flex items-center justify-center lg:-mr-10">
              <div className="relative w-full rounded-2xl overflow-hidden aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800"
                  alt="Digital product dashboard"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-4 right-4 bg-[#d0f601] text-black text-xs font-bold px-4 py-2 rounded-full">
                  {t('works', 'heroBadge')}
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="relative pb-20">
        <SectionBackground variant="dark" fade={false} />
        <div className="section-container relative z-[2]">
          <div className="grid md:grid-cols-2 gap-6">
            {featuredProjects.map((project, i) => (
              <motion.a
                key={project.id}
                href="#"
                initial={{ opacity: 0, x: i === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="group block"
                data-cursor="spotlight"
              >
                <div className="relative rounded-2xl overflow-hidden aspect-[16/10]">
                  <img
                    src={project.image}
                    alt={project.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-all duration-300 group-hover:scale-[1.02] group-hover:brightness-110"
                  />
                  <span className="absolute top-4 left-4 px-3 py-1.5 rounded-full text-xs font-medium text-white bg-[rgba(255,255,255,0.1)] backdrop-blur-md">
                    {project.category}
                  </span>
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6">
                    <h3 className="text-2xl font-bold text-white">{project.name}</h3>
                    <p className="text-sm text-[#aaa]">{project.type}</p>
                  </div>
                </div>
                <div className="mt-4 space-y-3">
                  <p className="text-sm text-[#888]">{project.description}</p>
                  <div className="flex flex-wrap items-center gap-2">
                    {project.services.map((s, j) => (
                      <span key={j} className="px-4 py-1.5 rounded-full text-sm bg-[rgba(255,255,255,0.08)] text-white border border-[rgba(255,255,255,0.1)]">
                        {s}
                      </span>
                    ))}
                    <span className="w-9 h-9 rounded-full bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.1)] flex items-center justify-center text-lg leading-none">
                      {project.country.split(' ')[0]}
                    </span>
                  </div>
                </div>
              </motion.a>
            ))}
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
            className="flex flex-wrap gap-8 mt-10"
          >
            {counters.map((c, i) => (
              <div key={i} className="flex items-center gap-8">
                <div>
                  <p className="text-3xl font-bold text-[#d0f601]">{c.value}</p>
                  <p className="text-sm text-[#888]">{c.label}</p>
                </div>
                {i < counters.length - 1 && (
                  <div className="hidden sm:block w-px h-10 bg-[rgba(255,255,255,0.1)]" />
                )}
              </div>
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
            className="grid md:grid-cols-3 gap-6"
          >
            {[
              { title: t('cases', 'c1Title'), desc: t('cases', 'c1Desc'), badge: t('cases', 'c1Badge'), cover: coverHomeleven },
              { title: t('cases', 'c2Title'), desc: t('cases', 'c2Desc'), badge: t('cases', 'c2Badge'), cover: coverOneup },
              { title: t('cases', 'c3Title'), desc: t('cases', 'c3Desc'), badge: t('cases', 'c3Badge'), cover: coverBiglia },
            ].map((c, i) => (
              <motion.div
                key={i}
                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } } }}
              >
                <Link to="/casi-studio" className="block bg-white/[0.04] border border-white/[0.08] rounded-2xl overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
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

      {/* CTA FINALE */}
      <section className="relative py-24" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <SectionBackground variant="blue-center" />
        <div className="section-container relative z-[2]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto space-y-6"
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium bg-[rgba(208,246,1,0.15)] text-[#d0f601]">
              {t('works', 'ctaBadge')}
            </span>

            <h2 className="text-3xl md:text-5xl font-bold text-white">
              {t('works', 'ctaTitle1')}{' '}
              <em className="text-[#d0f601]" style={{ fontStyle: 'italic' }}>{t('works', 'ctaTitleAccent')}</em>
              {' '}{t('works', 'ctaTitle2')}
            </h2>

            <p className="text-[#888] text-lg">
              {t('works', 'ctaDescription')}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                to="/contatti"
                className="inline-flex items-center gap-2 bg-[#d0f601] hover:bg-[#d0f601]/90 text-black font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(208,246,1,0.4)]"
              >
                {t('works', 'ctaPrimary')}
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/servizi/sviluppo-web"
                className="inline-flex items-center gap-2 border border-[rgba(255,255,255,0.2)] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:border-[rgba(255,255,255,0.5)] hover:bg-[rgba(255,255,255,0.05)]"
              >
                {t('works', 'ctaSecondary')}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CasiStudio;
