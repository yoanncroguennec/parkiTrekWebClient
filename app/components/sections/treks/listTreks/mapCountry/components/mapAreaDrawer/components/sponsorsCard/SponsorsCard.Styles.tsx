// GOOD
import { Avatar, Box, styled, Typography, TypographyProps } from "@mui/material";

export const SponsorsCardContainer = styled(Box)(({ theme }) => ({
  width: "fit-content",
  maxWidth: "calc(100% - 36px)",

  margin: "0 auto",
  padding: 18,

  boxSizing: "border-box",

  borderRadius: 20,

  background: "rgba(255,255,255,.75)",
  backdropFilter: "blur(20px)",

  border: "1px solid rgba(255,255,255,.5)",

  boxShadow: "0 20px 40px rgba(0,0,0,.04)",

  [theme.breakpoints.up("md")]: {
    maxWidth: "calc(100% - 64px)",
    borderRadius: 24,
  },
}));

export const SponsorsCardTitle = styled(Typography)<TypographyProps>(({ theme }) => ({
  fontSize: "24px",
  fontWeight: 800,
  marginBottom: 20,
  textAlign: "center",
  [theme.breakpoints.up("md")]: {
    fontSize: "32px",
    marginBottom: 32,
  },
}));

export const SponsorsList = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(1, 1fr)",
  width: "fit-content",
  justifyContent: "center",
  alignItems: "center",
  gap: 10,

  [theme.breakpoints.up("md")]: {
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: 16,
  },
}));

export const SponsorItem = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: 8,

  padding: "7px 12px",

  borderRadius: 999,

  background: "#fff",
  border: "1px solid rgba(0,0,0,.05)",

  transition: "transform .3s ease, box-shadow .3s ease",

  "&:hover": {
    cursor: "pointer",
    transform: "translateY(-3px)",
    boxShadow: "0 10px 25px rgba(0,0,0,.08)",
  },

  [theme.breakpoints.up("md")]: {
    padding: "8px 16px",
  },
}));

export const SponsorAvatar = styled(Avatar)(({ theme }) => ({
  width: 24,
  height: 24,

  backgroundColor: "#22c55e",

  [theme.breakpoints.up("md")]: {
    width: 28,
    height: 28,
  },
}));

export const SponsorName = styled(Typography)<TypographyProps>(({ theme }) => ({
  fontSize: "14px",

  [theme.breakpoints.up("md")]: {
    fontSize: "16px",
  },
}));
