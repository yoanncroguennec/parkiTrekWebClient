// GOOD
import { styled, Box, Stack, Typography } from "@mui/material";

/* =========================================================
   QUOTE CONTAINER
========================================================= */

type QuoteContainerProps = {
  backgroundImage?: string | null;
  bgColor?: string;
};

export const QuoteContainer = styled(Stack, {
  shouldForwardProp: (prop) => prop !== "backgroundImage" && prop !== "bgColor",
})<QuoteContainerProps>(({ theme, backgroundImage, bgColor }) => ({
  position: "relative",

  width: "fit-content",
  maxWidth: "100%",

  padding: "60px 30px",

  overflow: "hidden",

  borderRadius: "20px",

  /*
   * Background layers
   *
   * 1. Image
   * 2. Gradient
   */
  backgroundImage: [
    backgroundImage ? `url("${backgroundImage}")` : null,
    bgColor,
  ]
    .filter(Boolean)
    .join(", "),

  /*
   * Image → cover
   * Gradient → cover
   */
  backgroundSize: "cover, cover",

  /*
   * Image → décalée de 40px vers le bas
   * Gradient → reste centré
   */
  backgroundPosition: "center calc(50% + 40px), center",

  backgroundRepeat: "no-repeat, no-repeat",

  boxShadow:
    "rgba(0, 0, 0, 0.25) 0px 30px 35px, " +
    "rgba(0, 0, 0, 0.12) 0px -8px 20px, " +
    "rgba(0, 0, 0, 0.12) 0px 3px 6px, " +
    "rgba(0, 0, 0, 0.17) 0px 8px 12px, " +
    "rgba(0, 0, 0, 0.09) 0px -2px 4px",

  [theme.breakpoints.up("md")]: {
    padding: "100px",

    borderRadius: "25px",

    boxShadow:
      "rgba(0, 0, 0, 0.25) 0px 54px 55px, " +
      "rgba(0, 0, 0, 0.12) 0px -12px 30px, " +
      "rgba(0, 0, 0, 0.12) 0px 4px 6px, " +
      "rgba(0, 0, 0, 0.17) 0px 12px 13px, " +
      "rgba(0, 0, 0, 0.09) 0px -3px 5px",
  },
}));

/* =========================================================
   QUOTE ICON LEFT
========================================================= */

export const QuoteIconLeft = styled(Box)(({ theme }) => ({
  position: "absolute",
  left: "15px",
  top: "15px",
  color: "#FFF",
  [theme.breakpoints.up("md")]: {
    left: "55px",
    top: "55px",
  },
}));

/* =========================================================
   QUOTE ICON RIGHT
========================================================= */

export const QuoteIconRight = styled(Box)(({ theme }) => ({
  position: "absolute",
  bottom: "15px",
  right: "15px",
  color: "#FFF",
  [theme.breakpoints.up("md")]: {
    bottom: "55px",
    right: "55px",
  },
}));

/* =========================================================
   QUOTE LINE
========================================================= */

type QuoteLineProps = {
  lineColor?: string;
};

export const QuoteLine = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "lineColor",
})<QuoteLineProps>(({ theme, lineColor }) => ({
  position: "relative",

  fontSize: "18px",
  letterSpacing: 2,
  textShadow: "4px 4px 10px rgba(0, 0, 0, 1)",
  fontWeight: 900,

  lineHeight: 1.4,

  color: lineColor ?? "inherit",

  zIndex: 2,

  [theme.breakpoints.up("md")]: {
    fontSize: "22px",

    lineHeight: 1.5,
  },
}));
