import { motion } from 'framer-motion';
import { fadeUpVariants, viewportConfig } from '@/lib/animations';
import { useLanguage } from '@/context/LanguageContext';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const ContactFaqSection = () => {
  const { t } = useLanguage();

  const faqs = [
    { q: t('contactFaq', 'q1'), a: t('contactFaq', 'a1') },
    { q: t('contactFaq', 'q2'), a: t('contactFaq', 'a2') },
    { q: t('contactFaq', 'q3'), a: t('contactFaq', 'a3') },
    { q: t('contactFaq', 'q4'), a: t('contactFaq', 'a4') },
  ];

  return (
    <section className="py-20 md:py-28">
      <div className="section-container max-w-4xl mx-auto">
        <motion.h2
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-3xl md:text-5xl font-bold text-white text-center mb-12 md:mb-16"
        >
          {t('contactFaq', 'title')}
        </motion.h2>

        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="rounded-2xl border border-white/10 bg-white/[0.04] px-6 md:px-8 backdrop-blur-sm data-[state=open]:bg-white/[0.06] transition-colors"
              >
                <AccordionTrigger className="text-white text-[16px] md:text-[18px] font-semibold py-5 md:py-6 hover:no-underline text-left [&[data-state=open]>svg]:rotate-180">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-white/70 text-[15px] leading-relaxed pb-6 whitespace-pre-line">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactFaqSection;
