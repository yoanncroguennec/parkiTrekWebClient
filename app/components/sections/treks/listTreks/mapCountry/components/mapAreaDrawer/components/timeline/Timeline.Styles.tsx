// GOOD
import { Box, styled, Typography, TypographyProps } from "@mui/material";

interface ColorProps {
  color: string;
}

export const TimelineContainer = styled(Box)(({ theme }) => ({
  padding: "16px 20px",

  [theme.breakpoints.up("md")]: {
    padding: "16px 32px",
  },
}));

export const TimelineTitle = styled(Typography)<TypographyProps>(({ theme }) => ({
  color: "#111827",
  fontSize: "24px",
  fontWeight: 800,
  marginBottom: 20,

  [theme.breakpoints.up("md")]: {
    fontSize: "32px",
    marginBottom: 32,
  },
}));

export const Content = styled(Box)(({ theme }) => ({
  position: "relative",
  marginLeft: 4,

  [theme.breakpoints.up("md")]: {
    marginLeft: 8,
  },
}));

export const TimelineTrack = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: 10,
  bottom: 10,
  left: 14,
  width: 3,
  borderRadius: 999,
  background: "linear-gradient(#22c55e,#38bdf8,#f97316)",

  [theme.breakpoints.up("md")]: {
    left: 16,
  },
}));

export const TimeLineItem = styled(Box)(({ theme }) => ({
  position: "relative",

  display: "flex",
  gap: 16,

  marginBottom: 24,

  cursor: "pointer",

  [theme.breakpoints.up("md")]: {
    gap: 24,
    marginBottom: 32,
  },
}));

export const TimelineIcon = styled(Box, {
  shouldForwardProp: (prop) => prop !== "color",
})<ColorProps>(({ theme, color }) => ({
  width: 38,
  height: 38,

  alignItems: "center",
  justifyContent: "center",
  display: "flex",

  color,
  background: "#fff",

  borderRadius: "50%",
  border: "1px solid rgba(0,0,0,.04)",

  boxShadow: "0 10px 25px rgba(0,0,0,.08)",

  transition: "all .3s ease",

  zIndex: 2,

  "&:hover": {
    transform: "translateY(-3px)",
    boxShadow: `
      0 20px 40px rgba(0,0,0,.1),
      0 0 30px ${color}40
    `,
  },

  [theme.breakpoints.up("md")]: {
    width: 42,
    height: 42,
  },
}));

export const StepTitle = styled(Typography)<TypographyProps>(({ theme }) => ({
  color: "#111827",
  fontSize: "15px",
  fontWeight: 700,

  [theme.breakpoints.up("md")]: {
    fontSize: "16px",
  },
}));

export const StepLocation = styled(Typography)<TypographyProps>(({ theme }) => ({
  color: "#6b7280",
  fontSize: "13px",

  [theme.breakpoints.up("md")]: {
    fontSize: "14px",
  },
}));
