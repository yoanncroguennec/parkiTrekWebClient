import { Stack, Typography, styled } from "@mui/material";

export const Wrapper = styled(Stack)({
  gap: 2,
  alignItems: "center",
  width: "100%",
});

export const Title = styled(Typography)(({ theme }) => ({
  color: "#22c55e",
  fontSize: "12px",
  fontWeight: 900,
  letterSpacing: "0.16em",
  lineHeight: 1.2,
  textTransform: "uppercase",
  textAlign: "center",

  [theme.breakpoints.up("sm")]: {
    fontSize: "14px",
    letterSpacing: "0.18em",
  },

  [theme.breakpoints.up("md")]: {
    fontSize: "16px",
  },

  [theme.breakpoints.up("lg")]: {
    fontSize: "18px",
  },

  [theme.breakpoints.up("xl")]: {
    fontSize: "20px",
  },
}));

export const DateText = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontSize: "12px",
  lineHeight: 1.4,
  textAlign: "center",
  textTransform: "capitalize",

  [theme.breakpoints.up("sm")]: {
    fontSize: "13px",
  },

  [theme.breakpoints.up("md")]: {
    fontSize: "14px",
  },

  [theme.breakpoints.up("lg")]: {
    fontSize: "16px",
  },

  [theme.breakpoints.up("xl")]: {
    fontSize: "18px",
  },
}));

export const Time = styled(Typography)(({ theme }) => ({
  fontSize: "22px", // Mobile
  fontWeight: 700,
  lineHeight: 1,
  letterSpacing: "-0.04em",
  textAlign: "center",
  fontVariantNumeric: "tabular-nums",

  [theme.breakpoints.up("sm")]: {
    fontSize: "26px",
  },

  [theme.breakpoints.up("md")]: {
    fontSize: "30px",
  },

  [theme.breakpoints.up("lg")]: {
    fontSize: "34px",
  },

  [theme.breakpoints.up("xl")]: {
    fontSize: "38px",
  },
}));
