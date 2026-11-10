import { alpha, Box, InputBase, styled } from "@mui/material";

/* =========================================================
   01 — ROOT CONTAINER
   Conteneur principal du champ de saisie
========================================================= */

export const AwardInputRoot = styled(Box)(({ theme }) => ({
  // MOBILE
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(2),

  width: "70vw",
  maxWidth: "400px",
  height: "72px",
  padding: "0 9.6px",
  boxSizing: "border-box",

  borderRadius: "999px",
  backgroundColor: "rgba(255, 255, 255, 0.5)",
  border: "1px solid rgba(255,255,255,.08)",

  transition: "border-color .35s ease, box-shadow .35s ease",

  // INTERACTIONS
  "&:hover": {
    borderColor: "rgba(255,255,255,.18)",
  },

  "&:focus-within": {
    borderColor: "#FFB800",
    boxShadow: `0 0 0 6px ${alpha("#FFB800", 0.08)}`,
  },

  // DESKTOP
  [theme.breakpoints.up("md")]: {
    width: "400px",
  },
}));

/* =========================================================
   02 — START ICON
   Conteneur de l'icône à gauche
========================================================= */

export const AwardInputStartIcon = styled(Box)(({ theme }) => ({
  display: "grid",
  placeItems: "center",

  width: "52px",
  height: "52px",
  flexShrink: 0,

  borderRadius: "50%",
  backgroundColor: "#1A1A1A",
  color: "#FFFFFF",

  fontSize: "20px",

  "& svg": {
    width: "1em",
    height: "1em",
  },

  // DESKTOP
  [theme.breakpoints.up("md")]: {
    fontSize: "24px",
  },
}));

/* =========================================================
   03 — INPUT FIELD
   Champ de saisie du montant personnalisé
========================================================= */

export const AwardInputField = styled(InputBase)(({ theme }) => ({
  flex: 1,
  minWidth: 0,

  color: "#FFFFFF",
  fontSize: "17px",
  fontWeight: 500,

  "& .MuiInputBase-input": {
    minWidth: 0,
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },

  // PLACEHOLDER
  "& .MuiInputBase-input::placeholder": {
    color: "rgba(255,255,255,.45)",
    opacity: 1,
  },
}));

/* =========================================================
   04 — END ICON
   Conteneur de l'icône à droite
========================================================= */

export const AwardInputEndIcon = styled(Box)(({ theme }) => ({
  display: "grid",
  placeItems: "center",

  width: "80px",
  height: "52px",
  flexShrink: 0,

  borderRadius: "999px",
  backgroundColor: "#F5F5F5",
  color: "#111111",

  fontSize: "20px",
  cursor: "pointer",

  transition: "transform .3s ease, background-color .3s ease",

  "& svg": {
    width: "1em",
    height: "1em",
  },

  "&:hover": {
    transform: "scale(1.08)",
  },

  // DESKTOP
  [theme.breakpoints.up("md")]: {
    fontSize: "24px",
  },
}));
