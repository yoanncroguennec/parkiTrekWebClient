// GOOD
import { Box, styled, Typography, TypographyProps } from "@mui/material";

interface HighlightColorProps {
  highlightColor: string;
}

export const JourneyHighlightsRoot = styled(Box)(({ theme }) => ({
  padding: 20,

  [theme.breakpoints.up("md")]: {
    padding: 32,
  },
}));

export const JourneyHighlightsTitle = styled(Typography)<TypographyProps>(({ theme }) => ({
  color: "#111827",
  fontSize: "24px",
  fontWeight: 800,
  marginBottom: 20,

  [theme.breakpoints.up("md")]: {
    fontSize: "32px",
    marginBottom: 32,
  },
}));

export const HighlightsList = styled(Box)(({ theme }) => ({
  display: "grid",
  gap: 10,

  [theme.breakpoints.up("md")]: {
    gap: 16,
  },
}));

export const HighlightCard = styled(Box, {
  shouldForwardProp: (prop) => prop !== "highlightColor",
})<HighlightColorProps>(({ theme, highlightColor }) => ({
  cursor: "pointer",
  position: "relative",
  overflow: "hidden",

  display: "flex",
  alignItems: "center",
  gap: 12,

  padding: 16,

  borderRadius: 20,

  background: "rgba(255,255,255,.75)",
  backdropFilter: "blur(20px)",

  border: "1px solid rgba(0,0,0,.04)",

  boxShadow: "0 15px 40px rgba(0,0,0,.05)",

  transition: "transform .35s ease, box-shadow .35s ease",

  "&:hover": {
    transform: "translateY(-6px)",
    boxShadow: `
      0 25px 50px rgba(7, 241, 66, 0.08),
      0 0 30px ${highlightColor}25
    `,
  },

  [theme.breakpoints.up("md")]: {
    gap: 16,
    padding: 20,
    borderRadius: 24,
  },
}));

export const HighlightAccent = styled(Box, {
  shouldForwardProp: (prop) => prop !== "highlightColor",
})<HighlightColorProps>(({ highlightColor }) => ({
  position: "absolute",

  left: 0,
  top: 0,
  bottom: 0,

  width: 4,

  background: highlightColor,
}));

export const HighlightIcon = styled(Box, {
  shouldForwardProp: (prop) => prop !== "highlightColor",
})<HighlightColorProps>(({ theme, highlightColor }) => ({
  width: 46,
  height: 46,

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  flexShrink: 0,

  borderRadius: "50%",

  background: `${highlightColor}15`,

  color: highlightColor,

  fontSize: 20,

  [theme.breakpoints.up("md")]: {
    width: 54,
    height: 54,
    fontSize: 24,
  },
}));

export const HighlightContent = styled(Box)(() => ({
  minWidth: 0,
}));

export const HighlightTitle = styled(Typography)<TypographyProps>(({ theme }) => ({
  color: "#111827",
  fontSize: "16px",
  fontWeight: 700,
  marginBottom: 4,

  [theme.breakpoints.up("md")]: {
    fontSize: "18px",
  },
}));

export const HighlightDescription = styled(Typography)<TypographyProps>(({ theme }) => ({
  color: "#6b7280",
  fontSize: "13px",

  [theme.breakpoints.up("md")]: {
    fontSize: "15px",
  },
}));
