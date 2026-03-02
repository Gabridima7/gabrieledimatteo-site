import { motion } from 'framer-motion';
import { fadeUpVariants, viewportConfig } from '@/lib/animations';
import { useLanguage } from '@/context/LanguageContext';
import { Mail, ArrowRight } from 'lucide-react';

const CAL_LINK = 'https://cal.com/nexus-agency/30min?overlayCalendar=true';

const ContactCtaSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 md:py-28">
      <div className="section-container">
        <motion.h2
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-3xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-12 md:mb-16 max-w-4xl mx-auto leading-tight"
        >
          {t('contactCta', 'titlePre')}{' '}
          <span className="italic font-serif-accent">{t('contactCta', 'titleItalic')}</span>{' '}
          {t('contactCta', 'titlePost')}
        </motion.h2>

        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid md:grid-cols-5 gap-4 max-w-5xl mx-auto"
        >
          {/* Left — Image */}
          <div className="md:col-span-3 rounded-2xl overflow-hidden h-[320px] md:h-[380px]">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
              alt={t('contactCta', 'imageAlt')}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Right — CTA Card */}
          <div
            className="md:col-span-2 rounded-2xl p-8 flex flex-col items-center justify-center text-center min-h-[280px] md:min-h-0"
            style={{
              background: 'linear-gradient(160deg, rgba(28,53,200,0.4) 0%, rgba(14,25,80,0.8) 50%, rgba(28,53,200,0.3) 100%)',
              border: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            <p className="text-white/60 text-sm uppercase tracking-widest mb-3">
              {t('contactCta', 'cardLabel')}
            </p>
            <a
              href="mailto:info@nexusagency.it"
              className="text-white text-lg md:text-xl font-semibold italic font-serif-accent hover:text-white/80 transition-colors mb-6"
            >
              recruiters@nexusagency.it
            </a>
            <a
              href={CAL_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#d0f601] hover:bg-[#bde000] text-[#111827] font-semibold px-7 py-3 rounded-full text-[14px] transition-colors"
            >
              {t('contactCta', 'bookCall')}
              <ArrowRight size={16} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCtaSection;
