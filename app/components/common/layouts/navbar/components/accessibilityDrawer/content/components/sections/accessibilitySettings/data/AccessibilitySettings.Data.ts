import type { Dispatch, SetStateAction } from "react";

import type { AccessibilitySettings } from "../../../..";

export type Option = {
  value: number;
  label: string;
};

export const zoomOptions: Option[] = [
  { value: 100, label: "100%" },
  { value: 125, label: "125%" },
  { value: 150, label: "150%" },
  { value: 175, label: "175%" },
  { value: 200, label: "200%" },
];

export const timeoutOptions: Option[] = [
  { value: 60000, label: "1 min" },
  { value: 300000, label: "5 min" },
  { value: 1800000, label: "30 min" },
  { value: 3600000, label: "1 h" },
];

export const switchOptions: {
  key: keyof Pick<AccessibilitySettings, "seniorMode" | "reduceMotion" | "highContrast">;
  label: string;
}[] = [
  {
    key: "seniorMode",
    label: "Mode senior",
  },
  {
    key: "reduceMotion",
    label: "Réduire les animations",
  },
  {
    key: "highContrast",
    label: "Contraste élevé",
  },
];

type GetSliderOptionsProps = {
  zoom: number;
  timeout: number;
  setSettings: Dispatch<SetStateAction<AccessibilitySettings>>;
  setTimeout: (value: number) => void;
};

export const getSliderOptions = ({
  zoom,
  timeout,
  setSettings,
  setTimeout,
}: GetSliderOptionsProps) => [
  {
    id: "zoom",
    label: "Zoom",
    value: zoom,
    marks: zoomOptions,
    min: 100,
    max: 200,
    onChange: (value: number) =>
      setSettings((prev) => ({
        ...prev,
        zoom: value,
      })),
  },
  {
    id: "idleTimeout",
    label: "Écran de veille",
    value: timeout,
    marks: timeoutOptions,
    min: 60000,
    max: 3600000,
    onChange: setTimeout,
  },
];
