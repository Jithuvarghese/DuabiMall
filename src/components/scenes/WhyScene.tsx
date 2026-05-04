'use client';

import Image from 'next/image';
import { SceneFrame } from './SceneFrame';
import { AnimatedCounter } from '../ui/AnimatedCounter';
import { audienceMix, keyStats } from '../../data/stats';

export function WhyScene() {
  return (
    <SceneFrame
      eyebrow="The Opportunity"
      title="The world does not visit a mall. It visits Dubai Mall."
      description="Scale, visitor mix, and regional pull combine into a property story that reads like a global platform, not a retail center."
    >
      <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.25fr_0.75fr]">
        <div className="grid gap-3 sm:gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {keyStats.map((stat) => (
              <div key={stat.label} className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-md shadow-lg shadow-black/15 transition hover:-translate-y-1 hover:border-gold/40">
              <p className="text-xs uppercase tracking-[0.3em] text-white/45">{stat.label}</p>
              <p className="mt-4 font-display text-4xl text-gold"><AnimatedCounter value={Number.parseInt(stat.value.replace(/[^0-9]/g, ''), 10) || 0} suffix={stat.value.replace(/[0-9,]/g, '')} /></p>
            </div>
          ))}
        </div>
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-black/30">
          <Image src="/images/Dubai%20Mall.jpg" alt="Dubai Mall aerial view" width={1200} height={800} className="h-full min-h-[220px] w-full object-cover opacity-80" sizes="(max-width: 1024px) 100vw, 50vw" priority={false} />
        </div>
      </div>
      <div className="grid gap-4 sm:gap-6 grid-cols-1 lg:grid-cols-[0.8fr_1.2fr]">
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
          <div className="mt-6 flex h-56 sm:h-72 lg:h-80 items-center justify-center rounded-[2rem] border border-white/10 bg-[url('/images/Dubai%20Mall%20pot.jpg')] bg-cover bg-center">
            <div className="flex flex-col items-center gap-4 rounded-[2rem] bg-black/55 px-6 py-8 text-center backdrop-blur-sm">
              <div className="h-32 w-32 rounded-full border border-gold/60" />
              <div className="h-24 w-24 rounded-full border border-gold/40" />
              <div className="text-sm uppercase tracking-[0.25em] text-white/60">Metro direct access · 30 min · 60 min</div>
            </div>
          </div>
        </div>
      </div>
    </SceneFrame>
  );
}
