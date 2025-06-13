'use client';

import { motion } from 'framer-motion';

const STAGGER = 0.05;

const containerVariants = {
  hidden: {},
  visible: (custom) => ({
    transition: {
      staggerChildren: STAGGER,
      delayChildren: custom,
    },
  }),
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const AnimatedLine = ({ text, delay = 0 }) => {
  return (
    <motion.span
      custom={delay}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      style={{ display: 'inline-block' }}
    >
      {[...text].map((char, i) => (
        <motion.span
          key={i}
          variants={childVariants}
          style={{
            display: 'inline-block',
            whiteSpace: char === ' ' ? 'pre' : undefined,
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.span>
  );
};

const HeroText = () => {
  const line1 = "Hey, I'm";
  const line2 = 'Roland Méhes';
  const line3 = 'Software Developer';

  const delay1 = 0;
  const delay2 = delay1 + line1.length * STAGGER;
  const delay3 = delay2 + line2.length * STAGGER;

  return (
    <div className="max-w-[466px] justify-self-center lg:justify-self-start space-y-2">
      <p className="text-[16px] text-center leading-[180%] md:text-[18px] md:text-start">
        <AnimatedLine text={line1} delay={delay1} />
      </p>
      <h1 className="text-[36px] text-center md:text-start md:text-[48px]">
        <AnimatedLine text={line2} delay={delay2} />
      </h1>
      <h1 className="text-[36px] md:text-[48px] text-center md:text-start text-[var(--color-2)]">
        <AnimatedLine text={line3} delay={delay3} />
      </h1>
      <p className="text-[16px] md:text-[18px] text-center md:text-start leading-[180%] mt-4">
        Crafting clean, efficient web experiences with JavaScript, React &
        Next.js. Coding isn't just what I do — it's how I think.
      </p>
    </div>
  );
};
export default HeroText;
