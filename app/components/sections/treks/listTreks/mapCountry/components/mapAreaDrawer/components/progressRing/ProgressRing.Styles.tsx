// GOOD
import { Stack, StackProps, styled, Typography, TypographyProps } from "@mui/material";

interface RingProps {
  progress: number;
}

export const ProgressRingContainer = styled(Stack)(({ theme }) => ({
  position: "fixed",
  top: "25px",
  left: "25px",
  [theme.breakpoints.up("md")]: {},
}));

export const Ring = styled(Stack, {
  shouldForwardProp: (prop) => prop !== "progress",
})<StackProps & RingProps>(({ theme, progress }) => ({
  width: "120px",
  height: "120px",

  background: `
    conic-gradient(
      #22c55e ${progress}%,
      #e5e7eb ${progress}%
    )
  `,

  borderRadius: "50%",

  alignItems: "center",
  justifyContent: "center",

  boxShadow: "0 25px 60px rgba(34,197,94,.15)",

  [theme.breakpoints.up("md")]: {},
}));

export const RingContent = styled(Stack)(({ theme }) => ({
  width: "100px",
  height: "100px",

  borderRadius: "50%",

  backgroundColor: "#fff",

  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",

  boxShadow: "inset 0 0 20px rgba(0,0,0,.03)",

  [theme.breakpoints.up("md")]: {},
}));

export const ProgressValue = styled(Typography)<TypographyProps>(({ theme }) => ({
  fontSize: "30px",
  fontWeight: 900,

  background: "linear-gradient(135deg,#22c55e,#16a34a)",

  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  [theme.breakpoints.up("md")]: {
    fontSize: "34px",
  },
}));

export const ProgressLabel = styled(Typography)<TypographyProps>(({ theme }) => ({
  color: "#6b7280",
  fontSize: "12px",
  fontWeight: 500,
  lineHeight: 1.2,
  [theme.breakpoints.up("md")]: {
    fontSize: "14px",
  },
}));
