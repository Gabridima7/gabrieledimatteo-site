import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Bot, Zap, Code, BookOpen, Target, Rocket } from 'lucide-react';
import logo from '@/assets/logo-nexus.png';
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
const Index = () => {
  return <div className="relative">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-20 pb-16">
        <div className="section-container text-center">
          <motion.div initial={{
          opacity: 0,
          scale: 0.9
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 0.5
        }} className="mb-8">
            <img src={logo} alt="Nexus" className="h-20 w-auto mx-auto brightness-[2] contrast-125" />
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
        }} className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
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
        }} className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
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
        }} className="grid md:grid-cols-2 gap-6">
            {[{
            icon: BookOpen,
            title: 'AI Education & Strategy',
            description: 'Formiamo il team e definiamo una roadmap AI concreta.',
            link: '/soluzioni'
          }, {
            icon: Bot,
            title: 'AI Agents & Automazioni',
            description: 'Agenti che trasformano attività manuali in processi automatici.',
            link: '/soluzioni'
          }, {
            icon: Sparkles,
            title: 'AI Products',
            description: 'Micro-prodotti e tool interni pronti o personalizzabili.',
            link: '/prodotti-ai'
          }, {
            icon: Code,
            title: 'Soluzioni Digitali Custom',
            description: 'Web app, siti ed e-commerce quando servono al sistema.',
            link: '/soluzioni'
          }].map((item, i) => <motion.div key={i} variants={fadeInUp} className="glass-card p-8" data-cursor="spotlight">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <item.icon className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground mb-6">{item.description}</p>
                <Link to={item.link} className="text-primary hover:text-primary/80 inline-flex items-center gap-2 text-sm font-medium transition-colors">
                  Scopri di più
                  <ArrowRight size={16} />
                </Link>
              </motion.div>)}
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
            icon: BookOpen
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

      {/* Mini Case Studies */}
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
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Alcune storie di <span className="text-primary">Successo</span>.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[{
            title: 'HR Reporting Automation',
            problem: 'Report manuali settimanali',
            solution: 'Agent AI automatico',
            result: '8 ore risparmiate/settimana'
          }, {
            title: 'Customer Support AI Agent',
            problem: 'Risposte lente al cliente',
            solution: 'Chatbot intelligente',
            result: '-60% tempo risposta'
          }, {
            title: 'Operations Dashboard',
            problem: 'Dati sparsi in 5 tool',
            solution: 'Dashboard unificata',
            result: 'Decisioni 3x più veloci'
          }].map((study, i) => <motion.div key={i} initial={{
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
          }} className="glass-card p-8" data-cursor="spotlight">
                <h3 className="text-lg font-semibold mb-4">{study.title}</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="text-muted-foreground">Problema: </span>
                    <span>{study.problem}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Soluzione: </span>
                    <span>{study.solution}</span>
                  </div>
                  <div className="pt-2 border-t border-border/50">
                    <span className="text-primary font-medium">{study.result}</span>
                  </div>
                </div>
              </motion.div>)}
          </div>

          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: 0.4
        }} className="text-center mt-10">
            <Link to="/casi-studio" className="glass hover:bg-white/10 text-foreground px-6 py-3 rounded-full text-sm font-medium transition-all inline-flex items-center gap-2" data-cursor="spotlight">
              Vedi altri casi studio
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

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