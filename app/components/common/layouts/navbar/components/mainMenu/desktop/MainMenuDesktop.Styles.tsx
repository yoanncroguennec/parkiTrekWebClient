import { Box, Button, Stack, styled } from "@mui/material";

export const MainMenuDesktopContainer = styled(Stack)(() => ({
  position: "fixed",
  inset: 0,
  zIndex: 999,
  background: "#050505",
  overflow: "hidden",
  clipPath: "circle(0% at 100% 0%)",
  flexDirection: "column",
}));

export const AnimationCursor = styled(Box)(() => ({
  position: "absolute",
  inset: 0,
  pointerEvents: "none",
  background:
    "radial-gradient(500px 500px at var(--halo-x,50%) var(--halo-y,50%), rgba(255,255,255,.25), rgba(0,255,255,.15), transparent 70%)",
  zIndex: 1,
}));

export const MainMenuDesktopContent = styled(Box)(() => ({
  position: "relative",
  zIndex: 9999,
  width: "100%",
  height: "100%",
}));

export const CloseButton = styled(Button)(() => ({
  position: "absolute",
  right: 50,
  top: 50,
  zIndex: 10000,
  border: "none",
  background: "transparent",
  color: "rgba(255, 0, 0, 1)",
  cursor: "pointer",
  padding: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
