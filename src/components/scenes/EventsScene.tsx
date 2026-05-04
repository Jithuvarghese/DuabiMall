'use client';

import { motion } from 'framer-motion';
import { SceneFrame } from './SceneFrame';
import { Section } from '../ui/Section';
import { eventHighlights } from '../../data/stats';
import { useDeckStore } from '../../store/deckStore';

export function EventsScene() {
  const goToScene = useDeckStore((s) => s.goToScene);
  const setFormPrefill = useDeckStore((s) => s.setFormPrefill);

  return (
    <SceneFrame
      eyebrow="Events & Platform"
      title="Concerts, launches, and public moments all fit the same commercial story."
      description="The property becomes a platform when the venue layer, crowd flow, and brand storytelling work together."
    >
      <Section delay={0.3}>
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Left: Venue Specs */}
          <motion.div
            className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 sm:p-8 backdrop-blur-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <p className="text-xs uppercase tracking-[0.35em] text-gold font-medium">Venue Specs</p>
            <ul className="mt-6 space-y-4">
              {[
                'Grand atrium formats',
                'Outdoor plaza opportunities',
                'Rigging and production support',
                'Flexible partner branding rights'
              ].map((item, index) => (
                <motion.li
                  key={item}
                  className="flex items-start gap-3 text-sm text-white/75 leading-6"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.35 + index * 0.08 }}
                >
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gold flex-shrink-0" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
            <motion.button
              className="mt-8 rounded-full border border-gold/50 bg-gold/10 px-6 py-3 text-xs uppercase tracking-[0.24em] text-gold transition hover:bg-gold/20 hover:border-gold font-medium"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => {
                setFormPrefill({ category: 'events', message: 'Inquiry about hosting an event at Dubai Mall' });
                goToScene('contact');
              }}
            >
              Submit an Event Inquiry
            </motion.button>
          </motion.div>

          {/* Right: Highlights */}
          <motion.div
            className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 sm:p-8 backdrop-blur-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <p className="text-xs uppercase tracking-[0.35em] text-gold font-medium">Highlights</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {eventHighlights.map((highlight, index) => (
                <motion.div
                  key={highlight}
                  className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5 sm:p-6 text-sm text-white/75 transition hover:border-gold/40 hover:bg-gold/10"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.45 + index * 0.08, duration: 0.5 }}
                  whileHover={{ y: -4 }}
                >
                  {highlight}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </Section>
    </SceneFrame>
  );
}
