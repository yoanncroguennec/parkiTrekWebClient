"use client";

import { Stack, styled } from "@mui/material";

export const SupportShowcaseContainer = styled(Stack)(({ theme }) => ({
  alignItems: "center",
  flexDirection: "row",
  width: "100%",
  [theme.breakpoints.up("md")]: {
    flexDirection: "column",
    gridTemplateColumns: "repeat(2,1fr)",
  },
}));

export const MobileWrapper = styled(Stack)(() => ({
  minHeight: "100vh",
  overflow: "hidden",
  position: "relative",
  width: "100%",
}));

export const MobileBackground = styled(Stack)(() => ({
  inset: 0,
  position: "absolute",
  zIndex: 0,
}));

/////////////
// CONTENT //
/////////////
export const MobileContent = styled(Stack)(({ theme }) => ({
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
  padding: theme.spacing(10, 3),
  position: "relative",
  zIndex: 2,
  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(12, 4),
  },
}));

export const ContentContainer = styled(Stack)(({ theme }) => ({
  alignItems: "flex-start",
  inset: 0,
  justifyContent: "center",
  paddingLeft: theme.spacing(4),
  position: "absolute",
  textAlign: "left",
  width: "45%",
  zIndex: 2,
  [theme.breakpoints.up("lg")]: {
    paddingLeft: theme.spacing(8),
  },
}));

export const Media = styled(Stack)(() => ({
  minHeight: "100vh",
  overflow: "hidden",
  position: "relative",
  width: "100%",
}));
