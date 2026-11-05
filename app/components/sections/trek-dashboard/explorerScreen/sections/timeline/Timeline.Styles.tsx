import { styled, Box, BoxProps } from "@mui/material";

export const TimelineContainer = styled(Box)<BoxProps>({
  position: "relative",
  overflow: "hidden",
  minHeight: "100vh",
  padding: "180px 7vw 160px",
  background: "#FFF",
  color: "#000",
  perspective: "1200px",
});
