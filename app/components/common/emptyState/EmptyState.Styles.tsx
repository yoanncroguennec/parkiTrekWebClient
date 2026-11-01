"use client";
import { Stack, styled, Typography, TypographyProps } from "@mui/material";

export const EmptyStateContainer = styled(Stack)(() => ({
  position: "absolute",
  inset: 0,
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  textAlign: "center",
  zIndex: 1000,
  pointerEvents: "none",
}));

export const EmptyStateTitle = styled(Typography)<TypographyProps>(({ theme }) => ({
  fontSize: "20px",
  fontWeight: 700,
  [theme.breakpoints.up("md")]: {
    fontSize: "22px",
  },
}));

export const EmptyStateDescription = styled(Typography)<TypographyProps>(({ theme }) => ({
  color: "text.secondary",
  fontSize: "12px",
  textAlign: "center",
  maxWidth: 500,
  [theme.breakpoints.up("md")]: {
    fontSize: "14px",
  },
}));
