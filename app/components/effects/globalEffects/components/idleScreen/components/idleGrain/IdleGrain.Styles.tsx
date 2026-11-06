import { Box, styled } from "@mui/material";

export const IdleGrainOverlay = styled(Box)({
  position: "absolute",
  inset: 0,

  backgroundImage:
    "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",

  backgroundSize: "6px 6px",

  mixBlendMode: "soft-light",

  pointerEvents: "none",
});
