'use client';

import { useDeckStore } from '../../store/deckStore';
import { SCENES } from '../../data/scenes';

export function Footer() {
  const goToScene = useDeckStore((state) => state.goToScene);
  const sceneLinks = SCENES.filter((scene) => scene.id !== 'opening');

  return (
    <footer className="border-t border-white/10 bg-black/40 backdrop-blur-md">
      <div className="mx-auto max-w-[1680px] px-3 py-12 sm:px-5 md:px-8 lg:px-10">
        <div className="grid gap-8 md:gap-12 lg:grid-cols-[1.2fr_1fr_1fr_1.2fr]">
          {/* Branding & Description */}
          <div className="flex flex-col gap-4">
            <div>
              <h3 className="font-display text-2xl font-light text-gold">Dubai Mall</h3>
              <p className="mt-2 text-xs uppercase tracking-[0.24em] text-white/50">United Arab Emirates</p>
            </div>
            <p className="text-sm leading-6 text-white/60">
              The world&apos;s most visited retail destination, where scale, vision, and opportunity converge.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="text-xs uppercase tracking-[0.2em] text-white/50 transition hover:text-gold">X</a>
              <a href="#" className="text-xs uppercase tracking-[0.2em] text-white/50 transition hover:text-gold">Instagram</a>
              <a href="#" className="text-xs uppercase tracking-[0.2em] text-white/50 transition hover:text-gold">LinkedIn</a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.35em] text-gold">Explore</h4>
            <div className="mt-4 flex flex-col gap-3">
              {sceneLinks.slice(0, 5).map((scene) => (
                <button
                  key={scene.id}
                  onClick={() => goToScene(scene.id)}
                  className="text-xs text-white/60 transition hover:text-gold"
                >
                  {scene.label}
                </button>
              ))}
            </div>
          </div>

          {/* More Links */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.35em] text-gold">Resources</h4>
            <div className="mt-4 flex flex-col gap-3">
              {sceneLinks.slice(5).map((scene) => (
                <button
                  key={scene.id}
                  onClick={() => goToScene(scene.id)}
                  className="text-xs text-white/60 transition hover:text-gold"
                >
                  {scene.label}
                </button>
              ))}
              <button onClick={() => goToScene('contact')} className="text-xs text-white/60 transition hover:text-gold">
                Get in Touch
              </button>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.35em] text-gold">Contact</h4>
            <div className="mt-4 space-y-3">
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/40">Email</p>
                <a href="mailto:leasing@dubaimall.com" className="text-xs text-white/70 transition hover:text-gold">
                  leasing@dubaimall.com
                </a>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/40">Phone</p>
                <a href="tel:+971432255555" className="text-xs text-white/70 transition hover:text-gold">
                  +971 4 322 5555
                </a>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/40">Location</p>
                <p className="text-xs text-white/70">Downtown Dubai, UAE</p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-10 border-t border-white/10 pt-8 md:mt-12 md:pt-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p className="text-[10px] uppercase tracking-[0.2em] text-white/40">
              © 2026 Dubai Mall. All rights reserved.
            </p>
            <div className="flex gap-6 text-[10px] uppercase tracking-[0.2em]">
              <a href="#" className="text-white/40 transition hover:text-gold">Privacy Policy</a>
              <a href="#" className="text-white/40 transition hover:text-gold">Terms of Service</a>
              <a href="#" className="text-white/40 transition hover:text-gold">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
