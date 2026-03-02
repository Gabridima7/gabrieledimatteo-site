import { motion } from 'framer-motion';
import { ArrowRight, Search, Target, BarChart3 } from 'lucide-react';
import SEOHead from '@/components/SEOHead';

const CAL_LINK = 'https://cal.com/nexus-agency/30min?overlayCalendar=true';

const services = [
  { icon: Search, title: 'Consulenza Digitale', desc: 'Analisi e strategia per la trasformazione digitale della tua azienda.' },
  { icon: Target, title: 'Product UX/UI Audit', desc: 'Audit completo dell\'esperienza utente per migliorare conversioni e usabilità.' },
  { icon: BarChart3, title: 'Strategia Digitale', desc: 'Roadmap personalizzata per il tuo percorso di digitalizzazione.' },
];

const ConsulenzaDigitale = () => (
  <>
    <SEOHead title="Consulenza Digitale — NEXUS Agency" description="Consulenza digitale, audit UX/UI e strategia digitale per PMI italiane." />
    <div className="pt-24 pb-16">
      <section className="py-16">
        <div className="section-container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
              Consulenza <span className="italic font-light text-[hsl(228,85%,60%)]">Digitale</span>
            </h1>
            <p className="text-white/60 text-lg max-w-xl mb-10">
              Ti guidiamo nella trasformazione digitale con analisi, audit e strategia.
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

export default ConsulenzaDigitale;
