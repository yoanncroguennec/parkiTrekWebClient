"use client";

import { useEffect, useMemo, useRef } from "react";
import { Box, keyframes, MenuItem } from "@mui/material";
import gsap from "gsap";
//
import { StatCard } from "./elevationChart/statCard";
import { GlassButton } from "./elevationChart/glassButton";
import ChartContainer from "./chartContainer";
// TYPES
import type { GPXViewerProps } from "../../../types/gpxViewer";
// ICONS
import { IoClose } from "@/app/utils/constants/icons";
// STYLES
import {
  InfoOverlay,
  InfoOverlayHeader,
  InfoOverlayClose,
  InfoOverlayBody,
  InfoOverlayLeft,
  InfoOverlayControls,
  StatsGrid,
  SpeedSelect,
  PulseGlow,
} from "./MapInfoOverlay.Styles";

export type MapInfoOverlayProps = GPXViewerProps & {
  open: boolean;
  onClose: () => void;
  onReset: () => void;
  totalKm: string;
  pointCount: number;
};

const float = keyframes`
  0% {
    transform: translate(0px, 0px);
  }

  50% {
    transform: translate(-60px, 40px);
  }

  100% {
    transform: translate(0px, 0px);
  }
`;

export default function MapInfoOverlay({
  open,
  onClose,

  points,

  totalKm,
  pointCount,

  currentIndex,
  setCurrentIndex,

  isPlaying,
  setIsPlaying,

  speed,
  setSpeed,

  onReset,
}: MapInfoOverlayProps) {
  const pulseRef = useRef<HTMLDivElement>(null);

  /*
   * Préparation des données GPX
   */
  const data = useMemo(
    () =>
      points.map((point, index) => ({
        index,
        ele: point.ele ?? 0,
        dist: point.dist ?? 0,
      })),
    [points]
  );

  /*
   * Altitude maximale
   */
  const maxElevation =
    data.length > 0 ? Math.max(...data.map((point) => point.ele)).toFixed(0) : "0";

  /*
   * Animation du glow
   */
  useEffect(() => {
    if (!pulseRef.current) {
      return;
    }

    const animation = gsap.to(pulseRef.current, {
      scale: 1.8,
      opacity: 0,
      duration: 1.8,
      ease: "power2.out",
      repeat: -1,
    });

    return () => {
      animation.kill();
    };
  }, []);

  return (
    <InfoOverlay open={open}>
      {/* =====================================
          GLOW DÉCORATIF
      ===================================== */}

      <Box
        sx={{
          position: "absolute",

          top: -200,
          right: -150,

          width: 450,
          height: 450,

          borderRadius: "50%",

          background: "rgba(180,255,57,.08)",

          filter: "blur(140px)",

          animation: `${float} 12s ease-in-out infinite`,

          pointerEvents: "none",
        }}
      />

      {/* =====================================
          HEADER
      ===================================== */}

      <InfoOverlayHeader>
        <InfoOverlayClose onClick={onClose} aria-label="Fermer les informations">
          <IoClose />
        </InfoOverlayClose>
      </InfoOverlayHeader>

      {/* =====================================
          CONTENU PRINCIPAL
      ===================================== */}

      <InfoOverlayBody>
        {/* =====================================
            COLONNE GAUCHE
        ===================================== */}

        <InfoOverlayLeft>
          {/* Contrôles */}

          <InfoOverlayControls>
            <GlassButton onClick={() => setIsPlaying(!isPlaying)}>
              {isPlaying ? "⏸ Pause" : "▶ Lecture"}
            </GlassButton>

            <GlassButton onClick={onReset}>⟲ Réinitialiser</GlassButton>
            <SpeedSelect
              value={speed}
              size="small"
              onChange={(event) => setSpeed(Number(event.target.value))}
            >
              <MenuItem value={0.5}>0.5x</MenuItem>

              <MenuItem value={1}>1x</MenuItem>

              <MenuItem value={2}>2x</MenuItem>

              <MenuItem value={4}>4x</MenuItem>
            </SpeedSelect>
          </InfoOverlayControls>

          {/* Statistiques */}

          <StatsGrid>
            <StatCard title="Distance" value={`${totalKm} km`} />

            <StatCard title="Altitude max" value={`${maxElevation} m`} />

            <StatCard title="Progression" value={`${currentIndex}/${pointCount}`} />
          </StatsGrid>
        </InfoOverlayLeft>

        {/* =====================================
            GRAPHIQUE À DROITE
        ===================================== */}

        <ChartContainer data={data} currentIndex={currentIndex} onHover={setCurrentIndex} />
      </InfoOverlayBody>

      {/* =====================================
          GLOW PULSE
      ===================================== */}

      <PulseGlow ref={pulseRef} />
    </InfoOverlay>
  );
}
