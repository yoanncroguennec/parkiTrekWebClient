import type { Dispatch, SetStateAction } from "react";

export interface AccessibilitySettings {
  seniorMode: boolean;
  zoom: number;
  reduceMotion: boolean;
  highContrast: boolean;
}

export interface Option {
  value: number;
  label: string;
}

export interface SliderOption {
  id: string;
  label: string;
  value: number;
  marks: Option[];
  min: number;
  max: number;
  onChange: (value: number) => void;
}

export interface GetSliderOptionsProps {
  zoom: number;
  timeout: number;
  setSettings: Dispatch<SetStateAction<AccessibilitySettings>>;
  setTimeout: (value: number) => void;
}