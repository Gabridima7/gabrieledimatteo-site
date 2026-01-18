import { motion } from 'framer-motion';

// Import logos
import logoHomeleven from '@/assets/logos/logo-homeleven.png';
import logoBigliaSerramenti from '@/assets/logos/logo-biglia-serramenti.png';
import logoRevelliGroup from '@/assets/logos/logo-revelli-group.png';
import logoBigliaDesign from '@/assets/logos/logo-biglia-design.png';

const clientLogos = [
  { name: 'Homeleven', src: logoHomeleven, id: 1 },
  { name: 'Biglia Serramenti', src: logoBigliaSerramenti, id: 2 },
  { name: 'Revelli Group', src: logoRevelliGroup, id: 3 },
  { name: 'Biglia Design', src: logoBigliaDesign, id: 4 },
];

const LogoMarquee = () => {
  // Duplicate logos for seamless infinite scroll
  const logos = [...clientLogos, ...clientLogos, ...clientLogos];

  return (
    <section className="relative pt-8 pb-16 overflow-hidden">
      {/* Blue glowing line at top center */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 md:w-96 h-px">
        <div className="w-full h-full bg-gradient-to-r from-transparent via-primary to-transparent opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent blur-sm" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent blur-md opacity-50" />
      </div>

      {/* Marquee container */}
      <div className="relative mt-8">
        {/* Gradient fades on sides */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* Scrolling logos */}
        <motion.div
          className="flex gap-16 md:gap-24 items-center"
          animate={{
            x: [0, -50 * clientLogos.length * 6],
          }}
          transition={{
            x: {
              duration: 40,
              repeat: Infinity,
              ease: "linear",
            },
          }}
        >
          {logos.map((logo, index) => (
            <div
              key={`${logo.id}-${index}`}
              className="flex-shrink-0 flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300"
            >
              <img 
                src={logo.src} 
                alt={logo.name} 
                className="h-12 md:h-16 w-auto object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LogoMarquee;
