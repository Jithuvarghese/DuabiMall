'use client';

import { Canvas } from '@react-three/fiber';
import { Sparkles } from '@react-three/drei';
import { motion } from 'framer-motion';
import { CTAButton } from '../ui/CTAButton';
import { SceneFrame } from './SceneFrame';
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
        <div className="flex flex-col gap-5 md:flex-row md:items-center">
          <CTAButton variant="gold" onClick={() => goToScene('why')}>Explore the Property</CTAButton>
          <CTAButton onClick={() => goToScene('contact')}>Request a Conversation</CTAButton>
        </div>
        <div className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.div className="grid gap-3 sm:grid-cols-3" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 }}>
            {keyStats.slice(0, 3).map((stat) => (
              <div key={stat.label} className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] px-5 py-5 backdrop-blur-md shadow-lg shadow-black/15 transition hover:-translate-y-1 hover:border-gold/40">
                <p className="text-[0.65rem] uppercase tracking-[0.35em] text-white/45">{stat.label}</p>
                <p className="mt-3 font-display text-4xl text-gold">{stat.value}</p>
              </div>
            ))}
          </motion.div>
          <motion.div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(0,0,0,0.35))] p-6 shadow-2xl shadow-black/30" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.65 }}>
            <p className="text-xs uppercase tracking-[0.35em] text-gold">Pitch Snapshot</p>
            <p className="mt-4 text-sm leading-7 text-white/70">111 million annual visitors. 1,200+ retail outlets. One destination that behaves like a global stage.</p>
          </motion.div>
        </div>
      </SceneFrame>
    </div>
  );
}
