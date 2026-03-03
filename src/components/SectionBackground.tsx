type Variant = 'hero' | 'dark' | 'blue-left' | 'blue-right' | 'blue-center' | 'teal' | 'minimal' | 'none';

const backgrounds: Record<Variant, string> = {
  hero: [
    'radial-gradient(ellipse 80% 60% at 20% 50%, rgba(28,53,200,0.5) 0%, transparent 70%)',
    'radial-gradient(ellipse 50% 40% at 70% 30%, rgba(79,111,232,0.25) 0%, transparent 60%)',
    '#06080F',
  ].join(', '),
  dark: [
    'radial-gradient(ellipse 60% 50% at 80% 80%, rgba(28,53,200,0.15) 0%, transparent 70%)',
    '#06080F',
  ].join(', '),
  'blue-left': [
    'radial-gradient(ellipse 70% 70% at -10% 60%, rgba(28,53,200,0.45) 0%, transparent 65%)',
    'radial-gradient(ellipse 40% 40% at 90% 20%, rgba(14,165,200,0.12) 0%, transparent 60%)',
    '#06080F',
  ].join(', '),
  'blue-right': [
    'radial-gradient(ellipse 70% 70% at 110% 50%, rgba(28,53,200,0.45) 0%, transparent 65%)',
    'radial-gradient(ellipse 40% 40% at 10% 80%, rgba(79,111,232,0.15) 0%, transparent 60%)',
    '#06080F',
  ].join(', '),
  'blue-center': [
    'radial-gradient(ellipse 80% 60% at 50% 100%, rgba(28,53,200,0.4) 0%, transparent 70%)',
    'radial-gradient(ellipse 50% 40% at 50% 0%, rgba(79,111,232,0.1) 0%, transparent 60%)',
    '#06080F',
  ].join(', '),
  teal: [
    'radial-gradient(ellipse 60% 50% at 30% 70%, rgba(28,53,200,0.3) 0%, transparent 65%)',
    'radial-gradient(ellipse 50% 40% at 80% 30%, rgba(14,165,200,0.2) 0%, transparent 60%)',
    '#06080F',
  ].join(', '),
  minimal: '#06080F',
  none: 'transparent',
};

interface SectionBackgroundProps {
  variant: Variant;
  fade?: boolean;
}

const SectionBackground = ({ variant, fade = true }: SectionBackgroundProps) => (
  <>
    <div
      className="absolute inset-0 z-0 pointer-events-none overflow-hidden"
      style={{ background: backgrounds[variant] }}
    />
    {fade && variant !== 'none' && (
      <div
        className="absolute bottom-0 left-0 right-0 h-[120px] z-[1] pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, #06080F)' }}
      />
    )}
  </>
);

export default SectionBackground;
