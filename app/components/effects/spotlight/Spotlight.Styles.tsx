// GOOD
import { Box, styled } from "@mui/material";

interface SpotlightContainerProps {
  $size: number;
  $blur: number;
}

export const SpotlightContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== "$size" && prop !== "$blur",
})<SpotlightContainerProps>(({ $size, $blur }) => ({
  position: "absolute",

  width: `${$size}px`,
  height: `${$size}px`,

  borderRadius: "50%",

  pointerEvents: "none",

  transform: "translate(-50%, -50%)",

  background: "radial-gradient(circle, rgba(255,255,255,.9), transparent)",

  filter: `blur(${$blur}px)`,

  zIndex: 3,
}));
