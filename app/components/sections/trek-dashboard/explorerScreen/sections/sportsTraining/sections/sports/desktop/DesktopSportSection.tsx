"use client";

import { useState } from "react";
import { Box } from "@mui/material";

import { sportsTrainingSessions } from "../../../data";
import SportTrainingCard from "./components/SportTrainingCard";

export default function DesktopSportSection() {
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
            <SportTrainingCard
              key={`${item.sport}-${index}`}
              item={item}
              isHovered={hoveredIndex === index}
              isRowExpanded={hoveredIndex !== null && currentRow === hoveredRow}
              onHover={() => setHoveredIndex(index)}
              onLeave={() => setHoveredIndex(null)}
            />
          );
        })}
      </Box>
    </Box>
  );
}
