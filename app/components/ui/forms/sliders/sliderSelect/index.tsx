"use client";

import React from "react";
import { Slider, SliderProps, Stack, Typography } from "@mui/material";

const sliderColor = "#22c55e";

export interface SliderOption {
  value: number;
  label: string;
}

interface SliderSelectProps {
  label: string;
  value: number;
  onChange: (value: number) => void;

  icon?: React.ReactNode;
  helperText?: string;

  valueLabelDisplay?: SliderProps["valueLabelDisplay"];

  min?: number;
  max?: number;
  step?: number | null;
  marks?: SliderOption[] | boolean;

  formatValue?: (value: number) => string;

  sliderColor?: string;
}

export default function SliderSelect({
  label,
  value,
  onChange,

  min = 0,
  max = 100,
  step = 1,
  marks = false,

  formatValue,

  valueLabelDisplay = "off",
}: SliderSelectProps) {
  const isDiscrete = Array.isArray(marks) && step === null;

  /*
   * --------------------------------------------------------------------------
   * Position visuelle
   * --------------------------------------------------------------------------
   *
   * Exemple :
   *
   * [
   *   60000,
   *   120000,
   *   300000,
   *   600000,
   *   ...
   * ]
   *
   * devient :
   *
   * [
   *   0,
   *   1,
   *   2,
   *   3,
   *   ...
   * ]
   *
   * afin que chaque mark soit équidistant.
   */
  const sliderValue = isDiscrete
    ? Math.max(
        0,
        marks.findIndex((mark) => mark.value === value)
      )
    : value;

  const sliderMarks = isDiscrete
    ? marks.map((mark, index) => ({
        value: index,
        label: mark.label,
      }))
    : marks;

  const displayValue = formatValue
    ? formatValue(value)
    : Array.isArray(marks)
      ? (marks.find((mark) => mark.value === value)?.label ?? value)
      : value;

  const handleChange = (_: Event, newValue: number | number[]) => {
    if (typeof newValue !== "number") {
      return;
    }

    if (isDiscrete) {
      const selectedOption = marks[newValue];

      if (selectedOption) {
        onChange(selectedOption.value);
      }

      return;
    }

    onChange(newValue);
  };

  return (
    <Stack
      spacing={2.5}
      sx={{
        margin: "20px 0",
      }}
    >
      <Stack
        sx={{
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Typography
          sx={{
            fontWeight: 600,
          }}
        >
          {label}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {displayValue}
        </Typography>
      </Stack>

      <Slider
        value={sliderValue}
        min={isDiscrete ? 0 : min}
        max={isDiscrete ? marks.length - 1 : max}
        step={isDiscrete ? 1 : step}
        marks={sliderMarks}
        valueLabelDisplay={valueLabelDisplay}
        onChange={handleChange}
        sx={{
          color: sliderColor,

          "& .MuiSlider-thumb": {
            backgroundColor: sliderColor,
          },

          "& .MuiSlider-track": {
            backgroundColor: sliderColor,
          },

          "& .MuiSlider-rail": {
            backgroundColor: "rgba(0, 0, 0, 0.35)",
          },

          "& .MuiSlider-mark": {
            width: 3,
            height: 3,
            borderRadius: "50%",
            backgroundColor: sliderColor,
          },

          "& .MuiSlider-markActive": {
            backgroundColor: sliderColor,
          },

          "& .MuiSlider-markLabel": {
            color: "rgba(0, 0, 0, 1)",
            whiteSpace: "nowrap",
          },
        }}
      />
    </Stack>
  );
}
