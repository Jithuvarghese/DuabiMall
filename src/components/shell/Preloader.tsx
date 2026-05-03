'use client';

import { useEffect, useState } from 'react';

export function Preloader({ children }: { children: React.ReactNode }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setReady(true), 900);
    return () => window.clearTimeout(timer);
  }, []);

  if (!ready) {
    return (
      <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black text-white">
        <div className="font-display text-4xl text-gold">Dubai Mall</div>
        <div className="mt-5 h-px w-48 overflow-hidden bg-white/10">
          <div className="h-full w-1/2 animate-pulse bg-gold" />
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
