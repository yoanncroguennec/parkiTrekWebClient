import { Box, Grid, styled, Typography, TypographyProps } from "@mui/material";

/* -------------------------------- */
/* TYPES                            */
/* -------------------------------- */

interface ColorProps {
  color?: string;
}

interface HaloProps {
  haloColor?: string;
}

interface NumericProps {
  isNumeric?: boolean;
}

/* -------------------------------- */
/* GRID                             */
/* -------------------------------- */

export const StatsGrid = styled(Grid)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: 16,
  width: "100%",
  marginTop: 32,

  [theme.breakpoints.up("md")]: {
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 24,
    marginTop: 64,
  },
}));

export const StatCardGrid = styled(Box)(() => ({
  width: "100%",
  minWidth: 0,
}));

/* -------------------------------- */
/* CARD                             */
/* -------------------------------- */

export const StatCard = styled(Box)(({ theme }) => ({
  position: "relative",
  overflow: "hidden",
  width: "100%",
  boxSizing: "border-box",
  padding: 20,

  border: "1px solid rgba(255,255,255,.08)",
  borderRadius: 20,

  background: "linear-gradient(180deg, rgba(255,255,255,.08), rgba(255,255,255,.03))",

  backdropFilter: "blur(24px)",
  WebkitBackdropFilter: "blur(24px)",

  boxShadow: "0 20px 45px rgba(0,0,0,.25)",
  transition: "transform .4s ease, box-shadow .4s ease",

  "&:hover": {
    transform: "translateY(-6px)",
    boxShadow: "0 30px 65px rgba(0,0,0,.35)",
  },

  [theme.breakpoints.up("md")]: {
    padding: 32,
    borderRadius: 28,
    boxShadow: "0 25px 60px rgba(0,0,0,.35)",

    "&:hover": {
      transform: "translateY(-6px)",
      boxShadow: "0 35px 80px rgba(0,0,0,.45)",
    },
  },
}));

/* -------------------------------- */
/* HALO                             */
/* -------------------------------- */

export const StatHalo = styled(Box, {
  shouldForwardProp: (prop) => prop !== "haloColor",
})<HaloProps>(({ theme, haloColor }) => ({
  position: "absolute",
  top: -55,
  right: -45,

  width: 130,
  height: 130,

  borderRadius: "50%",
  background: haloColor,

  opacity: 0.15,
  filter: "blur(60px)",

  pointerEvents: "none",

  [theme.breakpoints.up("md")]: {
    top: -80,
    right: -60,

    width: 180,
    height: 180,

    filter: "blur(80px)",
  },
}));

/* -------------------------------- */
/* ICON                             */
/* -------------------------------- */

export const StatIcon = styled(Box, {
  shouldForwardProp: (prop) => prop !== "color",
})<ColorProps>(({ theme, color }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,

  color,
  fontSize: 28,
  lineHeight: 1,

  [theme.breakpoints.up("md")]: {
    fontSize: 34,
  },
}));

/* -------------------------------- */
/* VALUE                            */
/* -------------------------------- */

export const StatValue = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "isNumeric",
})<NumericProps & TypographyProps>(({ theme, isNumeric = true }) => ({
  position: "relative",
  zIndex: 1,

  display: "flex",
  alignItems: "baseline",
  flexWrap: "wrap",

  color: "#fff",
  fontSize: isNumeric ? 40 : 28,
  fontWeight: 800,
  lineHeight: 1,

  [theme.breakpoints.up("md")]: {
    fontSize: isNumeric ? 58 : 40,
  },
}));

/* -------------------------------- */
/* UNIT                             */
/* -------------------------------- */

export const StatUnit = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "color",
})<ColorProps & TypographyProps>(({ theme, color }) => ({
  marginLeft: 6,

  color,
  fontSize: 16,
  fontWeight: 600,
  lineHeight: 1,

  [theme.breakpoints.up("md")]: {
    marginLeft: 8,
    fontSize: 22,
  },
}));

/* -------------------------------- */
/* TITLE                            */
/* -------------------------------- */

export const StatTitle = styled(Typography)<TypographyProps>(({ theme }) => ({
  position: "relative",
  zIndex: 1,

  marginTop: 12,

  color: "rgba(255,255,255,.7)",
  fontSize: 16,
  fontWeight: 500,
  lineHeight: 1.4,
  letterSpacing: 0.3,

  [theme.breakpoints.up("md")]: {
    marginTop: 18,
    fontSize: 24,
    letterSpacing: 0.5,
  },
}));

/* -------------------------------- */
/* VALUE WRAPPER                    */
/* -------------------------------- */

export const StatValueWrapper = styled(Box)(({ theme }) => ({
  position: "relative",
  zIndex: 1,

  display: "flex",
  alignItems: "center",
  gap: 10,

  [theme.breakpoints.up("md")]: {
    gap: 20,
  },
}));
