'use client';

import { SceneFrame } from './SceneFrame';
import { diningTags } from '../../data/stats';

export function DiningScene() {
  return (
    <SceneFrame
      eyebrow="Dining & Lifestyle"
      title="Food is a draw, not an afterthought."
      description="Dining at Dubai Mall behaves like its own destination layer, extending dwell time and supporting premium activations."
    >
      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="grid gap-4 sm:grid-cols-2">
          {['Fine Dining', 'Indoor District', 'Terrace Views', 'Late-Night Flow'].map((item) => (
            <div key={item} className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="font-display text-3xl text-white">{item}</p>
            </div>
          ))}
        </div>
        <div className="rounded-[2rem] border border-white/10 bg-black/30 p-6">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">Cuisine Mix</p>
          <div className="mt-5 flex flex-wrap gap-3">
            {diningTags.map((tag) => (
              <span key={tag} className="rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-[0.22em] text-white/70">{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </SceneFrame>
  );
}
