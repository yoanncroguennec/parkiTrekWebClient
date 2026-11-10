"use client";

import { Box, styled } from "@mui/material";

type OverlayStylesProps = {
  opacityFrom: number;
  opacityTo: number;
  zIndex: number;
};

export const OverlayStyles = styled(Box, {
  shouldForwardProp: (prop) => !["opacityFrom", "opacityTo", "zIndex"].includes(prop as string),
})<OverlayStylesProps>(({ opacityFrom, opacityTo, zIndex }) => ({
  position: "absolute",
  inset: 0,
  pointerEvents: "none",
  zIndex,

  background: `linear-gradient(
      to bottom,
      rgba(0,0,0,${opacityFrom}),
      rgba(0,0,0,${opacityTo})
    )`,
}));
