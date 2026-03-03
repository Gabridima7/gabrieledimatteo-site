import logoHomeleven from '@/assets/logos/logo-homeleven.png';
import logoBigliaSerramenti from '@/assets/logos/logo-biglia-serramenti.png';
import logoRevelliGroup from '@/assets/logos/logo-revelli-group.png';
import logoOneUp from '@/assets/logos/logo-oneup.png';
import SectionBackground from './SectionBackground';

const logos = [
  { src: logoHomeleven, name: 'Homeleven' },
  { src: logoBigliaSerramenti, name: 'Biglia Serramenti' },
  { src: logoRevelliGroup, name: 'Revelli Group' },
  { src: logoOneUp, name: 'One Up Sailing', noFilter: true },
];

const TrustBar = () => (
  <section className="relative py-12 border-t border-white/[0.06]">
    <SectionBackground variant="dark" />
    <div className="section-container relative z-[2]">
      <div className="grid grid-cols-2 md:flex md:items-center md:justify-center gap-8 md:gap-24 lg:gap-32 place-items-center">
        {logos.map((logo, i) => (
          <img
            key={i}
            src={logo.src}
            alt={logo.name}
            className={`h-10 md:h-12 lg:h-14 w-auto object-contain transition-opacity duration-300 ${logo.noFilter ? 'opacity-80 hover:opacity-100' : 'brightness-0 invert opacity-60 hover:opacity-100'}`}
            loading="lazy"
            width={120}
            height={48}
          />
        ))}
      </div>
    </div>
  </section>
);

export default TrustBar;
