'use client';

import { useMemo } from 'react';
import { SCENES } from '../../data/scenes';
import { useDeckStore } from '../../store/deckStore';

export function ProgressBar() {
  const currentSceneId = useDeckStore((state) => state.currentSceneId);
  const openingVideoProgress = useDeckStore((state) => state.openingVideoProgress);
  const siteVisitProgress = useDeckStore((state) => state.siteVisitProgress);
  const currentIndex = useMemo(() => SCENES.findIndex((scene) => scene.id === currentSceneId), [currentSceneId]);
  const progress = currentSceneId === 'opening'
    ? Math.max(0, Math.min(100, openingVideoProgress || 0))
    : currentSceneId === 'why'
    ? Math.max(0, Math.min(100, siteVisitProgress || 0))
    : ((currentIndex + 1) / SCENES.length) * 100;

  return (
    <div className="pointer-events-none absolute left-0 top-0 z-40 h-1.5 w-full bg-black/15">
      <div className="h-full rounded-r-full bg-gradient-to-r from-gold via-gold-light to-gold shadow-[0_0_16px_rgba(201,169,110,0.55)] transition-[width] duration-100 ease-linear" style={{ width: `${progress}%` }} />
    </div>
  );
}
