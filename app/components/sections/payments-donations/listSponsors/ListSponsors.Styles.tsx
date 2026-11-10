import Image from "next/image";
import { Box, Stack, Typography, styled } from "@mui/material";
import type { BoxProps } from "@mui/material";

export const ListSponsorsContainer = styled(Box)(() => ({
  width: "100%",
  minWidth: 0,
  overflow: "hidden",
  backgroundColor: "#FFFFFF",
}));

/* =========================================================
   02 — WRAPPER
   Conteneur des différentes lignes de sponsors
========================================================= */

export const Wrapper = styled(Stack)(({ theme }) => ({
  width: "100%",
  margin: "25px 0",
  gap: theme.spacing(2),

  [theme.breakpoints.up("md")]: {
    margin: "50px 0",
    gap: theme.spacing(3),
  },
}));

/* =========================================================
   03 — ROW
   Ligne regroupant une catégorie et son marquee
========================================================= */

export const Row = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  width: "100%",
  minWidth: 0,
}));

/* =========================================================
   04 — CATEGORY
   Libellé vertical de la catégorie
========================================================= */

export const Category = styled(Typography)(({ theme }) => ({
  // MOBILE
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,

  minWidth: "38px",
  maxWidth: "38px",

  padding: "15px 5px",

  backgroundColor: "rgba(0,0,0,.1)",
  borderTopLeftRadius: "18px",
  borderBottomLeftRadius: "18px",

  writingMode: "vertical-rl",
  textOrientation: "mixed",
  transform: "rotate(180deg)",

  fontSize: "0.85rem",
  fontWeight: 900,
  lineHeight: 1.2,
  textAlign: "center",

  // DESKTOP
  [theme.breakpoints.up("md")]: {
    minWidth: "65px",
    maxWidth: "65px",
    padding: "30px 10px",

    borderTopLeftRadius: "25px",
    borderBottomLeftRadius: "25px",

    fontSize: "2rem",
  },
}));

/* =========================================================
   05 — MARQUEE
   Zone de défilement horizontal
========================================================= */

export const Marquee = styled(Box)(({ theme }) => ({
  // MOBILE
  position: "relative",
  width: "100%",
  minWidth: 0,

  overflow: "hidden",

  paddingTop: "30px",
  paddingBottom: "30px",

  // DESKTOP
  [theme.breakpoints.up("md")]: {
    paddingTop: "55px",
    paddingBottom: "55px",
  },
}));

/* =========================================================
   06 — MARQUEE CONTENT
   Contenu animé par GSAP
========================================================= */

export const MarqueeContent = styled(Stack)(() => ({
  display: "flex",
  flexDirection: "row",
  flexWrap: "nowrap",

  width: "max-content",
  minWidth: "max-content",

  overflow: "visible",
}));

/* =========================================================
   07 — SPONSOR CARD
   Carte individuelle du sponsor
========================================================= */

export const Card = styled(Box)(({ theme }) => ({
  // MOBILE
  position: "relative",
  flex: "0 0 auto",

  width: "220px",

  margin: "0 8px",

  borderRadius: "18px",
  overflow: "hidden",

  boxShadow: "0 12px 25px rgba(0,0,0,.12)",

  cursor: "pointer",

  transformOrigin: "center",
  transition: "transform .4s ease, box-shadow .4s ease",

  zIndex: 1,

  // DESKTOP
  [theme.breakpoints.up("md")]: {
    width: "260px",
    margin: "0 24px",
    borderRadius: "25px",

    "&:hover": {
      transform: "scale(1.25)",
      boxShadow: "0 25px 50px rgba(0,0,0,.20)",
      zIndex: 100,
    },

    "&:hover ~ *": {
      zIndex: 1,
    },
  },
}));

/* =========================================================
   08 — SPONSOR IMAGE
   Image principale de la carte
========================================================= */

export const SponsorImage = styled(Image)(({ theme }) => ({
  display: "block",

  width: "100%",
  height: "140px",

  objectFit: "cover",
  objectPosition: "center",

  [theme.breakpoints.up("md")]: {
    height: "180px",
  },
}));

/* =========================================================
   09 — CARD HEADER
   Logo et titre du sponsor
========================================================= */

export const CardHeader = styled(Stack)(({ theme }) => ({
  position: "absolute",
  top: "12px",
  left: "12px",
  zIndex: 2,

  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: theme.spacing(0.75),

  maxWidth: "calc(100% - 24px)",

  [theme.breakpoints.up("md")]: {
    top: "20px",
    left: "20px",
    gap: theme.spacing(1),
    maxWidth: "calc(100% - 40px)",
  },
}));

/* =========================================================
   10 — SPONSOR LOGO
   Logo secondaire du sponsor
========================================================= */

export const LogoImage = styled(Image)(({ theme }) => ({
  display: "block",
  flexShrink: 0,

  width: "24px",
  height: "24px",

  objectFit: "contain",

  [theme.breakpoints.up("md")]: {
    width: "30px",
    height: "30px",
  },
}));

/* =========================================================
   11 — CARD TITLE
   Nom du sponsor
========================================================= */

export const CardTitle = styled(Typography)(({ theme }) => ({
  minWidth: 0,

  color: "#FFFFFF",
  fontSize: "0.85rem",
  fontWeight: 200,
  lineHeight: 1.2,

  textShadow: "0 4px 12px rgba(0,0,0,.6)",

  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",

  pointerEvents: "none",

  [theme.breakpoints.up("md")]: {
    fontSize: "1.15rem",
  },
}));

/* =========================================================
   12 — CARD INFOS
   Informations financières du sponsor
========================================================= */

export const CardInfos = styled(Stack)(({ theme }) => ({
  position: "absolute",
  left: "12px",
  bottom: "12px",

  alignItems: "flex-start",
  gap: theme.spacing(0.5),

  [theme.breakpoints.up("md")]: {
    left: "20px",
    bottom: "20px",
  },
}));

/* =========================================================
   13 — CARD AMOUNT
   Montant collecté
========================================================= */

export const CardAmount = styled(Typography)(({ theme }) => ({
  color: "#FFFFFF",
  fontSize: "1.15rem",
  fontWeight: 900,
  lineHeight: 1.1,

  [theme.breakpoints.up("md")]: {
    fontSize: "1.8rem",
  },
}));

/* =========================================================
   14 — CARD SUBTITLE
   Libellé du montant collecté
========================================================= */

export const CardSubtitle = styled(Typography)(({ theme }) => ({
  color: "#FFFFFF",
  fontSize: "0.75rem",
  fontWeight: 500,
  lineHeight: 1.3,

  [theme.breakpoints.up("md")]: {
    fontSize: "1rem",
  },
}));

/* =========================================================
   15 — ARROW CONTAINER
   Indicateur de navigation de la carte
========================================================= */
export const ArrowContainer = styled(Box)<BoxProps>(({ theme }) => ({
  position: "absolute",
  right: "10px",
  bottom: "10px",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  "& svg": {
    width: "22px",
    height: "22px",
  },

  [theme.breakpoints.up("md")]: {
    right: "15px",
    bottom: "20px",

    "& svg": {
      width: "36px",
      height: "36px",
    },
  },
}));
