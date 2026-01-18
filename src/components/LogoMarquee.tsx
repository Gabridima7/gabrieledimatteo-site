// Import logos
import logoHomeleven from '@/assets/logos/logo-homeleven.png';
import logoBigliaSerramenti from '@/assets/logos/logo-biglia-serramenti.png';
import logoRevelliGroup from '@/assets/logos/logo-revelli-group.png';
import logoBigliaDesign from '@/assets/logos/logo-biglia-design.png';
import logoAllfiber from '@/assets/logos/logo-allfiber.png';

const clientLogos = [
  { name: 'Homeleven', src: logoHomeleven, id: 1 },
  { name: 'Biglia Serramenti', src: logoBigliaSerramenti, id: 2 },
  { name: 'Revelli Group', src: logoRevelliGroup, id: 3 },
  { name: 'Biglia Design', src: logoBigliaDesign, id: 4 },
  { name: 'Allfiber', src: logoAllfiber, id: 5 },
];

const LogoMarquee = () => {
  return (
    <section className="relative pt-8 pb-16 overflow-hidden">
      {/* Blue glowing line at top center */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 md:w-96 h-px">
        <div className="w-full h-full bg-gradient-to-r from-transparent via-primary to-transparent opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent blur-sm" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent blur-md opacity-50" />
      </div>

      {/* Static logos container */}
      <div className="relative mt-8 px-8">
        <div className="flex gap-12 md:gap-20 items-center justify-center flex-wrap">
          {clientLogos.map((logo) => (
            <div
              key={logo.id}
              className="flex-shrink-0 flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300"
            >
              <img 
                src={logo.src} 
                alt={logo.name} 
                className="h-12 md:h-16 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoMarquee;
