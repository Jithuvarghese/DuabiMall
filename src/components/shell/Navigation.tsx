'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { SCENES } from '../../data/scenes';
import { CTAButton } from '../ui/CTAButton';
import { cn } from '../../utils/cn';
import { useDeckStore } from '../../store/deckStore';

export function Navigation() {
  const currentSceneId = useDeckStore((state) => state.currentSceneId);
  const goToScene = useDeckStore((state) => state.goToScene);
  const nextScene = useDeckStore((state) => state.nextScene);
  const previousScene = useDeckStore((state) => state.previousScene);
  const openModule = useDeckStore((state) => state.openModule);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') nextScene();
      if (event.key === 'ArrowLeft') previousScene();
      if (event.key >= '1' && event.key <= String(SCENES.length)) {
        const scene = SCENES[Number(event.key) - 1];
        if (scene) goToScene(scene.id);
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [goToScene, nextScene, previousScene]);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/40 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-10">
        <button onClick={() => goToScene('opening')} aria-label="Go to home" className="flex items-center gap-3">
          <img src="/images/Logo.png" alt="Dubai Mall" className="h-14 w-auto object-contain" />
        </button>

        <nav className="hidden items-center gap-3 md:flex">
          {SCENES.filter((s) => s.id !== 'opening').map((scene, index) => {
            const active = scene.id === currentSceneId;
            return (
              <button
                key={scene.id}
                onClick={() => goToScene(scene.id)}
                className={cn('group flex items-center gap-2 rounded-full px-3 py-2 text-xs uppercase tracking-[0.22em] text-white/70 transition hover:text-white', active && 'text-white')}
              >
                <span className="relative flex h-3 w-3 items-center justify-center">
                  {active ? (
                    <motion.span
                      layoutId="active-dot"
                      className="absolute h-3 w-3 rounded-full bg-gold shadow-gold"
                      style={{ backgroundColor: scene.navAccent }}
                    />
                  ) : (
                    <span className="h-2 w-2 rounded-full bg-white/35 transition group-hover:bg-gold/70" />
                  )}
                </span>
                <span className="px-1">{scene.shortLabel}</span>
                <span className="sr-only">{index + 1}</span>
              </button>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <CTAButton className="hidden lg:inline-flex" onClick={() => openModule('events')}>
            Request a Meeting
          </CTAButton>
          <CTAButton variant="gold" onClick={() => goToScene('contact')}>
            Contact
          </CTAButton>
        </div>
      </div>
    </header>
  );
}
