'use client';

import { useEffect } from 'react';
import Image from 'next/image';
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
      <div className="mx-auto grid max-w-[1680px] grid-cols-[170px_minmax(0,1fr)_auto] items-center gap-6 px-4 py-3 sm:px-6 lg:px-10">
        <button onClick={() => goToScene('opening')} aria-label="Go to home" className="flex h-14 w-[170px] shrink-0 items-center overflow-visible">
          <Image src="/images/Logo.png" alt="Dubai Mall" width={260} height={100} priority sizes="170px" className="h-14 w-auto origin-left scale-[1.2] object-contain" />
        </button>

        <nav className="hidden min-w-0 items-center justify-center gap-2 md:flex">
          {SCENES.filter((s) => s.id !== 'opening').map((scene, index) => {
            const active = scene.id === currentSceneId;
            return (
              <button
                key={scene.id}
                onClick={() => goToScene(scene.id)}
                className={cn('group flex items-center gap-2 rounded-full px-2.5 py-2 text-[10px] uppercase tracking-[0.22em] text-white/70 transition hover:text-white', active && 'text-white')}
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

        <div className="flex items-center justify-end gap-2 self-center justify-self-end">
          <CTAButton className="hidden h-10 shrink-0 whitespace-nowrap px-4 text-[10px] leading-none lg:inline-flex" onClick={() => openModule('events')}>
            Request a Meeting
          </CTAButton>
          <CTAButton variant="gold" className="h-10 shrink-0 whitespace-nowrap px-4 text-[10px] leading-none" onClick={() => goToScene('contact')}>
            Contact
          </CTAButton>
        </div>
      </div>
    </header>
  );
}
