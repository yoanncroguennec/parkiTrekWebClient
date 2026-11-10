"use client";

import { Stack, Typography, TypographyProps, styled } from "@mui/material";

export const Quote = styled(Stack)(({ theme }) => ({
  bottom: 24,
  position: "absolute",
  right: 20,
  flexDirection: "column",
  [theme.breakpoints.up("md")]: {
    bottom: 50,
    right: 50,
  },
}));

export const QuoteText = styled(Typography)<TypographyProps>(({ theme }) => ({
  color: "#FFF",
  fontSize: "16px",
  fontWeight: 700,
  letterSpacing: "1px",
  lineHeight: 1.2,
  textShadow: "2px 2px 8px rgba(245,66,16,.6)",
  [theme.breakpoints.up("md")]: {
    fontSize: "24px",
  },
}));

export const QuoteRow = styled(Stack)(() => ({
  alignItems: "center",
  flexDirection: "row",
  marginTop: "16px",
}));

export const QuoteTextSecond = styled(QuoteText)(({ theme }) => ({
  marginLeft: "16px",
  [theme.breakpoints.up("md")]: {
    marginLeft: "48px",
  },
}));
