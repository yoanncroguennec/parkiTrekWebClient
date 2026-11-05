import Image from "next/image";
import { styled, Box, IconButton, Stack, Typography } from "@mui/material";
import type { BoxProps, TypographyProps } from "@mui/material";

// ======================================================
// CONTENEUR HORIZONTAL
// ======================================================

export const ContentTrack = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(2),
  width: "max-content",
  paddingInline: "5vw",
  boxSizing: "border-box",
  willChange: "transform",

  [theme.breakpoints.up("md")]: {
    gap: theme.spacing(3),
    paddingInline: "8vw",
  },
}));

// ======================================================
// CARTE PHOTO
// ======================================================

export const PhotoCard = styled(Box)<BoxProps>(({ theme }) => ({
  cursor: "pointer",
  position: "relative",
  flex: "0 0 auto",

  width: "80vw",
  height: "45vh",
  minHeight: 280,
  maxHeight: 520,

  overflow: "hidden",
  isolation: "isolate",
  boxSizing: "border-box",

  borderTopLeftRadius: "40%",
  borderBottomRightRadius: "50%",

  backgroundColor: "#D9DDD5",
  aspectRatio: "2.8 / 1",

  clipPath: "polygon(10% 8%, 96% 0%, 100% 12%, 91% 100%, 3% 100%, 0% 88%)",

  "&:hover .gallery-image": {
    transform: "scale(1.045)",
  },

  "&:hover .gallery-arrow": {
    backgroundColor: "#72C889",
    color: "#20251F",
    transform: "rotate(45deg)",
  },

  [theme.breakpoints.up("md")]: {
    width: "68vw",
    height: "45svh",
    minHeight: 380,
    maxHeight: 680,

    borderTopLeftRadius: "40%",
    borderBottomRightRadius: "58%",
  },

  "@media (hover: none)": {
    "&:hover .gallery-image": {
      transform: "none",
    },

    "&:hover .gallery-arrow": {
      backgroundColor: "rgba(255,255,255,0.1)",
      color: "#FFFFFF",
      transform: "none",
    },
  },

  "@media (prefers-reduced-motion: reduce)": {
    "& .gallery-image": {
      transition: "none",
    },
  },
}));

// ======================================================
// IMAGE
// ======================================================

export const GalleryImage = styled(Image)(({ theme }) => ({
  objectFit: "cover",
  objectPosition: "center",
  transition: "transform 900ms cubic-bezier(0.2, 0.65, 0.3, 1)",

  [theme.breakpoints.up("md")]: {
    objectPosition: "center",
  },
}));

// ======================================================
// DÉGRADÉ
// ======================================================

export const ImageOverlay = styled(Box)({
  position: "absolute",
  inset: 0,
  zIndex: 0,
  pointerEvents: "none",

  background:
    "linear-gradient(180deg, rgba(12,20,14,0.12) 0%, rgba(12,20,14,0.02) 30%, rgba(12,20,14,0.48) 65%, rgba(12,20,14,0.88) 100%)",
});

// ======================================================
// EN-TÊTE : CATÉGORIE ET NUMÉRO
// ======================================================

export const PhotoHeader = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: 16,
  left: 16,
  right: 16,

  display: "flex",
  alignItems: "flex-start",
  justifyContent: "space-between",
  gap: theme.spacing(1),

  zIndex: 1,

  [theme.breakpoints.up("md")]: {
    top: 28,
    left: 28,
    right: 28,
  },
}));

// ======================================================
// CATÉGORIE
// ======================================================

export const PhotoCategory = styled(Box)(({ theme }) => ({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",

  width: "fit-content",
  maxWidth: "75%",
  minWidth: 0,

  margin: "15px 30px",
  padding: "8px 10px",

  border: "1px solid rgba(255,255,255,0.35)",
  borderRadius: 999,

  backgroundColor: "rgba(20,30,22,0.3)",
  backdropFilter: "blur(12px)",
  WebkitBackdropFilter: "blur(12px)",

  "& .MuiTypography-root": {
    fontSize: 9,
    fontWeight: 800,
    letterSpacing: "0.1em",
    lineHeight: 1.4,
    overflowWrap: "anywhere",
  },

  [theme.breakpoints.up("md")]: {
    padding: "9px 16px",
    margin: "15px 150px",
    "& .MuiTypography-root": {
      fontSize: 11,
      letterSpacing: "0.14em",
    },
  },
}));

// ======================================================
// NUMÉRO
// ======================================================

export const PhotoNumber = styled(Typography)<TypographyProps>(({ theme }) => ({
  // flexShrink: 0,

  color: "#FFFFFF",
  fontSize: 24,
  fontWeight: 800,
  lineHeight: 1,
  letterSpacing: "-0.05em",

  [theme.breakpoints.up("md")]: {
    fontSize: 40,
  },
}));

// ======================================================
// CONTENU EN BAS DE L'IMAGE
// ======================================================

export const PhotoContent = styled(Stack)(({ theme }) => ({
  position: "absolute",
  bottom: 16,
  left: 16,
  right: 16,

  display: "flex",
  flexDirection: "row",
  alignItems: "flex-end",
  justifyContent: "space-between",

  gap: theme.spacing(1.5),
  minWidth: 0,

  zIndex: 1,

  [theme.breakpoints.up("md")]: {
    bottom: 32,
    left: 32,
    right: 32,
    gap: theme.spacing(3),
  },
}));

// ======================================================
// CONTENU TEXTUEL
// ======================================================

export const PhotoTextContent = styled(Stack)(({ theme }) => ({
  flex: "1 1 auto",
  maxWidth: 560,
  minWidth: 0,

  padding: 0,
  gap: theme.spacing(1),

  [theme.breakpoints.up("md")]: {
    gap: theme.spacing(1.5),
  },
}));

// ======================================================
// DESCRIPTION
// ======================================================

export const PhotoDescription = styled(Typography)(({ theme }) => ({
  color: "rgba(255,255,255,0.82)",

  fontSize: 11,
  fontWeight: 400,
  lineHeight: 1.5,

  overflowWrap: "anywhere",

  [theme.breakpoints.up("md")]: {
    fontSize: 15,
    lineHeight: 1.7,
  },
}));

// ======================================================
// TITRE
// ======================================================

export const PhotoTitle = styled(Typography)<TypographyProps>(({ theme }) => ({
  color: "#FFFFFF",

  fontSize: "clamp(1.35rem, 5vw, 2rem)",
  fontWeight: 800,
  letterSpacing: "-0.045em",
  lineHeight: 1.05,

  overflowWrap: "anywhere",
  textWrap: "balance",

  [theme.breakpoints.up("md")]: {
    fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
    letterSpacing: "-0.055em",
  },
}));

// ======================================================
// BOUTON DE NAVIGATION
// ======================================================

export const GalleryArrow = styled(IconButton)(({ theme }) => ({
  flex: "0 0 auto",

  width: 38,
  height: 38,
  padding: 0,

  color: "#FFFFFF",
  border: "1px solid rgba(255,255,255,0.6)",
  backgroundColor: "rgba(255,255,255,0.1)",

  backdropFilter: "blur(10px)",
  WebkitBackdropFilter: "blur(10px)",

  transition: "background-color 300ms ease, color 300ms ease, transform 300ms ease",

  margin: "50px",

  "& svg": {
    width: 18,
    height: 18,
  },

  [theme.breakpoints.up("md")]: {
    width: 56,
    height: 56,
    margin: "100px",
    "& svg": {
      width: 22,
      height: 22,
    },
  },

  "&:focus-visible": {
    outline: "2px solid #B7F34A",
    outlineOffset: 4,
  },

  "@media (prefers-reduced-motion: reduce)": {
    transition: "none",
  },
}));
