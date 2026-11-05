import { styled, Box, BoxProps } from "@mui/material";

export const TimelineWrapper = styled(Box)<BoxProps>({
  position: "relative",
  width: "100%",
});

export const TimelineLine = styled(Box)<BoxProps>({
  position: "absolute",
  top: 0,
  bottom: 0,
  left: "50%",
  width: "1px",
  background: "rgba(60, 253, 12, 0.8)",
  transform: "translateX(-50%)",
});

export const TimelineProgress = styled(Box)<BoxProps>({
  position: "absolute",
  top: 0,
  left: "50%",
  width: "2px",
  height: "100%",
  background: "rgba(60, 253, 12, 0.13)",
  transform: "translateX(-50%) scaleY(0)",
  transformOrigin: "top center",
  boxShadow:
    "0 0 12px rgba(255, 255, 255, 0.5), 0 0 30px rgba(255, 255, 255, 0.15)",
});
