import { Stack, styled, Typography, TypographyProps } from "@mui/material";

export const HeroSloganContainer = styled(Stack)(({ theme }) => ({
  alignItems: "center",
  flexShrink: 0,
  maxWidth: "100%",

  [theme.breakpoints.down("md")]: {
    margin: theme.spacing(1, 0),
  },
}));

export const SloganStyles = styled(Typography)<TypographyProps>(
  ({ theme }) => ({
    marginTop: theme.spacing(1),
    fontFamily: "'Brush Script MT', 'Segoe Script', cursive",
    fontSize: "clamp(22px, 6vw, 28px)",
    fontWeight: "bold",
    letterSpacing: "1px",
    lineHeight: 1.2,
    textAlign: "center",
    color: "#2fff13",
    transform: "rotate(-5deg)",
    maxWidth: "100%",

    [theme.breakpoints.up("md")]: {
      fontSize: "32px",
      letterSpacing: "5px",
      marginTop: theme.spacing(2),
    },
  }),
);

export const SloganLine = styled("svg")(({ theme }) => ({
  width: "140px",
  maxWidth: "100%",
  height: "22px",
  marginTop: 0,
  overflow: "visible",
  transform: "rotate(-5deg)",

  [theme.breakpoints.up("md")]: {
    width: "200px",
    height: "25px",
  },
}));
