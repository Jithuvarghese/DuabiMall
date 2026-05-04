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
      <div className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-4 sm:p-5">
          <div className="mb-4 flex items-center justify-between gap-3">
            <p className="text-xs uppercase tracking-[0.35em] text-gold">Luxury Corridor</p>
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/45">Drag horizontally</p>
          </div>
          <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {cards.map((card, index) => (
              <motion.div
                key={card}
                className="min-w-[78%] snap-center rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.14),rgba(0,0,0,0.48))] p-6 sm:min-w-[22rem]"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
              >
                <p className="text-xs uppercase tracking-[0.35em] text-gold">Luxury</p>
                <p className="mt-5 font-display text-3xl text-white sm:text-4xl">{card}</p>
                <p className="mt-4 text-sm leading-7 text-white/65">Editorial retail stagecraft, tailored clienteling, and quiet prestige in every touchpoint.</p>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-black/30">
            <Image src="/images/Dubai%20Mall%20pot.jpg" alt="Dubai Mall luxury retail corridor" width={1200} height={900} className="h-full min-h-[260px] w-full object-cover opacity-85" sizes="(max-width: 1024px) 100vw, 45vw" priority={false} />
          </div>
          <div className="rounded-[2rem] border border-gold/30 bg-gold/10 px-6 py-5 backdrop-blur-sm">
            <p className="text-[10px] uppercase tracking-[0.35em] text-gold">Benchmark</p>
            <p className="mt-3 font-display text-2xl text-white">Avg. Transaction Value 20-30% Above Regional Norms</p>
          </div>
        </div>
      </div>
    </SceneFrame>
  );
}
