"use client";

import { useRef } from "react";

import {
  Area,
  CartesianGrid,
  Line,
  LineChart,
  ReferenceDot,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import type { MouseHandlerDataParam } from "recharts";

import { ChartWrapper, ChartTitle } from "./ChartContainer.Styles";

type ChartPoint = {
  index: number;
  ele: number;
  dist: number;
};

type Props = {
  data: ChartPoint[];
  currentIndex: number;
  onHover: (index: number) => void;
};

export default function ChartContainer({ data, currentIndex, onHover }: Props) {
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  return (
    <ChartWrapper>
      <ChartTitle>PROFIL D&apos;ÉLÉVATION</ChartTitle>

      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{
            top: 20,
            right: 20,
            left: 0,
            bottom: 5,
          }}
          onMouseMove={(state: MouseHandlerDataParam) => {
            if (timeout.current) {
              clearTimeout(timeout.current);
            }

            timeout.current = setTimeout(() => {
              if (typeof state.activeTooltipIndex === "number") {
                onHover(state.activeTooltipIndex);
              }
            }, 15);
          }}
        >
          <defs>
            <linearGradient id="elevationFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#B4FF39" stopOpacity={0.45} />

              <stop offset="60%" stopColor="#8BFF6A" stopOpacity={0.12} />

              <stop offset="100%" stopColor="#8BFF6A" stopOpacity={0} />
            </linearGradient>

            <filter id="elevationGlow">
              <feGaussianBlur stdDeviation="5" result="blur" />

              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <CartesianGrid stroke="rgba(255,255,255,.05)" vertical={false} />

          <XAxis
            dataKey="dist"
            stroke="#808080"
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => `${Number(value).toFixed(0)} km`}
          />

          <YAxis
            stroke="#808080"
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => `${value} m`}
          />

          <Tooltip
            contentStyle={{
              background: "rgba(15,15,15,.88)",
              border: "1px solid rgba(255,255,255,.08)",
              borderRadius: 20,
              backdropFilter: "blur(30px)",
              boxShadow: "0 25px 60px rgba(0,0,0,.45)",
              color: "#fff",
            }}
            labelFormatter={(value) => `${Number(value).toFixed(2)} km`}
            formatter={(value) => [`${Number(value).toFixed(1)} m`, "Altitude"]}
          />

          <Area type="monotone" dataKey="ele" stroke="none" fill="url(#elevationFill)" />

          <Line
            type="monotone"
            dataKey="ele"
            stroke="#B4FF39"
            strokeWidth={3}
            filter="url(#elevationGlow)"
            dot={false}
            activeDot={{
              r: 5,
              fill: "#B4FF39",
              stroke: "#fff",
              strokeWidth: 2,
            }}
          />

          {data[currentIndex] && (
            <ReferenceDot
              x={data[currentIndex].dist}
              y={data[currentIndex].ele}
              r={8}
              fill="#B4FF39"
              stroke="#fff"
              strokeWidth={3}
            />
          )}
        </LineChart>
      </ResponsiveContainer>
    </ChartWrapper>
  );
}
