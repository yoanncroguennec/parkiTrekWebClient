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
import { getSliderOptions, switchOptions } from "./data/AccessibilitySettings.Data";

import type { AccessibilitySettings } from "../../..";

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
  const { zoom } = settings;

  const sliderOptions = getSliderOptions({
    zoom,
    timeout,
    setSettings,
    setTimeout,
  });

  return (
    <Fragment>
      <SectionTitle>Accessibilité</SectionTitle>

      <SettingsCard>
        <LanguageSwitcher />

        {/* SWITCHES */}
        {switchOptions.map(({ key, label }) => (
          <Stack
            key={key}
            sx={{
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <FormControlLabel
              control={
                <Switch
                  checked={settings[key]}
                  onChange={(event) =>
                    setSettings((prev) => ({
                      ...prev,
                      [key]: event.target.checked,
                    }))
                  }
                  sx={{
                    "& .MuiSwitch-switchBase.Mui-checked": {
                      color: "#22c55e",
                    },

                    "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                      backgroundColor: "#22c55e",
                      opacity: 1,
                    },

                    "& .MuiSwitch-track": {
                      backgroundColor: "rgba(0, 0, 0, 0.25)",
                      opacity: 1,
                    },
                  }}
                />
              }
              label={label}
            />

            {key === "highContrast" && <ThemeSwitcher />}
          </Stack>
        ))}

        {/* SLIDERS */}
        {sliderOptions.map((slider) => (
          <SliderSelect
            key={slider.id}
            label={slider.label}
            value={slider.value}
            marks={slider.marks}
            min={slider.min}
            max={slider.max}
            step={null}
            onChange={slider.onChange}
          />
        ))}
      </SettingsCard>
    </Fragment>
  );
}
