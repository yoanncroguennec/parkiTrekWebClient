import { Box, Stack, styled, Typography } from "@mui/material";

export const HeroBenefitsContainer = styled(Stack)(({ theme }) => ({
  position: "relative",
  width: "100%",
  maxWidth: "1100px",
  margin: "auto auto 0",
  left: "auto",
  bottom: "auto",
  transform: "none",
  flexShrink: 0,

  [theme.breakpoints.up("md")]: {
    position: "absolute",
    bottom: 0,
    left: "50%",
    transform: "translateX(-50%)",
    width: "70vw",
    margin: 0,
  },
}));

export const HeroBenefitsContent = styled(Stack)(({ theme }) => ({
  position: "relative",
  zIndex: 1,

  display: "grid",
  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
  justifyContent: "center",
  alignItems: "start",
  gap: theme.spacing(2, 1),
  padding: theme.spacing(2, 1),

  [theme.breakpoints.up("md")]: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px",
    gap: theme.spacing(2),
  },
}));

export const BenefitItem = styled(Stack)(({ theme }) => ({
  minWidth: 0,
  alignItems: "center",
  textAlign: "center",
  gap: theme.spacing(0.75),
}));

export const HeroBenefitsBackground = styled("svg")(({ theme }) => ({
  position: "absolute",
  inset: 0,
  width: "100%",
  height: "100%",
  filter: "drop-shadow(0 8px 20px rgba(0,0,0,0.035))",
  pointerEvents: "none",

  [theme.breakpoints.down("md")]: {},
}));

export const BenefitIcon = styled(Box, {
  // Bloquer la transmission de iconColor au DOM
  shouldForwardProp: (prop) => prop !== "iconColor",
})<{ iconColor: string }>(({ theme, iconColor }) => ({
  width: "42px",
  height: "42px",
  flexShrink: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  color: iconColor,
  border: `1px solid ${iconColor}`,
  background: `linear-gradient(135deg, ${iconColor}20, ${iconColor}05)`,
  borderRadius: "50%",

  "& svg": {
    width: "20px",
    height: "20px",
  },

  [theme.breakpoints.up("md")]: {
    width: "55px",
    height: "55px",

    "& svg": {
      width: "24px",
      height: "24px",
    },
  },
}));

export const BenefitText = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "textColor",
})<{ textColor: string }>(({ theme, textColor }) => ({
  color: "#FFF",
  textShadow: `1px 1px 3px ${textColor}`,
  fontSize: "10px",
  fontWeight: 600,
  lineHeight: 1.2,
  overflowWrap: "anywhere",

  [theme.breakpoints.up("sm")]: {
    fontSize: "12px",
  },

  [theme.breakpoints.up("md")]: {
    fontSize: "16px",
    overflowWrap: "normal",
  },
}));
