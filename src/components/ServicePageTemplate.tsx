import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Check, ChevronLeft, ChevronRight, Plus, X, Clock, MessageCircle, ShieldCheck, Headphones, Star, type LucideIcon } from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import iconConsegnaTempi from '@/assets/icons/icon-consegna-tempi.png';
import iconComunicazioneDiretta from '@/assets/icons/icon-comunicazione-diretta.png';
import iconCodiceProprieta from '@/assets/icons/icon-codice-proprieta.png';
import iconSupportoPostLancio from '@/assets/icons/icon-supporto-post-lancio.png';

const CAL_LINK = 'https://cal.com/nexus-agency/30min?overlayCalendar=true';

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.5, ease },
};

const stagger = (i: number) => ({ ...fadeUp, transition: { duration: 0.5, ease, delay: i * 0.1 } });

/* ── Props ── */
export interface ServicePageProps {
  seoTitle: string;
  seoDescription: string;
  badge: string;
  h1: string;
  subtitle: string;
  heroIcon: LucideIcon;
  stats: { value: string; label: string }[];
  heroQuote: { text: string; name: string; role: string };
  caseStudies: { name: string; category: string; description: string; metrics: string[]; slug: string }[];
  ctaBannerText: string;
  benefits: { icon: LucideIcon; title: string; desc: string }[];
  process: { title: string; items: string[] }[];
  outcomes: string[];
  outcomesCtaText: string;
  faqs: { q: string; a: string }[];
  finalCtaH2: string;
}

/* ── Reviews (same for all pages) ── */
const reviews = [
  { text: "NEXUS ha capito subito le nostre esigenze. Il gestionale ci ha cambiato la vita operativa.", name: "Marco R.", role: "Founder, Homeleven" },
  { text: "Professionalità e velocità di esecuzione fuori dal comune. Consigliato a qualsiasi PMI italiana.", name: "Andrea Z.", role: "CEO, ONE UP" },
  { text: "Il sito rifatto da NEXUS ha portato un aumento immediato delle richieste di preventivo.", name: "Gianni B.", role: "Titolare, Biglia Serramenti" },
];

/* ── Why NEXUS (same for all pages) ── */
const whyNexus: { icon?: typeof Clock; image?: string; title: string; desc: string }[] = [
  { image: iconConsegnaTempi, title: "Consegna nei tempi", desc: "Rispettiamo sempre le scadenze concordate." },
  { image: iconComunicazioneDiretta, title: "Comunicazione diretta", desc: "Parli sempre con Gabriele, mai con intermediari." },
  { image: iconCodiceProprieta, title: "Codice di tua proprietà", desc: "Tutto il codice sviluppato è al 100% tuo." },
  { image: iconSupportoPostLancio, title: "Supporto post-lancio", desc: "Ti accompagniamo anche dopo la consegna." },
];

/* ── FAQ Accordion Item ── */
const FaqItem = ({ q, a, isOpen, toggle }: { q: string; a: string; isOpen: boolean; toggle: () => void }) => (
  <div style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
    <button onClick={toggle} className="w-full flex items-center justify-between py-5 text-left cursor-pointer">
      <span className="text-base font-medium text-white pr-4">{q}</span>
      <motion.span animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: 0.2 }} className="text-primary flex-shrink-0">
        {isOpen ? <X size={20} /> : <Plus size={20} />}
      </motion.span>
    </button>
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}>
          <p className="pb-5 text-[15px] leading-[1.7]" style={{ color: 'rgba(255,255,255,0.65)' }}>{a}</p>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

/* ══════════════════════════════════════════ */
const ServicePageTemplate = (props: ServicePageProps) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [reviewIdx, setReviewIdx] = useState(0);
  const HeroIcon = props.heroIcon;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: props.faqs.map(f => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <SEOHead title={props.seoTitle} description={props.seoDescription} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="pt-[120px] pb-16">

        {/* ═══ 1 — HERO ═══ */}
        <section className="min-h-[85vh] flex items-center">
          <div className="section-container w-full">
            <div className="grid lg:grid-cols-[60%_40%] gap-12 items-center">
              {/* Left */}
              <motion.div {...fadeUp}>
                <p className="text-[13px] mb-8" style={{ color: 'rgba(255,255,255,0.45)' }}>
                  <Link to="/" className="hover:text-white transition-colors">Home</Link>
                  {' / '}
                  <span>Servizi</span>
                  {' / '}
                  <span className="text-white/70">{props.badge}</span>
                </p>
                <h1 className="font-extrabold text-white leading-[1.1] tracking-[-0.02em] max-w-[600px]" style={{ fontSize: 'clamp(40px,5vw,72px)' }}>
                  {props.h1}
                </h1>
                <p className="text-lg max-w-[520px] mt-5 leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>
                  {props.subtitle}
                </p>
                <a href={CAL_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary px-8 py-4 font-semibold mt-9 inline-flex">
                  Prenota una call gratuita <ArrowRight size={16} />
                </a>
                {/* Stats */}
                <div className="flex flex-wrap gap-10 mt-12 pt-12" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                  {props.stats.map((s, i) => (
                    <div key={i} className="flex items-start gap-10">
                      {i > 0 && <div className="hidden sm:block w-px h-12 -ml-10 flex-shrink-0" style={{ background: 'rgba(255,255,255,0.1)' }} />}
                      <div>
                        <p className="font-bold text-white" style={{ fontSize: 'clamp(28px,3vw,40px)' }}>{s.value}</p>
                        <p className="text-[13px] mt-1" style={{ color: 'rgba(255,255,255,0.5)' }}>{s.label}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
              {/* Right */}
              <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.2 }} className="hidden lg:flex items-center justify-center">
                <div className="relative w-full aspect-square max-w-[400px]">
                  <div className="absolute inset-0 rounded-3xl" style={{ background: 'linear-gradient(135deg, hsl(228,76%,45%), hsl(228,85%,60%), hsl(190,70%,50%))' , opacity: 0.15 }} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-[120px] h-[120px] rounded-2xl flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.1)' }}>
                      <HeroIcon size={80} className="text-white" strokeWidth={1} />
                    </div>
                  </div>
                  {/* Decorations */}
                  <motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: 4, repeat: Infinity }} className="absolute top-8 right-8 w-4 h-4 rounded-full" style={{ background: 'hsl(228,76%,45%)' }} />
                  <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute bottom-12 left-8 w-6 h-6 rounded" style={{ border: '2px solid hsl(228,85%,60%)', opacity: 0.4 }} />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ═══ 2 — TESTIMONIANZA HERO ═══ */}
        <section className="py-12" style={{ background: 'rgba(255,255,255,0.03)', borderTop: '1px solid rgba(255,255,255,0.08)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          <div className="section-container">
            <motion.div {...fadeUp} className="max-w-[800px] mx-auto flex flex-col sm:flex-row items-center gap-6">
              <span className="text-[80px] leading-none font-serif text-primary/30 select-none">"</span>
              <div className="flex-1">
                <p className="italic text-lg leading-relaxed" style={{ color: 'rgba(255,255,255,0.85)' }}>{props.heroQuote.text}</p>
                <div className="flex items-center gap-3 mt-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold text-white" style={{ background: 'linear-gradient(135deg, hsl(228,76%,45%), hsl(228,85%,60%))' }}>
                    {props.heroQuote.name.split(' ').map(w => w[0]).join('')}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{props.heroQuote.name}</p>
                    <p className="text-[13px]" style={{ color: 'rgba(255,255,255,0.5)' }}>{props.heroQuote.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ═══ 3 — CASE STUDY ═══ */}
        <section className="py-24">
          <div className="section-container">
            <motion.div {...fadeUp} className="flex items-center justify-between mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white">I nostri lavori su {props.badge}</h2>
              <Link to="/casi-studio" className="text-primary font-semibold text-sm hover:underline inline-flex items-center gap-1">Vedi tutti <ArrowRight size={14} /></Link>
            </motion.div>
            <div className="flex flex-col gap-8">
              {props.caseStudies.map((cs, i) => (
                <motion.div key={i} {...stagger(i)} className="rounded-2xl overflow-hidden grid md:grid-cols-[45%_55%]" style={{ border: '1px solid rgba(255,255,255,0.08)' }}>
                  <div className="aspect-video md:aspect-auto flex items-center justify-center" style={{ background: 'linear-gradient(135deg, hsl(228,76%,35%), hsl(228,85%,50%))' }}>
                    <span className="text-white/70 text-xl font-bold">{cs.name}</span>
                  </div>
                  <div className="p-8">
                    <span className="badge-pill">{cs.category}</span>
                    <h3 className="text-[22px] font-bold text-white mt-3">{cs.name}</h3>
                    <p className="mt-2 line-clamp-2" style={{ color: 'rgba(255,255,255,0.6)' }}>{cs.description}</p>
                    <Link to={`/casi-studio`} className="inline-flex items-center gap-1 mt-4 text-sm font-semibold" style={{ color: '#4F6FE8' }}>Vedi caso studio <ArrowRight size={14} /></Link>
                    <div className="flex gap-3 mt-4">
                      {cs.metrics.map((m, j) => (
                        <span key={j} className="text-xs px-3 py-1 rounded-full" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.7)' }}>{m}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ 4 — BANNER CTA ═══ */}
        <section className="py-20">
          <div className="section-container">
            <motion.div {...fadeUp} className="max-w-5xl mx-auto rounded-3xl text-center py-16 px-8" style={{ background: 'rgba(28,53,200,0.12)', border: '1px solid rgba(28,53,200,0.2)' }}>
              <h2 className="font-bold text-white" style={{ fontSize: 'clamp(28px,3.5vw,48px)' }}>{props.ctaBannerText}</h2>
              <p className="mt-4" style={{ color: 'rgba(255,255,255,0.65)' }}>Parliamo del tuo progetto senza impegno.</p>
              <a href={CAL_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary px-8 py-4 mt-8 inline-flex">
                Prenota una call <ArrowRight size={16} />
              </a>
            </motion.div>
          </div>
        </section>

        {/* ═══ 5 — BENEFICI ═══ */}
        <section className="py-24">
          <div className="section-container">
            <motion.h2 {...fadeUp} className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
              Come {props.badge} trasforma la tua PMI
            </motion.h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {props.benefits.map((b, i) => {
                const Icon = b.icon;
                return (
                  <motion.div key={i} {...stagger(i)} className="service-card p-8">
                    <div className="icon-glass mb-5"><Icon size={24} className="text-primary" /></div>
                    <h3 className="text-lg font-semibold text-white">{b.title}</h3>
                    <p className="mt-2 leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>{b.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ═══ 6 — PROCESSO ═══ */}
        <section className="py-24">
          <div className="section-container">
            <motion.h2 {...fadeUp} className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
              Il nostro processo per {props.badge}
            </motion.h2>
            <motion.p {...fadeUp} className="text-center text-lg max-w-[700px] mx-auto mb-16" style={{ color: 'rgba(255,255,255,0.55)' }}>
              Un processo collaudato che copre ogni fase, dalla ricerca al supporto continuo.
            </motion.p>
            <motion.div {...fadeUp} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 relative" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
              {props.process.map((stage, i) => {
                // Gradient shifts per stage: teal → blue → purple
                const gradients = [
                  'linear-gradient(135deg, #2dd4bf, #14b8a6)',
                  'linear-gradient(135deg, #14b8a6, #3b82f6)',
                  'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                  'linear-gradient(135deg, #8b5cf6, #c084fc)',
                ];
                return (
                  <div
                    key={i}
                    className="relative pt-8 pb-8 px-4 lg:px-5"
                    style={{
                      borderRight: i < props.process.length - 1 ? '1px solid rgba(255,255,255,0.1)' : 'none',
                      borderBottom: '1px solid rgba(255,255,255,0.1)',
                    }}
                  >
                    {/* Stage connector tick mark */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-4" style={{ background: 'rgba(255,255,255,0.2)' }} />
                    {/* Stage label */}
                    <p className="text-[13px] font-medium tracking-widest uppercase mb-6 text-center" style={{ color: 'rgba(255,255,255,0.35)' }}>
                      Stage {i + 1}
                    </p>
                    {/* Gradient title pill */}
                    <div
                      className="rounded-full px-5 py-2.5 text-sm font-semibold text-white text-center mb-5 mx-auto max-w-[220px]"
                      style={{ background: gradients[i % gradients.length] }}
                    >
                      {stage.title}
                    </div>
                    {/* Sub-items */}
                    <div className="flex flex-col gap-2.5">
                      {stage.items.map((item, j) => (
                        <div
                          key={j}
                          className="rounded-full px-4 py-2 text-[13px] text-center mx-auto max-w-[220px] w-full"
                          style={{
                            border: '1px solid rgba(255,255,255,0.12)',
                            color: 'rgba(255,255,255,0.65)',
                            background: 'rgba(255,255,255,0.03)',
                          }}
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* ═══ 7 — OUTCOMES ═══ */}
        <section className="py-20" style={{ background: 'rgba(255,255,255,0.02)', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="section-container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div {...fadeUp}>
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  Risultati <em className="font-light" style={{ color: '#4F6FE8' }}>che otterrai:</em>
                </h2>
                <a href={CAL_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary px-8 py-4 mt-8 inline-flex">
                  {props.outcomesCtaText} <ArrowRight size={16} />
                </a>
              </motion.div>
              <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.15 }}>
                <div className="grid sm:grid-cols-2 gap-4">
                  {props.outcomes.map((o, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check size={20} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span className="text-base font-medium text-white">{o}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ═══ 8 — PERCHÉ NEXUS ═══ */}
        <section className="py-24">
          <div className="section-container">
            <motion.h2 {...fadeUp} className="text-3xl md:text-4xl font-bold text-white text-center mb-16">Come lavoriamo con te</motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {whyNexus.map((w, i) => {
                const Icon = w.icon;
                return (
                  <motion.div key={i} {...stagger(i)} className="flex flex-col items-center text-center">
                    <div className="mb-6">
                      {w.image ? (
                        <img src={w.image} alt={w.title} className="w-16 h-16 object-contain" />
                      ) : Icon ? (
                        <Icon size={40} className="text-primary" />
                      ) : null}
                    </div>
                    <h3 className="text-base font-semibold text-white leading-snug">{w.title}</h3>
                    <p className="text-sm mt-2" style={{ color: 'rgba(255,255,255,0.55)' }}>{w.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ═══ 9 — RECENSIONI ═══ */}
        <section className="py-24">
          <div className="section-container">
            <motion.h2 {...fadeUp} className="text-3xl md:text-4xl font-bold text-white text-center mb-16">Cosa dicono i nostri clienti</motion.h2>
            <div className="relative max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6">
                {[reviewIdx, (reviewIdx + 1) % reviews.length].map((ri, i) => {
                  const r = reviews[ri];
                  return (
                    <motion.div key={ri} {...stagger(i)} className="rounded-2xl p-8" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
                      <div className="flex gap-1 mb-4">{Array(5).fill(0).map((_, j) => <Star key={j} size={16} className="text-amber-400 fill-amber-400" />)}</div>
                      <p className="italic text-[15px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.8)' }}>"{r.text}"</p>
                      <div className="mt-5 pt-5 flex items-center gap-3" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                        <div className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold text-white" style={{ background: 'linear-gradient(135deg, hsl(228,76%,45%), hsl(228,85%,60%))' }}>
                          {r.name.split(' ').map(w => w[0]).join('')}
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-white">{r.name}</p>
                          <p className="text-[13px]" style={{ color: 'rgba(255,255,255,0.45)' }}>{r.role}</p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
              <div className="flex justify-center gap-3 mt-8">
                <button onClick={() => setReviewIdx((reviewIdx - 1 + reviews.length) % reviews.length)} className="w-10 h-10 rounded-full flex items-center justify-center" style={{ border: '1px solid rgba(255,255,255,0.15)' }}><ChevronLeft size={18} className="text-white" /></button>
                <button onClick={() => setReviewIdx((reviewIdx + 1) % reviews.length)} className="w-10 h-10 rounded-full flex items-center justify-center" style={{ border: '1px solid rgba(255,255,255,0.15)' }}><ChevronRight size={18} className="text-white" /></button>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 10 — FAQ ═══ */}
        <section className="py-24">
          <div className="section-container">
            <motion.h2 {...fadeUp} className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
              Domande frequenti su {props.badge}
            </motion.h2>
            <motion.div {...fadeUp} className="max-w-[800px] mx-auto">
              {props.faqs.map((f, i) => (
                <FaqItem key={i} q={f.q} a={f.a} isOpen={openFaq === i} toggle={() => setOpenFaq(openFaq === i ? null : i)} />
              ))}
            </motion.div>
          </div>
        </section>

        {/* ═══ 11 — CTA FINALE ═══ */}
        <section className="py-32">
          <div className="section-container">
            <motion.div {...fadeUp} className="max-w-[700px] mx-auto text-center">
              <h2 className="font-extrabold text-white" style={{ fontSize: 'clamp(32px,4vw,56px)' }}>{props.finalCtaH2}</h2>
              <p className="text-lg mt-4" style={{ color: 'rgba(255,255,255,0.6)' }}>
                Prenota una call gratuita di 30 minuti. Analizziamo il tuo progetto e ti diciamo come possiamo aiutarti.
              </p>
              <a href={CAL_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary px-10 py-5 text-base mt-8 inline-flex">
                Prenota una call gratuita <ArrowRight size={18} />
              </a>
              <p className="text-[13px] mt-4" style={{ color: 'rgba(255,255,255,0.35)' }}>Risposta entro 24h · Nessun impegno</p>
            </motion.div>
          </div>
        </section>

      </div>
    </>
  );
};

export default ServicePageTemplate;
