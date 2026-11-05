import { Stack, Typography, styled } from "@mui/material";

export const Wrapper = styled(Stack)({
  gap: 2,
  alignItems: "center",
});

export const Title = styled(Typography)(({ theme }) => ({
  color: "#22c55e",
  fontSize: "0.875rem",
  fontWeight: 900,
  letterSpacing: "0.2em",
  lineHeight: 1.2,
  textTransform: "uppercase",

  [theme.breakpoints.up("sm")]: {
    fontSize: "1rem",
  },

  [theme.breakpoints.up("md")]: {
    fontSize: "1.125rem",
  },

  [theme.breakpoints.up("lg")]: {
    fontSize: "1.25rem",
  },

  [theme.breakpoints.up("xl")]: {
    fontSize: "1.375rem",
  },
}));

export const DateText = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontSize: "0.875rem",
  lineHeight: 1.4,
  textAlign: "center",
  textTransform: "capitalize",

  [theme.breakpoints.up("sm")]: {
    fontSize: "1rem",
  },

  [theme.breakpoints.up("md")]: {
    fontSize: "1.125rem",
  },

  [theme.breakpoints.up("lg")]: {
    fontSize: "1.25rem",
  },

  [theme.breakpoints.up("xl")]: {
    fontSize: "1.375rem",
  },
}));

export const Time = styled(Typography)(({ theme }) => ({
  fontSize: "2rem",
  fontWeight: 700,
  lineHeight: 1,
  letterSpacing: "-0.05em",
  textAlign: "center",

  [theme.breakpoints.up("sm")]: {
    fontSize: "2.25rem",
  },

  [theme.breakpoints.up("md")]: {
    fontSize: "2.5rem",
  },

  [theme.breakpoints.up("lg")]: {
    fontSize: "2.75rem",
  },

  [theme.breakpoints.up("xl")]: {
    fontSize: "3rem",
  },
}));
