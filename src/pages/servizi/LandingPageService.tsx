import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import SEOHead from '@/components/SEOHead';

const CAL_LINK = 'https://cal.com/nexus-agency/30min?overlayCalendar=true';

const LandingPageService = () => (
  <>
    <SEOHead title="Landing Page — NEXUS Agency" description="Creiamo landing page ad alta conversione per campagne marketing e lancio prodotti." />
    <div className="pt-24 pb-16">
      <section className="py-16">
        <div className="section-container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
              Landing <span className="italic font-light text-[hsl(228,85%,60%)]">Page</span>
            </h1>
            <p className="text-white/60 text-lg max-w-xl mb-10">
              Pagine di atterraggio ad alta conversione per campagne marketing e lancio prodotti.
            </p>
            <a href={CAL_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Prenota una call gratuita <ArrowRight size={16} />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  </>
);

export default LandingPageService;
