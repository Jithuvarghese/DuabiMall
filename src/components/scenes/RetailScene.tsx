'use client';

import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { useMemo, useState } from 'react';
import { SceneFrame } from './SceneFrame';
import { Section } from '../ui/Section';
import { brandNames } from '../../data/stats';
import { useDeckStore } from '../../store/deckStore';

const featuredAnchors = ['Louis Vuitton', 'Gucci', 'Apple', 'Dior', 'Cartier'];

const brandImages: Record<string, string> = {
  'Louis Vuitton': '/images/louis-vuitton.jpeg',
  Gucci: '/images/gucci.jpeg',
  Apple: '/images/apple.jpg',
  Dior: '/images/dior.png',
  Cartier: '/images/cartier.jpg',
  Rolex: '/images/rolex.jpg',
  Chanel: '/images/chanel.jpg',
  Hermes: '/images/hermes.jpg',
  Prada: '/images/prada.png',
  Burberry: '/images/burberry.png',
  Balenciaga: '/images/balenciaga.png',
  Bvlgari: '/images/bvlgari.png',
  Fendi: '/images/fendi.jpg',
  Celine: '/images/celine.png',
  Moncler: '/images/moncler.png',
  'Van Cleef': '/images/van-cleef.jpg',
  Rimowa: '/images/rimowa.png',
  Sandro: '/images/sandro.png',
  Maje: '/images/maje.jpg',
  'Saint Laurent': '/images/saint-laurent.jpg',
  Versace: '/images/versace.png',
  Zegna: '/images/zegna.png',
  Tods: '/images/tods.png'
};

const brandProfiles: Record<string, { eyebrow: string; title: string; summary: string; bullets: string[] }> = {
  'Louis Vuitton': {
    eyebrow: 'Flagship Anchor',
    title: 'Louis Vuitton',
    summary: 'High-visibility frontage, appointment-led traffic, and a luxury environment that supports long dwell times and premium conversion.',
    bullets: ['Iconic global draw', 'Premium category fit', 'High-value clienteling']
  },
  Gucci: {
    eyebrow: 'Fashion Powerhouse',
    title: 'Gucci',
    summary: 'A statement retail presence with strong visual merchandising and a younger luxury audience that responds to curated launches.',
    bullets: ['Strong social pull', 'Campaign-ready frontage', 'High-energy traffic']
  },
  Apple: {
    eyebrow: 'Tech Destination',
    title: 'Apple',
    summary: 'Minimalist retail storytelling with high engagement, product education, and a traffic pattern that complements the premium corridor.',
    bullets: ['Category-defining store', 'High repeat visitation', 'Education-driven dwell time']
  },
  Dior: {
    eyebrow: 'Luxury Showcase',
    title: 'Dior',
    summary: 'Editorial luxury display language with a refined customer journey for fashion, beauty, and private clienteling.',
    bullets: ['Editorial presentation', 'Luxury beauty crossover', 'Private appointment flow']
  },
  Cartier: {
    eyebrow: 'Jewellery Landmark',
    title: 'Cartier',
    summary: 'Jewellery-led prestige with intimate service touchpoints and a polished environment for high-consideration purchases.',
    bullets: ['High-consideration category', 'Trusted heritage brand', 'Service-led conversion']
  }
};

function getBrandProfile(brand: string) {
  return brandProfiles[brand] ?? {
    eyebrow: 'Premium Retail',
    title: brand,
    summary: 'A premium-format tenant that benefits from the Dubai Mall audience, polished frontage, and strong daily footfall.',
    bullets: ['Prime mall visibility', 'Luxury-compatible positioning', 'High intent audience']
  };
}

function getBrandImage(brand: string) {
  return brandImages[brand] ?? '/images/Dubai%20Mall%20pot.jpg';
}

export function RetailScene() {
  const openModule = useDeckStore((state) => state.openModule);
  const [activeBrand, setActiveBrand] = useState(featuredAnchors[0]);
  const activeProfile = useMemo(() => getBrandProfile(activeBrand), [activeBrand]);

  return (
    <SceneFrame
      eyebrow="Retail"
      title="Flagships, pop-ups, and F&B all operate like a single commercial engine."
      description="The retail environment supports luxury names, high-frequency brands, and fast-turn activations with the same premium stagecraft."
    >
      <Section subtitle="Tenant Mix" delay={0.3}>
        <motion.div
          className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 sm:p-8 backdrop-blur-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-gold/50 bg-gold/10 px-4 py-2 text-xs uppercase tracking-[0.28em] text-gold font-medium">
              Featured Anchors
            </span>
            {featuredAnchors.map((brand, index) => (
              <motion.span
                key={brand}
                role="button"
                tabIndex={0}
                onMouseEnter={() => setActiveBrand(brand)}
                onFocus={() => setActiveBrand(brand)}
                className={`cursor-default text-xs uppercase tracking-[0.2em] transition ${activeBrand === brand ? 'text-gold' : 'text-white/70 hover:text-white'}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 + index * 0.05 }}
              >
                {brand}
              </motion.span>
            ))}
          </div>

          <motion.div
            className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {brandNames.map((brand, index) => (
              <motion.button
                key={brand}
                type="button"
                onMouseEnter={() => setActiveBrand(brand)}
                onFocus={() => setActiveBrand(brand)}
                onClick={() => setActiveBrand(brand)}
                className={`group rounded-2xl border px-4 sm:px-5 py-5 sm:py-6 text-center text-xs sm:text-sm uppercase tracking-[0.22em] backdrop-blur-sm transition hover:-translate-y-2 hover:shadow-lg ${
                  activeBrand === brand
                    ? 'border-gold/60 bg-gold/10 text-gold shadow-gold/10'
                    : 'border-white/10 bg-white/[0.04] text-white/75 hover:border-gold/50 hover:bg-gold/10 hover:text-gold hover:shadow-black/20'
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 + index * 0.04, duration: 0.5 }}
                whileHover={{ y: -8 }}
              >
                {brand}
              </motion.button>
            ))}
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeBrand}
              className="mt-6 grid gap-4 overflow-hidden rounded-[2rem] border border-white/10 bg-black/35 p-5 sm:p-6 lg:grid-cols-[1.05fr_0.95fr]"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
            >
              <div className="flex flex-col justify-between gap-5">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.35em] text-gold">{activeProfile.eyebrow}</p>
                  <h3 className="mt-3 font-display text-3xl sm:text-4xl font-light text-white">{activeProfile.title}</h3>
                  <p className="mt-4 max-w-2xl text-sm leading-7 text-white/68">{activeProfile.summary}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {activeProfile.bullets.map((bullet) => (
                    <span key={bullet} className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-white/60">
                      {bullet}
                    </span>
                  ))}
                </div>
              </div>

              <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-white/[0.08] to-gold/10">
                <div className="relative min-h-[240px] sm:min-h-[280px]">
                  <Image
                    src={getBrandImage(activeBrand)}
                    alt={`${activeProfile.title} retail preview`}
                    fill
                    className="object-cover opacity-85"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    priority={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/75 via-black/30 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                    <p className="text-[10px] uppercase tracking-[0.35em] text-white/50">Visual slot</p>
                    <p className="mt-2 max-w-md text-sm leading-6 text-white/78">
                      Add brand photography here later if you want a true retailer-by-retailer hero treatment.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </Section>

      {/* CTA Buttons */}
      <motion.div
        className="mt-8 flex flex-wrap gap-2 sm:gap-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.75, duration: 0.6 }}
      >
        {['Flagship', 'Pop-Up', 'F&B'].map((label, index) => (
          <motion.button
            key={label}
            className="rounded-full border border-white/15 bg-white/5 px-5 sm:px-6 py-2.5 sm:py-3 text-xs uppercase tracking-[0.22em] text-white/75 transition hover:border-gold/50 hover:text-gold hover:bg-gold/10"
            onClick={() => openModule('leasing')}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 + index * 0.05, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            {label}
          </motion.button>
        ))}
      </motion.div>
    </SceneFrame>
  );
}
