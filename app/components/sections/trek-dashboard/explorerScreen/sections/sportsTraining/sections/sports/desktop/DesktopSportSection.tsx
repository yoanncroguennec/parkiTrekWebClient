"use client";

import { useState, RefObject } from "react";
import { Box } from "@mui/material";

import { sportsTrainingSessions } from "../../../data";
import SportTrainingCard from "./components/SportTrainingCard";

interface DesktopSportSectionProps {
  sportsCardRefs: RefObject<(HTMLDivElement | null)[]>;
}

export default function DesktopSportSection({
  sportsCardRefs,
}: DesktopSportSectionProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const cardsPerRow = 3;

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        boxSizing: "border-box",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "1100px",
          display: "grid",
          gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
          gap: 2,
          alignItems: "start",
          boxSizing: "border-box",
        }}
      >
        {sportsTrainingSessions.map((item, index) => {
          const currentRow = Math.floor(index / cardsPerRow);

          const hoveredRow =
            hoveredIndex !== null
              ? Math.floor(hoveredIndex / cardsPerRow)
              : null;

          return (
            <Box
              key={`${item.sport}-${index}`}
              ref={(element: HTMLDivElement | null) => {
                sportsCardRefs.current[index] = element;
              }}
            >
              <SportTrainingCard
                item={item}
                isHovered={hoveredIndex === index}
                isRowExpanded={
                  hoveredIndex !== null && currentRow === hoveredRow
                }
                onHover={() => setHoveredIndex(index)}
                onLeave={() => setHoveredIndex(null)}
              />
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}