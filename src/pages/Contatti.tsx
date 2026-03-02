import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Mail, CheckCircle, Phone, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import SEOHead from '@/components/SEOHead';
import founderImg from '@/assets/founder-gd.png';
import { fadeUpVariants, viewportConfig } from '@/lib/animations';

const CAL_LINK = 'https://cal.com/nexus-agency/30min?overlayCalendar=true';

const Contatti = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // mailto fallback
    const subject = encodeURIComponent(`Richiesta progetto da ${form.name}`);
    const body = encodeURIComponent(`Nome: ${form.name}\nEmail: ${form.email}\n\nMessaggio:\n${form.message}`);
    window.open(`mailto:info@nexusagency.it?subject=${subject}&body=${body}`, '_self');
    setSubmitted(true);
  };

  return (
    <>
      <SEOHead
        title="Contatti — NEXUS Agency"
        description="Contattaci per discutere il tuo progetto. Rispondiamo entro 12 ore."
        canonical="https://nexusagency.it/contatti"
      />

      <div className="pt-8">
        {/* Breadcrumb */}
        <section className="py-6">
          <div className="section-container">
            <p className="text-[13px] uppercase tracking-wide" style={{ color: 'rgba(255,255,255,0.45)' }}>
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              {' / '}
              <span className="text-white/70">Contatti</span>
            </p>
          </div>
        </section>

        {/* Main content */}
        <section className="pb-24">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-6 max-w-6xl mx-auto">

              {/* Left — Info Card */}
              <motion.div
                variants={fadeUpVariants}
                initial="hidden"
                animate="visible"
                className="rounded-2xl p-8 lg:p-10 flex flex-col justify-between min-h-[520px]"
                style={{
                  background: 'linear-gradient(160deg, rgba(28,53,200,0.25) 0%, rgba(14,165,200,0.15) 50%, rgba(61,43,196,0.2) 100%)',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                {/* Founder */}
                <div>
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white/20">
                      <img src={founderImg} alt="Giuliano D. — Founder" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <p className="font-serif-accent text-xl text-white italic">Giuliano D.</p>
                      <p className="text-white/60 text-sm">Founder & CEO</p>
                    </div>
                  </div>

                  {/* Benefits */}
                  <ul className="space-y-4 mb-10">
                    {[
                      'Rispondiamo entro 12 ore',
                      'Firmiamo un NDA su richiesta',
                      'Accesso diretto a specialisti dedicati',
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <CheckCircle className="text-primary shrink-0" size={20} />
                        <span className="text-white/90 text-[15px] font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Contact info */}
                <div>
                  <p className="text-primary text-xs font-semibold uppercase tracking-wider mb-4">Contattaci</p>
                  <div className="space-y-3">
                    <a
                      href="mailto:info@nexusagency.it"
                      className="flex items-center gap-3 text-white/80 hover:text-white transition-colors text-sm"
                    >
                      <Mail size={18} className="text-white/50" />
                      info@nexusagency.it
                    </a>
                    <a
                      href={CAL_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-white/80 hover:text-white transition-colors text-sm"
                    >
                      <Phone size={18} className="text-white/50" />
                      Prenota una call
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Right — Form Card */}
              <motion.div
                variants={fadeUpVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.15 }}
                className="rounded-2xl p-8 lg:p-10 min-h-[520px]"
                style={{
                  background: 'rgba(255,255,255,0.97)',
                }}
              >
                <h1 className="text-3xl md:text-4xl font-bold text-[#111827] mb-8">
                  Parlaci del tuo progetto
                </h1>

                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center">
                    <CheckCircle className="text-primary mb-4" size={48} />
                    <p className="text-[#111827] text-lg font-semibold mb-2">Grazie!</p>
                    <p className="text-[#6B7280]">Ti risponderemo il prima possibile.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-[13px] font-medium text-[#374151] mb-1.5 block">Nome completo*</label>
                        <input
                          type="text"
                          required
                          value={form.name}
                          onChange={(e) => setForm(f => ({ ...f, name: e.target.value }))}
                          className="w-full border-0 border-b border-[#D1D5DB] bg-transparent text-[#111827] py-2.5 text-[15px] focus:outline-none focus:border-[#1C35C8] transition-colors placeholder:text-[#9CA3AF]"
                          placeholder="Il tuo nome"
                        />
                      </div>
                      <div>
                        <label className="text-[13px] font-medium text-[#374151] mb-1.5 block">Email aziendale*</label>
                        <input
                          type="email"
                          required
                          value={form.email}
                          onChange={(e) => setForm(f => ({ ...f, email: e.target.value }))}
                          className="w-full border-0 border-b border-[#D1D5DB] bg-transparent text-[#111827] py-2.5 text-[15px] focus:outline-none focus:border-[#1C35C8] transition-colors placeholder:text-[#9CA3AF]"
                          placeholder="nome@azienda.it"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-[13px] font-medium text-[#374151] mb-1.5 block">Il tuo progetto*</label>
                      <textarea
                        required
                        rows={4}
                        value={form.message}
                        onChange={(e) => setForm(f => ({ ...f, message: e.target.value }))}
                        className="w-full border-0 border-b border-[#D1D5DB] bg-transparent text-[#111827] py-2.5 text-[15px] focus:outline-none focus:border-[#1C35C8] transition-colors resize-none placeholder:text-[#9CA3AF]"
                        placeholder="Descrivi brevemente il tuo progetto..."
                      />
                    </div>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4">
                      <p className="text-[11px] text-[#9CA3AF] max-w-[280px]">
                        Inviando questo modulo accetti la nostra{' '}
                        <Link to="/privacy" className="underline hover:text-[#374151]">Privacy Policy</Link>
                        {' '}e la{' '}
                        <Link to="/cookie" className="underline hover:text-[#374151]">Cookie Policy</Link>.
                      </p>
                      <button
                        type="submit"
                        className="inline-flex items-center gap-2 bg-[#d0f601] hover:bg-[#bde000] text-[#111827] font-semibold px-8 py-3.5 rounded-full text-[15px] transition-colors shrink-0"
                      >
                        Invia
                        <ArrowRight size={18} />
                      </button>
                    </div>
                  </form>
                )}
              </motion.div>

            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contatti;
