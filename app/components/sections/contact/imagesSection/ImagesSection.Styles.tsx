import { Box, BoxProps, styled } from "@mui/material";

export const IntroImage = styled(Box)<BoxProps>(() => ({
  position: "fixed",
  inset: 0,
  width: "100%",
  height: "100vh",
  overflow: "hidden",
  willChange: "transform",
}));
