// GOOD
"use client";

import { Box, styled } from "@mui/material";
import type { BoxProps } from "@mui/material";

export const ContactContainer = styled(Box)(() => ({
  background: "#0F0F0F",
  overflow: "hidden",
  position: "relative",
  minHeight: "100vh",
  width: "100%",
}));

export const HeroContainer = styled(Box)<BoxProps>(() => ({
  minHeight: "100vh",
  position: "relative",
  width: "100%",
}));
