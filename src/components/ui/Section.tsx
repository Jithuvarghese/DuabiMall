'use client';

import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

interface SectionProps {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function Section({ title, subtitle, children, className, delay = 0 }: SectionProps) {
  return (
    <motion.div
      className={cn('flex flex-col gap-4 sm:gap-5 md:gap-6', className)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6, ease: 'easeOut' }}
    >
      {(title || subtitle) && (
        <div className="space-y-2">
          {subtitle && (
            <p className="text-xs uppercase tracking-[0.3em] text-gold">{subtitle}</p>
          )}
          {title && (
            <h2 className="font-display text-3xl sm:text-4xl font-light tracking-[-0.02em] text-white">
              {title}
            </h2>
          )}
        </div>
      )}
      <div className="flex min-h-0 flex-1 flex-col gap-4 sm:gap-5 md:gap-6">{children}</div>
    </motion.div>
  );
}
