'use client';

import { Canvas } from '@react-three/fiber';
import { Sparkles } from '@react-three/drei';
import { motion } from 'framer-motion';
import { CTAButton } from '@/components/ui/CTAButton';
import { SceneFrame } from './SceneFrame';
import { useDeckStore } from '@/store/deckStore';

export function OpeningScene() {
  const goToScene = useDeckStore((state) => state.goToScene);

  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(201,169,110,0.24),_transparent_36%),linear-gradient(180deg,_rgba(0,0,0,0.45),_rgba(0,0,0,0.92))]" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center" />
      </div>
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
        <motion.p className="max-w-xl text-sm uppercase tracking-[0.28em] text-white/50" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}>
          111 million annual visitors. 1,200+ retail outlets. One destination that behaves like a global stage.
        </motion.p>
      </SceneFrame>
    </div>
  );
}
