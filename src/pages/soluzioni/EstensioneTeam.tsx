import { Users, Clock, Shield, Zap } from 'lucide-react';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import heroEstensioneTeam from '@/assets/hero-estensione-team.png';
import techReact from '@/assets/tech/icon-react.png';
import techJs from '@/assets/tech/icon-js.png';
import techNodejs from '@/assets/tech/icon-nodejs.png';
import techPython from '@/assets/tech/icon-python.png';
import techHtml from '@/assets/tech/icon-html.png';

const EstensioneTeam = () => (
  <ServicePageTemplate
    seoTitle="Estensione Team — Esperti Digitali Dedicati | NEXUS Agency"
    seoDescription="Espandi il tuo team con i nostri esperti dedicati. Designer, developer e PM integrati nei tuoi processi."
    seoCanonical="https://nexusagency.it/soluzioni/estensione-team"
    badge="Estensione Team"
    h1="Espandi il tuo team con *esperti dedicati*"
    subtitle="Sviluppatori, designer e specialisti AI che lavorano come un'estensione del tuo team interno. Flessibilità totale."
    heroIcon={Users}
    heroImage={heroEstensioneTeam}
    stats={[
      { value: '48h', label: 'Tempo di onboarding' },
      { value: '100%', label: 'Dedicati al tuo progetto' },
      { value: 'Zero', label: 'Costi di assunzione' },
    ]}
    heroQuote={{ text: "Avere il team NEXUS dedicato è come avere un reparto tech interno, ma senza i costi e la complessità dell'assunzione.", name: "Gianni B.", role: "Titolare, Biglia Serramenti" }}
    caseStudies={[
      { name: 'Homeleven', category: 'Web App + AI', description: 'Team dedicato per sviluppo e manutenzione continua.', metrics: ['Team integrato', 'Sviluppo continuo'], slug: 'homeleven' },
    ]}
    ctaBannerText="Hai bisogno di rinforzi per il tuo team?"
    ctaBannerDescription="Contattaci per scoprire come possiamo integrare il tuo team con i nostri esperti."
    benefits={[
      { icon: Users, title: 'Team dedicato', desc: 'Professionisti che conoscono il tuo progetto e lavorano esclusivamente per te.' },
      { icon: Clock, title: 'Flessibilità totale', desc: 'Scala il team su e giù in base alle esigenze del momento.' },
      { icon: Shield, title: 'Zero rischi', desc: 'Nessun costo di assunzione, formazione o licenziamento. Solo risultati.' },
    ]}
    process={[
      { title: 'Assessment', items: ['Analisi esigenze', 'Definizione ruoli', 'Matching profili'] },
      { title: 'Onboarding', items: ['Integrazione nel team', 'Setup strumenti', 'Allineamento processi'] },
      { title: 'Collaborazione', items: ['Sprint planning', 'Daily standup', 'Code review'] },
      { title: 'Crescita continua', items: ['Report periodici', 'Scaling flessibile', 'Ottimizzazione workflow'] },
    ]}
    outcomes={['Team dedicato e integrato', 'Flessibilità di scaling', 'Zero costi di assunzione', 'Comunicazione diretta', 'Qualità garantita', 'Supporto continuo']}
    outcomesSubtitle="Un team di esperti che lavora come estensione naturale del tuo reparto interno, con la flessibilità di scalare quando serve."
    outcomeCards={[
      { title: 'Integrazione & Collaborazione', desc: 'Professionisti che si integrano nel tuo workflow con comunicazione diretta e processi agili.' },
      { title: 'Flessibilità & Risultati', desc: 'Scala il team in base alle esigenze senza i vincoli e i costi di un\'assunzione tradizionale.' },
    ]}
    outcomesCtaText="Espandi il tuo team"
    capabilities={{
      title: 'I profili disponibili per la tua *estensione team*',
      subtitle: 'Sviluppatori, designer e specialisti AI pronti a integrarsi nel tuo team e portare risultati.',
      columns: [
        { heading: 'Sviluppo', items: ['Frontend Developer', 'Backend Developer', 'Full-Stack Developer', 'Mobile Developer', 'DevOps Engineer', 'QA Engineer'] },
        { heading: 'Design', items: ['UI Designer', 'UX Designer', 'Product Designer', 'Brand Designer', 'Motion Designer', 'Design System'] },
        { heading: 'AI & Strategy', items: ['AI Engineer', 'Data Analyst', 'Product Manager', 'Project Manager', 'Tech Lead', 'CTO as a Service'] },
      ],
    }}
    techStack={{
      title: 'Le tecnologie dei nostri *esperti*',
      subtitle: 'Competenze trasversali su stack moderni per integrarsi in qualsiasi progetto.',
      items: [
        { name: 'ReactJS', image: techReact },
        { name: 'JavaScript', image: techJs },
        { name: 'Node.js', image: techNodejs },
        { name: 'Python', image: techPython },
        { name: 'HTML5', image: techHtml },
      ],
    }}
    faqs={[
      { q: 'Quanto costa l\'estensione team?', a: 'Il costo dipende dal profilo e dalle ore dedicate. Contattaci per un preventivo su misura.' },
      { q: 'Qual è il periodo minimo di collaborazione?', a: 'Il periodo minimo è di 1 mese, con rinnovo flessibile mese per mese.' },
      { q: 'Come funziona la comunicazione?', a: 'Parli direttamente con i professionisti assegnati. Usiamo i tuoi strumenti (Slack, Teams, ecc.).' },
      { q: 'Posso scalare il team?', a: 'Sì, puoi aggiungere o ridurre risorse in qualsiasi momento in base alle esigenze.' },
      { q: 'I professionisti lavorano solo per me?', a: 'Sì, il team dedicato lavora esclusivamente sul tuo progetto durante le ore concordate.' },
    ]}
    finalCtaH2="Pronto ad espandere il tuo team?"
  />
);

export default EstensioneTeam;
