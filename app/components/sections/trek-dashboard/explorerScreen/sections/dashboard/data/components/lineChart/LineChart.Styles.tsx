// GOOD
import {
  styled,
  Box,
  Stack,
  StackProps,
  Typography,
  TypographyProps,
} from "@mui/material";

/* =========================================================
   ROOT
========================================================= */

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

export const LineChartWrapper = styled(Box)(({ theme }) => ({
  width: "min(320px, 85vw)",

  aspectRatio: "1 / 1",

  margin: "25px auto 0",

  [theme.breakpoints.up("md")]: {
    width: "450px",

    margin: "35px auto 0",
  },
}));
