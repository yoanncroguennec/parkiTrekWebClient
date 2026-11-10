// GOOD
import { styled, Box, Stack, Typography, TypographyProps, type StackProps } from "@mui/material";

export const CardContainer = styled(Stack)<StackProps>(({ theme }) => ({
  width: "100%",

  padding: "25px 15px",

  [theme.breakpoints.up("md")]: {
    padding: "80px",
  },
}));

export const Header = styled(Stack)(({ theme }) => ({
  width: "100%",

  flexDirection: "row",

  alignItems: "flex-start",

  justifyContent: "space-between",

  fontSize: "15px",

  lineHeight: 1.4,

  opacity: 0.35,

  [theme.breakpoints.up("md")]: {
    fontSize: "18px",
  },
}));

export const TextHeader = styled(Typography)<TypographyProps>(({ theme }) => ({
  fontSize: "15px",

  letterSpacing: "2px",

  textAlign: "center",

  [theme.breakpoints.up("md")]: {
    fontSize: "18px",

    letterSpacing: "3px",
  },
}));

export const DonutWrapper = styled(Box)(({ theme }) => ({
  width: "min(320px, 85vw)",

  aspectRatio: "1 / 1",

  margin: "25px auto 0",

  [theme.breakpoints.up("md")]: {
    width: "450px",

    margin: "35px auto 0",
  },
}));

/* =========================================================
   LEFT CONTENT
========================================================= */

export const DonutInfo = styled(Box)(({ theme }) => ({
  width: "100%",

  maxWidth: "280px",

  marginTop: "25px",

  [theme.breakpoints.up("md")]: {
    width: "220px",

    maxWidth: "220px",

    marginTop: "35px",
  },
}));

/* =========================================================
   INFO TITLE
========================================================= */

export const DonutInfoTitle = styled(Typography)<TypographyProps>(({ theme }) => ({
  fontSize: "10px",

  fontWeight: 500,

  textTransform: "uppercase",

  letterSpacing: ".2em",

  opacity: 0.4,

  [theme.breakpoints.up("md")]: {
    fontSize: "10px",
  },
}));

/* =========================================================
   INFO DESCRIPTION
========================================================= */

export const DonutInfoDescription = styled(Typography)<TypographyProps>(({ theme }) => ({
  marginTop: "8px",

  fontSize: "13px",

  lineHeight: 1.5,

  opacity: 0.6,

  [theme.breakpoints.up("md")]: {
    marginTop: "10px",

    fontSize: "14px",

    lineHeight: 1.5,
  },
}));
