'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { SceneFrame } from './SceneFrame';
import { Section } from '../ui/Section';
import { brandNames } from '../../data/stats';
import { useDeckStore } from '../../store/deckStore';

export function RetailScene() {
  const openModule = useDeckStore((state) => state.openModule);

  return (
    <SceneFrame
      eyebrow="Retail"
      title="Flagships, pop-ups, and F&B all operate like a single commercial engine."
      description="The retail environment supports luxury names, high-frequency brands, and fast-turn activations with the same premium stagecraft."
    >
      <Section subtitle="Tenant Mix" delay={0.3}>
        <motion.div
          className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 sm:p-8 backdrop-blur-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-gold/50 bg-gold/10 px-4 py-2 text-xs uppercase tracking-[0.28em] text-gold font-medium">
              Featured Anchors
            </span>
            {['Louis Vuitton', 'Gucci', 'Apple', 'Dior', 'Cartier'].map((brand, index) => (
              <motion.span
                key={brand}
                className="text-xs uppercase tracking-[0.2em] text-white/70"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 + index * 0.05 }}
              >
                {brand}
              </motion.span>
            ))}
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <motion.div
              className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              {brandNames.map((brand, index) => (
                <motion.div
                  key={brand}
                  className="group rounded-2xl border border-white/10 bg-white/[0.04] px-4 sm:px-5 py-5 sm:py-6 text-center text-xs sm:text-sm uppercase tracking-[0.22em] text-white/75 backdrop-blur-sm transition hover:-translate-y-2 hover:border-gold/50 hover:bg-gold/10 hover:text-gold hover:shadow-lg hover:shadow-gold/10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45 + index * 0.04, duration: 0.5 }}
                  whileHover={{ y: -8 }}
                >
                  {brand}
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="overflow-hidden rounded-[2rem] border border-white/10 bg-black/30 shadow-lg shadow-black/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.6 }}
            >
              <Image
                src="/images/Dubai%20Mall%20pot.jpg"
                alt="Dubai Mall retail corridor"
                width={1200}
                height={900}
                className="h-full min-h-[300px] w-full object-cover opacity-90 transition group-hover:opacity-100"
                sizes="(max-width: 1024px) 100vw, 45vw"
                priority={false}
              />
            </motion.div>
          </div>
        </motion.div>
      </Section>

      {/* CTA Buttons */}
      <motion.div
        className="flex flex-col gap-2 sm:flex-row sm:gap-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.75, duration: 0.6 }}
      >
        {['Flagship', 'Pop-Up', 'F&B'].map((label, index) => (
          <motion.button
            key={label}
            className="rounded-full border border-white/15 bg-white/5 px-5 sm:px-6 py-2.5 sm:py-3 text-xs uppercase tracking-[0.22em] text-white/75 transition hover:border-gold/50 hover:text-gold hover:bg-gold/10"
            onClick={() => openModule('leasing')}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 + index * 0.05, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            {label}
          </motion.button>
        ))}
      </motion.div>
    </SceneFrame>
  );
}
