'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { SceneFrame } from './SceneFrame';

const cards = ['Fashion Avenue', 'Private Clienteling', 'High Jewellery', 'Editorial Retail'];

export function LuxuryScene() {
  return (
    <SceneFrame
      eyebrow="Luxury"
      title="Fashion Avenue, where the world’s most coveted brands call home."
      description="This section slows down the pacing and lets the material breathe, mirroring the editorial rhythm the assignment asks for."
    >
      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="grid gap-5 sm:grid-cols-2">
          {cards.map((card, index) => (
            <motion.div
              key={card}
              className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.11),rgba(0,0,0,0.4))] p-6"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
            >
              <p className="text-xs uppercase tracking-[0.3em] text-gold">Luxury</p>
              <p className="mt-4 font-display text-3xl text-white">{card}</p>
            </motion.div>
          ))}
        </div>
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-black/30">
          <Image src="/images/Dubai%20Mall%20pot.jpg" alt="Dubai Mall luxury retail corridor" width={1200} height={900} className="h-full min-h-[260px] w-full object-cover opacity-85" sizes="(max-width: 1024px) 100vw, 45vw" priority={false} />
        </div>
      </div>
    </SceneFrame>
  );
}
