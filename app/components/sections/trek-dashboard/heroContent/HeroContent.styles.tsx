// GOOD
"use client";

import Image from "next/image";
import {
  Box,
  Button,
  Stack,
  Typography,
  ButtonProps,
  TypographyProps,
  styled,
} from "@mui/material";

/* =========================================================
   CONTENT
========================================================= */

export const ContentSection = styled(Box)(() => ({
  width: "100%",
  height: "100%",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  backgroundColor: "#fff",
}));

/* =========================================================
   CONTENT WRAPPER
========================================================= */

export const ContentWrapper = styled(Stack)(({ theme }) => ({
  width: "100%",

  alignItems: "center",
  justifyContent: "center",

  textAlign: "center",

  paddingLeft: "8px",
  paddingRight: "8px",

  [theme.breakpoints.up("md")]: {
    paddingLeft: "32px",
    paddingRight: "32px",
  },
}));

/* =========================================================
   BRAND
========================================================= */

export const Brand = styled(Stack)(({ theme }) => ({
  alignItems: "center",
  flexDirection: "column",

  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
  },
}));

/* =========================================================
   LOGO
========================================================= */

export const LogoImage = styled(Image)(({ theme }) => ({
  width: "80px",
  height: "80px",

  objectFit: "contain",

  [theme.breakpoints.up("md")]: {
    width: "120px",
    height: "120px",
  },
}));

/* =========================================================
   BRAND INFO
========================================================= */

export const BrandInfo = styled(Stack)(() => ({
  alignItems: "flex-start",
  gap: "2px",
}));

export const BrandName = styled(Typography)<TypographyProps>(({ theme }) => ({
  fontSize: "18px",
  fontWeight: 800,

  color: "#17352C",

  letterSpacing: "0.08em",
  lineHeight: 1.1,

  [theme.breakpoints.up("md")]: {
    fontSize: "23px",
  },
}));

export const BrandTagline = styled(Typography)<TypographyProps>(
  ({ theme }) => ({
    fontSize: "14px",
    fontWeight: 400,

    color: "#66736B",

    letterSpacing: "0.04em",
    lineHeight: 1.2,

    [theme.breakpoints.up("md")]: {
      fontSize: "15px",
    },
  }),
);

/* =========================================================
   TYPOGRAPHY
========================================================= */

export const Title = styled(Typography)<TypographyProps>(({ theme }) => ({
  marginTop: theme.spacing(3),

  maxWidth: "600px",

  fontFamily: "Georgia, 'Times New Roman', serif",

  fontSize: "2.25rem", // 36px
  lineHeight: 1.05,
  fontWeight: 600,

  color: "#17362D",

  letterSpacing: "-0.045em",

  [theme.breakpoints.up("sm")]: {
    fontSize: "2.75rem", // 44px
  },

  [theme.breakpoints.up("md")]: {
    fontSize: "4rem", // 64px
  },

  [theme.breakpoints.up("lg")]: {
    fontSize: "4.5rem", // 72px
  },
}));

export const Description = styled(Typography)<TypographyProps>(({ theme }) => ({
  marginTop: theme.spacing(2),

  maxWidth: "460px",

  fontSize: "0.8125rem", // 13px
  lineHeight: 1.65,
  fontWeight: 400,

  color: "#4F5A53",

  [theme.breakpoints.up("md")]: {
    fontSize: "1rem", // 16px
    lineHeight: 1.7,
  },
}));

/* =========================================================
   SIGNATURE
========================================================= */

export const Signature = styled(Typography)<TypographyProps>(({ theme }) => ({
  marginTop: theme.spacing(2),

  fontFamily: "'Brush Script MT', 'Segoe Script', cursive",

  fontSize: "20px",
  fontWeight: "bold",

  letterSpacing: "2px",
  color: "#71966C",

  transform: "rotate(-2deg)",

  [theme.breakpoints.up("md")]: {
    fontSize: "22px",
  },
}));

export const SignatureLine = styled(Box)(() => ({
  width: "135px",
  height: "1.5px",

  marginTop: "4px",

  backgroundColor: "#71966C",

  transform: "rotate(-4deg)",
}));

/* =========================================================
   CTA
========================================================= */

export const ExploreButton = styled(Button)<ButtonProps>(({ theme }) => ({
  marginTop: theme.spacing(4),

  padding: "9px 32px",

  borderRadius: "999px",

  fontSize: "0.875rem",
  fontWeight: 600,

  textTransform: "none",

  backgroundColor: "#71966C",

  "&:hover": {
    backgroundColor: "#5F825A",
  },

  [theme.breakpoints.up("md")]: {
    fontSize: "0.9375rem",
    padding: "10px 34px",
  },
}));
