'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { SceneFrame } from './SceneFrame';
import { Section } from '../ui/Section';
import { diningTags } from '../../data/stats';

export function DiningScene() {
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
                src="/images/Dubai%20Mall.jpg"
                alt="Dubai Mall dining venue"
                width={1200}
                height={900}
                className="h-full min-h-[300px] w-full object-cover opacity-90 transition hover:opacity-100"
                sizes="(max-width: 1024px) 100vw, 45vw"
                priority={false}
              />
            </motion.div>

            <motion.div
              className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 sm:p-8 backdrop-blur-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.6 }}
            >
              <p className="text-xs uppercase tracking-[0.35em] text-gold font-medium">Cuisine Mix</p>
              <div className="mt-5 flex flex-wrap gap-3">
                {diningTags.map((tag, index) => (
                  <motion.span
                    key={tag}
                    className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[10px] uppercase tracking-[0.24em] text-white/70 transition hover:border-gold/50 hover:text-gold hover:bg-gold/10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 + index * 0.04 }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </Section>
    </SceneFrame>
  );
}
