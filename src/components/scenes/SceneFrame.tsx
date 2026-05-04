import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

interface SceneFrameProps {
  eyebrow: string;
  title: string;
  description: string;
  children?: React.ReactNode;
  className?: string;
}

export function SceneFrame({ eyebrow, title, description, children, className }: SceneFrameProps) {
  return (
    <section className={cn('relative min-h-screen px-3 pb-8 pt-24 sm:px-5 sm:pb-10 sm:pt-28 md:px-8 lg:px-10 lg:pb-12 lg:pt-32', className)}>
      <div className="mx-auto flex min-h-[calc(100vh-8rem)] max-w-[88rem] flex-col justify-start gap-8 sm:gap-10 lg:gap-12">
        <motion.div
          className="max-w-4xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <p className="text-xs uppercase tracking-[0.45em] text-gold">{eyebrow}</p>
          <h1 className="mt-4 font-display text-5xl font-light leading-[0.92] tracking-[-0.02em] text-white sm:text-6xl md:text-7xl lg:text-8xl">{title}</h1>
          <p className="mt-5 max-w-3xl text-sm font-light leading-7 text-white/68 sm:text-base md:text-lg">{description}</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.12 }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
