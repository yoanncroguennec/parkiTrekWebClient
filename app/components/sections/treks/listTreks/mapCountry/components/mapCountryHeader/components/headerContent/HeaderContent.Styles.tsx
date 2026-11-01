import { Box, BoxProps, Card, Stack, styled, Typography } from "@mui/material";

export const CardContainer = styled(Card)(({ theme }) => ({
  left: "0px",
  width: "auto",
  height: "auto",
  top: "0px",
  padding: "16px",
  position: "absolute",
  zIndex: 9999,

  [theme.breakpoints.up("md")]: {
    left: "50px",
    top: "50px",
  },
}));

export const HeaderTop = styled(Stack)(() => ({
  alignItems: "flex-start",
  flexDirection: "row",
  justifyContent: "space-between",
}));

/* ==========================================================================
 * BRAND
 * ========================================================================== */

export const BrandBadge = styled(Box)<BoxProps>(() => ({
  alignItems: "center",
  background: "rgba(255,255,255,.77)",
  backdropFilter: "blur(20px)",
  border: "2px solid #22C55E",
  borderRadius: 999,
  display: "inline-flex",
  flexShrink: 0,
  gap: 8,
  padding: "6px 12px",
}));

export const BrandBadgeIndicator = styled(Box)<BoxProps>(() => ({
  background: "#22c55e",
  borderRadius: "50%",
  boxShadow: "0 0 20px rgba(34,197,94,.6)",
  height: 8,
  width: 8,
}));

export const BrandBadgeText = styled(Typography)(({ theme }) => ({
  color: "#22c55e",
  fontWeight: 700,
  fontSize: "12.8px",
  letterSpacing: 2,

  [theme.breakpoints.up("md")]: {
    fontSize: "14.4px",
    letterSpacing: 3,
  },
}));

/* ==========================================================================
 * HEADER
 * ========================================================================== */

export const Title = styled(Typography)(({ theme }) => ({
  background: "linear-gradient(135deg,#1f2937,#4b5563)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  fontWeight: 900,
  lineHeight: 1.1,
  marginBottom: theme.spacing(2),

  fontSize: "32px",
  [theme.breakpoints.up("md")]: {
    fontSize: "40px",
  },
}));

export const Description = styled(Typography)(({ theme }) => ({
  color: "#6b7280",
  lineHeight: 1.8,
  maxWidth: "400px",
  fontSize: "16px",
  [theme.breakpoints.up("md")]: {
    fontSize: "16px",
  },
}));
