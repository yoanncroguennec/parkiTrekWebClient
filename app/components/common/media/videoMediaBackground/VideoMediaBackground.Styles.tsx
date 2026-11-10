// GOOD
import { Box, Stack, styled } from "@mui/material";

interface OverlayProps {
  overlayBackground?: string;
}

export const MediaContainer = styled(Stack)(() => ({
  position: "relative",
  width: "100%",
  height: "100svh",
  minHeight: "600px",
  overflow: "hidden",
}));

export const BackgroundVideo = styled("video")(({ theme }) => ({
  position: "absolute",
  inset: 0,

  width: "100%",
  height: "100%",

  objectFit: "cover",
  objectPosition: "center 35%",

  zIndex: 0,

  [theme.breakpoints.up("md")]: {
    objectPosition: "center 40%",
  },
}));

export const Overlay = styled(Box, {
  shouldForwardProp: (prop) => prop !== "overlayBackground",
})<OverlayProps>(({ overlayBackground }) => ({
  position: "absolute",
  inset: 0,

  zIndex: 1,

  background:
    overlayBackground ?? "linear-gradient(180deg, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.55) 100%)",
}));
