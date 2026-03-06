import { Rocket, Lightbulb, Target, Zap } from 'lucide-react';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import heroMvpDesign from '@/assets/hero-mvp-design.png';
import techReact from '@/assets/tech/icon-react.png';
import techJs from '@/assets/tech/icon-js.png';
import techNodejs from '@/assets/tech/icon-nodejs.png';
import techHtml from '@/assets/tech/icon-html.png';
import techCss from '@/assets/tech/icon-css.png';

const MvpDesign = () => (
  <ServicePageTemplate
    seoTitle="MVP Design per Startup e Imprenditori | NEXUS Agency"
    seoDescription="Crea il tuo prodotto digitale MVP. Validazione rapida, design professionale, pronto per investitori e primi clienti."
    seoCanonical="https://nexusagency.it/soluzioni/mvp"
    badge="MVP Design"
    h1="Dal concept al *prodotto digitale*"
    subtitle="Progettiamo e sviluppiamo il tuo MVP per validare l'idea, attrarre investitori e conquistare i primi clienti."
    heroIcon={Rocket}
    heroImage={heroMvpDesign}
    stats={[
      { value: '4-8', label: 'Settimane di sviluppo' },
      { value: '100%', label: 'Codice di tua proprietà' },
      { value: '+10', label: 'MVP lanciati con successo' },
    ]}
    heroQuote={{ text: "NEXUS ha trasformato la nostra idea in un prodotto funzionante in sole 6 settimane. Ora abbiamo i primi clienti paganti.", name: "Mattia T.", role: "Founder, Homeleven" }}
    caseStudies={[
      { name: 'Homeleven', category: 'Web App + AI', description: 'Gestionale Property Manager con AI integrata.', metrics: ['+200% efficienza', 'MVP in 6 settimane'], slug: 'homeleven' },
    ]}
    ctaBannerText="Hai un'idea? Trasformala in realtà."
    ctaBannerDescription="Prenota una call gratuita per discutere il tuo progetto MVP."
    benefits={[
      { icon: Rocket, title: 'Time to market rapido', desc: 'MVP funzionante in 4-8 settimane per validare la tua idea il prima possibile.' },
      { icon: Lightbulb, title: 'Validazione dell\'idea', desc: 'Testa il mercato con un prodotto reale prima di investire grandi budget.' },
      { icon: Target, title: 'Attrai investitori', desc: 'Un MVP funzionante è il miglior biglietto da visita per raccogliere fondi.' },
    ]}
    process={[
      { title: 'Discovery & strategia', items: ['Analisi idea e mercato', 'Definizione feature core', 'User personas'] },
      { title: 'Design UI/UX', items: ['Wireframe e prototipi', 'User flow ottimizzati', 'Design system'] },
      { title: 'Sviluppo MVP', items: ['Architettura scalabile', 'Sviluppo iterativo', 'Testing continuo'] },
      { title: 'Lancio & iterazione', items: ['Deploy e go-live', 'Raccolta feedback utenti', 'Iterazioni rapide'] },
    ]}
    outcomes={['Prodotto funzionante e testato', 'Architettura scalabile', 'Design professionale', 'Codice di tua proprietà', 'Documentazione tecnica', 'Supporto post-lancio']}
    outcomesSubtitle="Costruiamo MVP solidi, scalabili e pronti per il mercato. Dalla validazione dell'idea al primo cliente pagante."
    outcomeCards={[
      { title: 'Velocità & Validazione', desc: 'MVP funzionante in 4-8 settimane con architettura pensata per scalare quando sarai pronto.' },
      { title: 'Design & Tecnologia', desc: 'UI/UX professionale e stack tecnologico moderno per fare una prima impressione memorabile.' },
    ]}
    outcomesCtaText="Lancia il tuo MVP"
    capabilities={{
      title: 'Le nostre competenze per il tuo *MVP*',
      subtitle: 'Dalla strategia al lancio — tutto ciò che serve per trasformare un\'idea in un prodotto digitale di successo.',
      columns: [
        { heading: 'Strategia', items: ['Market analysis', 'Feature prioritization', 'Business model canvas', 'User personas', 'Competitive analysis', 'Go-to-market plan'] },
        { heading: 'Design', items: ['UI/UX Design', 'Prototipazione rapida', 'Design system', 'Mobile-first', 'User testing', 'Brand identity'] },
        { heading: 'Sviluppo', items: ['React / Next.js', 'Node.js backend', 'Database design', 'API development', 'CI/CD pipeline', 'Cloud deployment'] },
      ],
    }}
    techStack={{
      title: 'Le tecnologie per il tuo *MVP*',
      subtitle: 'Stack moderno e scalabile, scelto per garantire velocità di sviluppo e crescita futura.',
      items: [
        { name: 'ReactJS', image: techReact },
        { name: 'JavaScript', image: techJs },
        { name: 'Node.js', image: techNodejs },
        { name: 'HTML5', image: techHtml },
        { name: 'CSS3', image: techCss },
      ],
    }}
    faqs={[
      { q: 'Quanto costa sviluppare un MVP?', a: 'Il costo dipende dalla complessità. Un MVP standard parte da €5.000. Contattaci per un preventivo personalizzato.' },
      { q: 'In quanto tempo è pronto un MVP?', a: 'Un MVP viene consegnato in 4-8 settimane, a seconda delle funzionalità richieste.' },
      { q: 'Il codice è di mia proprietà?', a: 'Sì, al 100%. Tutto il codice sviluppato è di tua proprietà, inclusa la documentazione.' },
      { q: 'Posso scalare il prodotto dopo il lancio?', a: 'Assolutamente. L\'architettura è progettata per scalare. Possiamo continuare a sviluppare nuove feature.' },
      { q: 'Offrite supporto dopo il lancio?', a: 'Sì, offriamo pacchetti di supporto e manutenzione post-lancio per accompagnarti nella crescita.' },
    ]}
    finalCtaH2="Pronto a lanciare il tuo MVP?"
  />
);

export default MvpDesign;
