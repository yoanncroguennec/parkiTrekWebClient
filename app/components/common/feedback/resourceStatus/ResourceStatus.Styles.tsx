import { Box, CircularProgress, styled, Typography } from "@mui/material";

/* =========================================
   LOADING
========================================= */

export const GPXLoading = styled(Box)({
  position: "relative",

  width: "100%",
  height: 650,

  display: "flex",
  flexDirection: "column",

  alignItems: "center",
  justifyContent: "center",

  gap: 20,

  overflow: "hidden",

  borderRadius: 40,

  background: `
    radial-gradient(
      circle at 50% 20%,
      rgba(180,255,57,.08),
      transparent 40%
    ),
    linear-gradient(
      135deg,
      rgba(10,15,15,.98),
      rgba(5,8,8,.98)
    )
  `,

  border: "1px solid rgba(255,255,255,.08)",

  boxShadow: "0 40px 120px rgba(0,0,0,.35)",

  "&::before": {
    content: '""',

    position: "absolute",

    width: 300,
    height: 300,

    borderRadius: "50%",

    background: "rgba(180,255,57,.06)",

    filter: "blur(100px)",

    pointerEvents: "none",
  },
});

export const GPXLoadingSpinner = styled(CircularProgress)({
  position: "relative",
  zIndex: 1,

  width: "42px !important",

  height: "42px !important",

  color: "#B4FF39",

  filter: "drop-shadow(0 0 12px rgba(180,255,57,.4))",
});

export const GPXLoadingText = styled(Typography)({
  position: "relative",
  zIndex: 1,

  color: "rgba(255,255,255,.65)",

  fontSize: 13,

  letterSpacing: ".12em",

  textTransform: "uppercase",
});

/* =========================================
   ERROR
========================================= */

export const GPXError = styled(Box)({
  width: "100%",

  minHeight: 300,

  display: "flex",
  flexDirection: "column",

  alignItems: "center",
  justifyContent: "center",

  textAlign: "center",

  padding: 40,

  borderRadius: 40,

  background: `
    radial-gradient(
      circle at 50% 0%,
      rgba(255,80,80,.08),
      transparent 45%
    ),
    rgba(12,14,14,.96)
  `,

  border: "1px solid rgba(255,255,255,.08)",

  boxShadow: "0 30px 100px rgba(0,0,0,.3)",
});

export const GPXErrorTitle = styled(Typography)({
  color: "#fff",

  fontSize: 20,

  fontWeight: 500,

  marginBottom: 10,
});

export const GPXErrorText = styled(Typography)({
  maxWidth: 600,

  color: "rgba(255,255,255,.5)",

  fontSize: 14,

  lineHeight: 1.6,
});
