"use client";

import { useRef } from "react";
import { Box } from "@mui/material";
// HOOKS
import { useMapHeaderStatsAnimation } from "../../hooks/useMapHeaderStatsAnimation";
// STYLES
import {
  CardContainer,
  DistanceContainer,
  Unit,
  Value,
  LegendColor,
  LegendLabel,
  LegendItem,
  Label,
  LegendList,
  ProgressFill,
  ProgressTrack,
} from "./HeaderStats.Styles";

// DATAS
const data_Legend = [
  {
    bgColor: "#22c55e",
    textColor: "#22c55e",
    textLegend: "Département parcourus",
  },
  {
    bgColor: "#1E293B",
    textColor: "#1E293B",
    textLegend: "Département non parcourus",
  },
];

type Props = {
  totalKm: number;
  progressKm: number;
};

export default function HeaderStats({ totalKm, progressKm }: Props) {
  const statsRef = useRef<HTMLDivElement>(null);

  useMapHeaderStatsAnimation({
    statsRef,
    totalKm,
    progressKm: progressKm,
  });

  return (
    <CardContainer ref={statsRef} className="hero-stats">
      <DistanceContainer className="hero-km-container">
        <Value className="hero-km">{totalKm}</Value>

        <Box>
          <Unit>KM</Unit>
          <Label>parcourus</Label>
        </Box>
      </DistanceContainer>

      <ProgressTrack>
        <ProgressFill className="hero-progress" progress={progressKm}>
          <Box className="hero-progress-shine" />
        </ProgressFill>
      </ProgressTrack>

      <LegendList>
        {data_Legend.map(({ bgColor, textColor, textLegend }) => (
          <LegendItem key={textLegend}>
            <LegendColor bgColor={bgColor} />
            <LegendLabel textColor={textColor}>{textLegend}</LegendLabel>
          </LegendItem>
        ))}
      </LegendList>
    </CardContainer>
  );
}
