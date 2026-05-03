import { useEffect, useState } from 'react';
import type Lenis from 'lenis';

let lenisInstance: Lenis | null = null;

export const setLenisInstance = (instance: Lenis | null) => {
  lenisInstance = instance;
};

export const useLenis = () => {
  const [instance, setInstance] = useState<Lenis | null>(lenisInstance);

  useEffect(() => {
    setInstance(lenisInstance);
  }, []);

  return instance;
};
