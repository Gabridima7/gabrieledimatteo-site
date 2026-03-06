import { useParams, Link, useNavigate } from 'react-router-dom';
import { useEffect, useState, useMemo, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, Clock, ChevronDown, Info, Lightbulb, AlertTriangle } from 'lucide-react';
import { blogPosts, type BlogPost, type BlogSection } from '@/data/blogPosts';
import SectionBackground from '@/components/SectionBackground';
import SEOHead from '@/components/SEOHead';

/* ─── helpers ─── */
const parseInlineMarkdown = (text: string) => {
  const parts: (string | JSX.Element)[] = [];
  const regex = /\*\*(.+?)\*\*|\*(.+?)\*|\[(.+?)\]\((.+?)\)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) parts.push(text.slice(lastIndex, match.index));
    if (match[1]) parts.push(<strong key={key++} className="text-white font-semibold">{match[1]}</strong>);
    else if (match[2]) parts.push(<em key={key++}>{match[2]}</em>);
    else if (match[3] && match[4]) parts.push(<a key={key++} href={match[4]} className="text-[#0025FF] hover:underline" target="_blank" rel="noopener noreferrer">{match[3]}</a>);
    lastIndex = regex.lastIndex;
  }
  if (lastIndex < text.length) parts.push(text.slice(lastIndex));
  return parts;
};

const dateToISO = (d: string) => {
  const months: Record<string, string> = { Gen:'01',Feb:'02',Mar:'03',Apr:'04',Mag:'05',Giu:'06',Lug:'07',Ago:'08',Set:'09',Ott:'10',Nov:'11',Dic:'12' };
  const [day, mon, year] = d.split(' ');
  return `${year}-${months[mon] || '01'}-${day.padStart(2, '0')}`;
};

/* ─── section renderer ─── */
const RenderSection = ({ section, id }: { section: BlogSection; id?: string }) => {
  switch (section.type) {
    case 'paragraph':
      return <p className="text-[#D1D5DB] text-[17px] leading-[1.8] mb-6">{parseInlineMarkdown(section.content || '')}</p>;
    case 'heading2':
      return <h2 id={id} className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6 border-l-4 border-[#0025FF] pl-4 scroll-mt-28">{section.content}</h2>;
    case 'heading3':
      return <h3 className="text-xl font-semibold text-white mt-8 mb-4">{section.content}</h3>;
    case 'list':
      return (
        <ul className="space-y-3 mb-6 pl-1">
          {section.items?.map((item, i) => (
            <li key={i} className="flex gap-3 text-[#D1D5DB] text-[17px] leading-[1.8]">
              <span className="mt-[10px] w-2 h-2 rounded-full bg-[#0025FF] shrink-0" />
              <span>{parseInlineMarkdown(item)}</span>
            </li>
          ))}
        </ul>
      );
    case 'quote':
      return (
        <blockquote className="border-l-[3px] border-[#0025FF] bg-[rgba(0,37,255,0.05)] rounded-xl p-6 my-8">
          <p className="text-[#D1D5DB] italic text-[17px] leading-[1.8]">{section.content}</p>
          {section.caption && <p className="text-[#6B7280] text-sm mt-3">— {section.caption}</p>}
        </blockquote>
      );
    case 'callout': {
      const variants = {
        info: { icon: <Info size={20} />, border: '#0025FF', bg: 'rgba(0,37,255,0.08)' },
        tip: { icon: <Lightbulb size={20} />, border: '#10B981', bg: 'rgba(16,185,129,0.08)' },
        warning: { icon: <AlertTriangle size={20} />, border: '#F59E0B', bg: 'rgba(245,158,11,0.08)' },
      };
      const v = variants[section.variant || 'info'];
      return (
        <div className="flex gap-4 rounded-xl p-6 my-8 border-l-4" style={{ borderColor: v.border, background: v.bg }}>
          <span style={{ color: v.border }} className="shrink-0 mt-0.5">{v.icon}</span>
          <p className="text-[#D1D5DB] text-[17px] leading-[1.8]">{parseInlineMarkdown(section.content || '')}</p>
        </div>
      );
    }
    case 'image':
      return (
        <figure className="my-8">
          <img src={section.src} alt={section.alt || ''} className="w-full rounded-xl" loading="lazy" />
          {section.caption && <figcaption className="text-center text-sm text-[#6B7280] mt-3">{section.caption}</figcaption>}
        </figure>
      );
    default:
      return null;
  }
};

/* ─── blog card (reused from listing) ─── */
const RelatedCard = ({ post, index }: { post: BlogPost; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
  >
    <Link
      to={`/blog/${post.slug}`}
      className="group block bg-[#111111] border border-white/[0.06] rounded-2xl overflow-hidden hover:-translate-y-1 hover:border-white/[0.12] hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)] transition-all duration-300"
    >
      <div className="aspect-video overflow-hidden">
        <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500" loading="lazy" />
      </div>
      <div className="p-6">
        <span className="inline-block text-[11px] font-semibold tracking-wider uppercase text-[#0025FF] bg-[#0025FF]/10 px-3 py-1 rounded-full mb-4">{post.category}</span>
        <h3 className="text-lg font-bold text-white mb-2 line-clamp-2 group-hover:text-[#0025FF] transition-colors duration-300">{post.title}</h3>
        <div className="flex items-center gap-3 text-[#6B7280] text-xs mt-4">
          <span>{post.date}</span>
          <span>·</span>
          <span className="flex items-center gap-1"><Clock size={12} />{post.readTime}</span>
        </div>
      </div>
    </Link>
  </motion.div>
);

/* ─── FAQ item ─── */
const FaqAccordion = ({ question, answer, index }: { question: string; answer: string; index: number }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/[0.06] last:border-0">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between py-5 text-left gap-4">
        <span className="text-white font-semibold text-base">{question}</span>
        <ChevronDown size={18} className={`text-[#6B7280] shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}>
            <p className="text-[#9CA3AF] text-[15px] leading-relaxed pb-5">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

/* ─── main component ─── */
const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const post = blogPosts.find((p) => p.slug === slug);
  const [progress, setProgress] = useState(0);
  const [activeHeading, setActiveHeading] = useState('');
  const articleRef = useRef<HTMLDivElement>(null);

  // scroll to top on slug change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [slug]);

  // reading progress
  useEffect(() => {
    const onScroll = () => {
      if (!articleRef.current) return;
      const rect = articleRef.current.getBoundingClientRect();
      const total = articleRef.current.scrollHeight - window.innerHeight;
      const scrolled = -rect.top;
      setProgress(Math.min(100, Math.max(0, (scrolled / total) * 100)));
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [slug]);

  // headings for TOC
  const headings = useMemo(() => {
    if (!post) return [];
    return post.content
      .filter((s) => s.type === 'heading2')
      .map((s, i) => ({ id: `h2-${i}`, label: s.content || '' }));
  }, [post]);

  // active heading observer
  useEffect(() => {
    if (!headings.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length) setActiveHeading(visible[0].target.id);
      },
      { rootMargin: '-100px 0px -60% 0px' }
    );
    headings.forEach((h) => {
      const el = document.getElementById(h.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [headings, slug]);

  // related posts
  const relatedPosts = useMemo(() => {
    if (!post) return [];
    return post.relatedSlugs.map((s) => blogPosts.find((p) => p.slug === s)).filter(Boolean) as BlogPost[];
  }, [post]);

  // SEO schemas
  const blogPostingSchema = post
    ? JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: post.title,
        description: post.metaDescription,
        image: post.coverImage,
        author: { '@type': 'Person', name: post.author },
        publisher: { '@type': 'Organization', name: 'Nexus Agency', url: 'https://nexusagency.it' },
        datePublished: dateToISO(post.date),
        mainEntityOfPage: { '@type': 'WebPage', '@id': `https://nexusagency.it/blog/${post.slug}` },
      })
    : '';

  const faqSchema =
    post?.faq?.length
      ? JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: post.faq.map((f) => ({
            '@type': 'Question',
            name: f.question,
            acceptedAnswer: { '@type': 'Answer', text: f.answer },
          })),
        })
      : '';

  // inject JSON-LD
  useEffect(() => {
    const ids = ['blog-posting-schema', 'blog-faq-schema'];
    ids.forEach((id) => document.getElementById(id)?.remove());

    if (blogPostingSchema) {
      const s = document.createElement('script');
      s.id = 'blog-posting-schema';
      s.type = 'application/ld+json';
      s.textContent = blogPostingSchema;
      document.head.appendChild(s);
    }
    if (faqSchema) {
      const s = document.createElement('script');
      s.id = 'blog-faq-schema';
      s.type = 'application/ld+json';
      s.textContent = faqSchema;
      document.head.appendChild(s);
    }
    return () => ids.forEach((id) => document.getElementById(id)?.remove());
  }, [blogPostingSchema, faqSchema]);

  /* ─── Not found ─── */
  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-6" style={{ background: '#0A0A0A' }}>
        <h1 className="text-3xl font-bold text-white mb-4">Articolo non trovato</h1>
        <p className="text-[#9CA3AF] mb-8">L'articolo che cerchi non esiste o è stato rimosso.</p>
        <Link to="/blog" className="inline-flex items-center gap-2 rounded-full px-6 py-3 bg-[#0025FF] text-white font-medium text-sm hover:bg-[#0025FF]/90 transition-colors">
          <ArrowLeft size={16} /> Torna al Blog
        </Link>
      </div>
    );
  }

  let h2Index = 0;

  return (
    <>
      <SEOHead
        title={`${post.title} | Blog - Nexus Agency`}
        description={post.metaDescription}
        canonical={`https://nexusagency.it/blog/${post.slug}`}
      />

      {/* Progress bar */}
      <div className="fixed top-0 left-0 w-full h-[3px] z-[60]">
        <div
          className="h-full transition-[width] duration-150 ease-out"
          style={{ width: `${progress}%`, background: 'linear-gradient(90deg, #0025FF, #4F8FFF)' }}
        />
      </div>

      {/* Hero */}
      <section className="relative pt-32 pb-12 md:pt-40 md:pb-16" style={{ background: '#0A0A0A' }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(0,37,255,0.12) 0%, transparent 70%)' }} />
        <div className="relative z-[2] section-container lg:pl-2">
          <div className="max-w-[900px]">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}>
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-[#6B7280] mb-6">
              <Link to="/blog" className="hover:text-white transition-colors">Blog</Link>
              <span>›</span>
              <span className="text-[#9CA3AF]">{post.category}</span>
            </nav>

            {/* Badge */}
            <span className="inline-block text-[11px] font-semibold tracking-wider uppercase px-3 py-1 rounded-full mb-6" style={{ color: '#0025FF', background: 'rgba(0,37,255,0.15)' }}>
              {post.category}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-6"
          >
            {post.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl text-[#9CA3AF] mb-8"
          >
            {post.excerpt}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3 text-sm mb-10"
          >
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#0025FF] to-[#4F6FE8] flex items-center justify-center text-white text-xs font-bold">
              {post.author.split(' ').map((n) => n[0]).join('')}
            </div>
            <span className="text-white font-medium">{post.author}</span>
            <span className="text-[#6B7280]">·</span>
            <span className="text-[#6B7280]">{post.date}</span>
            <span className="text-[#6B7280]">·</span>
            <span className="text-[#6B7280] flex items-center gap-1"><Clock size={13} />{post.readTime}</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            <img src={post.coverImage} alt={post.title} className="w-full aspect-video object-cover rounded-2xl" />
          </motion.div>
          </div>
        </div>
      </section>

      {/* Body + TOC */}
      <section ref={articleRef} className="relative py-12 md:py-16" style={{ background: '#0A0A0A' }}>
        <div className="relative z-[2] section-container lg:pl-2">
          <div className="flex gap-16">
            {/* Main content */}
            <article className="flex-1 max-w-[800px]">
              {post.content.map((section, i) => {
                const id = section.type === 'heading2' ? `h2-${h2Index++}` : undefined;
                return <RenderSection key={i} section={section} id={id} />;
              })}
            </article>

            {/* TOC sidebar — desktop only */}
            {headings.length > 0 && (
              <aside className="hidden xl:block w-[220px] shrink-0">
                <div className="sticky top-28">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#6B7280] mb-4">Indice</p>
                  <nav className="space-y-1">
                    {headings.map((h) => (
                      <a
                        key={h.id}
                        href={`#${h.id}`}
                        onClick={(e) => {
                          e.preventDefault();
                          document.getElementById(h.id)?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className={`block text-sm py-1.5 pl-3 border-l-2 transition-all duration-200 ${
                          activeHeading === h.id
                            ? 'border-[#0025FF] text-white'
                            : 'border-transparent text-[#6B7280] hover:text-[#9CA3AF]'
                        }`}
                      >
                        {h.label}
                      </a>
                    ))}
                  </nav>
                </div>
              </aside>
            )}
          </div>
        </div>
      </section>

      {/* FAQ */}
      {post.faq && post.faq.length > 0 && (
        <section className="relative py-16" style={{ background: '#0A0A0A' }}>
          <div className="max-w-[800px] mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-2xl md:text-3xl font-bold text-white mb-8"
            >
              Domande frequenti
            </motion.h2>
            <div className="bg-[#111111] rounded-2xl p-6 md:p-8 border border-white/[0.06]">
              {post.faq.map((f, i) => (
                <FaqAccordion key={i} question={f.question} answer={f.answer} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related */}
      {relatedPosts.length > 0 && (
        <section className="relative py-16" style={{ background: '#0A0A0A' }}>
          <div className="section-container">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-2xl md:text-3xl font-bold text-white mb-10"
            >
              Continua a leggere
            </motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPosts.map((p, i) => (
                <RelatedCard key={p.slug} post={p} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="relative py-24 md:py-32">
        <SectionBackground variant="blue-center" fade={false} />
        <div className="section-container relative z-[2]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 md:grid-cols-[30%_1fr] gap-6 max-w-5xl mx-auto"
          >
            <div className="rounded-3xl bg-white p-8 md:p-10 flex flex-col justify-between min-h-[340px]">
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-6">💬 Cosa dicono i clienti</h3>
                <div className="w-12 border-t border-gray-200 mb-6" />
                <p className="text-[15px] text-gray-700 leading-relaxed">
                  Grazie a NEXUS abbiamo automatizzato il 70% dei processi ripetitivi. Il team ora si concentra su attività ad alto valore.
                </p>
              </div>
              <div className="flex items-center gap-3 mt-8">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0025FF] to-[#4F6FE8] flex items-center justify-center text-white text-sm font-bold">A</div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Andrea Z.</p>
                  <p className="text-xs text-gray-500">CEO, ONE UP</p>
                </div>
              </div>
            </div>
            <div className="rounded-3xl p-8 md:p-10 flex flex-col justify-between min-h-[340px]" style={{ background: 'linear-gradient(135deg, #1C35C8 0%, #7C3AED 50%, #9333EA 100%)' }}>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">Hai un progetto in mente?</h2>
                <p className="text-base mt-4" style={{ color: 'rgba(255,255,255,0.75)' }}>
                  Parliamone insieme. Scopri come possiamo aiutare il tuo business a crescere.
                </p>
              </div>
              <div className="mt-8">
                <a
                  href="https://cal.com/nexus-agency/30min?overlayCalendar=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full px-8 py-4 font-semibold text-black text-sm transition-all duration-200 hover:shadow-[0_0_20px_rgba(208,246,1,0.4)]"
                  style={{ background: '#d0f601' }}
                >
                  Prenota una call gratuita <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default BlogPostPage;
