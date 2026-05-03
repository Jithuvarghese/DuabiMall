'use client';

import { useEffect, useState } from 'react';
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
  const [menuOpen, setMenuOpen] = useState(false);

  const sceneButtons = SCENES.filter((scene) => scene.id !== 'opening');

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') nextScene();
      if (event.key === 'ArrowLeft') previousScene();
      if (event.key === 'Escape') setMenuOpen(false);
      if (event.key >= '1' && event.key <= String(SCENES.length)) {
        const scene = SCENES[Number(event.key) - 1];
        if (scene) {
          goToScene(scene.id);
          setMenuOpen(false);
        }
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [goToScene, nextScene, previousScene]);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/40 backdrop-blur-2xl">
      <div className="mx-auto grid max-w-[1680px] grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-2 px-3 py-2 sm:gap-4 sm:px-5 sm:py-3 md:grid-cols-[140px_minmax(0,1fr)_auto] md:gap-6 lg:grid-cols-[170px_minmax(0,1fr)_auto] lg:px-10">
        <button onClick={() => goToScene('opening')} aria-label="Go to home" className="flex h-10 w-auto shrink-0 items-center overflow-visible sm:h-12 md:h-14">
          <Image src="/images/Logo.png" alt="Dubai Mall" width={260} height={100} priority sizes="(max-width: 640px) 100px, (max-width: 768px) 120px, 170px" className="h-10 w-auto origin-left object-contain transition-transform sm:h-12 md:h-14 sm:scale-[1.1] md:scale-[1.2]" />
        </button>

        <nav className="hidden min-w-0 items-center justify-center gap-1 sm:gap-2 lg:flex">
          {sceneButtons.map((scene, index) => {
            const active = scene.id === currentSceneId;
            return (
              <button key={scene.id} onClick={() => goToScene(scene.id)} className={cn('group flex items-center gap-1 rounded-full px-2 sm:px-2.5 py-2 text-[9px] sm:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.22em] text-white/70 transition hover:text-white', active && 'text-white')}>
                <span className="relative flex h-3 w-3 items-center justify-center">
                  {active ? (
                    <motion.span layoutId="active-dot" className="absolute h-3 w-3 rounded-full bg-gold shadow-gold" style={{ backgroundColor: scene.navAccent }} />
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
          <button
            type="button"
            aria-label="Open navigation menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((value) => !value)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition hover:border-gold/60 hover:text-gold lg:hidden"
          >
            <span className="sr-only">Menu</span>
            <span className="relative flex h-4 w-4 items-center justify-center">
              <span className={cn('absolute h-0.5 w-4 rounded-full bg-current transition-transform', menuOpen ? 'translate-y-0 rotate-45' : '-translate-y-1.5')} />
              <span className={cn('absolute h-0.5 w-4 rounded-full bg-current transition-opacity', menuOpen ? 'opacity-0' : 'opacity-100')} />
              <span className={cn('absolute h-0.5 w-4 rounded-full bg-current transition-transform', menuOpen ? 'translate-y-0 -rotate-45' : 'translate-y-1.5')} />
            </span>
          </button>
          <CTAButton className="hidden h-8 shrink-0 whitespace-nowrap px-3 text-[8px] leading-none sm:h-9 sm:px-4 sm:text-[9px] md:h-10 md:text-[10px] lg:inline-flex" onClick={() => openModule('events')}>
            Request a Meeting
          </CTAButton>
          <CTAButton variant="gold" className="h-8 shrink-0 whitespace-nowrap px-3 text-[8px] leading-none sm:h-9 sm:px-4 sm:text-[9px] md:h-10 md:text-[10px]" onClick={() => goToScene('contact')}>
            Contact
          </CTAButton>
        </div>
      </div>

      {menuOpen && (
        <motion.div className="border-t border-white/10 bg-black/90 px-3 py-4 shadow-2xl backdrop-blur-2xl lg:hidden" initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.18, ease: 'easeOut' }}>
          <div className="mx-auto flex max-w-[1680px] flex-col gap-4">
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
              {sceneButtons.map((scene) => {
                const active = scene.id === currentSceneId;
                return (
                  <button
                    key={scene.id}
                    onClick={() => {
                      goToScene(scene.id);
                      setMenuOpen(false);
                    }}
                    className={cn('rounded-2xl border px-3 py-3 text-left text-xs uppercase tracking-[0.18em] transition', active ? 'border-gold bg-gold/10 text-white' : 'border-white/10 bg-white/5 text-white/70')}
                  >
                    <span className="block text-[10px] text-white/45">{scene.shortLabel}</span>
                    <span className="mt-1 block text-[11px] leading-4">{scene.label}</span>
                  </button>
                );
              })}
            </div>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              <CTAButton className="h-11 w-full justify-center px-4 text-[10px] leading-none" onClick={() => openModule('events')}>
                Request a Meeting
              </CTAButton>
              <CTAButton variant="gold" className="h-11 w-full justify-center px-4 text-[10px] leading-none" onClick={() => { goToScene('contact'); setMenuOpen(false); }}>
                Contact
              </CTAButton>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
}
