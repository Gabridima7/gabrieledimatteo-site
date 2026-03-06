import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Clock, Calendar } from 'lucide-react';
import { blogPosts, blogCategories, type BlogPost } from '@/data/blogPosts';
import SectionBackground from '@/components/SectionBackground';
import SEOHead from '@/components/SEOHead';

const INITIAL_COUNT = 6;

const CategoryPill = ({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) => (
  <button
    onClick={onClick}
    className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap ${
      active
        ? 'bg-[#0025FF] text-white shadow-[0_0_16px_rgba(0,37,255,0.3)]'
        : 'text-[#8A8F98] hover:bg-white/5 border border-white/[0.06]'
    }`}
  >
    {label}
  </button>
);

const BlogCardSmall = ({ post, index }: { post: BlogPost; index: number }) => (
  <motion.div
    layout
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 20 }}
    transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
  >
    <Link
      to={`/blog/${post.slug}`}
      className="group block bg-[#111111] border border-white/[0.06] rounded-2xl overflow-hidden hover:-translate-y-1 hover:border-white/[0.12] hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)] transition-all duration-300"
    >
      <div className="aspect-video overflow-hidden">
        <img
          src={post.coverImage}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
          loading="lazy"
        />
      </div>
      <div className="p-6">
        <span className="inline-block text-[11px] font-semibold tracking-wider uppercase text-[#0025FF] bg-[#0025FF]/10 px-3 py-1 rounded-full mb-4">
          {post.category}
        </span>
        <h3 className="text-lg font-bold text-white mb-2 line-clamp-2 group-hover:text-[#0025FF] transition-colors duration-300">
          {post.title}
        </h3>
        <p className="text-[#8A8F98] text-sm leading-relaxed line-clamp-2 mb-4">
          {post.excerpt}
        </p>
        <div className="flex items-center gap-4 text-xs text-[#8A8F98]">
          <span className="flex items-center gap-1.5">
            <Calendar size={13} />
            {post.date}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock size={13} />
            {post.readTime}
          </span>
        </div>
      </div>
    </Link>
  </motion.div>
);

const FeaturedPost = ({ post }: { post: BlogPost }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
  >
    <Link
      to={`/blog/${post.slug}`}
      className="group block bg-[#111111] border border-white/[0.06] rounded-2xl overflow-hidden hover:border-[#0025FF]/30 hover:shadow-[0_0_40px_rgba(0,37,255,0.08)] transition-all duration-500"
    >
      <div className="flex flex-col md:flex-row">
        <div className="md:w-[55%] aspect-video md:aspect-auto overflow-hidden relative">
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#111111]/30 hidden md:block" />
        </div>
        <div className="md:w-[45%] p-8 md:p-10 flex flex-col justify-center">
          <span className="inline-block text-[11px] font-semibold tracking-wider uppercase text-[#0025FF] bg-[#0025FF]/10 px-3 py-1 rounded-full mb-5 w-fit">
            {post.category}
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-[#0025FF] transition-colors duration-300">
            {post.title}
          </h2>
          <p className="text-[#8A8F98] text-base leading-relaxed mb-6 line-clamp-3">
            {post.excerpt}
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 text-sm text-[#8A8F98]">
              <span className="flex items-center gap-1.5">
                <Calendar size={14} />
                {post.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={14} />
                {post.readTime}
              </span>
            </div>
            <span className="text-[#0025FF] font-medium text-sm flex items-center gap-1.5 group-hover:gap-3 transition-all duration-300">
              Leggi articolo
              <ArrowRight size={16} />
            </span>
          </div>
        </div>
      </div>
    </Link>
  </motion.div>
);

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('Tutti');
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  const featuredPost = blogPosts.find((p) => p.featured);
  const nonFeaturedPosts = blogPosts.filter((p) => !p.featured);

  const filteredPosts = useMemo(() => {
    if (activeCategory === 'Tutti') return nonFeaturedPosts;
    return nonFeaturedPosts.filter((p) => p.category === activeCategory);
  }, [activeCategory, nonFeaturedPosts]);

  const showFeatured =
    activeCategory === 'Tutti' ||
    (featuredPost && featuredPost.category === activeCategory);

  const visiblePosts = filteredPosts.slice(0, visibleCount);
  const hasMore = visibleCount < filteredPosts.length;

  return (
    <>
      <SEOHead
        title="Blog — NEXUS Agency"
        description="Risorse, guide e insight su sviluppo web, prodotti digitali, AI e strategie per far crescere la tua azienda online."
      />

      {/* Hero */}
      <section className="relative pt-8 pb-16">
        <SectionBackground variant="hero" />
        <div className="section-container relative z-10">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15 } },
            }}
          >
            <motion.span
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
              className="inline-block text-xs font-semibold tracking-widest uppercase text-white/70 border border-white/[0.1] bg-white/[0.04] backdrop-blur-sm px-4 py-1.5 rounded-full mb-6"
            >
              Il nostro Blog
            </motion.span>

            <motion.h1
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            >
              Risorse, guide e insight per il tuo{' '}
              <span className="font-serif-accent font-normal text-primary">business digitale</span>
            </motion.h1>

            <motion.p
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
              className="text-[#8A8F98] text-lg md:text-xl max-w-2xl mx-auto"
            >
              Approfondimenti su sviluppo web, prodotti digitali, AI e strategie per far crescere la tua azienda online.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter — sticky */}
      <div className="sticky top-[72px] z-40 bg-[#06080F]/80 backdrop-blur-xl border-b border-white/[0.06]">
        <div className="section-container py-4">
          <div className="flex items-center gap-3 overflow-x-auto scrollbar-hide">
            {blogCategories.map((cat) => (
              <CategoryPill
                key={cat}
                label={cat}
                active={activeCategory === cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setVisibleCount(INITIAL_COUNT);
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Featured */}
      {showFeatured && featuredPost && (
        <section className="py-12">
          <div className="section-container">
            <FeaturedPost post={featuredPost} />
          </div>
        </section>
      )}

      {/* Grid */}
      <section className="py-12">
        <div className="section-container">
          <AnimatePresence mode="popLayout">
            <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {visiblePosts.map((post, i) => (
                <BlogCardSmall key={post.slug} post={post} index={i} />
              ))}
            </motion.div>
          </AnimatePresence>

          {hasMore && (
            <div className="flex justify-center mt-12">
              <button
                onClick={() => setVisibleCount((c) => c + 6)}
                className="px-8 py-3.5 rounded-full border border-white/[0.12] text-white/80 font-medium text-sm hover:bg-white/5 transition-all duration-300"
              >
                Carica altri articoli
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0025FF]/[0.04] to-transparent" />
        <div className="section-container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-12 text-center max-w-3xl mx-auto"
            data-cursor="spotlight"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Hai un progetto in mente?
            </h2>
            <p className="text-[#8A8F98] mb-8 text-lg">
              Parliamone insieme. Scopri come possiamo aiutare il tuo business a crescere.
            </p>
            <a
              href="https://cal.com/nexus-agency/30min?overlayCalendar=true"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-4 rounded-full text-lg font-medium transition-all duration-300 glow-box inline-flex items-center gap-2"
              data-cursor="spotlight"
            >
              Prenota Call
              <ArrowRight size={20} />
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Blog;
