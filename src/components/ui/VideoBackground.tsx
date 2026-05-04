'use client';

import { useEffect, useRef } from 'react';
import { useVideoLoader } from '../../hooks/useVideoLoader';
import { useDeckStore } from '../../store/deckStore';

interface VideoBackgroundProps {
  src?: string;
  fallback?: string;
  sceneIndex: number;
  currentSceneIndex: number;
  poster?: string;
}

export function VideoBackground({ src, fallback, sceneIndex, currentSceneIndex, poster }: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const setOpeningVideoProgress = useDeckStore((state) => state.setOpeningVideoProgress);
  const shouldLoad = useVideoLoader(sceneIndex, currentSceneIndex);
  const isMp4 = src?.toLowerCase().endsWith('.mp4');
  const webmFallback = src ? src.replace(/\.mp4$/i, '.webm') : undefined;

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (sceneIndex === currentSceneIndex) {
      void video.play().catch(() => undefined);
    } else {
      video.pause();
    }
  }, [currentSceneIndex, sceneIndex]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || sceneIndex !== currentSceneIndex || !isMp4) {
      if (sceneIndex === 0) {
        setOpeningVideoProgress(0);
      }
      return;
    }

    let raf = 0;
    const duration = () => (Number.isFinite(video.duration) ? video.duration : 0);

    const tick = () => {
      if (!video || video.paused) return;
      const d = duration();
      if (d > 0) {
        const pct = (video.currentTime / d) * 100;
        setOpeningVideoProgress(Math.min(100, Math.max(0, pct)));
      }
      raf = requestAnimationFrame(tick);
    };

    const handlePlay = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(tick);
    };

    const handlePause = () => {
      cancelAnimationFrame(raf);
    };

    const handleEnded = () => {
      cancelAnimationFrame(raf);
      setOpeningVideoProgress(100);
    };

    const handleLoaded = () => {
      // set initial position
      const d = duration();
      if (d > 0) setOpeningVideoProgress((video.currentTime / d) * 100);
    };

    video.addEventListener('loadedmetadata', handleLoaded);
    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);
    video.addEventListener('ended', handleEnded);

    // start RAF if already playing
    if (!video.paused) {
      raf = requestAnimationFrame(tick);
    }

    return () => {
      cancelAnimationFrame(raf);
      video.removeEventListener('loadedmetadata', handleLoaded);
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
      video.removeEventListener('ended', handleEnded);
    };
  }, [currentSceneIndex, isMp4, sceneIndex, setOpeningVideoProgress]);

  if (!shouldLoad) {
    return <div className={fallback ?? 'absolute inset-0 bg-gradient-to-br from-black via-deck-dark to-deck-charcoal'} />;
  }

  return (
    <video
      ref={videoRef}
      className="absolute inset-0 h-full w-full object-cover opacity-70"
      autoPlay
      muted
      loop={false}
      playsInline
      poster={poster}
      preload="metadata"
      aria-hidden={true}
    >
      {webmFallback ? <source src={webmFallback} type="video/webm" /> : null}
      {isMp4 ? <source src={src} type="video/mp4" /> : src ? <source src={src} type="video/webm" /> : null}
    </video>
  );
}
