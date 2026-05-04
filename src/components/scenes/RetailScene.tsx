'use client';

import Image from 'next/image';
import { SceneFrame } from './SceneFrame';
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
      <div className="rounded-[2rem] border border-white/10 bg-black/25 p-5 sm:p-6">
        <div className="mb-4 flex flex-wrap items-center gap-3 text-[10px] uppercase tracking-[0.28em] text-white/45">
          <span className="rounded-full border border-white/10 px-3 py-1 text-gold">Tenant Mix</span>
          <span>Louis Vuitton</span>
          <span>Gucci</span>
          <span>Apple</span>
          <span>Dior</span>
          <span>Cartier</span>
        </div>
        <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="grid gap-3 sm:gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
            {brandNames.map((brand) => (
              <div key={brand} className="group rounded-2xl border border-white/10 bg-white/[0.04] px-2 sm:px-4 py-4 sm:py-6 text-center text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.22em] text-white/80 backdrop-blur-sm transition hover:-translate-y-1 hover:border-gold/50 hover:bg-gold/10 hover:text-white">
                {brand}
              </div>
            ))}
          </div>
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-black/30">
            <Image src="/images/Dubai%20Mall%20pot.jpg" alt="Dubai Mall retail corridor" width={1200} height={900} className="h-full min-h-[260px] w-full object-cover opacity-85" sizes="(max-width: 1024px) 100vw, 45vw" priority={false} />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-3">
        <button className="rounded-full border border-white/15 px-4 sm:px-5 py-2 sm:py-3 text-xs uppercase tracking-[0.2em] sm:tracking-[0.24em] text-white/75 transition hover:border-gold/50 hover:text-gold" onClick={() => openModule('leasing')}>Flagship</button>
        <button className="rounded-full border border-white/15 px-4 sm:px-5 py-2 sm:py-3 text-xs uppercase tracking-[0.2em] sm:tracking-[0.24em] text-white/75 transition hover:border-gold/50 hover:text-gold" onClick={() => openModule('leasing')}>Pop-Up</button>
        <button className="rounded-full border border-white/15 px-4 sm:px-5 py-2 sm:py-3 text-xs uppercase tracking-[0.2em] sm:tracking-[0.24em] text-white/75 transition hover:border-gold/50 hover:text-gold" onClick={() => openModule('leasing')}>F&B</button>
      </div>
    </SceneFrame>
  );
}
