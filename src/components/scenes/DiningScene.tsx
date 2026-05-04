'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { SceneFrame } from './SceneFrame';
import { diningTags } from '../../data/stats';

export function DiningScene() {
  return (
    <SceneFrame
      eyebrow="Dining & Lifestyle"
      title="Food is a draw, not an afterthought."
      description="Dining at Dubai Mall behaves like its own destination layer, extending dwell time and supporting premium activations."
    >
      <div className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="grid gap-3 sm:grid-cols-2">
          {['Fine Dining', 'Indoor District', 'Terrace Views', 'Late-Night Flow'].map((item, index) => (
            <motion.div key={item} className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-5 sm:p-6 shadow-lg shadow-black/10" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.08 }}>
              <p className="text-xs uppercase tracking-[0.35em] text-gold">Lifestyle</p>
              <p className="mt-4 font-display text-2xl sm:text-3xl text-white">{item}</p>
              <p className="mt-3 text-sm leading-7 text-white/65">Designed to extend dwell time and make dining part of the destination story.</p>
            </motion.div>
          ))}
        </div>
        <div className="flex flex-col gap-4">
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-black/30">
            <Image src="/images/Dubai%20Mall.jpg" alt="Dubai Mall dining venue" width={1200} height={900} className="h-full min-h-[260px] w-full object-cover opacity-85" sizes="(max-width: 1024px) 100vw, 45vw" priority={false} />
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 sm:p-6">
            <p className="text-xs uppercase tracking-[0.35em] text-gold">Cuisine Mix</p>
            <div className="mt-4 flex flex-wrap gap-3">
              {diningTags.map((tag) => (
                <span key={tag} className="rounded-full border border-white/10 px-3 py-2 text-[10px] uppercase tracking-[0.24em] text-white/70 transition hover:border-gold/40 hover:text-white">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SceneFrame>
  );
}
