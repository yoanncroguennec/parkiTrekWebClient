// GOOD
import { Box, styled, Typography, TypographyProps } from "@mui/material";

// ROOT

export const CircleRevealRoot = styled(Box)(({ theme }) => ({
  position: "fixed",
  inset: 0,
  width: "100vw",
  height: "100dvh",
  zIndex: 9999,
  background: "#000",
  overflow: "hidden",
  pointerEvents: "none",

  [theme.breakpoints.up("md")]: {
    zIndex: 9999,
  },
}));

// CIRCLE

export const CircleRevealCircle = styled(Box)(({ theme }) => ({
  position: "absolute",
  left: "50%",
  top: "50%",
  width: "24px",
  height: "24px",
  borderRadius: "50%",
  backgroundImage: "url('/assets/imgs/img1.jpg')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  overflow: "visible",
  transformOrigin: "center",

  [theme.breakpoints.up("md")]: {
    width: "30px",
    height: "30px",
  },
}));

// TEXT

export const CircleRevealText = styled(Typography)<TypographyProps>(
  ({ theme }) => ({
    position: "absolute",
    left: "50%",
    top: "50%",
    transformOrigin: "center",
    color: "#FFF",
    fontSize: "16px",
    fontWeight: 700,
    lineHeight: 1.2,
    letterSpacing: "1.6px",
    whiteSpace: "nowrap",
    userSelect: "none",
    pointerEvents: "none",
    textTransform: "uppercase",

    [theme.breakpoints.up("md")]: {
      fontSize: "20px",
      letterSpacing: "2px",
    },
  }),
);

// CONTENT

export const CircleRevealContent = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100%",

  [theme.breakpoints.up("md")]: {
    width: "100%",
  },
}));

// WHITE OVERLAY

export const CircleRevealOverlay = styled(Box)(({ theme }) => ({
  position: "fixed",
  inset: 0,
  width: "100vw",
  height: "100dvh",
  background: "#FFF",
  zIndex: 10000,
  pointerEvents: "none",
  opacity: 0,

  [theme.breakpoints.up("md")]: {
    zIndex: 10000,
  },
}));
