import { Box, Stack, styled, Typography, TypographyProps } from "@mui/material";

export const CTASection = styled(Stack)(({ theme }) => ({
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-around",
  gap: theme.spacing(4),
  padding: theme.spacing(4, 2),

  [theme.breakpoints.down("lg")]: {
    flexWrap: "wrap",
  },

  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
}));

export const CTATitle = styled(Stack)(({ theme }) => ({
  gap: theme.spacing(1),

  "& .MuiDivider-root": {
    width: "50px",
  },
}));

export const CTAItems = styled(Box, {
  shouldForwardProp: (prop) => prop !== "itemCount",
})<{ itemCount: number }>(({ theme, itemCount }) => ({
  width: "100%",

  display: "grid",

  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",

  gap: "20px",

  [theme.breakpoints.up("md")]: {
    gridTemplateColumns: `repeat(${itemCount}, minmax(0, 1fr))`,
    gap: "30px",
  },
}));

export const CTAItem = styled(Stack)(({ theme }) => ({
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  gap: theme.spacing(1),

  // Mobile : aspect Card
  padding: theme.spacing(2),

  borderRadius: "16px",
  backgroundColor: theme.palette.background.paper,

  boxShadow: theme.shadows[2],

  border: `1px solid ${theme.palette.divider}`,

  // Desktop : suppression de l'aspect Card
  [theme.breakpoints.up("md")]: {
    padding: 0,

    borderRadius: 0,
    backgroundColor: "transparent",

    boxShadow: "none",
    border: "none",
  },
}));

export const CTAIcon = styled(Box)<{
  iconColor: string;
}>(({ iconColor }) => ({
  width: "64px",
  height: "64px",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  color: iconColor,

  border: `1px solid ${iconColor}`,
  borderRadius: "100%",

  background: `linear-gradient(
    135deg,
    ${iconColor}20,
    ${iconColor}05
  )`,

  boxShadow: `0 8px 24px ${iconColor}18`,
}));

export const CTAJoin = styled(Stack)(({ theme }) => ({
  alignItems: "center",
  textAlign: "center",
  gap: theme.spacing(0.5),
  fontWeight: "bold",
}));

export const JoinButton = styled(Box)(() => ({
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "15px",
  cursor: "pointer",
  transform: "rotate(-5deg)",
}));

export const BrushBackground = styled("svg")(() => ({
  position: "absolute",
  inset: 0,
  width: "100%",
  height: "100%",
  zIndex: 0,
}));

export const JoinText = styled("span")(() => ({
  position: "relative",
  zIndex: 1,
  color: "#fff",
  fontFamily: "'Brush Script MT', 'Segoe Script', cursive",
  fontSize: "24px",
  letterSpacing: "5px",
  fontWeight: "bold",
  transform: "rotate(-2deg)",
}));

export const Arrow = styled("span")(() => ({
  position: "relative",
  zIndex: 1,
  marginLeft: "15px",
  color: "#fff",
}));

export const Slogan = styled(Typography)<TypographyProps>(({ theme }) => ({
  marginTop: theme.spacing(2),

  fontFamily: "'Brush Script MT', 'Segoe Script', cursive",

  fontSize: "28px",
  fontWeight: "bold",

  letterSpacing: "5px",
  color: "#2fff13",

  transform: "rotate(-5deg)",

  [theme.breakpoints.up("md")]: {
    fontSize: "32px",
  },
}));

export const HeroSlogan = styled(Stack)(() => ({
  alignItems: "center",
}));

export const SloganLine = styled("svg")(() => ({
  width: "200px",
  height: "25px",
  marginTop: "0",
  overflow: "visible",
  transform: "rotate(-5deg)",
}));
