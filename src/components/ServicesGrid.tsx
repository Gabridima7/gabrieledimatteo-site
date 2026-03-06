import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowDownRight, ArrowRight } from 'lucide-react';
import founderGd from '@/assets/founder-gd.png';

const CAL_LINK = 'https://cal.com/nexus-agency/30min?overlayCalendar=true';

const columns = [
  {
    title: 'Sviluppo',
    items: [
      { label: 'Sviluppo Web & App', href: '/servizi/sviluppo-web' },
      { label: 'Landing Page', href: '/servizi/landing-page' },
      { label: 'Web App', href: '/servizi/web-app' },
      { label: 'Software Gestionale', href: '/servizi/software-gestionale' },
      { label: 'Prodotto SaaS', href: '/servizi/prodotto-saas' },
    ],
  },
  {
    title: 'AI & Automation',
    items: [
      { label: 'AI Automation', href: '/servizi/ai-automation' },
      { label: 'AI Chatbot', href: '/servizi/ai-chatbot' },
      { label: 'Consulenza Digitale', href: '/servizi/consulenza-digitale' },
      { label: 'Integrazioni API', href: '/servizi/integrazioni-api' },
    ],
  },
  {
    title: 'Design',
    items: [
      { label: 'UI/UX Design', href: '/servizi/branding-ui-ux' },
      { label: 'Website Design', href: '/servizi/website-design' },
      { label: 'Mobile App Design', href: '/servizi/mobile-app-design' },
      { label: 'Website Redesign', href: '/servizi/website-redesign' },
      { label: 'Product UX/UI Audit', href: '/servizi/product-ux-ui-audit' },
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const colVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const } },
};

const ServicesGrid = () => {
  return (
    <section className="py-16 px-6 md:px-10">
      <div className="max-w-[1440px] mx-auto">
        {/* White Panel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-3xl p-2 overflow-hidden"
          style={{
            background: '#FFFFFF',
            boxShadow: '0 24px 80px rgba(0,0,0,0.15)',
          }}
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-2"
          >
            {columns.map((col, colIdx) => (
              <motion.div
                key={colIdx}
                variants={colVariants}
                className="rounded-2xl p-5 md:p-7"
                style={{ background: '#F5F5F7' }}
              >
                {/* Column Header */}
                <h3
                  className="font-bold mb-6 pb-4 border-b"
                  style={{
                    fontSize: 'clamp(18px, 2vw, 22px)',
                    color: '#111827',
                    borderColor: '#E5E7EB',
                  }}
                >
                  {col.title}
                </h3>

                {/* Service Items */}
                <div>
                  {col.items.map((item, i) => (
                    <Link
                      key={i}
                      to={item.href}
                      className="group flex items-center justify-between py-4 rounded-lg transition-all duration-150 hover:bg-[rgba(28,53,200,0.04)] hover:px-2"
                      style={{
                        borderBottom: i < col.items.length - 1 ? '1px solid #E5E7EB' : 'none',
                      }}
                    >
                      <span
                        className="text-sm md:text-base font-medium transition-colors duration-200 group-hover:text-[#1C35C8]"
                        style={{ color: '#111827' }}
                      >
                        {item.label}
                      </span>
                      <ArrowDownRight
                        size={18}
                        className="shrink-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                        style={{ color: '#9CA3AF' }}
                        strokeWidth={2}
                      />
                    </Link>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-3 rounded-3xl px-6 py-5 md:px-8 md:py-6 flex flex-col md:flex-row items-center justify-between gap-5"
          style={{
            background: 'rgba(15,15,25,0.85)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            border: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          {/* Left */}
          <div className="flex items-center gap-4 text-center md:text-left">
            {/* Avatar */}
            <div
              className="w-[52px] h-[52px] rounded-full shrink-0 overflow-hidden"
            >
              <img src={founderGd} alt="Gabriele Di Matteo" className="w-full h-full object-cover" />
            </div>
            <p
              className="font-semibold text-white leading-snug max-w-[600px]"
              style={{ fontSize: 'clamp(16px, 2vw, 20px)' }}
            >
              Trasforma la tua PMI con AI e sviluppo digitale su misura.
            </p>
          </div>

          {/* Right */}
          <div className="flex items-center gap-3 w-full md:w-auto">
            <Link to="/casi-studio" className="w-12 h-12 rounded-full bg-[#d0f601] flex items-center justify-center hover:scale-105 transition-transform shrink-0">
              <ArrowRight size={20} className="text-black -rotate-45" />
            </Link>
            <a
              href={CAL_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-6 py-3 text-sm md:px-8 md:py-4 md:text-base rounded-full bg-[#d0f601] hover:bg-[#bde001] text-nexus-navy whitespace-nowrap flex-1 md:flex-none"
            >
              Prenota una call gratuita
              <ArrowRight size={18} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesGrid;
