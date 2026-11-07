// GOOD
"use client";

import { Box, styled } from "@mui/material";

export const IntroSection = styled(Box)(() => ({
  position: "relative",
  width: "100%",
  height: "100vh",
  overflow: "hidden",
  backgroundColor: "#fff",
}));

export const IntroLayout = styled(Box)(() => ({
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "row",
}));

export const IntroContent = styled(Box)(() => ({
  flex: "0 0 50vw",
  width: "50vw",
  minWidth: "50vw",
  maxWidth: "50vw",
  height: "100vh",
}));

export const IntroVisual = styled(Box)(() => ({
  flex: "0 0 50vw",
  width: "50vw",
  minWidth: "50vw",
  maxWidth: "50vw",
  height: "100vh",
}));

export const ExplorerView = styled(Box)(() => ({
  position: "absolute",
  inset: 0,
  zIndex: 20,

  opacity: 0,

  pointerEvents: "none",

  backgroundColor: "#FCFBF8",

  overflowY: "auto",
  overflowX: "hidden",

  WebkitOverflowScrolling: "touch",
  scrollbarWidth: "thin",
}));
