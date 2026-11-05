"use client";

import { MutableRefObject, RefObject } from "react";

import { Stack } from "@mui/material";

import { dashboardCards } from "./data/data.dashboardCards";

interface DashboardSectionProps {
  dashboardRef: RefObject<HTMLDivElement | null>;

  dashboardCardRefs: MutableRefObject<(HTMLDivElement | null)[]>;
}

export default function DashboardSection({
  dashboardRef,
  dashboardCardRefs,
}: DashboardSectionProps) {
  return (
    <Stack
      ref={dashboardRef}
      sx={{
        display: "grid",

        gridTemplateColumns: {
          xs: "1fr",
          md: "repeat(2, minmax(0, 1fr))",
        },

        gap: {
          md: 2.5,
        },
      }}
    >
      {dashboardCards.map((card, index) => (
        <Stack
          key={card.id}
          ref={(element) => {
            dashboardCardRefs.current[index] = element;
          }}
          sx={{
            alignItems: "center",
            justifyContent: "center",

            ...(card.bordered && {
              border: "4px solid #000",
              borderRadius: "35px",
            }),
          }}
        >
          {card.component}
        </Stack>
      ))}
    </Stack>
  );
}
