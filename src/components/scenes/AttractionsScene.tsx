'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { SceneFrame } from './SceneFrame';
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
      <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
          {attractionCards.map((item, index) => (
            <motion.button key={item.id} className="rounded-[2rem] border border-white/10 bg-white/5 p-6 text-left transition hover:border-gold/50 hover:bg-gold/10" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.08 }} onClick={() => openModule('events')}>
              <p className="text-xs uppercase tracking-[0.3em] text-gold">Attraction</p>
              <h3 className="mt-3 font-display text-3xl text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/65">{item.summary}</p>
            </motion.button>
          ))}
        </div>
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-black/30">
          <Image src="/images/Dubai%20Mall%20pot.jpg" alt="Dubai Mall attractions corridor" width={1200} height={900} className="h-full min-h-[260px] w-full object-cover opacity-85" sizes="(max-width: 1024px) 100vw, 45vw" priority={false} />
        </div>
      </div>
    </SceneFrame>
  );
}
