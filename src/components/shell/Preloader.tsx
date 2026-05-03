'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { CTAButton } from '../ui/CTAButton';

export function Preloader({ children }: { children: React.ReactNode }) {
  const [ready, setReady] = useState(false);
  const [soundOn, setSoundOn] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const playIntroWithSound = async () => {
    const video = videoRef.current;
    if (!video) return;

    setSoundOn(true);
    video.muted = false;

    try {
      await video.play();
    } catch {
      // If the browser blocks playback, keep the intro visible and let the skip button proceed.
    }
  };

  if (!ready) {
    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black text-white">
        <div className="absolute inset-0">
          <video
            ref={videoRef}
            className="h-full w-full object-cover opacity-60"
            autoPlay
            loop={false}
            muted={!soundOn}
            playsInline
            preload="auto"
            poster="/images/Dubai%20Mall%20pot.jpg"
            onEnded={() => setReady(true)}
          >
            <source src="/videos/videoplayback.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(201,169,110,0.18),_transparent_45%),linear-gradient(180deg,_rgba(0,0,0,0.25),_rgba(0,0,0,0.86))]" />
        </div>

        <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center gap-6 px-6 text-center">
          <Image src="/images/Logo.png" alt="Dubai Mall" width={260} height={90} priority className="h-16 w-auto object-contain" />
          <p className="max-w-2xl text-sm uppercase tracking-[0.3em] text-white/65">Cinematic pitch intro</p>
          <h1 className="font-display text-4xl font-light tracking-[0.18em] text-white md:text-6xl">The Most Visited Place on Earth</h1>
          <div className="h-px w-48 bg-white/15">
            <div className="h-full w-1/2 bg-gold" />
          </div>
          <p className="max-w-xl text-sm leading-7 text-white/70">Press start to play the Dubai Mall intro with sound, then continue into the deck once the pitch lands.</p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <CTAButton variant="gold" onClick={playIntroWithSound}>Start With Sound</CTAButton>
            <CTAButton onClick={() => setReady(true)}>Skip Intro</CTAButton>
          </div>
          <button className="text-xs uppercase tracking-[0.3em] text-white/55 transition hover:text-white" onClick={() => setSoundOn((current) => !current)}>
            {soundOn ? 'Sound On' : 'Sound Off'}
          </button>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
