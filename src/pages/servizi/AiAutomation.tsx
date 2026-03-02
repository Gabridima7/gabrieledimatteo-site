import { motion } from 'framer-motion';
import { ArrowRight, Bot, Cpu, Plug, MessageSquare } from 'lucide-react';
import SEOHead from '@/components/SEOHead';

const CAL_LINK = 'https://cal.com/nexus-agency/30min?overlayCalendar=true';

const services = [
  { icon: Cpu, title: 'AI Automation', desc: 'Automatizza processi aziendali ripetitivi con intelligenza artificiale e flussi no-code.' },
  { icon: MessageSquare, title: 'AI Chatbot', desc: 'Chatbot intelligenti per assistenza clienti, lead generation e supporto interno.' },
  { icon: Plug, title: 'Integrazioni API', desc: 'Collegamento tra i tuoi strumenti aziendali con integrazioni API personalizzate.' },
];

const AiAutomation = () => (
  <>
    <SEOHead title="AI Automation — NEXUS Agency" description="Automazioni AI, chatbot intelligenti e integrazioni API per PMI italiane." />
    <div className="pt-24 pb-16">
      <section className="py-16">
        <div className="section-container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
              AI <span className="italic font-light text-[hsl(228,85%,60%)]">Automation</span>
            </h1>
            <p className="text-white/60 text-lg max-w-xl mb-10">
              Elimina il lavoro manuale e libera tempo per attività strategiche con l'AI.
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

export default AiAutomation;
