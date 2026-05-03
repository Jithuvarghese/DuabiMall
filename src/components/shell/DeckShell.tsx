'use client';

import dynamic from 'next/dynamic';
import { useMemo } from 'react';
import { SCENES } from '@/data/scenes';
import { useDeckStore } from '@/store/deckStore';
import { SceneTransition } from './SceneTransition';

const sceneMap = {
  OpeningScene: dynamic(() => import('@/components/scenes/OpeningScene').then((mod) => mod.OpeningScene), { ssr: false }),
  WhyScene: dynamic(() => import('@/components/scenes/WhyScene').then((mod) => mod.WhyScene), { ssr: false }),
  RetailScene: dynamic(() => import('@/components/scenes/RetailScene').then((mod) => mod.RetailScene), { ssr: false }),
  LuxuryScene: dynamic(() => import('@/components/scenes/LuxuryScene').then((mod) => mod.LuxuryScene), { ssr: false }),
  DiningScene: dynamic(() => import('@/components/scenes/DiningScene').then((mod) => mod.DiningScene), { ssr: false }),
  AttractionsScene: dynamic(() => import('@/components/scenes/AttractionsScene').then((mod) => mod.AttractionsScene), { ssr: false }),
  EventsScene: dynamic(() => import('@/components/scenes/EventsScene').then((mod) => mod.EventsScene), { ssr: false }),
  ContactScene: dynamic(() => import('@/components/scenes/ContactScene').then((mod) => mod.ContactScene), { ssr: false })
} as const;

export function DeckShell() {
  const currentSceneId = useDeckStore((state) => state.currentSceneId);
  const currentScene = useMemo(() => SCENES.find((scene) => scene.id === currentSceneId) ?? SCENES[0], [currentSceneId]);
  const SceneComponent = sceneMap[currentScene.component as keyof typeof sceneMap];

  return (
    <main className="relative min-h-screen overflow-hidden bg-deck-radial text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(201,169,110,0.14),_transparent_38%)]" />
      <SceneTransition sceneKey={currentScene.id}>
        <SceneComponent />
      </SceneTransition>
    </main>
  );
}
