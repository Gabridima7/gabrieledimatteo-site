import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles, Bot, Zap, Code, Target, Rocket } from 'lucide-react';
import logo from '@/assets/logo-nexus.png';
import LogoMarquee from '@/components/LogoMarquee';
import iconAiEducation from '@/assets/icons/icon-ai-education.png';
import iconAiAgents from '@/assets/icons/icon-ai-agents.png';
import iconAiProducts from '@/assets/icons/icon-ai-products.png';
import iconSoluzioniCustom from '@/assets/icons/icon-soluzioni-custom.png';
import logoHomeleven from '@/assets/logos/logo-homeleven.png';
import logoBigliaSerramenti from '@/assets/logos/logo-biglia-serramenti.png';
import logoAllfiber from '@/assets/logos/logo-allfiber.png';

const successStories = [
  {
    id: 'homeleven',
    name: 'Homeleven',
    logo: logoHomeleven,
    challenge: 'Gestione complessa di listing immobiliari su più piattaforme. Aggiornamenti manuali e rischio di overbooking costante.',
    solution: 'Un sistema AI centralizzato che sincronizza automaticamente disponibilità e prezzi su tutte le piattaforme in tempo reale.',
    metrics: [
      { value: '€45k', label: 'RISPARMIO/ANNO' },
      { value: '-95%', label: 'ERRORI BOOKING' }
    ]
  },
  {
    id: 'biglia-serramenti',
    name: 'Biglia Serramenti',
    logo: logoBigliaSerramenti,
    challenge: 'Preventivi manuali lunghi e complessi. Ogni richiesta richiedeva ore di calcoli e configurazioni.',
    solution: 'Configuratore AI che genera preventivi dettagliati in minuti, con rendering 3D e specifiche tecniche automatiche.',
    metrics: [
      { value: '320h', label: 'RISPARMIATE/MESE' },
      { value: '8x', label: 'ROI' }
    ]
  },
  {
    id: 'allfiber',
    name: 'All Fiber',
    logo: logoAllfiber,
    challenge: 'Assistenza clienti oberata da richieste ripetitive. Tempi di risposta lunghi e costi di supporto elevati.',
    solution: "Un agente AI che gestisce l'80% delle richieste automaticamente, escalando solo i casi complessi al team umano.",
    metrics: [
      { value: '€28k', label: 'RISPARMIO/ANNO' },
      { value: '-70%', label: 'TEMPO RISPOSTA' }
    ]
  }
];
const fadeInUp = {
  initial: {
    opacity: 0,
    y: 20
  },
  animate: {
    opacity: 1,
    y: 0
  },
  transition: {
    duration: 0.6
  }
};
const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const SuccessStoriesSection = () => {
  const [activeTab, setActiveTab] = useState('homeleven');
  const activeStory = successStories.find(s => s.id === activeTab) || successStories[0];

  return (
    <section className="py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Alcune storie di <span className="font-serif-accent font-normal text-primary">Successo</span>.
          </h2>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center gap-3 mb-10"
        >
          {successStories.map((story) => (
            <button
              key={story.id}
              onClick={() => setActiveTab(story.id)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 border ${
                activeTab === story.id
                  ? 'bg-foreground text-background border-foreground'
                  : 'bg-transparent text-muted-foreground border-border hover:border-foreground/50'
              }`}
            >
              {story.name}
            </button>
          ))}
        </motion.div>

        {/* Content Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card p-10 md:p-16"
          data-cursor="spotlight"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStory.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              {/* Left: Content */}
              <div className="space-y-8">
                {/* Logo */}
                <div className="h-16 md:h-20">
                  <img
                    src={activeStory.logo}
                    alt={activeStory.name}
                    className="h-full w-auto object-contain brightness-0 invert"
                  />
                </div>

                {/* Challenge */}
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-muted-foreground mb-3 font-semibold">
                    LA SFIDA
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {activeStory.challenge}
                  </p>
                </div>

                {/* Solution */}
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-muted-foreground mb-3 font-semibold">
                    LA NOSTRA SOLUZIONE
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {activeStory.solution}
                  </p>
                </div>
              </div>

              {/* Right: Metrics */}
              <div className="flex flex-col items-center justify-center gap-8 py-8 lg:border-l border-border/30 lg:pl-12">
                {activeStory.metrics.map((metric, i) => (
                  <div key={i} className="text-center">
                    <p className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-2">
                      {metric.value}
                    </p>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Link to all case studies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-10"
        >
          <Link
            to="/casi-studio"
            className="glass hover:bg-white/10 text-foreground px-6 py-3 rounded-full text-sm font-medium transition-all inline-flex items-center gap-2"
            data-cursor="spotlight"
          >
            Vedi altri casi studio
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

const Index = () => {
  return <div className="relative">
      {/* Hero Section */}
      <section className="h-[99vh] flex items-center justify-center pt-16 pb-0 relative overflow-hidden" data-cursor="spotlight">
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/videos/hero-background.mp4" type="video/mp4" />
        </video>
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-background/60 z-[1]" />
        
        <div className="section-container text-center relative z-10">
          <motion.div initial={{
          opacity: 0,
          scale: 0.9
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 0.5
        }} className="mb-8">
            <img src={logo} alt="Nexus" className="h-28 md:h-32 w-auto mx-auto brightness-[2] contrast-125" />
          </motion.div>

          <motion.h1 initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }} className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
            Il tuo <span className="font-serif-accent font-normal">Partner AI</span>
            <br />
            <span className="text-foreground">a </span>
            <span className="glow-text text-primary">360°.</span>
          </motion.h1>

          <motion.p initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.4
        }} className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
            Progettiamo agenti AI, automazioni e prodotti digitali per PMI.
            <br />
            Dalla strategia alla costruzione in settimane, non mesi.  
          </motion.p>

          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.6
        }} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/prenota-call" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 glow-box inline-flex items-center justify-center gap-2" data-cursor="spotlight">
              Prenota Call
              <ArrowRight size={20} />
            </Link>
            <Link to="/soluzioni" className="glass hover:bg-white/10 text-foreground px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 inline-flex items-center justify-center gap-2" data-cursor="spotlight">
              Scopri le Soluzioni
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Logo Marquee Section */}
      <LogoMarquee />

      {/* Cosa Facciamo Section */}
      <section className="py-24">
        <div className="section-container">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }} className="text-center mb-16">
            <h2 className="text-4xl mb-4 md:text-6xl font-medium">
              Scegli il tuo <span className="text-primary">percorso</span>.
            </h2>
            <p className="text-muted-foreground text-lg">
              Automazioni su misura o prodotti pronti all'uso.
            </p>
          </motion.div>

          <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{
          once: true
        }} className="grid md:grid-cols-2 gap-8">
            {/* AI Education & Strategy Card */}
            <motion.div variants={fadeInUp} className="glass-card p-10 md:p-12 flex flex-col min-h-[500px]" data-cursor="spotlight">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">
                AI Education
                <br />
                <span className="font-serif-accent font-normal text-primary">& Strategy</span>
              </h3>
              
              <div className="flex-1 flex items-center justify-center py-8">
                <img src={iconAiEducation} alt="AI Education" className="w-48 h-48 md:w-56 md:h-56 object-contain" />
              </div>
              
              <div className="mt-auto">
                <p className="text-lg font-medium mb-2">Formazione, Analisi e Sviluppo.</p>
                <p className="text-muted-foreground mb-8">Insegniamo al tuo team a usare l'AI ogni giorno. Analizziamo i tuoi processi per capire dove implementare l'AI e sviluppare soluzioni su misura.</p>
                <Link to="/soluzioni" className="text-primary hover:text-primary/80 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider transition-colors">
                  Inizia ora
                  <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
            
            {/* AI Agents & Automazioni Card */}
            <motion.div variants={fadeInUp} className="glass-card p-10 md:p-12 flex flex-col min-h-[500px]" data-cursor="spotlight">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">
                AI Agents
                <br />
                <span className="font-serif-accent font-normal text-primary">& Automazioni</span>
              </h3>
              
              <div className="flex-1 flex items-center justify-center py-8">
                <img src={iconAiAgents} alt="AI Agents" className="w-48 h-48 md:w-56 md:h-56 object-contain" />
              </div>
              
              <div className="mt-auto">
                <p className="text-lg font-medium mb-2">Automazione intelligente.</p>
                <p className="text-muted-foreground mb-8">Agenti AI che trasformano attività manuali in processi automatici. Risparmi tempo e riduci errori umani.</p>
                <Link to="/soluzioni" className="text-primary hover:text-primary/80 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider transition-colors">
                  Scopri di più
                  <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
            
            {/* AI Products Card */}
            <motion.div variants={fadeInUp} className="glass-card p-10 md:p-12 flex flex-col min-h-[500px]" data-cursor="spotlight">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">
                AI
                <br />
                <span className="font-serif-accent font-normal text-primary">Products</span>
              </h3>
              
              <div className="flex-1 flex items-center justify-center py-8">
                <img src={iconAiProducts} alt="AI Products" className="w-48 h-48 md:w-56 md:h-56 object-contain" />
              </div>
              
              <div className="mt-auto">
                <p className="text-lg font-medium mb-2">Prodotti pronti all'uso.</p>
                <p className="text-muted-foreground mb-8">Micro-prodotti e tool interni pronti o personalizzabili per le esigenze specifiche della tua azienda.</p>
                <Link to="/prodotti-ai" className="text-primary hover:text-primary/80 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider transition-colors">
                  Esplora prodotti
                  <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
            
            {/* Soluzioni Digitali Custom Card */}
            <motion.div variants={fadeInUp} className="glass-card p-10 md:p-12 flex flex-col min-h-[500px]" data-cursor="spotlight">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">
                Soluzioni Digitali
                <br />
                <span className="font-serif-accent font-normal text-primary">Custom</span>
              </h3>
              
              <div className="flex-1 flex items-center justify-center py-8">
                <img src={iconSoluzioniCustom} alt="Soluzioni Custom" className="w-48 h-48 md:w-56 md:h-56 object-contain" />
              </div>
              
              <div className="mt-auto">
                <p className="text-lg font-medium mb-2">Sviluppo su misura.</p>
                <p className="text-muted-foreground mb-8">Web app, siti ed e-commerce costruiti per integrarsi perfettamente nel tuo ecosistema digitale.</p>
                <Link to="/soluzioni" className="text-primary hover:text-primary/80 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider transition-colors">
                  Scopri di più
                  <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Metodo Nexus Section */}
      <section className="py-24 bg-gradient-blue-subtle">
        <div className="section-container">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Il Metodo <span className="text-primary">Nexus</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[{
            letter: 'E',
            title: 'Education',
            description: 'Workshop + training per il tuo team',
            icon: Sparkles
          }, {
            letter: 'I',
            title: 'Identification',
            description: 'Audit processi + use case con ROI',
            icon: Target
          }, {
            letter: 'D',
            title: 'Development',
            description: 'Design + build + deploy rapido',
            icon: Rocket
          }].map((step, i) => <motion.div key={i} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6,
            delay: i * 0.1
          }} className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto mb-6 glow-border">
                  <span className="text-2xl font-bold text-primary">{step.letter}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </motion.div>)}
          </div>

          <motion.p initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: 0.4
        }} className="text-center text-muted-foreground mt-12">
            Zero fuffa. Solo implementazioni che si misurano.
          </motion.p>
        </div>
      </section>

      {/* Why Lovable Section */}
      <section className="py-24">
        <div className="section-container">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }} className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-8">
              Costruiamo veloce.
              <br />
              Iteriamo meglio.
            </h2>
            
            <div className="grid sm:grid-cols-3 gap-6 mb-12">
              {['Time-to-value in 7–21 giorni', 'Prototipi → MVP → produzione', 'Riduzione costi e tempi'].map((item, i) => <motion.div key={i} initial={{
              opacity: 0,
              y: 10
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.4,
              delay: i * 0.1
            }} className="glass-card p-6" data-cursor="spotlight">
                  <Zap className="text-primary mx-auto mb-3" size={24} />
                  <p className="text-sm font-medium">{item}</p>
                </motion.div>)}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Success Stories with Tabs */}
      <SuccessStoriesSection />

      {/* Final CTA */}
      <section className="py-24">
        <div className="section-container">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }} className="glass-card p-12 md:p-16 text-center max-w-4xl mx-auto" data-cursor="spotlight">
            <span className="inline-block bg-primary/20 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              CONTATTACI
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Parliamo del tuo <span className="text-primary">progetto</span>.
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
              In 30 minuti capiamo se l'AI può generare ROI nel tuo processo.
            </p>
            <Link to="/prenota-call" className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-4 rounded-full text-lg font-medium transition-all duration-300 glow-box inline-flex items-center justify-center gap-2" data-cursor="spotlight">
              Prenota Call
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>;
};
export default Index;