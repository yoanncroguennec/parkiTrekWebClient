"use client";

import { RefObject } from "react";

import { Stack } from "@mui/material";
// LAYOUTS
import { ContainerApp } from "@/app/components/common/layouts";
// SECTIONS
import {
  CalendarSection,
  DashboardSection,
  HeaderSection,
  SportsTrainingSection,
  StatsSection,
  // TimelineSection,
} from "./sections";

interface ExplorerScreenProps {
  onBack: () => void;

  headerRef: RefObject<HTMLDivElement | null>;

  statsRef: RefObject<HTMLDivElement | null>;

  dashboardRef: RefObject<HTMLDivElement | null>;

  sportsRef: RefObject<HTMLDivElement | null>;

  timelineRef: RefObject<HTMLDivElement | null>;

  statCardRefs: RefObject<(HTMLDivElement | null)[]>;

  dashboardCardRefs: RefObject<(HTMLDivElement | null)[]>;

  sportsCardRefs: RefObject<(HTMLDivElement | null)[]>;

  timelineItemRefs: RefObject<(HTMLDivElement | null)[]>;
}

export default function ExplorerScreen({
  onBack,

  headerRef,
  statsRef,
  dashboardRef,

  sportsRef,
  // timelineRef,

  statCardRefs,
  dashboardCardRefs,
  sportsCardRefs,
  // timelineItemRefs,
}: ExplorerScreenProps) {
  return (
    <ContainerApp>
      <Stack
        spacing={5}
        sx={{
          backgroundColor: "#FCFBF8",
          padding: "100px 20px",
          width: "100%",
        }}
      >
        <HeaderSection onBack={onBack} headerRef={headerRef} />

        <StatsSection statsRef={statsRef} statCardRefs={statCardRefs} />

        <DashboardSection dashboardRef={dashboardRef} dashboardCardRefs={dashboardCardRefs} />

        <SportsTrainingSection sportsRef={sportsRef} sportsCardRefs={sportsCardRefs} />

        <CalendarSection />

        {/* <TimelineSection
          timelineRef={timelineRef}
          timelineItemRefs={timelineItemRefs}
        /> */}
      </Stack>
    </ContainerApp>
  );
}
