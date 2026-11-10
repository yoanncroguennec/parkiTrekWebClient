import { styled, Box, Stack, Typography } from "@mui/material";
import type { TypographyProps } from "@mui/material";

import { C } from "../../data/calendar.data";

// Conteneur principal avec image de fond
export const HeaderContainer = styled(Stack)(({ theme }) => ({
  backgroundImage: "url('/assets/imgs/trek-dashboard/explorerScreen/calendar/bgHeader.png')",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
  borderTopLeftRadius: 60,
  borderTopRightRadius: 60,

  [theme.breakpoints.up("md")]: {
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
  },
}));

// Overlay sombre
export const HeaderOverlay = styled(Stack)(({ theme }) => ({
  background: "rgba(0, 0, 0, 0.3)",
  borderTopLeftRadius: 60,
  borderTopRightRadius: 60,
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "flex-start",
  padding: theme.spacing(4, 3),
  width: "100%",
  gap: theme.spacing(3),

  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
    alignItems: "center",
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    padding: theme.spacing(6.25),
  },
}));

// Titre principal
export const HeaderTitle = styled(Typography)<TypographyProps>(({ theme }) => ({
  color: "#FFF",
  fontFamily: '"Bodoni Moda", "Didot", "Times New Roman", serif',
  fontSize: 42,
  fontWeight: 400,
  lineHeight: 0.95,
  letterSpacing: "0.02em",
  fontStyle: "italic",
  padding: theme.spacing(2, 0),
  textTransform: "uppercase",
  textAlign: "left",

  [theme.breakpoints.up("sm")]: {
    fontSize: 58,
  },

  [theme.breakpoints.up("md")]: {
    fontSize: 80,
    lineHeight: 0.78,
    letterSpacing: "0.05em",
    padding: theme.spacing(3.125, 0),
    textAlign: "center",
  },
}));

// Badge circulaire
export const HeaderBadge = styled(Box)(({ theme }) => ({
  width: 76,
  height: 76,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
  border: `1px solid ${C.greenDark}`,
  borderRadius: "50%",
  transform: "rotate(-15deg)",

  [theme.breakpoints.up("md")]: {
    width: 116,
    height: 116,
  },
}));

// SVG du badge
export const HeaderBadgeSvg = styled("svg")(() => ({
  width: "85%",
  height: "85%",
}));
