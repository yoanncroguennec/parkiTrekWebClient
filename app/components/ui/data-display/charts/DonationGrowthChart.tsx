"use client";

import { useMemo, useRef } from "react";

import { Box } from "@mui/material";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Filler,
  type ChartData,
  type ChartOptions,
  type Plugin,
} from "chart.js";

import { Line } from "react-chartjs-2";

/* =========================================================
   CHART.JS
========================================================= */

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend, Filler);

/* =========================================================
   CONSTANTS
========================================================= */

const COLORS = {
  primary: "#00F260",
  secondary: "#00C6FF",
  white: "#FFFFFF",
  black: "#000000",
};

/* =========================================================
   GLOW PLUGIN
========================================================= */

const donationGlowPlugin: Plugin<"line"> = {
  id: "donationGlow",

  beforeDatasetDraw(chart) {
    const { ctx } = chart;

    ctx.save();

    ctx.shadowColor = COLORS.primary;
    ctx.shadowBlur = 22;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
  },

  afterDatasetDraw(chart) {
    chart.ctx.restore();
  },
};

/* =========================================================
   COMPONENT
========================================================= */

export default function DonationGrowthChart() {
  const chartRef = useRef<ChartJS<"line"> | null>(null);

  /* =======================================================
     DATA
  ======================================================= */

  const data = useMemo<ChartData<"line">>(() => {
    return {
      labels: ["Jan", "Fév", "Mars"],

      datasets: [
        {
          label: "Dons",

          data: [12, 32, 97],

          borderColor: COLORS.primary,

          backgroundColor: "rgba(0, 242, 96, 0.12)",

          borderWidth: 3,

          fill: true,

          tension: 0.45,

          pointRadius: 0,

          pointHoverRadius: 7,

          pointHoverBackgroundColor: COLORS.white,

          pointHoverBorderColor: COLORS.primary,

          pointHoverBorderWidth: 3,
        },
      ],
    };
  }, []);

  /* =======================================================
     OPTIONS
  ======================================================= */

  const options = useMemo<ChartOptions<"line">>(() => {
    return {
      responsive: true,

      maintainAspectRatio: false,

      interaction: {
        intersect: false,

        mode: "index",
      },

      animation: {
        duration: 1400,

        easing: "easeOutQuart",
      },

      plugins: {
        legend: {
          display: false,
        },

        tooltip: {
          backgroundColor: "rgba(12, 12, 12, 0.94)",

          borderColor: COLORS.primary,

          borderWidth: 1,

          cornerRadius: 14,

          padding: 14,

          titleColor: COLORS.white,

          bodyColor: COLORS.white,

          displayColors: false,

          callbacks: {
            label(context) {
              return `${context.parsed.y} dons`;
            },
          },
        },
      },

      scales: {
        x: {
          grid: {
            display: false,
          },

          ticks: {
            color: "rgba(0, 0, 0, 0.55)",

            font: {
              size: 12,

              weight: 500,
            },
          },

          border: {
            display: false,
          },
        },

        y: {
          beginAtZero: true,

          grid: {
            color: "rgba(0, 0, 0, 0.05)",
          },

          ticks: {
            color: "rgba(0, 0, 0, 0.55)",

            font: {
              size: 12,

              weight: 500,
            },

            padding: 8,
          },

          border: {
            display: false,
          },
        },
      },
    };
  }, []);

  /* =======================================================
     CHART GRADIENT
  ======================================================= */

  const plugins = useMemo<Plugin<"line">[]>(() => {
    return [donationGlowPlugin];
  }, []);

  /* =======================================================
     RENDER
  ======================================================= */

  return (
    <Box
      sx={{
        position: "relative",

        width: "90%",

        height: "40%",

        minHeight: 260,

        p: 1.5,

        overflow: "hidden",

        borderRadius: "24px",

        background: "linear-gradient(145deg, rgba(255,255,255,0.72), rgba(255,255,255,0.38))",

        backdropFilter: "blur(35px)",

        WebkitBackdropFilter: "blur(35px)",

        border: "1px solid rgba(255,255,255,0.45)",

        boxShadow: "0 30px 80px rgba(0,0,0,0.16), inset 0 1px 1px rgba(255,255,255,0.8)",

        "&::before": {
          content: '""',

          position: "absolute",

          top: -100,

          right: -100,

          width: 220,

          height: 220,

          borderRadius: "50%",

          background: "radial-gradient(circle, rgba(0,242,96,0.16), transparent 70%)",

          pointerEvents: "none",
        },

        "&::after": {
          content: '""',

          position: "absolute",

          bottom: -100,

          left: -100,

          width: 220,

          height: 220,

          borderRadius: "50%",

          background: "radial-gradient(circle, rgba(0,198,255,0.14), transparent 70%)",

          pointerEvents: "none",
        },
      }}
    >
      <Box
        sx={{
          position: "relative",

          zIndex: 1,

          width: "100%",

          height: "100%",
        }}
      >
        <Line ref={chartRef} data={data} options={options} plugins={plugins} />
      </Box>
    </Box>
  );
}
