"use client";

import { useEffect, useMemo, useState } from "react";
import { Divider } from "@mui/material";
// UI
import { PrimaryButton } from "@/app/components/ui";
// COMPONENTS
import { AccessibilitySettingsSection, AudioSection, LocalClock } from "./components";
// HOOKS
import { useIdleTimeout } from "@/app/hooks";
// PROVIDERS
import { useAudio } from "@/app/utils/providers";
// ICONS
import { RiResetLeftFill } from "@/app/utils/constants/icons";
// STORAGES
import {
  clearAppLocalStorage,
  getLocalStorage,
  setLocalStorage,
  STORAGE_KEYS,
} from "@/app/utils/constants/storage/localStorage";
// STYLES
import { DrawerContent } from "../AccessibilityDrawerContent.Styles";

export const DEFAULT_ZOOM = 100;

// -----------------------------------------------------------------------------
// Types
// -----------------------------------------------------------------------------
export interface AccessibilitySettings {
  seniorMode: boolean;
  zoom: number;
  reduceMotion: boolean;
  highContrast: boolean;
  idleTimeout: number;
}

export default function AccessibilityDrawerContent() {
  // Hooks
  const { timeout, setTimeout, DEFAULT_TIMEOUT } = useIdleTimeout();
  // Providers
  const { isPlaying, volume, togglePlay, handleVolumeChange } = useAudio();

  // ---------------------------------------------------------------------------
  // Default settings
  // --------------------------------------------------------------------------
  const createDefaultSettings = (timeout: number): AccessibilitySettings => ({
    seniorMode: false,
    zoom: DEFAULT_ZOOM,
    reduceMotion: false,
    highContrast: false,
    idleTimeout: timeout,
  });

  const DEFAULT_SETTINGS = useMemo(() => createDefaultSettings(DEFAULT_TIMEOUT), [DEFAULT_TIMEOUT]);

  // ---------------------------------------------------------------------------
  // State
  // ---------------------------------------------------------------------------
  const [settings, setSettings] = useState<AccessibilitySettings>(() => {
    return getLocalStorage(STORAGE_KEYS.accessibility, DEFAULT_SETTINGS);
  });

  // ---------------------------------------------------------------------------
  // Effects
  // ---------------------------------------------------------------------------
  // ---------------------------------------------------------------------------
  // Synchronise les paramètres d'accessibilité
  // - Applique le niveau de zoom à l'application
  // - Sauvegarde les préférences dans le localStorage
  // ---------------------------------------------------------------------------
  useEffect(() => {
    document.documentElement.style.fontSize = `${settings.zoom}%`;

    setLocalStorage(STORAGE_KEYS.accessibility, settings);
  }, [settings]);

  function handleReset() {
    clearAppLocalStorage();
    setSettings(DEFAULT_SETTINGS);
  }

  return (
    <DrawerContent>
      <LocalClock />

      <Divider />

      {/* Paramètres d'accessibilité */}
      <AccessibilitySettingsSection
        settings={settings}
        setSettings={setSettings}
        timeout={timeout}
        setTimeout={setTimeout}
      />

      <Divider />

      {/* Paramètres audio */}
      <AudioSection
        isPlaying={isPlaying}
        volume={volume}
        togglePlay={togglePlay}
        handleVolumeChange={handleVolumeChange}
      />

      {/* Réinitialisation */}
      <PrimaryButton
        buttons={[
          {
            icon: RiResetLeftFill,
            text: "Restaurer les paramètres",
            variant: "contained",
            background: "linear-gradient(90deg, #22c55e, #84cc16)",
            boxShadow: "0 15px 35px rgba(34,197,94,.35)",
            backgroundHover: "linear-gradient(90deg, #22c55e, #84cc16)",
            onClick: handleReset,
          },
        ]}
      />
    </DrawerContent>
  );
}
