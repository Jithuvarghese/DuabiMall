'use client';

import { useMemo } from 'react';
import { AttractionsScene } from '../scenes/AttractionsScene';
import { ContactScene } from '../scenes/ContactScene';
import { DiningScene } from '../scenes/DiningScene';
import { EventsScene } from '../scenes/EventsScene';
import { LuxuryScene } from '../scenes/LuxuryScene';
import { OpeningScene } from '../scenes/OpeningScene';
import { RetailScene } from '../scenes/RetailScene';
import { WhyScene } from '../scenes/WhyScene';
import { SCENES } from '../../data/scenes';
import { useDeckStore } from '../../store/deckStore';
import { SceneTransition } from './SceneTransition';

const sceneMap = {
  OpeningScene,
  WhyScene,
  RetailScene,
  LuxuryScene,
  DiningScene,
  AttractionsScene,
  EventsScene,
  ContactScene
} as const;

export function DeckShell() {
  const currentSceneId = useDeckStore((state) => state.currentSceneId);
  const currentScene = useMemo(() => SCENES.find((scene) => scene.id === currentSceneId) ?? SCENES[0], [currentSceneId]);
  const SceneComponent = sceneMap[currentScene.component as keyof typeof sceneMap];

  return (
    <main className="relative min-h-screen overflow-y-auto bg-deck-radial text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(201,169,110,0.14),_transparent_38%)]" />
      <SceneTransition sceneKey={currentScene.id}>
        <SceneComponent />
      </SceneTransition>
    </main>
  );
}
