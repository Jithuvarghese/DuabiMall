'use client';

import { Canvas } from '@react-three/fiber';
import { Sparkles } from '@react-three/drei';
import { motion } from 'framer-motion';
import { CTAButton } from '../ui/CTAButton';
import { SceneFrame } from './SceneFrame';
import { StatCard } from '../ui/StatCard';
import { Section } from '../ui/Section';
import { keyStats } from '../../data/stats';
import { useDeckStore } from '../../store/deckStore';
import { VideoBackground } from '../ui/VideoBackground';
import { SCENES } from '../../data/scenes';

export function OpeningScene() {
  const goToScene = useDeckStore((state) => state.goToScene);
  const currentSceneId = useDeckStore((state) => state.currentSceneId);
  const currentIndex = SCENES.findIndex((s) => s.id === currentSceneId);
  const openingIndex = SCENES.findIndex((s) => s.id === 'opening');

  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(201,169,110,0.24),_transparent_36%),linear-gradient(180deg,_rgba(0,0,0,0.45),_rgba(0,0,0,0.92))]" />
      <VideoBackground src="/videos/videoplayback.mp4" poster="/images/Dubai%20Mall%20pot.jpg" sceneIndex={openingIndex} currentSceneIndex={currentIndex} />
      <Canvas className="absolute inset-0" camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.6} />
        <Sparkles count={70} color="#C9A96E" speed={0.35} scale={[10, 10, 10]} />
      </Canvas>
      <SceneFrame
        eyebrow="Dubai Mall · United Arab Emirates"
        title="The Most Visited Place on Earth"
        description="A cinematic sales deck for tenants, sponsors, and event partners who need to understand the scale, energy, and opportunity of the destination in seconds."
      >
        <div className="flex flex-col gap-8 lg:gap-12">
          {/* CTA Section */}
          <motion.div
            className="flex flex-col gap-3 sm:flex-row sm:gap-4"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <CTAButton variant="gold" onClick={() => goToScene('why')}>
              Explore the Property
            </CTAButton>
            <CTAButton onClick={() => goToScene('contact')}>
              Request a Conversation
            </CTAButton>
          </motion.div>

          {/* Stats Grid */}
          <Section subtitle="Key Figures" delay={0.4}>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {keyStats.map((stat, index) => (
                <StatCard
                  key={stat.label}
                  label={stat.label}
                  value={stat.value}
                  highlight={index === 0}
                  delay={0.45 + index * 0.08}
                />
              ))}
            </div>
          </Section>

          {/* Insight Box */}
          <motion.div
            className="rounded-[2rem] border border-gold/30 bg-gold/5 px-6 sm:px-8 py-8 sm:py-10 backdrop-blur-md shadow-lg shadow-gold/5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <p className="text-xs uppercase tracking-[0.35em] text-gold">Pitch Snapshot</p>
            <p className="mt-4 text-base sm:text-lg leading-8 text-white/80">
              111 million annual visitors. 1,200+ retail outlets. One destination that behaves like a global stage.
            </p>
          </motion.div>
        </div>
      </SceneFrame>
    </div>
  );
}
