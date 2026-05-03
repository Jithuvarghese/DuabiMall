'use client';

import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';

export const useGsapScene = () => {
  const scope = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const context = gsap.context(() => undefined, scope);
    return () => context.revert();
  }, []);

  return scope;
};
