'use client';

import { motion } from 'framer-motion';
import { SceneFrame } from './SceneFrame';
import { AnimatedCounter } from '../ui/AnimatedCounter';
import { Section } from '../ui/Section';
import { audienceMix, keyStats } from '../../data/stats';

export function WhyScene() {
  return (
    <SceneFrame
      eyebrow="The Opportunity"
      title="The world does not visit a mall. It visits Dubai Mall."
      description="Scale, visitor mix, and regional pull combine into a property story that reads like a global platform, not a retail center."
    >
      {/* Stats Grid */}
      <Section subtitle="Key Metrics" delay={0.3}>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {keyStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-5 sm:p-6 backdrop-blur-md shadow-lg shadow-black/15 transition hover:-translate-y-1 hover:border-gold/40"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 + index * 0.06, duration: 0.5 }}
              whileHover={{ y: -4 }}
            >
              <p className="text-[0.7rem] uppercase tracking-[0.3em] text-white/45">{stat.label}</p>
              <p className="mt-4 font-display text-3xl sm:text-4xl text-gold">
                <AnimatedCounter value={Number.parseInt(stat.value.replace(/[^0-9]/g, ''), 10) || 0} suffix={stat.value.replace(/[0-9,]/g, '')} />
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Two Column Layout */}
      <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        {/* Left: Audience Mix */}
        <Section subtitle="Audience Mix" delay={0.65}>
          <motion.div
            className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 sm:p-8 backdrop-blur-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.6 }}
          >
            <div className="space-y-5">
              {audienceMix.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + index * 0.08, duration: 0.5 }}
                >
                  <div className="mb-2 flex items-center justify-between text-sm text-white/70">
                    <span className="font-medium text-white/80">{item.name}</span>
                    <span className="text-gold font-display text-lg">{item.value}%</span>
                  </div>
                  <div className="h-2.5 overflow-hidden rounded-full bg-white/10">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-gold to-gold/60"
                      initial={{ width: 0 }}
                      animate={{ width: `${item.value}%` }}
                      transition={{ delay: 0.75 + index * 0.08, duration: 0.8, ease: 'easeOut' }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Section>

        {/* Right: Catchment */}
        <Section subtitle="Catchment Area" delay={0.8}>
          <motion.div
            className="overflow-hidden rounded-[2rem] border border-white/10 bg-black/40 p-6 sm:p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <div className="flex h-64 sm:h-72 lg:h-80 items-center justify-center rounded-[1.5rem] border border-white/10 bg-[url('/images/Dubai%20Mall%20pot.jpg')] bg-cover bg-center relative overflow-hidden">
              <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
              <motion.div
                className="relative flex flex-col items-center gap-4 text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9, duration: 0.6 }}
              >
                <motion.div
                  className="h-24 w-24 rounded-full border-2 border-gold/80"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <motion.div
                  className="h-40 w-40 rounded-full border border-gold/40"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 0.2 }}
                />
                <p className="text-xs uppercase tracking-[0.25em] text-white/70 relative">
                  Metro direct access · 30 min · 60 min
                </p>
              </motion.div>
            </div>
          </motion.div>
        </Section>
      </div>
    </SceneFrame>
  );
}
