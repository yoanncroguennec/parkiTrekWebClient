import { Box, Stack, styled } from "@mui/material";

export const CalendarSectionContainer = styled(Stack, {
  shouldForwardProp: (prop) => prop !== "isEventDetailsOpen",
})<{ isEventDetailsOpen: boolean }>(({ theme, isEventDetailsOpen }) => ({
  position: "relative",
  flexDirection: "column",
  width: "100%",
  overflow: "visible",

  // Adaptation lorsque la fiche est ouverte
  opacity: isEventDetailsOpen ? 1 : 1,

  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
    gap: theme.spacing(3),
  },
}));

export const CalendarGridContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  overflow: "visible",
  flex: 1,
  minWidth: 0,
  zIndex: 2,

  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));

// Carte des détails flottante
export const CalendarEventDetailsContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== "isEventDetailsOpen",
})<{ isEventDetailsOpen: boolean }>(({ isEventDetailsOpen }) => ({
  position: "fixed",
  top: 120,
  right: 32,
  zIndex: 1500,
  width: 345,
  maxWidth: "calc(100vw - 32px)",
  opacity: isEventDetailsOpen ? 1 : 0,
  transform: isEventDetailsOpen ? "translateX(0)" : "translateX(350px)",
  animation: isEventDetailsOpen
    ? "eventCardSlideIn 450ms cubic-bezier(0.22, 1, 0.36, 1) both"
    : "none",
  pointerEvents: isEventDetailsOpen ? "auto" : "none",

  "@keyframes eventCardSlideIn": {
    from: {
      opacity: 0,
      transform: "translateX(350px)",
    },
    to: {
      opacity: 1,
      transform: "translateX(0)",
    },
  },
}));

export const Separator = styled(Box)(() => ({
  height: "4px",
  background: "linear-gradient(to right, transparent, rgba(139,146,112,.5), transparent)",
}));
