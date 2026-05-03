'use client';

import { SceneFrame } from './SceneFrame';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { audienceMix, keyStats } from '@/data/stats';

export function WhyScene() {
  return (
    <SceneFrame
      eyebrow="The Opportunity"
      title="The world does not visit a mall. It visits Dubai Mall."
      description="Scale, visitor mix, and regional pull combine into a property story that reads like a global platform, not a retail center."
    >
      <div className="grid gap-4 md:grid-cols-5">
        {keyStats.map((stat) => (
          <div key={stat.label} className="rounded-3xl border border-white/10 bg-white/5 p-5">
            <p className="text-xs uppercase tracking-[0.3em] text-white/45">{stat.label}</p>
            <p className="mt-4 font-display text-4xl text-gold"><AnimatedCounter value={Number.parseInt(stat.value.replace(/[^0-9]/g, ''), 10) || 0} suffix={stat.value.replace(/[0-9,]/g, '')} /></p>
          </div>
        ))}
      </div>
      <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="rounded-[2rem] border border-white/10 bg-black/30 p-6">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">Audience Mix</p>
          <div className="mt-6 space-y-4">
            {audienceMix.map((item) => (
              <div key={item.name}>
                <div className="mb-2 flex items-center justify-between text-sm text-white/70">
                  <span>{item.name}</span>
                  <span>{item.value}%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-white/10"><div className="h-full rounded-full bg-gold" style={{ width: `${item.value}%` }} /></div>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(201,169,110,0.13),_transparent_34%),linear-gradient(135deg,_rgba(255,255,255,0.05),_rgba(255,255,255,0.02))] p-6">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">Catchment</p>
          <div className="mt-6 flex h-80 items-center justify-center rounded-[2rem] border border-white/10 bg-black/30">
            <div className="flex flex-col items-center gap-4 text-center">
              <div className="h-40 w-40 rounded-full border border-gold/60" />
              <div className="h-28 w-28 rounded-full border border-gold/40" />
              <div className="text-sm uppercase tracking-[0.25em] text-white/60">Metro direct access · 30 min · 60 min</div>
            </div>
          </div>
        </div>
      </div>
    </SceneFrame>
  );
}
