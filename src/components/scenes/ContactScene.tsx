'use client';

import { useState } from 'react';
import { SceneFrame } from './SceneFrame';
import { useDeckStore } from '@/store/deckStore';

export function ContactScene() {
  const openModule = useDeckStore((state) => state.openModule);
  const [activePath, setActivePath] = useState<'leasing' | 'sponsorship' | 'events'>('leasing');

  return (
    <SceneFrame
      eyebrow="Connect"
      title="Your brand. The world’s stage."
      description="Choose the path that fits your business goal and keep the experience inside the deck, the way the brief asks for."
    >
      <div className="grid gap-5 lg:grid-cols-3">
        {[
          ['leasing', 'Retail Leasing'],
          ['sponsorship', 'Brand Partnerships'],
          ['events', 'Event Production']
        ].map(([key, label]) => (
          <button
            key={key}
            onClick={() => {
              setActivePath(key as typeof activePath);
              openModule(key as 'leasing' | 'sponsorship' | 'events');
            }}
            className="rounded-[2rem] border border-white/10 bg-white/5 p-6 text-left transition hover:border-gold/50 hover:bg-gold/10"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-gold">CTA</p>
            <h3 className="mt-3 font-display text-3xl text-white">{label}</h3>
            <p className="mt-3 text-sm text-white/65">Open the matching module and keep the conversation within the deck experience.</p>
          </button>
        ))}
      </div>
      <div className="rounded-[2rem] border border-white/10 bg-black/30 p-6 text-sm text-white/70">
        Active path: <span className="text-gold">{activePath}</span>
      </div>
    </SceneFrame>
  );
}
