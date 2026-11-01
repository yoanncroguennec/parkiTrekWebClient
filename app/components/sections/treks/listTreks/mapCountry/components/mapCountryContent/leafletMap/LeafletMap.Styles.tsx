import { Box, Stack, styled } from "@mui/material";

export const LeafletMapContainer = styled(Box)(() => ({
  position: "relative",
  height: "100vh",
}));

export const Overlay = styled(Stack)(() => ({
  position: "absolute",
  inset: 0,
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1000,
  backgroundColor: "rgba(255,255,255,0.6)",
}));
