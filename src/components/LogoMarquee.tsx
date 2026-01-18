import { motion } from 'framer-motion';

// Placeholder logos - will be replaced with real ones
const placeholderLogos = [
  { name: 'TechFlow', id: 1 },
  { name: 'DataSync', id: 2 },
  { name: 'CloudWave', id: 3 },
  { name: 'AICore', id: 4 },
  { name: 'SmartHub', id: 5 },
  { name: 'NexGen', id: 6 },
];

const LogoMarquee = () => {
  // Duplicate logos for seamless infinite scroll
  const logos = [...placeholderLogos, ...placeholderLogos];

  return (
    <section className="relative py-16 overflow-hidden">
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
            x: [0, -50 * placeholderLogos.length * 3],
          }}
          transition={{
            x: {
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            },
          }}
        >
          {logos.map((logo, index) => (
            <div
              key={`${logo.id}-${index}`}
              className="flex-shrink-0 flex items-center gap-2 text-muted-foreground/60 hover:text-muted-foreground transition-colors duration-300"
            >
              {/* Placeholder logo - simple text with decorative element */}
              <div className="w-3 h-3 rounded-full bg-primary/40" />
              <span className="text-xl md:text-2xl font-medium tracking-wide whitespace-nowrap">
                {logo.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LogoMarquee;
