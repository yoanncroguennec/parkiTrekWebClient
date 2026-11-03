import { styled } from "@mui/material/styles";
import { Box, LinearProgress, Stack } from "@mui/material";

// CONTENEUR PRINCIPAL
export const FooterContainer = styled(Stack)(({ theme }) => ({
  width: "100%",
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  padding: "16px 5vw",
  marginTop: "auto",
  flexShrink: 0,

  [theme.breakpoints.up("sm")]: {
    padding: "20px 5vw",
  },

  [theme.breakpoints.up("md")]: {
    padding: "22px 5vw",
  },

  [theme.breakpoints.up("lg")]: {
    padding: "24px 8vw",
  },
}));

// CONTENEUR DE LA BARRE
export const ProgressContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100%",
maxWidth: "70%",
  minWidth: 0,

  [theme.breakpoints.up("md")]: {
    maxWidth: 450,
  },

  [theme.breakpoints.up("lg")]: {
    maxWidth: 600,
  },
}));

// BARRE DE PROGRESSION
export const ProgressBar = styled(LinearProgress)(() => ({
  width: "100%",
  height: 4,
  borderRadius: 999,
  overflow: "hidden",
  backgroundColor: "rgba(255,255,255,0.22)",

  "& .MuiLinearProgress-bar": {
    borderRadius: 999,
    background:
      "linear-gradient(90deg, #22C55E 0%, #72C889 55%, #B7F34A 100%)",
  },

  "@media (prefers-reduced-motion: reduce)": {
    "& .MuiLinearProgress-bar": {
      transition: "none",
    },
  },
}));