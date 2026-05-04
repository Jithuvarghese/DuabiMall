'use client';

import { useEffect, useRef } from 'react';

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
}

export function AnimatedCounter({ value, suffix = '' }: AnimatedCounterProps) {
  const nodeRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const node = nodeRef.current;
    if (!node) return;

    let tween: { kill: () => void } | null = null;
    let active = true;

    (async () => {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([
        import('gsap'),
        import('gsap/ScrollTrigger')
      ]);

      if (!active) return;

      gsap.registerPlugin(ScrollTrigger);

      const state = { val: 0 };
      tween = gsap.to(state, {
        val: value,
        duration: 2.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: node,
          start: 'top 80%'
        },
        onUpdate: () => {
          node.textContent = `${Math.round(state.val).toLocaleString()}${suffix}`;
        }
      });
    })();

    return () => {
      active = false;
      tween?.kill();
    };
  }, [suffix, value]);

  return <span ref={nodeRef}>{`0${suffix}`}</span>;
}
