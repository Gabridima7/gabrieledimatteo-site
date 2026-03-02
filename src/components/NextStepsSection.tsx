import { motion } from 'framer-motion';
import { fadeUpVariants, viewportConfig } from '@/lib/animations';
import { useLanguage } from '@/context/LanguageContext';
import iconStep1 from '@/assets/icons/icon-step-1.png';
import iconStep2 from '@/assets/icons/icon-step-2.png';
import iconStep3 from '@/assets/icons/icon-step-3.png';
import iconStep4 from '@/assets/icons/icon-step-4.png';

const stepIcons = [iconStep1, iconStep2, iconStep3, iconStep4];

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
                  <img src={stepIcons[i]} alt="" className="w-12 h-12" />
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
