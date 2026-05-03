'use client';

import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MODULES } from '@/data/modules';
import { moduleTabs } from '@/data/stats';
import { useDeckStore } from '@/store/deckStore';
import { ModuleShell } from './ModuleShell';

const moduleCopy: Record<string, Record<string, { title: string; body: string; points: string[] }>> = {
  leasing: {
    Flagship: {
      title: 'Flagship Leasing',
      body: 'Position leading brands at the heart of the destination with premium frontage and visitor density.',
      points: ['High visibility frontage', 'Luxury adjacency', 'Custom fit-out support']
    },
    'Pop-Up': {
      title: 'Pop-Up Leasing',
      body: 'Fast-turn activation space for launches, seasonal drops, and limited campaigns.',
      points: ['Short-form commitments', 'Flexible footprints', 'Campaign-ready setup']
    },
    'F&B': {
      title: 'Food & Beverage Leasing',
      body: 'Lifestyle dining environments that capture dwell time and repeat visitation.',
      points: ['Breakfast-to-late-night trading', 'Terrace options', 'Performance-linked pitch']
    }
  },
  events: {
    Atrium: {
      title: 'Grand Atrium',
      body: 'Central gathering space for launches, performances, and high-footfall brand moments.',
      points: ['Premium ceiling height', 'Flexible staging', 'Branding opportunities']
    },
    Promenade: {
      title: 'Waterfront Promenade',
      body: 'Outdoor-facing moment for arrivals, receptions, and public-facing showcases.',
      points: ['Nighttime atmosphere', 'Direct sightlines', 'Sponsor integrations']
    },
    Plaza: {
      title: 'Fountain Plaza',
      body: 'Iconic destination setting for celebrity moments, seasonal activations, and performances.',
      points: ['Cinematic backdrop', 'High dwell-time traffic', 'Large-format exposure']
    }
  },
  sponsorship: {
    'Presenting Partner': {
      title: 'Presenting Partner',
      body: 'Own the headline association and connect to the mall’s largest story moments.',
      points: ['Top-tier placement', 'Category exclusivity', 'Signature visibility']
    },
    'Category Sponsor': {
      title: 'Category Sponsor',
      body: 'Align with a targeted audience and an experience that feels premium and specific.',
      points: ['Selective exposure', 'Audience alignment', 'Conversion-friendly']
    },
    'Activation Partner': {
      title: 'Activation Partner',
      body: 'Deploy a short-run activation with built-in storytelling and fast turnaround.',
      points: ['Low-lift entry', 'High creative freedom', 'Event-linked storytelling']
    }
  }
};

export function ModuleRenderer() {
  const activeModule = useDeckStore((state) => state.activeModule);
  const closeModule = useDeckStore((state) => state.closeModule);
  const [tabByModule, setTabByModule] = useState<Record<string, string>>({
    leasing: moduleTabs.leasing[0],
    events: moduleTabs.events[0],
    sponsorship: moduleTabs.sponsorship[0]
  });

  const moduleMeta = useMemo(() => MODULES.find((module) => module.id === activeModule), [activeModule]);
  const activeTab = activeModule && moduleMeta ? tabByModule[activeModule] ?? moduleMeta.defaultTab : undefined;
  const activeContent = activeModule && activeTab ? moduleCopy[activeModule]?.[activeTab] : undefined;

  if (!moduleMeta || !activeModule || !activeContent) {
    return null;
  }

  const resolvedActiveTab = activeTab ?? moduleMeta.defaultTab;

  return (
    <ModuleShell
      title={moduleMeta.title}
      tabs={moduleMeta.tabs}
      activeTab={resolvedActiveTab}
      onTabChange={(tab) => setTabByModule((current) => ({ ...current, [activeModule]: tab }))}
      onClose={closeModule}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={`${activeModule}-${resolvedActiveTab}`}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -14 }}
          className="grid gap-6 md:grid-cols-[1.2fr_0.8fr]"
        >
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-gold">{resolvedActiveTab}</p>
            <h4 className="mt-3 font-display text-3xl text-white">{activeContent.title}</h4>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/70">{activeContent.body}</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-deck-charcoal p-6">
            <ul className="space-y-3 text-sm text-white/75">
              {activeContent.points.map((point) => (
                <li key={point} className="rounded-2xl border border-white/5 bg-black/20 px-4 py-3">{point}</li>
              ))}
            </ul>
          </div>
        </motion.div>
      </AnimatePresence>
    </ModuleShell>
  );
}
