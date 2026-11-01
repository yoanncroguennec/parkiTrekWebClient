import {
  Box,
  BoxProps,
  Card,
  Stack,
  StackProps,
  styled,
  Typography,
  TypographyProps,
} from "@mui/material";

/* ==========================================================================
 * TYPES
 * ========================================================================== */
interface BarProgressProps {
  progress: number;
}

type Box_BgColor_Legend_Props = {
  bgColor: string;
};

type Typo_TextLegend_Props = {
  textColor: string;
};

export const CardContainer = styled(Card)(({ theme }) => ({
  position: "fixed",

  bottom: "100px",
  left: "0px",
  right: "0px",

  width: "auto",
  height: "auto",

  padding: "16px",

  boxSizing: "border-box",

  backdropFilter: "blur(20px)",
  background: "rgba(255,255,255,.7)",
  border: "1px solid rgba(255,255,255,.8)",
  borderRadius: "25px",
  boxShadow: "0 20px 50px rgba(0,0,0,.06)",

  zIndex: 9999,

  [theme.breakpoints.up("md")]: {
    position: "absolute",

    bottom: "auto",
    left: "auto",
    right: "50px",
    top: "50px",
  },
}));

/* ==========================================================================
 * DISTANCE
 * ========================================================================== */
export const DistanceContainer = styled(Stack)<StackProps>(({ theme }) => ({
  alignItems: "flex-end",
  flexDirection: "row",
  gap: 8,

  [theme.breakpoints.up("md")]: {
    gap: 12,
  },
}));

export const Value = styled(Typography)(({ theme }) => ({
  color: "#22c55e",
  fontWeight: 900,
  lineHeight: 1,

  fontSize: "32px",
  [theme.breakpoints.up("md")]: {
    fontSize: "40px",
  },
}));

export const Unit = styled(Typography)(({ theme }) => ({
  color: "#22c55e",
  fontWeight: 700,
  lineHeight: 1,

  fontSize: "14px",

  [theme.breakpoints.up("md")]: {
    fontSize: "16px",
  },
}));

export const Label = styled(Typography)<TypographyProps>(({ theme }) => ({
  color: "#6b7280",
  fontSize: "14px",
  fontWeight: 700,
  letterSpacing: 3,
  textAlign: "right",
  textTransform: "uppercase",
  [theme.breakpoints.up("md")]: {
    fontSize: "15px",
  },
}));

/* ==========================================================================
 * PROGRESS BAR
 * ========================================================================== */
export const ProgressTrack = styled(Box)<BoxProps>(() => ({
  background: "rgba(34,197,94,.12)",
  borderRadius: 999,
  height: 8,
  margin: "15px 0",
  overflow: "hidden",
  width: "100%",
}));

export const ProgressFill = styled(Box, {
  shouldForwardProp: (prop) => prop !== "progress",
})<BarProgressProps>(({ progress }) => ({
  position: "relative",
  width: `${progress}%`,
  height: "100%",
  overflow: "hidden",
  borderRadius: 999,
  background: "linear-gradient(90deg,#22c55e,#16a34a)",

  "& .hero-progress-shine": {
    position: "absolute",
    top: 0,
    left: "-50%",
    width: "50%",
    height: "100%",
    background: "linear-gradient(90deg, transparent, rgba(255,255,255,.55), transparent)",
    transform: "skewX(-20deg)",
  },
}));

/* ==========================================================================
 * LEGEND
 * ========================================================================== */
export const LegendList = styled(Stack)(({ theme }) => ({
  gap: 8,
  marginTop: 16,

  [theme.breakpoints.up("md")]: {
    gap: 10,
  },
}));

export const LegendItem = styled(Stack)<StackProps>(() => ({
  alignItems: "center",
  flexDirection: "row",
  gap: 15,
}));

export const LegendColor = styled(Box, {
  shouldForwardProp: (prop) => prop !== "bgColor",
})<BoxProps & Box_BgColor_Legend_Props>(({ bgColor, theme }) => ({
  background: bgColor,
  borderRadius: "25px",
  height: 18,
  width: 36,

  [theme.breakpoints.up("md")]: {
    width: 50,
    height: 25,
  },
}));

export const LegendLabel = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "textColor",
})<TypographyProps & Typo_TextLegend_Props>(({ theme, textColor }) => ({
  color: textColor,
  fontWeight: 700,

  fontSize: ".75rem",

  [theme.breakpoints.up("md")]: {
    fontSize: ".9rem",
  },
}));
