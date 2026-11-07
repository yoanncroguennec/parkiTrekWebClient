import type { GetSliderOptionsProps, SliderOption } from "../types";

import {
  zoomOptions,
  timeoutOptions,
} from "../constants";

export const getSliderOptions = ({
  zoom,
  timeout,
  setSettings,
  setTimeout,
}: GetSliderOptionsProps): SliderOption[] => [
  {
    id: "zoom",
    label: "Zoom",
    value: zoom,
    marks: zoomOptions,
    min: 100,
    max: 200,
    onChange: (value) =>
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