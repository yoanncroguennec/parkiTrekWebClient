import { Box, BoxProps, Chip, styled, Typography, TypographyProps } from "@mui/material";

export const IntroBadge = styled(Chip)(({ theme }) => ({
  marginBottom: 20,
  paddingLeft: 12,
  paddingRight: 12,
  color: "#fff",
  fontSize: "12px",
  fontWeight: 700,
  letterSpacing: 1,
  border: "1px solid rgba(255,255,255,.18)",
  background: "rgba(255,255,255,.08)",
  backdropFilter: "blur(20px)",
  borderRadius: 999,

  "& .MuiChip-icon": {
    color: "#22c55e",
    fontSize: 18,
  },

  [theme.breakpoints.up("md")]: {
    marginBottom: 32,
    paddingLeft: 16,
    paddingRight: 16,
    fontSize: "14px",
    letterSpacing: 1.2,

    "& .MuiChip-icon": {
      fontSize: 20,
    },
  },
}));

export const IntroTitle = styled(Typography)<TypographyProps>(({ theme }) => ({
  marginBottom: 32,
  color: "#fff",
  fontWeight: 900,
  lineHeight: 0.95,
  letterSpacing: "-0.05em",
  fontSize: "3.2rem",
  [theme.breakpoints.up("md")]: {
    fontSize: "6rem",
  },
}));

export const IntroTitleHighlight = styled(Box)<BoxProps>(() => ({
  background: "linear-gradient(90deg,#22c55e,#84cc16,#facc15)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
}));
