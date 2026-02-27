import type { Variants } from 'framer-motion';

export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const cardHover: Variants = {
  rest: { y: 0 },
  hover: { y: -4, transition: { duration: 0.3 } },
};

export const viewportConfig = { once: true, amount: 0.2 };
