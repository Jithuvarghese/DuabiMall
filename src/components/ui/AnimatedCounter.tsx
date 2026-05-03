'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
}

export function AnimatedCounter({ value, suffix = '' }: AnimatedCounterProps) {
  const nodeRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const state = { val: 0 };
    const node = nodeRef.current;
    if (!node) return;

    const tween = gsap.to(state, {
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

    return () => {
      tween.kill();
    };
  }, [suffix, value]);

  return <span ref={nodeRef}>{`0${suffix}`}</span>;
}
