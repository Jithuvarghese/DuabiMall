'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { SceneFrame } from './SceneFrame';
import { Section } from '../ui/Section';
import { attractionCards } from '../../data/stats';
import { useDeckStore } from '../../store/deckStore';

export function AttractionsScene() {
  const openModule = useDeckStore((state) => state.openModule);

  return (
    <SceneFrame
      eyebrow="Attractions & Entertainment"
      title="A mega-mall becomes a global stage when entertainment is the anchor."
      description="Aquarium, ice rink, cinemas, and family attractions create the emotional and commercial energy that traditional retail cannot match."
    >
      <Section delay={0.3}>
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Left: Attraction Cards */}
          <motion.div
            className="grid gap-4 sm:grid-cols-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {attractionCards.map((item, index) => (
              <motion.button
                key={item.id}
                className="group rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6 sm:p-7 text-left transition shadow-lg shadow-black/15 hover:-translate-y-2 hover:border-gold/40 hover:bg-gold/8 hover:shadow-lg hover:shadow-gold/10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 + index * 0.08, duration: 0.5 }}
                whileHover={{ y: -8 }}
                onClick={() => openModule('events')}
              >
                <p className="text-xs uppercase tracking-[0.35em] text-gold font-medium">Attraction</p>
                <h3 className="mt-4 font-display text-2xl sm:text-3xl text-white font-light">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/65">{item.summary}</p>
              </motion.button>
            ))}
          </motion.div>

          {/* Right: Image + Anchor Experiences */}
          <div className="flex flex-col gap-4">
            <motion.div
              className="overflow-hidden rounded-[2rem] border border-white/10 bg-black/30 shadow-lg shadow-black/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.6 }}
            >
              <Image
                src="/images/Dubai%20Mall%20pot.jpg"
                alt="Dubai Mall attractions corridor"
                width={1200}
                height={900}
                className="h-full min-h-[300px] w-full object-cover opacity-90 transition hover:opacity-100"
                sizes="(max-width: 1024px) 100vw, 45vw"
                priority={false}
              />
            </motion.div>

            <motion.div
              className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 sm:p-8 backdrop-blur-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.6 }}
            >
              <p className="text-xs uppercase tracking-[0.35em] text-gold font-medium">Anchor Experiences</p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {['Aquarium', 'Ice Rink', 'Reel Cinemas', 'KidZania / Play DXB'].map((item, idx) => (
                  <motion.div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm uppercase tracking-[0.2em] text-white/75 transition hover:border-gold/40 hover:text-gold hover:bg-gold/10 text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 + idx * 0.04 }}
                  >
                    {item}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </Section>
    </SceneFrame>
  );
}
