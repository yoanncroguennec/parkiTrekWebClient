// GOOD
"use client";

import { Dispatch, SetStateAction } from "react";
import { Drawer, useMediaQuery, useTheme } from "@mui/material";
// COMPONENTS
import {
  Gallery,
  Header,
  JournalBtn,
  JourneyHighlights,
  SponsorsCard,
  StatsCards,
  Timeline,
} from "./components";
// DATAS
import { Area } from "@/app/utils/constants/data/treks/map/data";
import { trekHighlights, trekSponsors, trekSteps } from "./data/MapAreaDrawer.data";
import EmptyState from "@/app/components/common/emptyState";

type Props = {
  selectedArea: Area | null;
  setSelectedArea: Dispatch<SetStateAction<Area | null>>;
};

export default function MapAreaDrawer({ selectedArea, setSelectedArea }: Props) {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  const hasTrekData = (selectedArea?.km ?? 0) > 0;

  return (
    <Drawer
      anchor="right"
      open={!!selectedArea}
      onClose={() => setSelectedArea(null)}
      slotProps={{
        paper: {
          sx: {
            width: isDesktop ? "650px" : "85vw",
            background: "rgba(255,255,255,.82)",
            backdropFilter: "blur(30px)",
            WebkitBackdropFilter: "blur(30px)",
            borderLeft: "1px solid rgba(255,255,255,.4)",
            boxShadow: "0 40px 120px rgba(0,0,0,.12)",
            overflowX: "hidden",
            overflowY: "auto",
          },
        },
      }}
    >
      <Header
        departmentName={selectedArea?.name}
        departmentCode={selectedArea?.code}
        // image={`/images/departements/${selectedArea?.code}.webp`}
        onClose={() => setSelectedArea(null)}
        valueProgressRing={hasTrekData ? 85 : 0}
      />

      {hasTrekData ? (
        <>
          <StatsCards
            km={selectedArea?.km ?? 0}
            days={selectedArea?.days ?? 0}
            stages={selectedArea?.stages ?? 0}
          />

          <Timeline trekSteps={trekSteps} />

          <Gallery />

          <SponsorsCard trekSponsors={trekSponsors} />

          <JourneyHighlights trekHighlights={trekHighlights} />

          <JournalBtn selectedArea={selectedArea} />
        </>
      ) : (
        <EmptyState
          title="Les chemins se dessinent..."
          description="Cette destination sera bientôt prête à être explorée."
        />
      )}
    </Drawer>
  );
}
