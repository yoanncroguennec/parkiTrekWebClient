// GOOD
import { Stack, Typography, styled } from "@mui/material";
import type { StackProps, TypographyProps } from "@mui/material";

export const Content = styled(Stack)<StackProps>(({ theme }) => ({
  position: "relative",
  zIndex: 2,

  width: "100%",
  height: "100%",

  alignItems: "center",
  flexDirection: "row",
  justifyContent: "center",

  paddingLeft: "24px",
  paddingRight: "24px",

  textAlign: "center",

  color: "#FFF",

  [theme.breakpoints.up("md")]: {
    paddingLeft: "48px",
    paddingRight: "48px",
  },
}));

export const Title = styled(Typography)<TypographyProps>(({ theme }) => ({
  margin: 0,
  maxWidth: "1000px",

  textAlign: "left",

  fontSize: "44.8px",
  fontWeight: 900,
  lineHeight: 0.9,
  textShadow: "4px 4px 5px #0F172A",

  [theme.breakpoints.up("md")]: {
    fontSize: "72px",
  },
}));

export const SubTitle = styled(Typography)<TypographyProps>(({ theme }) => ({
  color: "#FFF",
  fontSize: "18.4px",
  fontWeight: 900,
  lineHeight: 0.9,
  textShadow: "4px 4px 5px #F00",
  textAlign: "left",

  [theme.breakpoints.up("md")]: {
    fontSize: "28.8px",
  },
}));

export const Description = styled(Typography)<TypographyProps>(({ theme }) => ({
  marginTop: theme.spacing(3),
  marginBottom: 0,
  textAlign: "left",

  maxWidth: "700px",

  fontSize: "16px",
  lineHeight: 1.6,

  [theme.breakpoints.up("md")]: {
    fontSize: "20px",
  },
}));

export const Objective = styled(Typography)<TypographyProps>(({ theme }) => ({
  color: "#0FF",
  fontSize: "16px",
  textAlign: "left",
  textShadow: "4px 4px 5px #333",

  [theme.breakpoints.up("md")]: {
    fontSize: "22.4px",
  },
}));

export const AmountObjective = styled(Typography)<TypographyProps>(({ theme }) => ({
  color: "#0FF",
  fontSize: "44.8px",
  textAlign: "left",
  textShadow: "4px 4px 5px #333",

  [theme.breakpoints.up("md")]: {
    fontSize: "67.2px",
  },
}));
