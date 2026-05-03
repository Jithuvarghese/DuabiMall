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
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {brandNames.map((brand) => (
            <div key={brand} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-6 text-center text-sm uppercase tracking-[0.22em] text-white/80 backdrop-blur-sm">
              {brand}
            </div>
          ))}
        </div>
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-black/30">
          <Image src="/images/Dubai%20Mall%20pot.jpg" alt="Dubai Mall retail corridor" width={1200} height={900} className="h-full min-h-[260px] w-full object-cover opacity-85" sizes="(max-width: 1024px) 100vw, 45vw" priority={false} />
        </div>
      </div>
      <div className="flex flex-wrap gap-3">
        <button className="rounded-full border border-white/15 px-5 py-3 text-xs uppercase tracking-[0.24em] text-white/75" onClick={() => openModule('leasing')}>Flagship</button>
        <button className="rounded-full border border-white/15 px-5 py-3 text-xs uppercase tracking-[0.24em] text-white/75" onClick={() => openModule('leasing')}>Pop-Up</button>
        <button className="rounded-full border border-white/15 px-5 py-3 text-xs uppercase tracking-[0.24em] text-white/75" onClick={() => openModule('leasing')}>F&B</button>
      </div>
    </SceneFrame>
  );
}
