'use client';

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
      <div className="grid gap-5">
        {/* Carousel */}
        <Section subtitle="Luxury Collections" delay={0.3} className="w-full">
          <motion.div
            className="w-full overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 sm:p-6 backdrop-blur-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <p className="mb-3 text-[10px] uppercase tracking-[0.3em] text-white/45">Scroll horizontally to explore</p>
            <div className="flex min-w-0 max-w-full snap-x snap-mandatory gap-4 overflow-x-auto overflow-y-hidden touch-pan-x pb-1 pr-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {cards.map((card, index) => (
                <motion.div
                  key={card}
                  className="min-w-[min(18rem,78vw)] shrink-0 snap-center rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/10 to-transparent p-6 sm:p-7 backdrop-blur-md transition hover:border-gold/40 hover:bg-gold/5 sm:min-w-[18rem] lg:min-w-[19rem]"
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
      </div>

      <motion.div
        className="mt-4 grid gap-4 rounded-[2rem] border border-gold/30 bg-gradient-to-br from-gold/10 to-gold/5 px-6 py-5 sm:px-8 sm:py-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.72, duration: 0.55 }}
      >
        <div>
          <p className="text-[10px] uppercase tracking-[0.35em] text-gold font-medium">Performance Benchmark</p>
          <p className="mt-3 font-display text-2xl sm:text-3xl font-light text-white leading-8">
            Avg. Transaction Value
            <span className="block text-gold mt-1">20-30% Above Regional</span>
          </p>
        </div>
        <div className="hidden lg:block text-right text-[10px] uppercase tracking-[0.35em] text-white/45">
          Positioned between the retail rail and the note cards
        </div>
      </motion.div>

      <motion.div
        className="mt-4 grid gap-4 lg:grid-cols-3 lg:items-stretch"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.55 }}
      >
        {[
          ['Private Appointments', 'Tailored service paths for high-value client meetings and one-to-one showcase moments.'],
          ['Merchandising Support', 'Visual standards, signage, and seasonal kit that preserve a luxury corridor feel.'],
          ['VIP Service Layer', 'Concierge-led arrival sequencing and curated moments for premium customers.']
        ].map(([title, body]) => (
          <div key={title} className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-5 sm:p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-gold">Luxury Note</p>
            <h3 className="mt-3 font-display text-2xl text-white">{title}</h3>
            <p className="mt-3 text-sm leading-7 text-white/65">{body}</p>
          </div>
        ))}
      </motion.div>
    </SceneFrame>
  );
}
