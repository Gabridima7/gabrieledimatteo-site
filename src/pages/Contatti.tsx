import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Mail, CheckCircle, Phone, ArrowRight, Paperclip, X } from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import founderImg from '@/assets/founder-gd.png';
import { fadeUpVariants, viewportConfig } from '@/lib/animations';
import checkmarkIcon from '@/assets/icons/icon-checkmark-green.png';
import { useLanguage } from '@/context/LanguageContext';
import TrustBar from '@/components/TrustBar';
import NextStepsSection from '@/components/NextStepsSection';
import ContactTestimonial from '@/components/ContactTestimonial';
import ContactCtaSection from '@/components/ContactCtaSection';
import ContactFaqSection from '@/components/ContactFaqSection';

const CAL_LINK = 'https://cal.com/nexus-agency/30min?overlayCalendar=true';

const Contatti = () => {
  const { t } = useLanguage();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [files, setFiles] = useState<File[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(prev => [...prev, ...Array.from(e.target.files!)]);
      e.target.value = '';
    }
  };

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`${t('contatti', 'emailSubject')} ${form.name}`);
    const body = encodeURIComponent(`${t('contatti', 'labelName').replace('*', '')}: ${form.name}\nEmail: ${form.email}\n\n${t('contatti', 'labelProject').replace('*', '')}:\n${form.message}`);
    window.open(`mailto:info@nexusagency.it?subject=${subject}&body=${body}`, '_self');
    setSubmitted(true);
  };

  const benefits = [
    t('contatti', 'benefit1'),
    t('contatti', 'benefit2'),
    t('contatti', 'benefit3'),
  ];

  return (
    <>
      <SEOHead
        title={t('contatti', 'seoTitle')}
        description={t('contatti', 'seoDesc')}
        canonical="https://nexusagency.it/contatti" />

      <div className="pt-8">
        {/* Breadcrumb */}
        <section className="py-6">
          <div className="section-container">
            <p className="text-[13px] uppercase tracking-wide" style={{ color: 'rgba(255,255,255,0.45)' }}>
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              {' / '}
              <span className="text-white/70">{t('contatti', 'breadcrumb')}</span>
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
                  border: '1px solid rgba(255,255,255,0.08)'
                }}>
                
                {/* Founder */}
                <div>
                  <div className="flex items-center gap-4 mb-8">
                    <div className="relative w-16 h-16 group">
                      <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white/20">
                        <img src={founderImg} alt="Gabriele Di Matteo — Founder" className="w-full h-full object-cover" />
                      </div>
                      <a
                        href="https://www.linkedin.com/in/gabriele-di-matteo/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute -bottom-1 -right-1 w-7 h-7 bg-white rounded-full flex items-center justify-center shadow-md transition-transform duration-200 hover:scale-110 active:scale-95"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="#0A66C2">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </a>
                    </div>
                    <div>
                      <p className="font-serif-accent text-xl text-white italic">Gabriele Di Matteo </p>
                      <p className="text-white/60 text-sm">{t('contatti', 'founderRole')}</p>
                    </div>
                  </div>

                  {/* Benefits */}
                  <ul className="space-y-4 mb-10">
                    {benefits.map((item, i) =>
                    <li key={i} className="flex items-center gap-3">
                        <img src={checkmarkIcon} alt="" className="w-5 h-5 shrink-0" />
                        <span className="text-white/90 text-[15px] font-medium">{item}</span>
                      </li>
                    )}
                  </ul>
                </div>

                {/* Contact info */}
                <div>
                  <p className="text-primary text-xs font-semibold uppercase tracking-wider mb-4">{t('contatti', 'contactLabel')}</p>
                  <div className="space-y-3">
                    <a
                      href="mailto:info@nexusagency.it"
                      className="flex items-center gap-3 text-white/80 hover:text-white transition-colors text-sm">
                      <Mail size={18} className="text-white/50" />
                      info@nexusagency.it
                    </a>
                    <a
                      href={CAL_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-white/80 hover:text-white transition-colors text-sm">
                      <Phone size={18} className="text-white/50" />
                      {t('contatti', 'bookCall')}
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
                  background: 'rgba(255,255,255,0.97)'
                }}>
                
                <h1 className="text-3xl md:text-4xl font-bold text-[#111827] mb-8">
                  {t('contatti', 'formTitle')}
                </h1>

                {submitted ?
                <div className="flex flex-col items-center justify-center py-16 text-center">
                    <CheckCircle className="text-primary mb-4" size={48} />
                    <p className="text-[#111827] text-lg font-semibold mb-2">{t('contatti', 'successTitle')}</p>
                    <p className="text-[#6B7280]">{t('contatti', 'successMsg')}</p>
                  </div> :

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-[13px] font-medium text-[#374151] mb-1.5 block">{t('contatti', 'labelName')}</label>
                        <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                        className="w-full border-0 border-b border-[#D1D5DB] bg-transparent text-[#111827] py-2.5 text-[15px] focus:outline-none focus:border-[#1C35C8] transition-colors placeholder:text-[#9CA3AF]"
                        placeholder={t('contatti', 'placeholderName')} />
                      </div>
                      <div>
                        <label className="text-[13px] font-medium text-[#374151] mb-1.5 block">{t('contatti', 'labelEmail')}</label>
                        <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                        className="w-full border-0 border-b border-[#D1D5DB] bg-transparent text-[#111827] py-2.5 text-[15px] focus:outline-none focus:border-[#1C35C8] transition-colors placeholder:text-[#9CA3AF]"
                        placeholder={t('contatti', 'placeholderEmail')} />
                      </div>
                    </div>

                    <div>
                      <label className="text-[13px] font-medium text-[#374151] mb-1.5 block">{t('contatti', 'labelProject')}</label>
                      <textarea
                      required
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                      className="w-full border-0 border-b border-[#D1D5DB] bg-transparent text-[#111827] py-2.5 text-[15px] focus:outline-none focus:border-[#1C35C8] transition-colors resize-none placeholder:text-[#9CA3AF]"
                      placeholder={t('contatti', 'placeholderProject')} />
                    </div>

                    {/* File upload */}
                    <div className="flex flex-col gap-2">
                      <input
                        ref={fileInputRef}
                        type="file"
                        multiple
                        accept=".pdf,.doc,.docx,.png,.jpg,.jpeg,.zip"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                      <button
                        type="button"
                        onClick={() => fileInputRef.current?.click()}
                        className="inline-flex items-center gap-2.5 border border-[#D1D5DB] rounded-full px-5 py-2.5 text-[13px] text-[#6B7280] hover:border-[#9CA3AF] hover:text-[#374151] transition-colors w-fit"
                      >
                        <Paperclip size={16} />
                        <span>.doc .pdf .png .jpg .zip</span>
                      </button>
                      {files.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-1">
                          {files.map((file, i) => (
                            <span key={i} className="inline-flex items-center gap-1.5 bg-[#F3F4F6] text-[#374151] text-[12px] font-medium px-3 py-1.5 rounded-full">
                              {file.name}
                              <button type="button" onClick={() => removeFile(i)} className="hover:text-red-500 transition-colors">
                                <X size={13} />
                              </button>
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4">
                      <p className="text-[11px] text-[#9CA3AF] max-w-[280px]">
                        {t('contatti', 'disclaimer')}{' '}
                        <Link to="/privacy" className="underline hover:text-[#374151]">Privacy Policy</Link>
                        {' '}{t('contatti', 'disclaimerAnd')}{' '}
                        <Link to="/cookie" className="underline hover:text-[#374151]">Cookie Policy</Link>.
                      </p>
                      <button
                      type="submit"
                      className="inline-flex items-center gap-2 bg-[#d0f601] hover:bg-[#bde000] text-[#111827] font-semibold px-8 py-3.5 rounded-full text-[15px] transition-colors shrink-0">
                        {t('contatti', 'submit')}
                        <ArrowRight size={18} />
                      </button>
                    </div>
                  </form>
                }
              </motion.div>

            </div>
          </div>
        </section>

        {/* Trust Bar */}
        <TrustBar />

        {/* Next Steps */}
        <NextStepsSection />

        {/* Testimonial */}
        <ContactTestimonial />

        {/* CTA Section */}
        <ContactCtaSection />

        {/* FAQ */}
        <ContactFaqSection />
      </div>
    </>);
};

export default Contatti;
