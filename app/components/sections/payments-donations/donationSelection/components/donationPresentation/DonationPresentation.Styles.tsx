import { Box, Stack, Typography, styled } from "@mui/material";
import type { TypographyProps } from "@mui/material";

export const DonationPresentationContainer = styled(Stack)(({ theme }) => ({
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
  gap: theme.spacing(3),
  width: "100%",
  minWidth: 0,
  height: "100%",
  textAlign: "center",
  [theme.breakpoints.up("md")]: {
    alignItems: "flex-start",
    gap: theme.spacing(1),
    textAlign: "left",
  },
}));

export const PanelTitleContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  [theme.breakpoints.up("md")]: {
    alignItems: "flex-start",
  },
}));

export const PanelEyebrow = styled(Typography)(({ theme }) => ({
  color: "#F29305",
  fontSize: "15px",
  fontWeight: 900,
  letterSpacing: "0.04em",
  textTransform: "uppercase",
  lineHeight: 1.3,
  [theme.breakpoints.up("md")]: {
    fontSize: "22px",
  },
}));

/* =========================================================
   04 — TITLE UNDERLINE
   Trait décoratif orange
========================================================= */

export const PanelTitleUnderline = styled(Box)(({ theme }) => ({
  width: "min(240px, 85%)",
  height: "4px",
  marginTop: theme.spacing(1),
  borderRadius: "25px",
  backgroundColor: "#F29305",

  // DESKTOP
  [theme.breakpoints.up("md")]: {
    width: "320px",
    height: "5px",
  },
}));

/* =========================================================
   05 — MAIN TITLE
   Titre principal : Faire un don
========================================================= */

export const PanelMainTitle = styled(Stack)(({ theme }) => ({
  alignItems: "center",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: theme.spacing(1),
  marginTop: theme.spacing(2),

  // DESKTOP
  [theme.breakpoints.up("md")]: {
    justifyContent: "flex-start",
    gap: theme.spacing(1.5),
  },
}));

/* =========================================================
   06 — MAIN TITLE TEXT
   Typographie du titre principal
========================================================= */

export const PanelMainTitleText = styled(Typography)<TypographyProps>(({ theme }) => ({
  margin: 0,
  color: "#FFFFFF",
  fontSize: "42px",
  fontWeight: 900,
  lineHeight: 1,
  letterSpacing: "-0.055em",
  [theme.breakpoints.up("md")]: {
    fontSize: "clamp(42px, 6vw, 76px)",
  },
}));

export const PanelMainTitleAccent = styled(PanelMainTitleText)(() => ({
  color: "#F29305",
}));

export const PanelDescription = styled(Typography)<TypographyProps>(({ theme }) => ({
  maxWidth: "360px",
  color: "#FFFFFF",
  fontSize: "14px",
  fontWeight: 700,
  lineHeight: 1.6,
  [theme.breakpoints.up("md")]: {
    maxWidth: "480px",
    fontSize: "clamp(14px, 1.5vw, 18px)",
    lineHeight: 1.7,
  },
}));

export const PanelCurvedLineContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  maxWidth: "260px",
  "& svg": {
    display: "block",
    width: "100%",
    maxWidth: "100%",
    height: "auto",
  },
  [theme.breakpoints.up("md")]: {
    justifyContent: "flex-start",
    maxWidth: "420px",
  },
}));
