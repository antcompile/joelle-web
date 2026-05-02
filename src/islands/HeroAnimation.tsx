import { motion } from 'motion/react';

interface Props {
  title: string;
  subtitle: string;
}

export default function HeroAnimation({ title, subtitle }: Props) {
  const words = title.split(' ');

  return (
    <div className="text-center text-white">
      <h1 className="font-serif font-bold text-[clamp(2.5rem,6vw,5.5rem)] leading-[1.1] mb-6">
        {words.map((word, i) => (
          <motion.span
            key={i}
            className="inline-block mr-[0.3em] last:mr-0"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 + i * 0.12, ease: 'easeOut' }}
          >
            {word}
          </motion.span>
        ))}
      </h1>
      <motion.p
        className="font-sans text-lg md:text-xl text-white/80 max-w-xl mx-auto"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8, ease: 'easeOut' }}
      >
        {subtitle}
      </motion.p>
    </div>
  );
}
