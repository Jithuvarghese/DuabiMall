'use client';

import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { SceneFrame } from './SceneFrame';
import { Section } from '../ui/Section';
import { diningTags } from '../../data/stats';

const cuisineMap: Record<string, { title: string; dishes: string[]; note: string }> = {
  Arabic: { title: 'Arabic Cuisine', dishes: ['Mezze tasting', 'Grilled seafood', 'Slow-roasted lamb'], note: 'Ideal for high-dwell lunch and dinner traffic.' },
  Japanese: { title: 'Japanese Cuisine', dishes: ['Sushi omakase', 'Robata skewers', 'Matcha desserts'], note: 'A polished, premium dining lane with strong evening demand.' },
  Italian: { title: 'Italian Cuisine', dishes: ['Fresh pasta', 'Wood-fired pizza', 'Gelato bar'], note: 'Family-friendly, high-repeat, and easy to merchandise.' },
  'Fine Dining': { title: 'Fine Dining', dishes: ['Tasting menu', 'Chef’s table', 'Wine pairing'], note: 'Best for executive meetings and celebration dining.' },
  Casual: { title: 'Casual Dining', dishes: ['Brunch plates', 'Comfort bowls', 'Grab-and-go specials'], note: 'Supports high-volume footfall and quick-turn visits.' },
  Cafe: { title: 'Cafe', dishes: ['Specialty coffee', 'Pastries', 'All-day breakfast'], note: 'High-frequency traffic with all-day trading value.' }
};

export function DiningScene() {
  const [activeCuisine, setActiveCuisine] = useState(diningTags[0]);

  return (
    <SceneFrame
      eyebrow="Dining & Lifestyle"
      title="Food is a draw, not an afterthought."
      description="Dining at Dubai Mall behaves like its own destination layer, extending dwell time and supporting premium activations."
    >
      <Section delay={0.3}>
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Left: Lifestyle Cards */}
          <motion.div
            className="grid gap-4 sm:grid-cols-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {['Fine Dining', 'Indoor District', 'Terrace Views', 'Late-Night Flow'].map((item, index) => (
              <motion.div
                key={item}
                className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6 sm:p-7 shadow-lg shadow-black/15 transition hover:border-gold/40 hover:bg-gold/8 hover:shadow-lg hover:shadow-gold/10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 + index * 0.08, duration: 0.5 }}
                whileHover={{ y: -4 }}
              >
                <p className="text-xs uppercase tracking-[0.35em] text-gold font-medium">Lifestyle</p>
                <p className="mt-4 font-display text-2xl sm:text-3xl text-white font-light">{item}</p>
                <p className="mt-3 text-sm leading-7 text-white/65">Designed to extend dwell time and make dining part of the destination story.</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Right: Image + Cuisine Mix */}
          <div className="flex flex-col gap-4">
            <motion.div
              className="overflow-hidden rounded-[2rem] border border-white/10 bg-black/30 shadow-lg shadow-black/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.6 }}
            >
              <Image
                src="/images/dinningmall.jpg"
                alt="Dubai Mall dining venue"
                width={1200}
                height={900}
                className="h-full min-h-[300px] w-full object-cover opacity-90 transition hover:opacity-100"
                sizes="(max-width: 1024px) 100vw, 45vw"
                priority={false}
              />
            </motion.div>

            <motion.div
              className="relative rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 sm:p-8 backdrop-blur-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.6 }}
            >
              <p className="text-xs uppercase tracking-[0.35em] text-gold font-medium">Cuisine Mix</p>
              <div className="mt-5 flex flex-wrap gap-3">
                {diningTags.map((tag, index) => (
                  <motion.span
                    key={tag}
                    role="button"
                    tabIndex={0}
                    onClick={() => setActiveCuisine(tag)}
                    onMouseEnter={() => setActiveCuisine(tag)}
                    onFocus={() => setActiveCuisine(tag)}
                    className={`cursor-pointer rounded-full border px-4 py-2 text-[10px] uppercase tracking-[0.24em] transition ${activeCuisine === tag ? 'border-gold/60 bg-gold/10 text-gold' : 'border-white/15 bg-white/5 text-white/70 hover:border-gold/50 hover:text-gold hover:bg-gold/10'}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 + index * 0.04 }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>

              <div className="relative mt-5 min-h-[245px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeCuisine}
                    className="absolute inset-0 flex flex-col rounded-[1.75rem] border border-white/10 bg-black/25 p-5 sm:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.28)]"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                  >
                    <p className="text-[10px] uppercase tracking-[0.3em] text-gold/90">Selected Cuisine</p>
                    <h3 className="mt-2 font-display text-xl sm:text-2xl lg:text-3xl text-white leading-snug truncate">{cuisineMap[activeCuisine].title}</h3>
                    <p className="mt-3 max-w-lg text-xs sm:text-sm leading-6 sm:leading-7 text-white/70">{cuisineMap[activeCuisine].note}</p>
                    <div className="mt-auto flex flex-wrap gap-2 pt-4">
                      {cuisineMap[activeCuisine].dishes.map((dish) => (
                        <span key={dish} className="rounded-full border border-white/10 bg-white/[0.04] px-3 sm:px-4 py-1.5 sm:py-2 text-[8px] sm:text-[10px] uppercase tracking-[0.15em] sm:tracking-[0.2em] text-white/60 whitespace-nowrap">
                          {dish}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>
    </SceneFrame>
  );
}
