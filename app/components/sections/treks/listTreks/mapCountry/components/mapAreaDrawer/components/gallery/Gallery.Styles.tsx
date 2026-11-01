// GOOD
import Image from "next/image";
import { Box, Button, styled, Typography, TypographyProps } from "@mui/material";

export const GalleryContainer = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: "8px",
  padding: "18px",
  [theme.breakpoints.up("md")]: {
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "16px",
    padding: "32px",
  },
}));

export const GalleryImageWrapper = styled(Box)(() => ({
  position: "relative",
  height: 120,
  overflow: "hidden",
  borderRadius: "10px",

  "&::before": {
    content: '""',

    position: "absolute",
    top: "-50%",
    left: "-100%",

    width: "50%",
    height: "200%",

    zIndex: 2,
    pointerEvents: "none",

    background: "linear-gradient(90deg, transparent, rgba(255,255,255,.45), transparent)",

    transform: "rotate(25deg)",
    transition: "left .8s ease",
  },

  "&:hover::before": {
    left: "150%",
  },
}));

export const GalleryImage = styled(Image)(() => ({
  cursor: "pointer",
  objectFit: "cover",
  borderRadius: "10px",

  transition: "transform .35s ease, box-shadow .35s ease",

  "&:hover": {
    transform: "scale(1.05)",
  },
}));

export const SeeMoreButton = styled(Button)(() => ({
  height: "120px",

  position: "relative",
  overflow: "hidden",

  color: "#22c55e",
  border: "2px solid #22c55e",

  "&::before": {
    content: '""',

    position: "absolute",
    top: "-50%",
    left: "-100%",

    width: "50%",
    height: "200%",

    zIndex: 0,
    pointerEvents: "none",

    background: "linear-gradient(90deg, transparent, rgba(34,197,94,.35), transparent)",

    transform: "rotate(25deg)",
    transition: "left .8s ease",
  },

  "&:hover": {
    borderColor: "#22c55e",
    boxShadow: "0 15px 35px rgba(34, 197, 94, 0.25)",
    backgroundColor: "#fff",
    fontWeight: 900,
  },

  "&:hover::before": {
    left: "150%",
  },

  "& > *": {
    position: "relative",
    zIndex: 1,
  },
}));

export const SeeMoreText = styled(Typography)<TypographyProps>(({ theme }) => ({
  color: "green",
  fontSize: "14px",
  [theme.breakpoints.up("md")]: {
    fontSize: "16px",
  },
}));
