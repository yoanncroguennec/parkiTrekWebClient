"use client";

import { Dispatch, Fragment, SetStateAction } from "react";
import { FormControlLabel, Stack, Switch } from "@mui/material";
// UI
import {
  LanguageSwitcher,
  ThemeSwitcher,
  SliderSelect,
  SectionTitle,
  SettingsCard,
} from "@/app/components/ui";
// DATAS
import { AccessibilitySettings } from "../../content";
import {
  timeoutOptions,
  zoomOptions,
} from "../../content/components/sections/accessibilitySettings/data/AccessibilitySettings.Data";
// TYPES

// -----------------------------------------------------------------------------
// Types
// -----------------------------------------------------------------------------
interface Props {
  settings: AccessibilitySettings;
  setSettings: Dispatch<SetStateAction<AccessibilitySettings>>;
  timeout: number;
  setTimeout: (value: number) => void;
}

export default function AccessibilitySettingsSection({
  settings,
  setSettings,
  timeout,
  setTimeout,
}: Props) {
  const { seniorMode, zoom, reduceMotion, highContrast } = settings;
  return (
    <Fragment>
      <SectionTitle>Accessibilité</SectionTitle>

      <SettingsCard>
        <LanguageSwitcher />

        <FormControlLabel
          control={
            <Switch
              checked={seniorMode}
              onChange={(e) =>
                setSettings((prev) => ({
                  ...prev,
                  seniorMode: e.target.checked,
                }))
              }
            />
          }
          label="Mode senior"
        />

        <FormControlLabel
          control={
            <Switch
              checked={reduceMotion}
              onChange={(e) =>
                setSettings((prev) => ({
                  ...prev,
                  reduceMotion: e.target.checked,
                }))
              }
            />
          }
          label="Réduire les animations"
        />

        <Stack
          sx={{
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <FormControlLabel
            control={
              <Switch
                checked={highContrast}
                onChange={(e) =>
                  setSettings((prev) => ({
                    ...prev,
                    highContrast: e.target.checked,
                  }))
                }
              />
            }
            label="Contraste élevé"
          />

          <ThemeSwitcher />
        </Stack>

        <SliderSelect
          label="Zoom"
          value={zoom}
          marks={zoomOptions}
          min={75}
          max={200}
          step={null}
          onChange={(value) =>
            setSettings((prev) => ({
              ...prev,
              zoom: value,
            }))
          }
        />

        <SliderSelect
          label="Écran de veille"
          value={timeout}
          marks={timeoutOptions}
          min={60000}
          max={3600000}
          step={null}
          onChange={setTimeout}
        />
      </SettingsCard>
    </Fragment>
  );
}
