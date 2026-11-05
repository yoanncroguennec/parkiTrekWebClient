"use client";

import { RefObject } from "react";
import { Stack, useMediaQuery, useTheme } from "@mui/material";

// COMPONENTS
import {
  Hero,
  Filters,
  DesktopSportSection,
  MobileSportsSwiperSection,
  AutoScrollingText,
  CTA,
} from "./sections";

interface SportsTrainingSectionProps {
  sportsRef: RefObject<HTMLDivElement | null>;
}

export default function SportsTrainingSection({
  sportsRef,
}: SportsTrainingSectionProps) {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Stack ref={sportsRef} spacing={2}>
      <Hero />
      <Filters />

      {isDesktop ? <DesktopSportSection /> : <MobileSportsSwiperSection />}

      <AutoScrollingText />
      <CTA />
    </Stack>
  );
}
