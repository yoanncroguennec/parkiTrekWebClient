import { Link } from "@/i18n/navigation";
import { Box, Container, Stack, Typography, styled } from "@mui/material";
import Image from "next/image";

// CONTAINER
export const MainMenuContentContainer = styled(Container)({
  position: "relative",
  height: "100vh",
  display: "flex",
  padding: "100px 0",
});

// MENU
export const MainMenuList = styled(Stack)({
  width: "100%",
  height: "100%",
  justifyContent: "space-evenly",
});

export const MainMenuLink = styled(Link, {
  shouldForwardProp: (prop) => prop !== "isLast",
})<{ isLast?: boolean }>(({ isLast }) => ({
  alignItems: "center",
  flex: 1,
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  width: "100%",
  minWidth: 0,
  borderBottom: isLast ? "none" : "3px solid rgba(255,255,255,0.5)",
  cursor: "none",
  textDecoration: "none",
}));

// SUBTITLE
export const MainMenuSubtitle = styled(Typography)({
  color: "#FFF",
  marginLeft: "auto",
});

// THUMBNAIL
export const MainMenuThumbnail = styled(Box)({
  width: 270,
  height: 350,
  pointerEvents: "none",
  opacity: 0,
  visibility: "hidden",
  position: "absolute",
  top: 0,
  left: 0,
  zIndex: 50,
  overflow: "hidden",
  borderRadius: "25px",
  border: "1px solid rgba(255,255,255,0.2)",
  boxShadow: "0 10px 40px rgba(0,0,0,0.25)",
});

// SLIDER
export const MainMenuSlider = styled(Box)({
  height: "100%",
  pointerEvents: "none",
  position: "relative",
  width: "100%",
});

// SLIDE
export const MainMenuSlide = styled(Box)({
  position: "absolute",
  left: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  pointerEvents: "none",
});

// IMAGE
export const MainMenuImage = styled(Image)({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  objectPosition: "top",
  pointerEvents: "none",
});