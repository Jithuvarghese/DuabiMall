'use client';

import { AnimatePresence, motion } from 'framer-motion';

interface SceneTransitionProps {
  children: React.ReactNode;
  sceneKey: string;
}

export function SceneTransition({ children, sceneKey }: SceneTransitionProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={sceneKey}
        className="absolute inset-0"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -24 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
