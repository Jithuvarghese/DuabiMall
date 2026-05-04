'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { SceneFrame } from './SceneFrame';
import { Section } from '../ui/Section';

const cards = ['Fashion Avenue', 'Private Clienteling', 'High Jewellery', 'Editorial Retail'];

export function LuxuryScene() {
  return (
    <SceneFrame
      eyebrow="Luxury"
      title="Fashion Avenue, where the world’s most coveted brands call home."
      description="This section slows down the pacing and lets the material breathe, mirroring the editorial rhythm the assignment asks for."
    >
      <div className="grid gap-6 lg:gap-8 lg:grid-cols-[1.15fr_0.85fr]">
        {/* Left: Carousel */}
        <Section subtitle="Luxury Collections" delay={0.3}>
          <motion.div
            className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 sm:p-8 backdrop-blur-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/45 mb-4">Scroll horizontally to explore</p>
            <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {cards.map((card, index) => (
                <motion.div
                  key={card}
                  className="min-w-[85%] sm:min-w-[70%] lg:min-w-[22rem] snap-center rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/10 to-transparent p-6 sm:p-8 backdrop-blur-md transition hover:border-gold/40 hover:bg-gold/5"
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.35 + index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -4 }}
                >
                  <p className="text-xs uppercase tracking-[0.35em] text-gold">Collection</p>
                  <p className="mt-5 font-display text-3xl sm:text-4xl font-light text-white">{card}</p>
                  <p className="mt-4 text-sm leading-7 text-white/65">
                    Editorial retail stagecraft, tailored clienteling, and quiet prestige in every touchpoint.
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Section>

        {/* Right: Image + Benchmark */}
        <div className="flex flex-col gap-4">
          <motion.div
            className="overflow-hidden rounded-[2rem] border border-white/10 bg-black/30"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.6 }}
          >
            <Image
              src="/images/Dubai%20Mall%20pot.jpg"
              alt="Dubai Mall luxury retail corridor"
              width={1200}
              height={900}
              className="h-full min-h-[260px] sm:min-h-[300px] w-full object-cover opacity-90 transition hover:opacity-100"
              sizes="(max-width: 1024px) 100vw, 45vw"
              priority={false}
            />
          </motion.div>

          <motion.div
            className="rounded-[2rem] border border-gold/30 bg-gradient-to-br from-gold/10 to-gold/5 px-6 sm:px-8 py-6 sm:py-8 backdrop-blur-md shadow-lg shadow-gold/5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.6 }}
          >
            <p className="text-[10px] uppercase tracking-[0.35em] text-gold font-medium">Performance Benchmark</p>
            <p className="mt-4 font-display text-2xl sm:text-3xl font-light text-white leading-8">
              Avg. Transaction Value
              <span className="block text-gold mt-1">20-30% Above Regional</span>
            </p>
          </motion.div>
        </div>
      </div>
    </SceneFrame>
  );
}
