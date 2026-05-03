'use client';

import { SceneFrame } from './SceneFrame';
import { eventHighlights } from '@/data/stats';
import { useDeckStore } from '@/store/deckStore';

export function EventsScene() {
  const openModule = useDeckStore((state) => state.openModule);

  return (
    <SceneFrame
      eyebrow="Events & Platform"
      title="Concerts, launches, and public moments all fit the same commercial story."
      description="The property becomes a platform when the venue layer, crowd flow, and brand storytelling work together."
    >
      <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">Venue Specs</p>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li>Grand atrium formats</li>
            <li>Outdoor plaza opportunities</li>
            <li>Rigging and production support</li>
            <li>Flexible partner branding rights</li>
          </ul>
          <button className="mt-6 rounded-full border border-gold px-5 py-3 text-xs uppercase tracking-[0.24em] text-gold" onClick={() => openModule('events')}>
            Submit an Event Inquiry
          </button>
        </div>
        <div className="rounded-[2rem] border border-white/10 bg-black/30 p-6">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">Highlights</p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {eventHighlights.map((highlight) => (
              <div key={highlight} className="rounded-3xl border border-white/10 bg-white/5 p-5 text-sm text-white/75">{highlight}</div>
            ))}
          </div>
        </div>
      </div>
    </SceneFrame>
  );
}
