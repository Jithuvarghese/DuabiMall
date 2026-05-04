'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { SceneFrame } from './SceneFrame';
import { AnimatedCounter } from '../ui/AnimatedCounter';
import { Section } from '../ui/Section';
import { audienceMix, keyStats } from '../../data/stats';
import { useDeckStore } from '../../store/deckStore';

function MapModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const lat = 25.1972;
  const lon = 55.2796;
  const src = `https://www.openstreetmap.org/export/embed.html?bbox=${lon - 0.01}%2C${lat - 0.01}%2C${lon + 0.01}%2C${lat + 0.01}&layer=mapnik&marker=${lat}%2C${lon}`;

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.button
            type="button"
            aria-label="Close map"
            onClick={onClose}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          <motion.div
            className="relative z-10 w-full max-w-4xl overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(17,20,30,0.96),rgba(6,8,14,0.98))] shadow-[0_30px_120px_rgba(0,0,0,0.55)]"
            initial={{ scale: 0.94, y: 18, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.96, y: 10, opacity: 0 }}
            transition={{ duration: 0.24, ease: 'easeOut' }}
          >
            <div className="flex items-center justify-between border-b border-white/8 px-4 py-4 sm:px-5">
              <div>
                <p className="text-[10px] uppercase tracking-[0.35em] text-gold/80">OpenStreetMap</p>
                <h3 className="mt-1 font-display text-xl text-white">Dubai Mall location</h3>
              </div>
              <button onClick={onClose} className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs uppercase tracking-[0.25em] text-white/75 transition hover:border-gold/50 hover:text-gold">
                Close
              </button>
            </div>
            <div className="relative h-[60vh] min-h-[420px]">
              <iframe src={src} className="h-full w-full" title="Dubai Mall map" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,rgba(0,0,0,0.18)_100%)]" />
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

export function WhyScene() {
  const setSiteVisitProgress = useDeckStore((s) => s.setSiteVisitProgress);
  const siteVisitProgress = useDeckStore((s) => s.siteVisitProgress);
  const [showMap, setShowMap] = useState(false);

  useEffect(() => {
    try {
      const key = 'dm_visit_done_v1';
      const done = localStorage.getItem(key);
      if (!done) {
        const target = 65;
        let raf = 0;
        let start: number | null = null;
        const duration = 1400;
        const step = (ts: number) => {
          if (!start) start = ts;
          const t = Math.min(1, (ts - start) / duration);
          setSiteVisitProgress(Math.round(target * t));
          if (t < 1) raf = requestAnimationFrame(step);
          else localStorage.setItem(key, '1');
        };
        raf = requestAnimationFrame(step);
        return () => cancelAnimationFrame(raf);
      }

      setSiteVisitProgress(Number(localStorage.getItem('dm_visit_progress') || 65));
    } catch {
      // ignore storage failures
    }
  }, [setSiteVisitProgress]);

  useEffect(() => {
    try {
      localStorage.setItem('dm_visit_progress', String(siteVisitProgress));
    } catch {
      // ignore storage failures
    }
  }, [siteVisitProgress]);

  return (
    <>
      <SceneFrame
        eyebrow="The Opportunity"
        title="The world does not visit a mall. It visits Dubai Mall."
        description="Scale, visitor mix, and regional pull combine into a property story that reads like a global platform, not a retail center."
      >
        <Section subtitle="Key Metrics" delay={0.3}>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {keyStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-5 sm:p-6 backdrop-blur-md shadow-lg shadow-black/15 transition hover:-translate-y-1 hover:border-gold/40"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 + index * 0.06, duration: 0.5 }}
                whileHover={{ y: -4 }}
              >
                <p className="text-[0.7rem] uppercase tracking-[0.3em] text-white/45">{stat.label}</p>
                <p className="mt-4 font-display text-3xl sm:text-4xl text-gold">
                  <AnimatedCounter value={Number.parseInt(stat.value.replace(/[^0-9]/g, ''), 10) || 0} suffix={stat.value.replace(/[0-9,]/g, '')} />
                </p>
              </motion.div>
            ))}
          </div>
        </Section>

        <div className="grid gap-6 pt-4 lg:grid-cols-2 lg:items-stretch">
          <Section subtitle="Audience Mix" delay={0.65} className="h-full pt-1">
            <motion.div
              className="flex h-full flex-col rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 sm:p-8 backdrop-blur-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.6 }}
            >
              <div className="space-y-7">
                {audienceMix.map((item, index) => (
                  <motion.div key={item.name} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.7 + index * 0.08, duration: 0.5 }}>
                    <div className="mb-3 flex items-center justify-between text-sm text-white/70">
                      <span className="font-medium text-white/80">{item.name}</span>
                      <span className="text-gold font-display text-lg">{item.value}%</span>
                    </div>
                    <div className="h-2.5 overflow-hidden rounded-full bg-white/10">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-gold to-gold/60"
                        initial={{ width: 0 }}
                        animate={{ width: `${item.value}%` }}
                        transition={{ delay: 0.75 + index * 0.08, duration: 0.8, ease: 'easeOut' }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                {[
                  { label: 'Luxury shoppers', value: 72, note: 'High-intent visitors prioritizing premium retail.' },
                  { label: 'Family visits', value: 58, note: 'Long dwell cycles that support dining and attractions.' },
                  { label: 'Tourist traffic', value: 84, note: 'Destination-led audiences with a strong discovery mindset.' },
                  { label: 'Repeat visits', value: 67, note: 'Healthy return frequency across the year.' }
                ].map((item, index) => (
                  <motion.div
                    key={item.label}
                    className="rounded-[1.5rem] border border-white/8 bg-black/20 p-4"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 + index * 0.06, duration: 0.45 }}
                  >
                    <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.28em] text-white/55">
                      <span>{item.label}</span>
                      <span className="text-gold">{item.value}%</span>
                    </div>
                    <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-gold to-gold/60"
                        initial={{ width: 0 }}
                        animate={{ width: `${item.value}%` }}
                        transition={{ delay: 1 + index * 0.06, duration: 0.7, ease: 'easeOut' }}
                      />
                    </div>
                    <p className="mt-3 text-xs leading-6 text-white/60">{item.note}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </Section>

          <Section subtitle="Catchment Area" delay={0.8} className="h-full pt-1">
            <motion.div className="flex h-full flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-black/40 p-5 sm:p-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.6 }}>
              <div className="relative flex min-h-[268px] flex-1 items-center justify-center overflow-hidden rounded-[1.5rem] border border-white/10 bg-[linear-gradient(135deg,rgba(17,44,82,0.92),rgba(8,18,38,0.98))] p-4 sm:min-h-[280px]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(201,169,110,0.14),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.08),_transparent_28%)]" />
                <div className="absolute inset-0 bg-[url('/images/Dubai%20Mall%20pot.jpg')] bg-cover bg-center opacity-15 blur-[2px]" />
                <motion.div className="relative grid gap-5 text-center" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.9, duration: 0.6 }}>
                  <div className="mx-auto grid h-28 w-28 place-items-center rounded-full border border-gold/70 bg-black/25 shadow-[0_0_40px_rgba(201,169,110,0.2)]">
                    <div className="grid h-20 w-20 place-items-center rounded-full border border-gold/45">
                      <span className="text-[10px] uppercase tracking-[0.35em] text-gold">Metro</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap justify-center gap-2">
                    {['Direct access', '30 min', '60 min'].map((label) => (
                      <span key={label} className="rounded-full border border-white/10 bg-black/35 px-4 py-2 text-[10px] uppercase tracking-[0.25em] text-white/72">
                        {label}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm leading-7 text-white/72">Replace the static image with this cleaner catchment graphic so the story reads like a destination map instead of a loading frame.</p>
                  <div className="mt-2">
                    <button onClick={() => setShowMap(true)} className="rounded-full border border-gold/60 bg-gold/10 px-4 py-2 text-sm text-gold hover:brightness-105">
                      Open map
                    </button>
                  </div>
                </motion.div>
              </div>
              <div className="mt-3 grid gap-2 sm:grid-cols-3">
                {['Metro access', 'Tourist catchment', 'Luxury reach'].map((label) => (
                  <div key={label} className="rounded-[1rem] border border-white/10 bg-white/[0.04] px-3 py-2 text-center text-[10px] uppercase tracking-[0.22em] text-white/65">
                    {label}
                  </div>
                ))}
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                {[
                  { label: 'Drive time', value: '10 min', note: 'Core city access' },
                  { label: 'Metro reach', value: '2 stops', note: 'Direct transit access' },
                  { label: 'Tourist zone', value: 'High', note: 'Destination pull' },
                  { label: 'Dwell impact', value: 'Extended', note: 'Longer visit windows' }
                ].map((item, index) => (
                  <motion.div
                    key={item.label}
                    className="rounded-[1.4rem] border border-white/8 bg-white/[0.04] p-4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.05 + index * 0.05, duration: 0.4 }}
                  >
                    <p className="text-[10px] uppercase tracking-[0.28em] text-white/50">{item.label}</p>
                    <p className="mt-2 font-display text-xl text-gold">{item.value}</p>
                    <p className="mt-2 text-xs leading-6 text-white/60">{item.note}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </Section>
        </div>

        <motion.div className="mt-6 grid gap-4 md:grid-cols-3" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.95, duration: 0.5 }}>
          {[
            ['High Dwell Time', 'Retail, dining, and entertainment combine to keep visitors on-property longer.'],
            ['Regional Reach', 'The catchment extends across commuters, residents, and destination tourists.'],
            ['Luxury Gravity', 'Premium tenants benefit from the mall’s constant high-intent traffic.']
          ].map(([title, body]) => (
            <div key={title} className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-5 sm:p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-gold">Insight</p>
              <h3 className="mt-3 font-display text-2xl text-white">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/65">{body}</p>
            </div>
          ))}
        </motion.div>
      </SceneFrame>
      <MapModal open={showMap} onClose={() => setShowMap(false)} />
    </>
  );
}
