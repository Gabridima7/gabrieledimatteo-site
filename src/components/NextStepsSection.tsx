import { motion } from 'framer-motion';
import { Users, Layers, ListChecks, FolderOpen } from 'lucide-react';
import { fadeUpVariants, viewportConfig } from '@/lib/animations';
import { useLanguage } from '@/context/LanguageContext';

const iconConfigs = [
  { icon: Users, bg: 'linear-gradient(135deg, rgba(148,163,184,0.3), rgba(129,140,248,0.2))', color: 'text-slate-300' },
  { icon: Layers, bg: 'linear-gradient(135deg, rgba(52,211,153,0.3), rgba(45,212,191,0.15))', color: 'text-emerald-300' },
  { icon: ListChecks, bg: 'linear-gradient(135deg, rgba(45,212,191,0.3), rgba(34,211,238,0.15))', color: 'text-teal-300' },
  { icon: FolderOpen, bg: 'linear-gradient(135deg, rgba(167,139,250,0.3), rgba(192,132,252,0.15))', color: 'text-violet-300' },
];

const NextStepsSection = () => {
  const { t } = useLanguage();

  const stepData = [
    { label: t('nextSteps', 's1Label'), desc: t('nextSteps', 's1Desc') },
    { label: t('nextSteps', 's2Label'), desc: t('nextSteps', 's2Desc') },
    { label: t('nextSteps', 's3Label'), desc: t('nextSteps', 's3Desc') },
    { label: t('nextSteps', 's4Label'), desc: t('nextSteps', 's4Desc') },
  ];

  return (
    <section className="py-20 md:py-28">
      <div className="section-container">
        <motion.h2
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-3xl md:text-5xl font-bold text-white text-center mb-16"
        >
          {t('nextSteps', 'title')}{' '}
          <span className="italic font-serif-accent">{t('nextSteps', 'titleItalic')}</span>
        </motion.h2>

        {/* Steps with connector */}
        <div className="relative">
          {/* Horizontal connector line */}
          <div className="hidden lg:block absolute top-0 left-0 right-0 h-px bg-white/15" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
            {stepData.map((step, i) => {
              const config = iconConfigs[i];
              const Icon = config.icon;

              return (
                <motion.div
                  key={i}
                  variants={fadeUpVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportConfig}
                  transition={{ delay: i * 0.1 }}
                  className="relative lg:px-6 first:lg:pl-0 last:lg:pr-0"
                >
                  {/* Downward notch — curved funnel shape */}
                  <div className="hidden lg:block absolute -top-px left-8">
                    <svg width="24" height="18" viewBox="0 0 24 18" fill="none">
                      <path d="M0 0 C0 0, 8 0, 12 18 C16 0, 24 0, 24 0" stroke="rgba(255,255,255,0.15)" strokeWidth="1" fill="none" />
                    </svg>
                  </div>

                  {/* Icon + Label row */}
                  <div className="flex items-center gap-3 mt-6 lg:mt-5 mb-5">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 backdrop-blur-sm"
                      style={{
                        background: config.bg,
                        border: '1px solid rgba(255,255,255,0.08)',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                      }}
                    >
                      <Icon size={20} className={config.color} />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-white/50">{step.label}</span>
                  </div>

                  {/* Description */}
                  <p className="text-white/65 text-[15px] leading-relaxed">{step.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NextStepsSection;
