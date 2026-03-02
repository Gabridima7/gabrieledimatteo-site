import { motion } from 'framer-motion';
import { Users, Layers, ListChecks, FolderOpen } from 'lucide-react';
import { fadeUpVariants, viewportConfig } from '@/lib/animations';
import { useLanguage } from '@/context/LanguageContext';

const steps = [
  { icon: Users, gradient: 'from-slate-400 to-indigo-400' },
  { icon: Layers, gradient: 'from-emerald-400 to-teal-300' },
  { icon: ListChecks, gradient: 'from-teal-400 to-cyan-300' },
  { icon: FolderOpen, gradient: 'from-violet-400 to-purple-300' },
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

        {/* Connector line */}
        <div className="relative">
          <div className="hidden md:block absolute top-[28px] left-0 right-0 h-px border-t border-dashed border-white/20" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stepData.map((step, i) => (
              <motion.div
                key={i}
                variants={fadeUpVariants}
                initial="hidden"
                whileInView="visible"
                viewport={viewportConfig}
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                {/* Notch */}
                <div className="hidden md:block absolute top-[24px] left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 bg-[#0d1a2a] border-t border-l border-white/20" />

                {/* Icon */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${steps[i].gradient} bg-opacity-20 flex items-center justify-center backdrop-blur-sm`}
                    style={{ background: `linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))`, border: '1px solid rgba(255,255,255,0.1)' }}>
                    {(() => {
                      const Icon = steps[i].icon;
                      return <Icon size={22} className="text-white/80" />;
                    })()}
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-white/60">{step.label}</span>
                </div>

                {/* Description */}
                <p className="text-white/70 text-[15px] leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NextStepsSection;
