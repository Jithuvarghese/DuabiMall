'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';
import { setLenisInstance } from '../hooks/useLenis';

export default function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    let cleanup = () => undefined;

    (async () => {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([
        import('gsap'),
        import('gsap/ScrollTrigger')
      ]);

      gsap.registerPlugin(ScrollTrigger);

      const lenis = new Lenis({ smoothWheel: true, lerp: 0.08 });
      setLenisInstance(lenis);

      const raf = (time: number) => {
        lenis.raf(time * 1000);
      };

      lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.add(raf);
      gsap.ticker.lagSmoothing(0);

      cleanup = () => {
        gsap.ticker.remove(raf);
        setLenisInstance(null);
        lenis.destroy();
      };
    })();

    return () => cleanup();
  }, []);

  return <>{children}</>;
}
