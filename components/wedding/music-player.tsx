"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { Volume2, VolumeX } from "lucide-react";

export function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  const toggleMusic = useCallback(() => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {
        setIsPlaying(false);
      });
    }
  }, [isPlaying]);

  // Auto-play on first user interaction with the page
  useEffect(() => {
    if (hasInteracted) return;

    const handleFirstInteraction = () => {
      if (audioRef.current && !hasInteracted) {
        audioRef.current.play().then(() => {
          setIsPlaying(true);
          setHasInteracted(true);
        }).catch(() => {
          setHasInteracted(true);
        });
      }
    };

    window.addEventListener("click", handleFirstInteraction, { once: true });
    window.addEventListener("touchstart", handleFirstInteraction, { once: true });
    window.addEventListener("scroll", handleFirstInteraction, { once: true });

    return () => {
      window.removeEventListener("click", handleFirstInteraction);
      window.removeEventListener("touchstart", handleFirstInteraction);
      window.removeEventListener("scroll", handleFirstInteraction);
    };
  }, [hasInteracted]);

  return (
    <>
      <audio ref={audioRef} src="/music/song.webm" loop preload="auto" />

      <button
        onClick={toggleMusic}
        aria-label={isPlaying ? "Pause music" : "Play music"}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl active:scale-95"
      >
        {isPlaying ? (
          <span className="relative flex items-center justify-center">
            <Volume2 className="w-6 h-6" />
            {/* Animated rings when playing */}
            <span className="absolute inset-0 rounded-full border-2 border-primary-foreground/30 animate-ping" />
          </span>
        ) : (
          <VolumeX className="w-6 h-6" />
        )}
      </button>

      {/* Subtle pulse ring behind button when playing */}
      {isPlaying && (
        <div className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full pointer-events-none">
          <span className="absolute inset-0 rounded-full bg-primary/20 animate-ping" style={{ animationDuration: "2s" }} />
        </div>
      )}
    </>
  );
}
