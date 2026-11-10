// GOOD
"use client";

import { Box, BoxProps, styled } from "@mui/material";

export const PreloaderOverlay = styled(Box)<BoxProps>(() => ({
  background: "#0F0F0F",
  clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
  inset: 0,
  position: "fixed",
  zIndex: 100,
}));

export const PreloaderBar = styled(Box)<BoxProps>(() => ({
  background: "#FFF",
  left: 0,
  height: "6px",
  position: "absolute",
  top: 0,
  transform: "scaleX(0)",
  transformOrigin: "left",
  width: "100%",
}));
