"use client";

import { ResponsivePie } from "@nivo/pie";
import { useMediaQuery, useTheme } from "@mui/material";

// STYLES
import {
  DonutChartContainer,
  // DonutTooltip,
  // DonutTooltipLabel,
  // DonutTooltipValue,
  CenterContent,
  CenterValue,
  CenterLabel,
  CenterDescription,
} from "./Donut.Styles";

export interface DonutDataItem {
  id: string;
  label: string;
  value: number;
}

export interface DonutCenter {
  value: number;
  label: string;
  description: string;
}

interface DonutProps {
  data: DonutDataItem[];
  center?: DonutCenter;
  colors?: string[];
  width?: string | number;
  height?: string | number;
}

export default function Donut({
  data,
  center,
  colors = ["#8B5CF6", "#A78BFA", "#C4B5FD", "#EDE9FE"],
  width = "450px",
  height = "450px",
}: DonutProps) {
  const theme = useTheme();

  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <DonutChartContainer
      sx={{
        width,
        height,
      }}
    >
      <ResponsivePie
        data={data}
        margin={{
          top: 35,
          right: 35,
          bottom: 35,
          left: 35,
        }}

        innerRadius={isDesktop ? 0.72 : 0.68}

        padAngle={2.5}
        cornerRadius={12}

        activeOuterRadiusOffset={isDesktop ? 14 : 8}
        activeInnerRadiusOffset={isDesktop ? 3 : 0.68}

        borderWidth={0}

        enableArcLabels={!isDesktop}

        arcLabel={(datum) => `${datum.label} ${datum.value}%`}

        arcLabelsSkipAngle={8}
        arcLabelsRadiusOffset={0.65}

        arcLabelsTextColor="#FF0000"

        enableArcLinkLabels={false}

        colors={colors}

        animate={isDesktop}

        motionConfig={
          isDesktop
            ? {
                mass: 1,
                tension: 180,
                friction: 18,
              }
            : undefined
        }
      />

      {center && (
        <CenterContent>
          <CenterValue>{center.value}%</CenterValue>

          <CenterLabel>{center.label}</CenterLabel>

          <CenterDescription>{center.description}</CenterDescription>
        </CenterContent>
      )}
    </DonutChartContainer>
  );
}
