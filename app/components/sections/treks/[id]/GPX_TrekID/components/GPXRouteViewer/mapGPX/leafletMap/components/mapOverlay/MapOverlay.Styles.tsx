import { Box, styled, Typography } from "@mui/material";

export const OverlayContainer = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  zIndex: 20,

  width: "100%",
  padding: 24,

  background: "rgba(15,15,15,.45)",
  backdropFilter: "blur(30px)",

  border: "1px solid rgba(255,255,255,.08)",
  borderBottomLeftRadius: "32px",
  borderBottomRightRadius: "32px",

  [theme.breakpoints.up("md")]: {
    top: 30,
    left: 32,
    width: 260,
    borderRadius: "32px",
  },
}));

export const OverlayHeader = styled(Box)({
  marginBottom: 24,
});

export const OverlayLabel = styled(Typography)({
  color: "#9CA3AF",
  letterSpacing: 4,
  fontSize: 12,
  marginBottom: 8,
});

export const OverlayTitle = styled(Typography)({
  color: "#fff",
  fontWeight: 300,
  lineHeight: 1.1,
});

export const OverlayStats = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  gap: 16,
  width: "100%",

  [theme.breakpoints.up("md")]: {
    alignItems: "start",
    flexDirection: "column",
  },
}));

export const ProgressContainer = styled(Box)({
  marginTop: 8,
  height: 5,
  borderRadius: 999,
  overflow: "hidden",
  background: "rgba(255,255,255,.08)",
});

export const ProgressBar = styled(Box, {
  shouldForwardProp: (prop) => prop !== "progress",
})<{
  progress: number;
}>(({ progress }) => ({
  width: `${progress}%`,
  height: "100%",
  borderRadius: 999,
  background: "linear-gradient(90deg,#22d3ee,#B4FF39)",
}));
