import { styled, Box, IconButton, Stack, Typography } from "@mui/material";
import type { TypographyProps } from "@mui/material";
import { C } from "../../data/calendar.data";

// Conteneur principal
export const ToolbarContainer = styled(Stack)(({ theme }) => ({
  flexDirection: "column",
  width: "100%",

  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
  },
}));

// Navigation du calendrier
export const ToolbarNavigation = styled(Stack)(({ theme }) => ({
  order: 2,
  flex: 1,
  flexDirection: "row",
  alignItems: "center",
  gap: theme.spacing(1),
  minWidth: 0,

  [theme.breakpoints.up("md")]: {
    order: 1,
  },
}));

// Boutons de navigation
export const ToolbarNavigationButton = styled(IconButton)(() => ({
  width: 42,
  height: 42,
  flexShrink: 0,
  border: `1px solid ${C.border}`,
  borderRadius: "50%",
  color: C.dark,
  transition: "all 200ms ease",

  "&:hover": {
    backgroundColor: C.green,
    borderColor: C.green,
  },
}));

// Bouton précédent
export const ToolbarPreviousButton = styled(ToolbarNavigationButton)(() => ({
  "&:hover": {
    backgroundColor: C.green,
    borderColor: C.green,
    transform: "translateX(-2px)",
  },
}));

// Bouton suivant
export const ToolbarNextButton = styled(ToolbarNavigationButton)(() => ({
  "&:hover": {
    backgroundColor: C.green,
    borderColor: C.green,
    transform: "translateX(2px)",
  },
}));

// Titre du mois
export const ToolbarMonthTitle = styled(Typography)<TypographyProps>(({ theme }) => ({
  marginTop: theme.spacing(0.75),
  fontSize: 28,
  fontWeight: 900,
  letterSpacing: "-0.06em",
  textTransform: "capitalize",
  whiteSpace: "nowrap",

  [theme.breakpoints.up("md")]: {
    fontSize: 38,
  },
}));

// Conteneur du sélecteur de vue
export const ToolbarViewContainer = styled(Box)(({ theme }) => ({
  order: 1,
  flexShrink: 0,
  marginBottom: theme.spacing(2),

  [theme.breakpoints.up("md")]: {
    order: 2,
    marginBottom: 0,
    marginLeft: theme.spacing(2),
  },
}));
