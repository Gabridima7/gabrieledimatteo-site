import { motion } from 'framer-motion';
import { ArrowRight, Palette, Layout, Smartphone, RefreshCw } from 'lucide-react';
import SEOHead from '@/components/SEOHead';

const CAL_LINK = 'https://cal.com/nexus-agency/30min?overlayCalendar=true';

const services = [
  { icon: Palette, title: 'UI/UX Design', desc: 'Design di interfacce intuitive e user experience memorabili.' },
  { icon: Smartphone, title: 'Mobile App Design', desc: 'Design di app mobile native e cross-platform con focus sull\'usabilità.' },
  { icon: RefreshCw, title: 'Website Redesign', desc: 'Rinnoviamo il tuo sito web con un design moderno e performante.' },
  { icon: Layout, title: 'Branding & Identity', desc: 'Identità visiva coerente e distintiva per il tuo brand digitale.' },
];

const BrandingUiUx = () => (
  <>
    <SEOHead title="Branding & UI/UX Design — NEXUS Agency" description="UI/UX design, branding, mobile app design e website redesign per PMI italiane." />
    <div className="pt-24 pb-16">
      <section className="py-16">
        <div className="section-container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
              Branding & <span className="italic font-light text-[hsl(228,85%,60%)]">UI/UX</span>
            </h1>
            <p className="text-white/60 text-lg max-w-xl mb-10">
              Design che comunica, converte e rende il tuo brand indimenticabile.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-6">
                <s.icon className="text-[hsl(228,76%,45%)] mb-4" size={28} />
                <h3 className="font-semibold text-white mb-2">{s.title}</h3>
                <p className="text-sm text-white/50">{s.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <a href={CAL_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary px-8 py-4 text-base">
              Prenota una Call <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>
    </div>
  </>
);

export default BrandingUiUx;
