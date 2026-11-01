import { Box, styled, Typography } from "@mui/material";

export const ChartWrapper = styled(Box)(({ theme }) => ({
  position: "relative",

  flex: 1,

  minWidth: 0,
  minHeight: 0,

  height: "100%",

  padding: "8px 16px 0",

  borderRadius: 24,

  background: "rgba(0,0,0,.12)",

  border: "1px solid rgba(255,255,255,.05)",

  [theme.breakpoints.down("md")]: {
    minHeight: 220,
  },
}));

export const ChartTitle = styled(Typography)({
  position: "absolute",

  top: 16,
  left: 20,

  zIndex: 2,

  color: "rgba(255,255,255,.55)",

  fontSize: 11,

  fontWeight: 600,

  letterSpacing: 2,

  pointerEvents: "none",
});
