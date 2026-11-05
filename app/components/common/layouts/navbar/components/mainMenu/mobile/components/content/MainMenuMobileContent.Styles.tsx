// GOOD
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Box, Paper, PaperProps, Stack, styled, Typography } from "@mui/material";
// SHAPES
import { menuMobileDrawerBG_ClipPath } from "@/app/components/common/shapes";

// IMAGE LOGO
export const LogoImage = styled(Image)(() => ({
  width: "100px",
  height: "100px",
  objectFit: "contain",
}));

// IMAGE DECORATION
export const DecorationImage = styled(Image)(() => ({
  width: "300px",
  height: "250px",
  objectFit: "contain",
}));

// CONTAINER
export const PaperStyles = styled(Paper)<PaperProps>(() => ({
  background: "#FFF",
  clipPath: menuMobileDrawerBG_ClipPath,
  filter: "drop-shadow(0 15px 35px rgba(0,0,0,.18))",
  inset: 0,
  padding: "15px",
  position: "absolute",
  zIndex: 1,
}));

export const Header = styled(Stack)(() => ({
  alignItems: "center",
  flexDirection: "row",
}));

export const Logo = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100px",
  height: "100px",
  willChange: "transform, opacity",
}));

export const HeaderContent = styled(Box)(() => ({}));

export const Title = styled(Typography)(() => ({
  fontWeight: "900",
}));

export const SubTitle = styled(Typography)(() => ({
  fontWeight: "300",
}));

export const MainMenuLink = styled(Link)(() => ({
  width: "min(230px, 65vw)",
  maxWidth: "230px",
  padding: "8px 0",
  boxSizing: "border-box",

  "& a": {
    display: "block",
    width: "100%",
    textDecoration: "none",
  },
}));

export const MenuLinkTitle = styled(Typography)(() => ({
  color: "#000",
  fontFamily: "dahlia",
  fontWeight: 900,
  letterSpacing: "5px",
  whiteSpace: "normal",
  overflowWrap: "break-word",
}));

export const LiveCardWrapper = styled(Stack)(() => ({
  alignItems: "center",
  flexDirection: "row",
  gap: 1.5,
  justifyContent: "center",
}));

export const Dot = styled(Box)(() => ({
  width: 14,
  height: 14,
  borderRadius: "50%",
  background: "#38d430",
  boxShadow: "0 0 15px #38d430",
  margin: "0 10px",
}));

export const Live = styled(Typography)(() => ({
  color: "#fff",
}));

export const Decoration = styled(Box)(() => ({
  position: "absolute",
  bottom: 0,
  right: 50,
  width: "300px",
  height: "250px",
  zIndex: 3,
  pointerEvents: "none",
}));
