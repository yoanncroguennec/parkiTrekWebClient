"use client";

import { createContext, useContext, useRef } from "react";
import useAudioPlayer from "@/app/hooks/audios/useAudioPlayer";

const bg_musicApp = "/assets/music/bg_musicApp_1.mp3";

const AudioContext = createContext<ReturnType<typeof useAudioPlayer> | null>(null);

export function AudioProvider({ children }: { children: React.ReactNode }) {
  const audioRef = useRef<HTMLAudioElement>(null);

  const player = useAudioPlayer(audioRef);

  return (
    <AudioContext.Provider value={player}>
      <audio ref={audioRef} preload="auto" loop src={bg_musicApp} />

      {children}
    </AudioContext.Provider>
  );
}

export function useAudio() {
  const context = useContext(AudioContext);

  if (!context) {
    throw new Error("useAudio must be used inside AudioProvider");
  }

  return context;
}
