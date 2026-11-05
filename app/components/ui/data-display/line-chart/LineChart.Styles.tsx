import { styled, Box, Typography } from "@mui/material";

/* =========================================================
   CHART
========================================================= */

export const ChartContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100%",
  paddingTop: "60px",
  boxSizing: "border-box",

  [theme.breakpoints.up("md")]: {
    width: "85%",
    paddingTop: "110px",
  },
}));

/* =========================================================
   TOOLTIP
========================================================= */

export const LineTooltip = styled(Box)({
  padding: "12px 16px",
  borderRadius: 14,
  background: "rgba(255, 255, 255, .15)",
  backdropFilter: "blur(50px)",
  color: "#000",
  border: "1px solid rgba(255,255,255,.1)",
  boxShadow: "0 20px 50px rgba(0,0,0,.25)",
});

/* =========================================================
   TOOLTIP LABEL
========================================================= */

export const LineTooltipLabel = styled(Typography)({
  fontSize: 11,
  opacity: 0.5,
  textTransform: "uppercase",
  letterSpacing: ".15em",
});

/* =========================================================
   TOOLTIP VALUE
========================================================= */

export const LineTooltipValue = styled(Typography)({
  marginTop: 5,
  fontSize: 24,
  fontWeight: 500,
});
