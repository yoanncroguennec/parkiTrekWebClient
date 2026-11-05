"use client";

import { RefObject, useCallback, useEffect, useState } from "react";

import {
  getLocalStorage,
  setLocalStorage,
  STORAGE_KEYS,
} from "@/app/utils/constants/storage/localStorage";

import {
  AudioSettings,
  DEFAULT_AUDIO_SETTINGS,
  isValidAudioSettings,
} from "@/app/utils/constants/storage/audioStorage";

export default function useAudioPlayer(audioRef: RefObject<HTMLAudioElement | null>) {
  // ---------------------------------------------------------------------------
  // Initialisation depuis le localStorage
  // ---------------------------------------------------------------------------

  const [isPlaying, setIsPlaying] = useState<boolean>(() => {
    const stored = getLocalStorage<unknown>(STORAGE_KEYS.audio, DEFAULT_AUDIO_SETTINGS);

    if (isValidAudioSettings(stored)) {
      return stored.isPlaying;
    }

    return DEFAULT_AUDIO_SETTINGS.isPlaying;
  });

  const [volume, setVolume] = useState<number>(() => {
    const stored = getLocalStorage<unknown>(STORAGE_KEYS.audio, DEFAULT_AUDIO_SETTINGS);

    if (isValidAudioSettings(stored)) {
      return stored.volume;
    }

    return DEFAULT_AUDIO_SETTINGS.volume;
  });

  const [showVolumeSlider, setShowVolumeSlider] = useState(false);

  // ---------------------------------------------------------------------------
  // Fade audio
  // ---------------------------------------------------------------------------

  const fadeAudio = useCallback(
    (
      audio: HTMLAudioElement,
      from: number,
      to: number,
      duration: number,
      callback?: () => void
    ) => {
      const stepTime = 50;
      const steps = duration / stepTime;
      const volumeStep = (to - from) / steps;

      let currentStep = 0;

      audio.volume = from;

      const interval = window.setInterval(() => {
        currentStep++;

        audio.volume = Math.min(Math.max(audio.volume + volumeStep, 0), 1);

        if (currentStep >= steps) {
          window.clearInterval(interval);

          audio.volume = to;

          callback?.();
        }
      }, stepTime);
    },
    []
  );

  // ---------------------------------------------------------------------------
  // Play / Pause
  // ---------------------------------------------------------------------------

  const togglePlay = useCallback(() => {
    const audio = audioRef.current;

    if (!audio) return;

    if (isPlaying) {
      fadeAudio(audio, audio.volume, 0, 500, () => {
        audio.pause();
        setIsPlaying(false);
      });

      return;
    }

    audio.volume = 0;

    audio
      .play()
      .then(() => {
        setIsPlaying(true);

        fadeAudio(audio, 0, volume, 500);
      })
      .catch(() => {
        // Le navigateur peut bloquer la lecture.
        // On ne force PAS isPlaying à false.
      });
  }, [audioRef, fadeAudio, isPlaying, volume]);

  // ---------------------------------------------------------------------------
  // Volume
  // ---------------------------------------------------------------------------

  const handleVolumeChange = useCallback(
    (value: number) => {
      const nextVolume = Math.min(Math.max(value, 0), 1);

      setVolume(nextVolume);

      const audio = audioRef.current;

      if (!audio) return;

      audio.volume = nextVolume;

      // Volume à 0 → pause
      if (nextVolume === 0) {
        audio.pause();
        setIsPlaying(false);
        return;
      }

      // Volume > 0 + musique arrêtée → tentative de lecture
      if (!isPlaying) {
        audio
          .play()
          .then(() => {
            setIsPlaying(true);
          })
          .catch(() => {
            // Autoplay bloqué.
          });
      }
    },
    [audioRef, isPlaying]
  );

  // ---------------------------------------------------------------------------
  // Initialisation du lecteur
  // ---------------------------------------------------------------------------

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    audio.volume = volume;

    // Tentative de lecture automatique
    if (isPlaying && volume > 0) {
      audio.play().catch(() => {
        // Le navigateur bloque l'autoplay.
        // On conserve isPlaying = true.
      });
    }

    // -------------------------------------------------------------------------
    // Première interaction utilisateur
    // Permet de lancer la musique si l'autoplay a été bloqué.
    // -------------------------------------------------------------------------

    const tryPlayAfterInteraction = () => {
      if (!audio.paused) return;

      if (!isPlaying || volume <= 0) {
        return;
      }

      audio.play().catch(() => {
        // Le navigateur peut toujours refuser la lecture.
      });
    };

    window.addEventListener("pointerdown", tryPlayAfterInteraction, {
      once: true,
    });

    window.addEventListener("keydown", tryPlayAfterInteraction, { once: true });

    window.addEventListener("touchstart", tryPlayAfterInteraction, {
      once: true,
    });

    return () => {
      audio.pause();

      window.removeEventListener("pointerdown", tryPlayAfterInteraction);

      window.removeEventListener("keydown", tryPlayAfterInteraction);

      window.removeEventListener("touchstart", tryPlayAfterInteraction);
    };
  }, [audioRef, isPlaying, volume]);

  // ---------------------------------------------------------------------------
  // Synchronisation du volume avec l'élément audio
  // ---------------------------------------------------------------------------

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    audio.volume = volume;
  }, [audioRef, volume]);

  // ---------------------------------------------------------------------------
  // Sauvegarde dans le localStorage
  // ---------------------------------------------------------------------------

  useEffect(() => {
    const settings: AudioSettings = {
      isPlaying,
      volume,
    };

    setLocalStorage(STORAGE_KEYS.audio, settings);
  }, [isPlaying, volume]);

  // ---------------------------------------------------------------------------
  // Reset global
  // ---------------------------------------------------------------------------

  useEffect(() => {
    const handleReset = () => {
      const audio = audioRef.current;

      if (audio) {
        audio.pause();
        audio.volume = DEFAULT_AUDIO_SETTINGS.volume;
      }

      setIsPlaying(DEFAULT_AUDIO_SETTINGS.isPlaying);

      setVolume(DEFAULT_AUDIO_SETTINGS.volume);

      setShowVolumeSlider(false);
    };

    window.addEventListener("app-storage-reset", handleReset);

    return () => {
      window.removeEventListener("app-storage-reset", handleReset);
    };
  }, [audioRef]);

  return {
    isPlaying,
    volume,
    showVolumeSlider,
    setShowVolumeSlider,
    togglePlay,
    handleVolumeChange,
  };
}
