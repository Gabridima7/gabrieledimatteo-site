import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import ProjectCard, { type Project } from '@/components/ProjectCard';
import { useLanguage } from '@/context/LanguageContext';

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
    <div className="min-h-screen" style={{ backgroundColor: '#0A0A0A' }}>
      {/* HERO */}
      <section className="py-24 md:py-32">
        <div className="section-container">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-3 space-y-8">
              <nav className="text-sm text-[#888]">
                <Link to="/" className="hover:text-white transition-colors">{t('works', 'breadcrumbHome')}</Link>
                <span className="mx-2">/</span>
                <span className="text-white">{t('works', 'breadcrumbWorks')}</span>
              </nav>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] text-white"
              >
                {t('works', 'heroTitle1')}{' '}
                <em className="font-bold text-[#0025FF]" style={{ fontStyle: 'italic' }}>{t('works', 'heroTitleIdee')}</em>
                {' '}{t('works', 'heroTitle2')}<br />{t('works', 'heroTitle3')}{' '}
                <em className="font-bold text-[#0025FF]" style={{ fontStyle: 'italic' }}>{t('works', 'heroTitleSuccesso')}</em>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="text-lg text-[#888] max-w-xl"
              >
                {t('works', 'heroDescription')}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <a
                  href="https://cal.com/nexus-agency/30min?overlayCalendar=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#0025FF] hover:bg-[#0025FF]/90 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,37,255,0.4)]"
                >
                  {t('works', 'heroCta')}
                  <ArrowRight size={18} />
                </a>
              </motion.div>
            </div>

            <motion.div
              className="lg:col-span-2 relative"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800"
                  alt="Digital product dashboard"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-4 right-4 bg-[#0025FF] text-white text-xs font-bold px-4 py-2 rounded-full">
                  {t('works', 'heroBadge')}
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="pb-20">
        <div className="section-container">
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
                      <span key={j} className="px-3 py-1 rounded-full text-xs bg-[rgba(0,37,255,0.15)] text-[#0025FF]">
                        {s}
                      </span>
                    ))}
                    <span className="text-sm ml-auto">{project.country}</span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* COUNTER SECTION */}
      <section className="pt-20 pb-10">
        <div className="section-container">
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
              <em className="text-[#0025FF]" style={{ fontStyle: 'italic' }}>{t('works', 'gridTitleAccent')}</em>
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
                  <p className="text-3xl font-bold text-[#0025FF]">{c.value}</p>
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
      <section className="pb-24">
        <div className="section-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINALE */}
      <section className="py-24 border-t border-[rgba(255,255,255,0.06)]" style={{ backgroundColor: '#0D0D0D' }}>
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto space-y-6"
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium bg-[rgba(0,37,255,0.15)] text-[#0025FF]">
              {t('works', 'ctaBadge')}
            </span>

            <h2 className="text-3xl md:text-5xl font-bold text-white">
              {t('works', 'ctaTitle1')}{' '}
              <em className="text-[#0025FF]" style={{ fontStyle: 'italic' }}>{t('works', 'ctaTitleAccent')}</em>
              {' '}{t('works', 'ctaTitle2')}
            </h2>

            <p className="text-[#888] text-lg">
              {t('works', 'ctaDescription')}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                to="/contatti"
                className="inline-flex items-center gap-2 bg-[#0025FF] hover:bg-[#0025FF]/90 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,37,255,0.4)]"
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
