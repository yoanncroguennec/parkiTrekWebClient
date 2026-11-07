// GOOD
// ATTENTION ! Conserver <text>, pour un texte intégré au SVG, garde les balises <text>
import { styled } from "@mui/material";

export const CircleCTAContainer = styled("svg")(({ theme }) => ({
  width: "100%",
  height: "100%",

  [theme.breakpoints.up("md")]: {},
}));

export const CircleCTAAction = styled("g")(() => ({
  cursor: "pointer",
}));

export const CircleCTABackground = styled("circle")(() => ({
  transition: "transform .35s ease, filter .35s ease",
  transformOrigin: "center",
}));

export const CircleCTAOutline = styled("circle")(() => ({
  transition: "transform .35s ease",
  transformOrigin: "center",
}));

// ATTENTION : conserver <text> pour les textes SVG
export const CircleCTAText = styled("text")(() => ({
  fill: "#FFF",
  textAnchor: "middle",
  pointerEvents: "none",
  userSelect: "none",
}));

export const CircleCTATitle = styled(CircleCTAText)(({ theme }) => ({
  fontSize: 20,
  fontWeight: 700,
  textShadow: "0 2px 8px rgba(255, 0, 0, 1)",

  [theme.breakpoints.up("md")]: {
    fontSize: 28,
  },
}));

export const CircleCTASubtitle = styled(CircleCTAText)(({ theme }) => ({
  fontSize: 14,
  fontWeight: 700,
  textShadow: "0 2px 8px rgba(255, 0, 0, 1)",

  [theme.breakpoints.up("md")]: {
    fontSize: 18,
  },
}));

export const CircleCTALabel = styled(CircleCTAText)(({ theme }) => ({
  fontSize: 11,
  fontWeight: 700,

  [theme.breakpoints.up("md")]: {
    fontSize: 14,
  },
}));
