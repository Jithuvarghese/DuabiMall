'use client';

import { SceneFrame } from './SceneFrame';
import { eventHighlights } from '../../data/stats';
import { useDeckStore } from '../../store/deckStore';

export function EventsScene() {
  const goToScene = useDeckStore((s) => s.goToScene);
  const setFormPrefill = useDeckStore((s) => s.setFormPrefill);

  return (
    <SceneFrame
      eyebrow="Events & Platform"
      title="Concerts, launches, and public moments all fit the same commercial story."
      description="The property becomes a platform when the venue layer, crowd flow, and brand storytelling work together."
    >
      <div className="grid gap-4 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-lg shadow-black/10">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">Venue Specs</p>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li>Grand atrium formats</li>
            <li>Outdoor plaza opportunities</li>
            <li>Rigging and production support</li>
            <li>Flexible partner branding rights</li>
          </ul>
          <button
            className="mt-6 rounded-full border border-gold px-5 py-3 text-xs uppercase tracking-[0.24em] text-gold"
            onClick={() => {
              // Prefill contact form with event category and jump to contact scene
              setFormPrefill({ category: 'events', message: 'Inquiry about hosting an event at Dubai Mall' });
              goToScene('contact');
            }}
          >
            Submit an Event Inquiry
          </button>
        </div>
        <div className="rounded-[2rem] border border-white/10 bg-black/30 p-6">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">Highlights</p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {eventHighlights.map((highlight) => (
              <div key={highlight} className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 text-sm text-white/75 transition hover:border-gold/40 hover:bg-gold/10">{highlight}</div>
            ))}
          </div>
        </div>
      </div>
    </SceneFrame>
  );
}
