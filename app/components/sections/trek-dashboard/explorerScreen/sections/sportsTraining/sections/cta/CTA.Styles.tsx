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
  display: "grid",
  gap: "20px",
  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
  width: "100%",
  [theme.breakpoints.up("md")]: {
    gap: "30px",
    gridTemplateColumns: `repeat(${itemCount}, minmax(0, 1fr))`,
  },
}));

export const CTAItem = styled(Stack)(({ theme }) => ({
  alignItems: "center",
  backgroundColor: theme.palette.background.paper,
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: "16px",
  boxShadow: "0 8px 30px rgba(0, 0, 0, 0.08)",
  gap: theme.spacing(1),
  justifyContent: "center",
  padding: theme.spacing(2),
  textAlign: "center",
  transition: "transform 0.25s ease, box-shadow 0.25s ease",
  "&:hover": {
    transform: "translateY(-3px)",
    boxShadow: "0 12px 35px rgba(0, 0, 0, 0.12)",
  },
  [theme.breakpoints.up("md")]: {},
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
