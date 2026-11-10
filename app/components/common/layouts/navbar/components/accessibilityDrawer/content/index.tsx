"use client";

import { useEffect, useState } from "react";
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
import { AccessibilitySettings } from "./components/accessibilitySettings/types";
import { DEFAULT_SETTINGS } from "./components/accessibilitySettings/constants";

export default function Content() {
  // HOOKS
  const { timeout, setTimeout } = useIdleTimeout();

  // AUDIO PROVIDER
  const { isPlaying, volume, togglePlay, handleVolumeChange } = useAudio();

  // ---------------------------------------------------------------------------
  // STATE
  // ---------------------------------------------------------------------------

  const [settings, setSettings] = useState<AccessibilitySettings>(() => {
    return getLocalStorage(STORAGE_KEYS.accessibility, DEFAULT_SETTINGS);
  });

  // ---------------------------------------------------------------------------
  // EFFECTS
  // ---------------------------------------------------------------------------

  useEffect(() => {
    document.documentElement.style.fontSize = `${settings.zoom}%`;

    setLocalStorage(STORAGE_KEYS.accessibility, settings);
  }, [settings]);

  // ---------------------------------------------------------------------------
  // RESET
  // ---------------------------------------------------------------------------

  function handleReset() {
    clearAppLocalStorage();

    setSettings(DEFAULT_SETTINGS);
  }

  // ---------------------------------------------------------------------------
  // RENDER
  // ---------------------------------------------------------------------------

  return (
    <DrawerContent>
      <LocalClock />

      <Divider />

      {/* ACCESSIBILITY SETTINGS */}
      <AccessibilitySettingsSection
        settings={settings}
        setSettings={setSettings}
        timeout={timeout}
        setTimeout={setTimeout}
      />

      <Divider />

      {/* AUDIO SETTINGS */}
      <AudioSection
        isPlaying={isPlaying}
        volume={volume}
        togglePlay={togglePlay}
        handleVolumeChange={handleVolumeChange}
      />

      {/* RESET SETTINGS */}
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
