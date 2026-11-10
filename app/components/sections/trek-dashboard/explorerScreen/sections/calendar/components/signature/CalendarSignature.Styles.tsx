import { styled, Box, Stack } from "@mui/material";
import { C } from "../../data/calendar.data";
//

export const CalendarSignatureContainer = styled(Stack)(({ theme }) => ({
  flexShrink: 0,
  alignItems: "flex-start",
  justifyContent: "flex-end",
  color: C.dark,
  zIndex: 1,

  [theme.breakpoints.down("md")]: {
    position: "absolute",
    bottom: 0,
    left: 0,
    opacity: 0.25,
    pointerEvents: "none",
  },
}));

// Conteneur de l'image
export const CalendarImageContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  width: 210,

  [theme.breakpoints.up("md")]: {
    width: 280,
  },
}));

// Badge circulaire
export const CalendarBadge = styled(Stack)(({ theme }) => ({
  position: "absolute",
  bottom: -40,
  right: -15,
  zIndex: 2,
  width: 150,
  height: 150,
  alignItems: "center",
  justifyContent: "center",
  border: "1px solid rgba(52, 108, 69, 0.55)",
  borderRadius: "50%",
  backgroundColor: "#F4F2EC",

  [theme.breakpoints.up("md")]: {
    bottom: 40,
    right: -25,
    width: 210,
    height: 210,
  },
}));

// Cercle intérieur
export const CalendarBadgeInner = styled(Stack)(() => ({
  width: "82%",
  height: "82%",
  alignItems: "center",
  justifyContent: "center",
  border: "1px dashed rgba(52, 108, 69, 0.45)",
  borderRadius: "50%",
}));

// Texte PARKI TREK
export const CalendarBadgeBrand = styled("div")(({ theme }) => ({
  color: "#346C45",
  fontSize: 8,
  fontWeight: 700,
  letterSpacing: ".24em",

  [theme.breakpoints.up("md")]: {
    fontSize: 10,
  },
}));

// Numéro du jour
export const CalendarBadgeDay = styled("div")(({ theme }) => ({
  fontFamily: '"Bodoni Moda", "Didot", "Times New Roman", serif',
  fontSize: 48,
  fontWeight: 400,
  fontStyle: "italic",
  lineHeight: 0.78,
  letterSpacing: "-0.075em",

  [theme.breakpoints.up("md")]: {
    fontSize: 82,
  },
}));

// Texte RENDEZ-VOUS
export const CalendarBadgeLabel = styled("div")(({ theme }) => ({
  marginTop: theme.spacing(2),
  marginLeft: theme.spacing(0.5),
  fontFamily: '"Montserrat", "Arial", sans-serif',
  fontSize: 9,
  fontWeight: 700,
  letterSpacing: "0.2em",
  lineHeight: 1.4,
  whiteSpace: "nowrap",

  [theme.breakpoints.up("md")]: {
    fontSize: 13,
    letterSpacing: "0.38em",
  },
}));

// Baseline du badge
export const CalendarBadgeFooter = styled("div")(({ theme }) => ({
  marginTop: theme.spacing(1),
  color: "#111",
  fontSize: 7,
  fontWeight: 600,
  letterSpacing: ".16em",

  [theme.breakpoints.up("md")]: {
    fontSize: 9,
  },
}));
