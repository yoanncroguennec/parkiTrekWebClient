import { Box, Stack, Typography, styled } from "@mui/material";

/* =========================================================
   01 — MAIN CONTAINER
   Conteneur général de la légende et des signatures
========================================================= */

export const CalendarLegendFooterContainer = styled(Stack)(({ theme }) => ({
  alignItems: "center",
  flexDirection: "row",
  justifyContent: "space-between",
  flexWrap: "wrap",
  gap: theme.spacing(2),
  width: "100%",
  padding: "15px",

  [theme.breakpoints.down("md")]: {
    justifyContent: "center",
  },

  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "15px 5px",
  },
}));

/* =========================================================
   02 — LEGEND
   Conteneur des catégories
========================================================= */

export const CalendarLegendContainer = styled(Stack)(({ theme }) => ({
  alignItems: "center",
  background: "",
  borderRadius: "25px",
  boxShadow:
    "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
  border: "3px solid red",
  flexDirection: "row",
  flexWrap: "wrap",
  gap: theme.spacing(2),
  padding: "12px",
}));

/* =========================================================
   03 — LEGEND ITEM
   Élément individuel de la légende
========================================================= */

export const CalendarLegendItem = styled(Stack)(({ theme }) => ({
  alignItems: "center",
  flexDirection: "row",
  gap: theme.spacing(1),
}));

/* =========================================================
   04 — LEGEND COLOR
   Indicateur coloré de la catégorie
========================================================= */

export const CalendarLegendColor = styled(Box, {
  shouldForwardProp: (prop) => prop !== "dotColor",
})<{ dotColor: string }>(({ dotColor }) => ({
  flexShrink: 0,
  width: 9,
  height: 9,
  borderRadius: "50%",
  backgroundColor: dotColor,
}));

/* =========================================================
   05 — LEGEND LABEL
   Nom de la catégorie
========================================================= */

export const CalendarLegendLabel = styled(Typography)(() => ({
  fontSize: 11,
  fontWeight: 600,
  color: "#536258",
}));

/* =========================================================
   06 — FOOTER SIGNATURE
   Signature éditoriale de Parki Trek
========================================================= */

export const FooterSignature = styled(Typography)(() => ({
  fontSize: "15px",
  fontWeight: 500,
  fontStyle: "italic",
  color: "#346C45",
}));

/* =========================================================
   07 — FOOTER BRAND
   Identité de marque Parki Trek
========================================================= */

export const FooterBrand = styled(Typography)(() => ({
  fontSize: 10,
  fontWeight: 800,
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  color: "#263F31",
}));
