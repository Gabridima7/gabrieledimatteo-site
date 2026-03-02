import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { fadeUpVariants, viewportConfig } from '@/lib/animations';
import { useLanguage } from '@/context/LanguageContext';
import founderImg from '@/assets/founder-gd.png';

const ContactTestimonial = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-24">
      <div className="section-container max-w-4xl mx-auto">
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="relative rounded-3xl overflow-hidden"
          style={{
            background: 'linear-gradient(160deg, rgba(255,255,255,0.97) 0%, rgba(240,253,244,0.95) 100%)',
          }}
        >
          <div className="px-8 py-12 md:px-16 md:py-16 text-center">
            {/* Quote mark */}
            <div className="text-5xl md:text-6xl font-serif text-[#111827]/20 leading-none mb-6">"</div>

            {/* Quote */}
            <blockquote className="text-xl md:text-2xl lg:text-[28px] font-semibold text-[#111827] leading-snug max-w-2xl mx-auto mb-10">
              {t('contactTestimonial', 'quotePre')}
              <span className="bg-[#d0f601]/30 px-1.5 py-0.5 rounded">{t('contactTestimonial', 'quoteHighlight')}</span>
              {t('contactTestimonial', 'quotePost')}
            </blockquote>

            {/* Avatar + name */}
            <div className="flex flex-col items-center gap-3">
              <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-lg">
                <img src={founderImg} alt={t('contactTestimonial', 'name')} className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="font-semibold text-[#111827] text-[15px]">{t('contactTestimonial', 'name')}</p>
                <p className="text-[#6B7280] text-sm">{t('contactTestimonial', 'role')}</p>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2 mt-2">
                <span className="text-[#111827] font-bold text-sm">5.0</span>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-orange-500 text-orange-500" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactTestimonial;
