import Image from "next/image";
import { styled, Box, IconButton, Stack, Typography } from "@mui/material";
import type { TypographyProps } from "@mui/material";

// CONTENEUR PRINCIPAL
export const HeaderContainer = styled(Stack)(({ theme }) => ({
  position: "relative",
  zIndex: 2,
  width: "100%",
  gap: theme.spacing(4),
  padding: "28px 5vw",

  [theme.breakpoints.up("sm")]: {
    gap: theme.spacing(5),
    padding: "40px 5vw",
  },

  [theme.breakpoints.up("md")]: {
    gap: theme.spacing(6),
    padding: "56px 5vw",
  },

  [theme.breakpoints.up("lg")]: {
    gap: theme.spacing(7),
    padding: "64px 8vw",
  },
}));

// PREMIÈRE LIGNE : IDENTITÉ ET NAVIGATION
export const HeaderTop = styled(Stack)(({ theme }) => ({
  width: "100%",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "space-between",
  gap: theme.spacing(3),

  [theme.breakpoints.up("md")]: {
    alignItems: "center",
    flexDirection: "row",
  },
}));

// GROUPE LOGO ET IDENTITÉ
export const BrandGroup = styled(Stack)(({ theme }) => ({
  flexDirection: "row",
  alignItems: "center",
  flexWrap: "wrap",
  gap: theme.spacing(1),
  minWidth: 0,

  [theme.breakpoints.up("sm")]: {
    gap: theme.spacing(2),
    flexWrap: "nowrap",
  },
}));

// LOGO
export const BrandLogo = styled(Image)(({ theme }) => ({
  display: "block",
  width: 76,
  height: 58,
  objectFit: "contain",
  flexShrink: 0,

  [theme.breakpoints.up("sm")]: {
    width: 110,
    height: 74,
  },

  [theme.breakpoints.up("md")]: {
    width: 150,
    height: 100,
  },
}));

// NOM DE LA MARQUE
export const BrandName = styled(Typography)<TypographyProps>(({ theme }) => ({
  color: "#FFFFFF",
  fontSize: 15,
  fontWeight: 800,
  letterSpacing: "1.5px",
  whiteSpace: "nowrap",

  [theme.breakpoints.up("sm")]: {
    fontSize: 18,
    letterSpacing: "2px",
  },

  [theme.breakpoints.up("md")]: {
    fontSize: 20,
  },
}));

// SIGNATURE DE LA MARQUE
export const BrandSubtitle = styled(Typography)<TypographyProps>(({ theme }) => ({
  color: "rgba(255,255,255,0.78)",
  fontSize: 11,
  letterSpacing: "1.5px",

  [theme.breakpoints.up("sm")]: {
    width: "auto",
    fontSize: 14,
    letterSpacing: "2px",
  },

  [theme.breakpoints.up("md")]: {
    fontSize: 16,
  },
}));

// COMPTEUR ET BOUTONS
export const GalleryNavigation = styled(Stack)(({ theme }) => ({
  width: "auto",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "flex-start",
  gap: theme.spacing(1),
  flexShrink: 0,

  [theme.breakpoints.up("sm")]: {
    gap: theme.spacing(1.5),
  },

  [theme.breakpoints.up("md")]: {
    gap: theme.spacing(2),
  },
}));

// NUMÉRO ACTIF
export const ActiveNumber = styled(Typography)<TypographyProps>(({ theme }) => ({
  color: "#FFFFFF",
  fontSize: 20,
  fontWeight: 800,
  lineHeight: 1,

  [theme.breakpoints.up("sm")]: {
    fontSize: 23,
  },

  [theme.breakpoints.up("md")]: {
    fontSize: 25,
  },
}));

// SÉPARATEUR DU COMPTEUR
export const CounterSeparator = styled(Typography)<TypographyProps>(({ theme }) => ({
  color: "#9BA197",
  fontSize: 20,
  fontWeight: 800,
  lineHeight: 1,

  [theme.breakpoints.up("sm")]: {
    fontSize: 23,
  },

  [theme.breakpoints.up("md")]: {
    fontSize: 25,
  },
}));

// NOMBRE TOTAL DE PHOTOS
export const TotalNumber = styled(Typography)<TypographyProps>(({ theme }) => ({
  color: "#646B63",
  fontSize: 20,
  fontWeight: 800,
  lineHeight: 1,

  [theme.breakpoints.up("sm")]: {
    fontSize: 23,
  },

  [theme.breakpoints.up("md")]: {
    fontSize: 25,
  },
}));

// GROUPE DES BOUTONS
export const NavigationButtons = styled(Stack)(({ theme }) => ({
  flexDirection: "row",
  alignItems: "center",
  gap: theme.spacing(0.75),
  marginLeft: theme.spacing(1),

  [theme.breakpoints.up("sm")]: {
    gap: theme.spacing(1),
    marginLeft: theme.spacing(1.5),
  },

  [theme.breakpoints.up("md")]: {
    marginLeft: theme.spacing(2),
  },
}));

// EMPLACEMENT FIXE DES BOUTONS
export const NavigationButtonSlot = styled(Box)(({ theme }) => ({
  width: 34,
  height: 34,
  flexShrink: 0,

  [theme.breakpoints.up("md")]: {
    width: 42,
    height: 42,
  },
}));

// BOUTON PRÉCÉDENT / SUIVANT
export const NavigationButton = styled(IconButton)(({ theme }) => ({
  width: "100%",
  height: "100%",
  padding: 0,
  backgroundColor: "rgba(255,255,255,0.85)",
  color: "#20251F",
  border: "1px solid rgba(255,255,255,0.6)",
  transition:
    "opacity 300ms ease, background-color 300ms ease, border-color 300ms ease, color 300ms ease",

  "&.is-visible": {
    opacity: 1,
    pointerEvents: "auto",
  },

  "&.is-hidden": {
    opacity: 0,
    pointerEvents: "none",
  },

  "&:hover": {
    backgroundColor: "#72C889",
    borderColor: "#72C889",
  },

  "&:focus-visible": {
    outline: "2px solid #B7F34A",
    outlineOffset: 3,
  },

  [theme.breakpoints.up("md")]: {
    "& svg": {
      width: 18,
      height: 18,
    },
  },
}));

// DEUXIÈME LIGNE : TITRE ET DESCRIPTION
export const HeaderHero = styled(Stack)(({ theme }) => ({
  width: "100%",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "space-between",
  gap: theme.spacing(3),

  [theme.breakpoints.up("sm")]: {
    gap: theme.spacing(4),
  },

  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
    alignItems: "center",
    gap: theme.spacing(4),
  },

  [theme.breakpoints.up("lg")]: {
    gap: theme.spacing(6),
  },
}));

// CONTENEUR DU TITRE
export const HeadlineContainer = styled(Box)({
  minWidth: 0,
  flex: "1 1 auto",
});

// TITRE PRINCIPAL
export const Headline = styled(Typography)<TypographyProps>(({ theme }) => ({
  color: "#FFFFFF",
  fontSize: "clamp(3rem, 13vw, 4.5rem)",
  fontWeight: 900,
  letterSpacing: "-0.055em",
  lineHeight: 0.98,
  textWrap: "balance",

  [theme.breakpoints.up("sm")]: {
    fontSize: "clamp(3.5rem, 7vw, 100px)",
    lineHeight: 0.94,
  },
}));

// MOT MIS EN ÉVIDENCE
export const HeadlineHighlight = styled("span")({
  display: "inline-block",
  background:
    "linear-gradient(110deg, #72C889 0%, #B7F34A 50%, #E1FF8B 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
});

// CONTENEUR DE LA DESCRIPTION
export const DescriptionPanel = styled(Stack)(({ theme }) => ({
  flex: "none",
  width: "100%",
  maxWidth: 520,
  minWidth: 0,
  paddingLeft: theme.spacing(1.5),
  borderLeft: "2px solid #22C55E",

  [theme.breakpoints.up("sm")]: {
    paddingLeft: theme.spacing(2),
    borderLeftWidth: 3,
  },

  [theme.breakpoints.up("md")]: {
    flex: "0 1 520px",
    width: "auto",
    paddingLeft: theme.spacing(3),
  },
}));

// TEXTE DESCRIPTIF
export const DescriptionText = styled(Typography)<TypographyProps>(({ theme }) => ({
  color: "rgba(255,255,255,0.9)",
  fontSize: 14,
  letterSpacing: "0.5px",
  lineHeight: 1.6,

  [theme.breakpoints.up("sm")]: {
    fontSize: 16,
    lineHeight: 1.7,
  },

  [theme.breakpoints.up("md")]: {
    fontSize: 18,
  },
}));