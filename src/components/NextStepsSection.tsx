import { motion } from 'framer-motion';
import { Users, Layers, ListChecks, FolderOpen } from 'lucide-react';
import { fadeUpVariants, viewportConfig } from '@/lib/animations';
import { useLanguage } from '@/context/LanguageContext';

const iconConfigs = [
  { icon: Users, bg: 'linear-gradient(135deg, rgba(148,163,184,0.25), rgba(129,140,248,0.15))', color: 'text-slate-300' },
  { icon: Layers, bg: 'linear-gradient(135deg, rgba(52,211,153,0.25), rgba(45,212,191,0.12))', color: 'text-emerald-300' },
  { icon: ListChecks, bg: 'linear-gradient(135deg, rgba(45,212,191,0.25), rgba(34,211,238,0.12))', color: 'text-teal-300' },
  { icon: FolderOpen, bg: 'linear-gradient(135deg, rgba(167,139,250,0.25), rgba(192,132,252,0.12))', color: 'text-violet-300' },
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

        {/* Steps grid with top border and notches */}
        <div className="relative">
          {/* Top border line */}
          <div className="hidden lg:block absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-white/10 via-white/20 to-white/10" />

          {/* Curved notches between columns — positioned at column boundaries */}
          <div className="hidden lg:flex absolute top-0 left-0 right-0 justify-between pointer-events-none">
            {[1, 2, 3].map((idx) => (
              <div
                key={idx}
                className="absolute"
                style={{ left: `${idx * 25}%`, transform: 'translateX(-50%)' }}
              >
                <svg width="40" height="24" viewBox="0 0 40 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M0 0 C6 0, 14 0, 20 24 C26 0, 34 0, 40 0"
                    stroke="rgba(255,255,255,0.2)"
                    strokeWidth="1"
                    fill="none"
                  />
                  {/* Fill to mask the line behind the notch */}
                  <path
                    d="M0 0 C6 0, 14 0, 20 24 C26 0, 34 0, 40 0 L40 0 L0 0 Z"
                    fill="var(--background, #06080F)"
                  />
                </svg>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 pt-8 lg:pt-10">
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
                  className="lg:px-6 first:lg:pl-0 last:lg:pr-0"
                >
                  {/* Icon + Label */}
                  <div className="flex items-center gap-3 mb-5">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                      style={{
                        background: config.bg,
                        border: '1px solid rgba(255,255,255,0.08)',
                        boxShadow: '0 4px 16px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.06)',
                      }}
                    >
                      <Icon size={20} className={config.color} />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-white/50">{step.label}</span>
                  </div>

                  {/* Description */}
                  <p className="text-white/60 text-[15px] leading-relaxed">{step.desc}</p>
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
