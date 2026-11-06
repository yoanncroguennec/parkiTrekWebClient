import { Box, styled } from "@mui/material";

export const CompassContainer = styled(Box)({
  position: "absolute",
  right: 20,
  bottom: 20,

  width: 180,
  height: 180,

  backgroundColor: "transparent",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  pointerEvents: "none",
});
