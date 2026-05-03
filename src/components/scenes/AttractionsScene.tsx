'use client';

import { SceneFrame } from './SceneFrame';
import { attractionCards } from '@/data/stats';
import { useDeckStore } from '@/store/deckStore';

export function AttractionsScene() {
  const openModule = useDeckStore((state) => state.openModule);

  return (
    <SceneFrame
      eyebrow="Attractions & Entertainment"
      title="A mega-mall becomes a global stage when entertainment is the anchor."
      description="Aquarium, ice rink, cinemas, and family attractions create the emotional and commercial energy that traditional retail cannot match."
    >
      <div className="grid gap-4 lg:grid-cols-2">
        {attractionCards.map((item) => (
          <button key={item.id} className="rounded-[2rem] border border-white/10 bg-white/5 p-6 text-left transition hover:border-gold/50 hover:bg-gold/10" onClick={() => openModule('events')}>
            <p className="text-xs uppercase tracking-[0.3em] text-gold">Attraction</p>
            <h3 className="mt-3 font-display text-3xl text-white">{item.title}</h3>
            <p className="mt-3 text-sm leading-7 text-white/65">{item.summary}</p>
          </button>
        ))}
      </div>
    </SceneFrame>
  );
}
