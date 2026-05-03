'use client';

import { useEffect, useRef } from 'react';
import { useVideoLoader } from '@/hooks/useVideoLoader';

interface VideoBackgroundProps {
  src?: string;
  fallback?: string;
  sceneIndex: number;
  currentSceneIndex: number;
  poster?: string;
}

export function VideoBackground({ src, fallback, sceneIndex, currentSceneIndex, poster }: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const shouldLoad = useVideoLoader(sceneIndex, currentSceneIndex);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (sceneIndex === currentSceneIndex) {
      void video.play().catch(() => undefined);
    } else {
      video.pause();
    }
  }, [currentSceneIndex, sceneIndex]);

  if (!shouldLoad) {
    return <div className={fallback ?? 'absolute inset-0 bg-gradient-to-br from-black via-deck-dark to-deck-charcoal'} />;
  }

  return (
    <video
      ref={videoRef}
      className="absolute inset-0 h-full w-full object-cover opacity-70"
      autoPlay
      muted
      loop
      playsInline
      poster={poster}
      preload="metadata"
    >
      {src ? <source src={src} type="video/webm" /> : null}
      <source src="/videos/fallback.mp4" type="video/mp4" />
    </video>
  );
}
