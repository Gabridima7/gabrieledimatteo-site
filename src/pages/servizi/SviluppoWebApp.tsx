import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Globe, Smartphone, Database, Layers } from 'lucide-react';
import SEOHead from '@/components/SEOHead';

const CAL_LINK = 'https://cal.com/nexus-agency/30min?overlayCalendar=true';

const services = [
  { icon: Code, title: 'Sviluppo Web & App', desc: 'Siti web e applicazioni performanti, responsive e ottimizzati per la conversione.' },
  { icon: Globe, title: 'Landing Page', desc: 'Pagine di atterraggio ad alta conversione per campagne marketing e lancio prodotti.' },
  { icon: Smartphone, title: 'Web App', desc: 'Applicazioni web progressive e interattive per i tuoi utenti.' },
  { icon: Database, title: 'Software Gestionale', desc: 'Soluzioni gestionali su misura per ottimizzare i processi aziendali.' },
  { icon: Layers, title: 'Prodotto SaaS', desc: 'Sviluppo di prodotti SaaS scalabili dalla MVP al lancio.' },
];

const SviluppoWebApp = () => (
  <>
    <SEOHead title="Sviluppo Web & App — NEXUS Agency" description="Sviluppo web, app, landing page, software gestionale e prodotti SaaS su misura per PMI italiane." />
    <div className="pt-24 pb-16">
      <section className="py-16">
        <div className="section-container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
              Sviluppo <span className="italic font-light text-[hsl(228,85%,60%)]">Web & App</span>
            </h1>
            <p className="text-white/60 text-lg max-w-xl mb-10">
              Creiamo soluzioni digitali performanti, scalabili e su misura per la tua azienda.
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

export default SviluppoWebApp;
