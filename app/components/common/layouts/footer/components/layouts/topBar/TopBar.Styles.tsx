"use client";

import { Box, styled } from "@mui/material";
import Link from "next/link";

export const TopBarContainer = styled(Box)(({ theme }) => ({
  alignItems: "center",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  overflow: "visible",
  padding: "0 150px",
  position: "absolute",
  top: 0,
  width: "100%",
  zIndex: 2,

  [theme.breakpoints.down("md")]: {
    padding: "0 30px",
  },
}));

export const LogoContainer = styled(Box)({
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
});

export const SocialContainer = styled(Box)({
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
});

export const SocialLinksContainer = styled(Box)({
  display: "flex",
  gap: "10px",
  justifyContent: "center",
});

export const SocialLink = styled(Link)({
  display: "grid",
  placeItems: "center",
  width: "45px",
  height: "45px",
  border: "1px solid #FFF",
  borderRadius: "50%",
  color: "#000",
  background: "rgba(255, 255, 255, 0.3)",
  transition: "transform 0.35s ease, color 0.35s ease, background 0.35s ease",

  "&:hover": {
    cursor: "pointer",
    transform: "translateY(-5px)",
    color: "#FFF",
    background: "#000",
  },
});

export const Divider = styled(Box)({
  width: "100%",
  height: "12px",
  background: "linear-gradient(90deg, transparent, #8066ff, transparent)",
  boxShadow: "0 0 25px rgba(128, 102, 255, 0.5)",
});
