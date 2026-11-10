import type { AccessibilitySettings, Option } from "../types";

// -----------------------------------------------------------------------------
// DEFAULT SETTINGS
// -----------------------------------------------------------------------------

export const DEFAULT_ZOOM = 100;

export const DEFAULT_SETTINGS: AccessibilitySettings = {
  seniorMode: false,
  zoom: DEFAULT_ZOOM,
  reduceMotion: false,
  highContrast: false,
};

// -----------------------------------------------------------------------------
// ZOOM OPTIONS
// -----------------------------------------------------------------------------

export const zoomOptions: Option[] = [
  { value: 100, label: "100%" },
  { value: 125, label: "125%" },
  { value: 150, label: "150%" },
  { value: 175, label: "175%" },
  { value: 200, label: "200%" },
];

// -----------------------------------------------------------------------------
// TIMEOUT OPTIONS
// -----------------------------------------------------------------------------

export const timeoutOptions: Option[] = [
  { value: 60000, label: "1 min" },
  { value: 300000, label: "5 min" },
  { value: 1800000, label: "30 min" },
  { value: 3600000, label: "1 h" },
];

// -----------------------------------------------------------------------------
// SWITCH OPTIONS
// -----------------------------------------------------------------------------

export const switchOptions = [
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
] as const;
