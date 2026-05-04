'use client';

import { useLayoutEffect, useRef } from 'react';

export const useGsapScene = () => {
  const scope = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    let cleanup: () => void = () => {};

    (async () => {
      const { gsap } = await import('gsap');
      const context = gsap.context(() => undefined, scope);
      cleanup = () => context.revert();
    })();

    return () => cleanup();
  }, []);

  return scope;
};
