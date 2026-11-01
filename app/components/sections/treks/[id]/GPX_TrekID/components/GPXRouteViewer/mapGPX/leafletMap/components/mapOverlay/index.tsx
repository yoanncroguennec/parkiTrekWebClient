"use client";

import { useMediaQuery, useTheme } from "@mui/material";

import { LegendItem } from "./legendItem";

import {
  OverlayContainer,
  OverlayHeader,
  OverlayLabel,
  OverlayTitle,
  OverlayStats,
  ProgressContainer,
  ProgressBar,
} from "./MapOverlay.Styles";
import ScrollingText from "./scrollingText";
import MapControls from "../mapControls";

export type MapMode = "simple" | "satellite";

type Props = {
  totalKm: string;
  pointCount: number;
  progress: number;
  mapMode: MapMode;
  setMapMode: (mode: MapMode) => void;
};

export default function MapOverlay({
  totalKm,
  pointCount,
  progress,
  mapMode,
  setMapMode,
}: Props) {
  const theme = useTheme();

  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <OverlayContainer>
      {isDesktop ? (
        <>
          <OverlayHeader>
            <OverlayLabel>PARKI TREK</OverlayLabel>

            <OverlayTitle variant="h4">Entre terre et mer</OverlayTitle>
          </OverlayHeader>
          <OverlayStats>
            <LegendItem color="#B4FF39" text={`${totalKm} km`} />

            <LegendItem color="#22d3ee" text={`${pointCount} points`} />
          </OverlayStats>
        </>
      ) : (
        <OverlayStats>
          <ScrollingText text="Texte défilant" duration={4} pause={2} />
          <LegendItem color="#B4FF39" text={`${totalKm} km`} />
          <MapControls mobile mapMode={mapMode} onChange={setMapMode} />
        </OverlayStats>
      )}

      <ProgressContainer>
        <ProgressBar progress={progress} />
      </ProgressContainer>
    </OverlayContainer>
  );
}
