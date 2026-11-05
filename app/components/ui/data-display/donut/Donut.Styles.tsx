import { Box, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

/* =========================================================
   CHART CONTAINER
========================================================= */

export const DonutChartContainer = styled(Box)(({ theme }) => ({
  position: "relative",

  width: "100%",
  height: "300px",

  zIndex: 2,

  [theme.breakpoints.up("md")]: {
    width: "450px",
    height: "450px",
  },
}));

/* =========================================================
   TOOLTIP
========================================================= */

export const DonutTooltip = styled(Box)({
  padding: "12px 16px",

  borderRadius: 14,

  background: "rgba(255, 255, 255, 0.15)",

  backdropFilter: "blur(50px)",

  color: "#000",

  border: "1px solid rgba(255, 255, 255, 0.1)",

  boxShadow: "0 20px 50px rgba(0, 0, 0, 0.25)",
});

export const DonutTooltipLabel = styled(Typography)(({ theme }) => ({
  fontSize: "10px",

  opacity: 0.5,

  textTransform: "uppercase",

  letterSpacing: ".12em",

  [theme.breakpoints.up("md")]: {
    fontSize: "11px",

    letterSpacing: ".15em",
  },
}));

export const DonutTooltipValue = styled(Typography)(({ theme }) => ({
  marginTop: 4,

  fontSize: "20px",

  fontWeight: 500,

  [theme.breakpoints.up("md")]: {
    marginTop: 5,

    fontSize: "24px",
  },
}));

/* =========================================================
   CENTER
========================================================= */

export const CenterContent = styled(Stack)({
  position: "absolute",

  inset: 0,

  alignItems: "center",

  justifyContent: "center",

  pointerEvents: "none",

  textAlign: "center",
});

/* =========================================================
   CENTER VALUE
========================================================= */

export const CenterValue = styled(Typography)(({ theme }) => ({
  display: "block",

  fontSize: "52px",

  lineHeight: 0.9,

  fontWeight: 900,

  letterSpacing: "-0.07em",

  [theme.breakpoints.up("md")]: {
    fontSize: "70px",
  },
}));

/* =========================================================
   CENTER LABEL
========================================================= */

export const CenterLabel = styled(Typography)(({ theme }) => ({
  display: "block",

  marginTop: 12,

  fontSize: "15px",

  fontWeight: 500,

  textTransform: "uppercase",

  letterSpacing: ".18em",

  opacity: 0.45,

  [theme.breakpoints.up("md")]: {
    marginTop: 18,

    fontSize: "18px",

    letterSpacing: ".22em",
  },
}));

/* =========================================================
   CENTER DESCRIPTION
========================================================= */

export const CenterDescription = styled(Typography)(({ theme }) => ({
  display: "block",

  marginTop: 8,

  fontSize: "14px",

  lineHeight: 1.4,

  opacity: 0.55,

  [theme.breakpoints.up("md")]: {
    marginTop: 10,

    fontSize: "16px",

    lineHeight: 1.5,
  },
}));
