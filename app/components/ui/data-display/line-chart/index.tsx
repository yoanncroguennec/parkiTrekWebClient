"use client";

import { ResponsiveLine } from "@nivo/line";
import { useMediaQuery, useTheme } from "@mui/material";

// STYLES
import {
  ChartContainer,
  LineTooltip,
  LineTooltipLabel,
  LineTooltipValue,
} from "./LineChart.Styles";

export interface LineChartDataPoint {
  x: string | number;
  y: number;
}

export interface LineChartData {
  id: string;
  data: LineChartDataPoint[];
}

interface LineChartProps {
  data: LineChartData[];
  yMax?: number;
  yTickValues?: number[];
  yUnit?: string;
  color?: string;
}

export default function LineChart({
  data,
  yMax = 450,
  yTickValues = [0, 50, 100, 150, 200, 250, 300, 350, 400, 450],
  yUnit = "km",
  color = "#8B5CF6",
}: LineChartProps) {
  const theme = useTheme();

  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <ChartContainer>
      <ResponsiveLine
        data={data}

        margin={{
          top: 40,
          right: 40,
          bottom: 70,
          left: 40,
        }}

        xScale={{
          type: "point",
        }}

        yScale={{
          type: "linear",
          min: 0,
          max: yMax,
          stacked: false,
          reverse: false,
        }}

        curve="monotoneX"

        enableGridX={false}
        enableGridY

        enableArea
        areaOpacity={0.08}

        lineWidth={2}

        colors={[color]}

        pointSize={0}
        pointBorderWidth={0}
        enablePoints

        useMesh
        enableCrosshair={false}

        animate={isDesktop}

        motionConfig={
          isDesktop
            ? {
                mass: 1,
                tension: 120,
                friction: 20,
              }
            : undefined
        }

        axisTop={null}
        axisRight={null}

        axisBottom={{
          tickSize: 0,
          tickPadding: 18,
          tickRotation: 0,
        }}

        axisLeft={{
          tickValues: yTickValues,
          tickSize: 0,
          tickPadding: 12,
          format: (value) => `${value} ${yUnit}`,
        }}

        theme={{
          text: {
            fontSize: 11,
          },

          grid: {
            line: {
              stroke: "rgba(0,0,0,0.07)",
              strokeWidth: 1,
            },
          },

          axis: {
            ticks: {
              text: {
                fill: "rgba(0,0,0,0.4)",
                fontSize: 10,
              },
            },
          },
        }}

        tooltip={
          isDesktop
            ? ({ point }) => (
                <LineTooltip>
                  <LineTooltipLabel>{point.data.xFormatted}</LineTooltipLabel>

                  <LineTooltipValue>
                    {point.data.y} {yUnit}
                  </LineTooltipValue>
                </LineTooltip>
              )
            : undefined
        }
      />
    </ChartContainer>
  );
}
