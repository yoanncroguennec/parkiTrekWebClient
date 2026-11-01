// GOOD
import Image from "next/image";
import {
  Badge,
  BadgeProps,
  Box,
  BoxProps,
  IconButton,
  IconButtonProps,
  styled,
  Typography,
  TypographyProps,
} from "@mui/material";

export const HeaderContainer = styled(Box)<BoxProps>(({ theme }) => ({
  flexShrink: 0,
  height: 320,
  overflow: "hidden",
  position: "relative",

  [theme.breakpoints.up("md")]: {
    height: 380,
  },
}));

export const HeaderImage = styled(Image)(() => ({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  transition: "transform .8s ease",
  willChange: "transform",

  "&:hover": {
    transform: "scale(1.05)",
  },
}));

export const Overlay = styled(Box)<BoxProps>(() => ({
  background:
    "linear-gradient(to top, rgba(255,255,255,1) 0%, rgba(255,255,255,.75) 35%, rgba(255,255,255,.15) 70%, transparent 100%)",
  inset: 0,
  position: "absolute",
}));

export const CloseButton = styled(IconButton)<IconButtonProps>(({ theme }) => ({
  backdropFilter: "blur(80px)",
  background: "rgba(255, 255, 255, 0.7)",
  border: "1px solid rgba(255, 255, 255, 0.6)",
  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.08)",
  position: "absolute",
  right: 16,
  top: 16,
  zIndex: 3,

  "&:hover": {
    background: "rgba(255, 255, 255, 0.85)",
  },

  [theme.breakpoints.up("md")]: {
    right: 20,
    top: 20,
  },
}));

export const Content = styled(Box)<BoxProps>(({ theme }) => ({
  bottom: 20,
  left: 20,
  position: "absolute",
  zIndex: 2,

  [theme.breakpoints.up("md")]: {
    bottom: 32,
    left: 32,
  },
}));

export const ProjectName = styled(Typography)<TypographyProps>(({ theme }) => ({
  color: "#22c55e",
  fontWeight: 700,
  fontSize: "14px",
  letterSpacing: 3,
  marginBottom: "8px",

  [theme.breakpoints.up("md")]: {
    fontSize: "16px",
    letterSpacing: 4,
    marginBottom: "10px",
  },
}));

export const DepartmentName = styled(Typography)<TypographyProps>(({ theme }) => ({
  color: "#111827",
  fontSize: "36px",
  fontWeight: 900,
  lineHeight: 1,
  textShadow: "0 10px 40px rgba(34,197,94,.15)",

  [theme.breakpoints.up("md")]: {
    fontSize: "48px",
  },
}));

export const DepartmentCode = styled(Typography)<TypographyProps>(({ theme }) => ({
  color: "#111827",
  fontSize: "14px",
  fontWeight: 900,

  [theme.breakpoints.up("md")]: {
    fontSize: "16px",
  },
}));

export const DepartmentBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  alignItems: "center",
  backdropFilter: "blur(20px)",
  background: "rgba(255,255,255,.75)",
  border: "1px solid rgba(255,255,255,.7)",
  borderRadius: 999,
  boxShadow: "0 10px 25px rgba(0,0,0,.05)",
  display: "inline-flex",
  gap: 1,
  marginTop: "14px",
  padding: "8px 16px",

  [theme.breakpoints.up("md")]: {
    marginTop: "20px",
    padding: "10px 20px",
  },
}));
