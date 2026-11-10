import { Box, Card, CardContent, Chip, Divider, IconButton, Typography } from "@mui/material";
import type { TypographyProps } from "@mui/material";
import { styled } from "@mui/material/styles";
import { C } from "../../data/calendar.data";
import Image from "next/image";

/* =========================================================
   01 — CARD CONTAINER
   Conteneur principal de la fiche événement
========================================================= */

export const EventDetailsCardRoot = styled(Card)(() => ({
  position: "relative",
  width: "100%",
  borderRadius: "0 24px 24px 0",
  backgroundColor: C.card,
  border: `11px solid ${C.border}`,
  boxShadow: "0 25px 80px rgba(17,17,17,0.18)",
  transform: "perspective(1000px) rotateY(-5deg)",
  transformOrigin: "right center",
  overflow: "hidden",
}));

/* =========================================================
   02 — HERO IMAGE
   Image principale et éléments superposés
========================================================= */

export const EventHeroContainer = styled(Box)(() => ({
  position: "relative",
  width: "100%",
  height: 140,
  overflow: "hidden",
}));

export const EventHeroImage = styled(Image)(() => ({
  display: "block",
  objectFit: "cover",
  objectPosition: "center",
}));

/* =========================================================
   03 — IMAGE OVERLAY
   Dégradé de contraste sur l'image
========================================================= */

export const EventHeroOverlay = styled(Box)(() => ({
  position: "absolute",
  inset: 0,
  background: "linear-gradient(90deg, rgba(0,0,0,0.05) 35%, rgba(0,0,0,0.55) 100%)",
  pointerEvents: "none",
}));

/* =========================================================
   04 — DATE BADGE
   Badge de date positionné sur l'image
========================================================= */

export const EventDateBadge = styled(Box)(() => ({
  position: "absolute",
  right: 12,
  bottom: 12,
  zIndex: 2,
  minWidth: 62,
  padding: "6px 10px",
  borderRadius: "10px",
  color: "#FFFFFF",
  textAlign: "center",
  backgroundColor: "rgba(17,17,17,0.55)",
  backdropFilter: "blur(10px)",
  border: "1px solid rgba(255,255,255,0.2)",
}));

export const EventDateMonth = styled(Typography)(() => ({
  fontSize: 10,
  fontWeight: 700,
  textTransform: "uppercase",
  letterSpacing: "0.12em",
}));

export const EventDateDay = styled(Typography)(() => ({
  fontSize: 27,
  fontWeight: 800,
  lineHeight: 1.1,
}));

export const EventDateYear = styled(Typography)(() => ({
  fontSize: 10,
  fontWeight: 500,
  opacity: 0.85,
}));

/* =========================================================
   05 — CLOSE BUTTON
   Bouton de fermeture de la fiche
========================================================= */

export const EventCloseButton = styled(IconButton)(() => ({
  position: "absolute",
  top: 8,
  right: 8,
  zIndex: 3,
  width: 32,
  height: 32,
  color: "#FFFFFF",
  backgroundColor: "rgba(17,17,17,0.55)",
  backdropFilter: "blur(8px)",
  border: "1px solid rgba(255,255,255,0.25)",
  transition: "all 200ms ease",

  "&:hover": {
    backgroundColor: "rgba(17,17,17,0.85)",
    transform: "scale(1.05)",
  },
}));

/* =========================================================
   06 — CONTENT CONTAINER
   Zone contenant les informations de l'événement
========================================================= */

export const EventContentContainer = styled(Box)(() => ({
  cursor: "default",
}));

export const EventCardContent = styled(CardContent)(() => ({
  padding: 20,

  "&:last-child": {
    paddingBottom: 20,
  },
}));

/* =========================================================
   07 — EVENT TITLE
   Titre principal de l'événement
========================================================= */

export const EventTitle = styled(Typography)<TypographyProps>(() => ({
  fontSize: 22,
  fontWeight: 800,
  lineHeight: 1.2,
  letterSpacing: "-0.03em",
  color: C.dark,
}));

/* =========================================================
   08 — EVENT CATEGORY
   Badge de catégorie
========================================================= */

export const EventCategoryChip = styled(Chip)(() => ({
  fontWeight: 600,
  borderRadius: "6px",
}));

/* =========================================================
   09 — SEPARATORS
   Séparateurs entre les sections
========================================================= */

export const EventDetailsDivider = styled(Divider)(() => ({
  marginTop: 20,
  marginBottom: 20,
  borderColor: "rgba(0,0,0,0.06)",
}));

/* =========================================================
   10 — EVENT INFORMATION
   Lignes d'informations : date, horaires, lieu
========================================================= */

export const InfoRow = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  gap: 12,

  "& + &": {
    marginTop: 16,
  },
}));

export const InfoText = styled(Typography)(() => ({
  fontSize: 13,
  color: C.dark,
}));

/* =========================================================
   11 — EVENT DESCRIPTION
   Description textuelle de l'événement
========================================================= */

export const EventDescription = styled(Typography)(() => ({
  color: "text.secondary",
  fontSize: 13,
  lineHeight: 1.7,
}));

/* =========================================================
   12 — PRIMARY BUTTON APPEARANCE
   Apparence du bouton d'action principal
========================================================= */

export const eventDetailsButtonAppearance = {
  variant: "contained" as const,
  background: "linear-gradient(90deg, #22c55e, #84cc16)",
  boxShadow: "0 15px 35px rgba(34,197,94,.35)",
  backgroundHover: "linear-gradient(90deg, #22c55e, #84cc16)",
};
