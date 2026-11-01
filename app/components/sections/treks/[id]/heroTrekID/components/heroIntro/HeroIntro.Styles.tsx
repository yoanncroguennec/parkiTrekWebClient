// GOOD
"use client";

import { Box, styled, Typography } from "@mui/material";

/* -------------------------------- */
/* ROOT                             */
/* -------------------------------- */

export const HeroIntroRoot = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",

  [theme.breakpoints.up("md")]: {
    padding: "0 20px",
  },
}));

/* -------------------------------- */
/* DESCRIPTION                      */
/* -------------------------------- */

export const HeroDescription = styled(Typography)(({ theme }) => ({
  maxWidth: 700,

  color: "rgba(255,255,255,.82)",
  fontSize: "16px",
  fontWeight: 300,
  lineHeight: 1.7,

  "& strong": {
    color: "#fff",
    fontWeight: 700,
  },

  [theme.breakpoints.up("md")]: {
    fontSize: "20px",
    lineHeight: 1.8,
  },
}));

/* -------------------------------- */
/* ACTIONS                          */
/* -------------------------------- */

export const HeroActions = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexWrap: "wrap",
  gap: 16,
  marginTop: 40,

  [theme.breakpoints.up("md")]: {
    gap: 24,
    marginTop: 56,
  },
}));

/* -------------------------------- */
/* VIDEO CTA                        */
/* -------------------------------- */

export const VideoCTA = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
}));

/* -------------------------------- */
/* QUOTE                            */
/* -------------------------------- */

export const HeroQuote = styled(Box)(({ theme }) => ({
  maxWidth: 620,
  marginTop: 48,
  paddingLeft: 20,
  borderLeft: "3px solid #22c55e",

  [theme.breakpoints.up("md")]: {
    marginTop: 64,
    paddingLeft: 28,
    borderLeftWidth: 4,
  },
}));

export const HeroQuoteText = styled(Typography)(({ theme }) => ({
  color: "rgba(255,255,255,.9)",
  fontSize: "16px",
  fontStyle: "italic",
  fontWeight: 300,
  lineHeight: 1.5,

  [theme.breakpoints.up("md")]: {
    fontSize: "22px",
    lineHeight: 1.6,
  },
}));
