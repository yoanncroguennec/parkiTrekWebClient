import { Typography, styled } from "@mui/material";
import type { TypographyProps } from "@mui/material";

/* =========================================================
   MAGNETIC POP TITLE
   Typographie responsive du titre animé
========================================================= */

export const MagneticPopTitleText = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "$maxFontSize",
})<{ $maxFontSize: string } & TypographyProps>(({ theme, $maxFontSize }) => {
  // Conversion de la taille maximale en valeur numérique
  const maxFontSizePx = Number.parseFloat($maxFontSize) || 96;

  return {
    // ==========================================
    // MOBILE — DEFAULT
    // ==========================================

    width: "100%",
    maxWidth: "100%",
    margin: 0,

    fontSize: "32px",
    fontWeight: 700,
    lineHeight: "38px",
    letterSpacing: "2px",

    textAlign: "center",
    textTransform: "uppercase",

    perspective: "1000px",
    transformStyle: "preserve-3d",

    // ==========================================
    // MAGNETIC LETTERS
    // ==========================================

    "& .magnetic-letter": {
      display: "inline-block",
      willChange: "transform, opacity, filter",
      transformOrigin: "center center",
      backfaceVisibility: "hidden",
    },

    // ==========================================
    // TABLET
    // ==========================================

    [theme.breakpoints.up("sm")]: {
      fontSize: "48px",
      lineHeight: "56px",
      letterSpacing: "6px",
    },

    // ==========================================
    // DESKTOP
    // ==========================================

    [theme.breakpoints.up("md")]: {
      fontSize: `${maxFontSizePx}px`,
      lineHeight: `${maxFontSizePx * 1.15}px`,
      letterSpacing: `${maxFontSizePx * 0.3}px`,
    },
  };
});
