'use client';

import { useMemo } from 'react';
import { SCENES } from '@/data/scenes';
import { useDeckStore } from '@/store/deckStore';

export function ProgressBar() {
  const currentSceneId = useDeckStore((state) => state.currentSceneId);
  const currentIndex = useMemo(() => SCENES.findIndex((scene) => scene.id === currentSceneId), [currentSceneId]);
  const progress = ((currentIndex + 1) / SCENES.length) * 100;

  return (
    <div className="pointer-events-none absolute left-0 top-0 z-40 h-1 w-full bg-white/5">
      <div className="h-full bg-gradient-to-r from-gold via-gold-light to-gold" style={{ width: `${progress}%` }} />
    </div>
  );
}
