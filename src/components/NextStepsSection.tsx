import { motion } from 'framer-motion';
import { UserCheck, Layers, FileSearch, FileText } from 'lucide-react';
import { fadeUpVariants, viewportConfig } from '@/lib/animations';
import { useLanguage } from '@/context/LanguageContext';

const icons = [UserCheck, Layers, FileSearch, FileText];

const stepTitles = {
  it: ['Ti contattiamo', 'Raccogliamo i dettagli', 'Analizziamo il progetto', 'Ti presentiamo la proposta'],
  en: ['We contact you', 'We gather details', 'We analyze the project', 'We present the proposal'],
};

const StackedIcon = ({ icon: Icon }: { icon: typeof UserCheck }) => (
  <div className="relative shrink-0" style={{ width: 56, height: 56 }}>
    {/* Back layer */}
    <div
      className="absolute"
      style={{
        width: 44, height: 44, top: 6, left: 6,
        background: 'rgba(255,255,255,0.06)',
        border: '1px solid rgba(255,255,255,0.12)',
        borderRadius: 10,
        transform: 'rotate(-8deg)',
      }}
    />
    {/* Front layer */}
    <div
      className="relative z-[1] flex items-center justify-center"
      style={{
        width: 44, height: 44,
        background: 'linear-gradient(135deg, rgba(28,53,200,0.6), rgba(79,111,232,0.4))',
        border: '1px solid rgba(79,111,232,0.4)',
        borderRadius: 10,
        backdropFilter: 'blur(8px)',
      }}
    >
      <Icon size={20} color="white" strokeWidth={1.5} />
    </div>
  </div>
);

const NextStepsSection = () => {
  const { t, lang } = useLanguage();

  const stepData = [
    { label: t('nextSteps', 's1Label'), desc: t('nextSteps', 's1Desc') },
    { label: t('nextSteps', 's2Label'), desc: t('nextSteps', 's2Desc') },
    { label: t('nextSteps', 's3Label'), desc: t('nextSteps', 's3Desc') },
    { label: t('nextSteps', 's4Label'), desc: t('nextSteps', 's4Desc') },
  ];

  const titles = stepTitles[lang] || stepTitles.it;

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

        {/* Steps grid with connector line */}
        <div className="relative">
          {/* Horizontal connector line — centered on 56px icon = top 28px */}
          <div
            className="hidden lg:block absolute left-0 right-0"
            style={{ top: 28, height: 1, background: 'rgba(255,255,255,0.15)', zIndex: 0 }}
          />

          {/* V-shaped connectors at 25%, 50%, 75% */}
          {[1, 2, 3].map((idx) => (
            <div
              key={idx}
              className="hidden lg:block absolute pointer-events-none"
              style={{
                left: `${idx * 25}%`,
                top: 23,
                transform: 'translateX(-50%)',
                width: 12,
                height: 12,
                borderRight: '1px solid rgba(255,255,255,0.3)',
                borderBottom: '1px solid rgba(255,255,255,0.3)',
                transformOrigin: 'center',
                rotate: '45deg',
                zIndex: 1,
              }}
            />
          ))}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
            {stepData.map((step, i) => {
              const Icon = icons[i];

              return (
                <motion.div
                  key={i}
                  variants={fadeUpVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportConfig}
                  transition={{ delay: i * 0.1 }}
                  className="lg:px-6 first:lg:pl-0 last:lg:pr-0 relative z-[2]"
                >
                  {/* Icon + STEP X — horizontal row */}
                  <div className="flex items-center gap-3">
                    <StackedIcon icon={Icon} />
                    <span
                      className="font-bold uppercase"
                      style={{
                        fontSize: 11,
                        letterSpacing: '0.12em',
                        color: 'rgba(255,255,255,0.5)',
                      }}
                    >
                      {step.label}
                    </span>
                  </div>

                  {/* Step title */}
                  <p className="text-white font-semibold" style={{ fontSize: 15, marginTop: 16, marginBottom: 8 }}>
                    {titles[i]}
                  </p>

                  {/* Description */}
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)', lineHeight: 1.6 }}>
                    {step.desc}
                  </p>
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
