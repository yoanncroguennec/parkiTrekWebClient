import Image from "next/image";
import { Box, Stack, Typography, styled } from "@mui/material";

export const Root = styled(Box)(() => ({
  background: "#fff",
  overflow: "hidden",
  width: "100%",
}));

export const Wrapper = styled(Stack)(({ theme }) => ({
  // background: "green",
  margin: "30px 0",
  [theme.breakpoints.up("md")]: {
    margin: "50px 0",
  },
}));

/////////
// ROW //
/////////
export const Row = styled(Box)(() => ({
  alignItems: "center",
  // background: "red",
  display: "flex",
  width: "100%",
}));

//////////////
// CATEGORY //
//////////////
export const Category = styled(Typography)(({ theme }) => ({
  background: "rgba(0,0,0,.1)",
  borderBottomLeftRadius: 25,
  borderTopLeftRadius: 25,
  flexShrink: 0,
  fontsize: "1rem",
  fontWeight: 900,
  padding: "20px 0px",
  textOrientation: "mixed",
  transform: "rotate(180deg)",
  writingMode: "vertical-rl",
  [theme.breakpoints.up("md")]: {
    fontSize: "2rem",
    padding: "30px 10px",
  },
}));

export const Marquee = styled(Box)(() => ({
  overflowX: "hidden",
  overflowY: "visible",
  paddingBottom: 50,
  paddingTop: 50,
  width: "100vw",
}));

export const MarqueeContent = styled(Stack)(() => ({
  flexWrap: "nowrap",
  overflow: "visible",
  width: "max-content",
}));

//////////
// CARD //
//////////
export const Card = styled(Box)(({ theme }) => ({
  borderRadius: 25,
  boxShadow: "0 20px 40px rgba(0,0,0,.15)",
  cursor: "pointer",
  margin: "0 12px",
  overflow: "hidden",
  position: "relative",
  transformOrigin: "center",
  transition: "transform .4s ease, box-shadow .4s ease",
  zIndex: 1,
  "&:hover": {
    transform: "scale(1.15)",
    zIndex: 100,
  },
  "&:hover ~ *": {
    zIndex: 1,
  },
  [theme.breakpoints.up("md")]: {
    margin: "0 35px",

    "&:hover": {
      transform: "scale(1.25)",
    },
  },
}));

export const SponsorImage = styled(Image)(({ theme }) => ({
  display: "block",
  height: 140,
  objectFit: "cover",
  width: 220,
  [theme.breakpoints.up("md")]: {
    height: 180,
    width: 260,
  },
}));

export const CardHeader = styled(Stack)(({ theme }) => ({
  alignItems: "center",
  flexDirection: "row",
  gap: 6,
  left: 12,
  position: "absolute",
  top: 12,
  zIndex: 2,
  [theme.breakpoints.up("md")]: {
    gap: 8,
    left: 20,
    top: 20,
  },
}));

export const LogoImage = styled(Image)(({ theme }) => ({
  height: 24,
  width: 24,
  [theme.breakpoints.up("md")]: {
    height: 30,
    width: 30,
  },
}));

export const CardTitle = styled(Typography)(({ theme }) => ({
  color: "#fff",
  fontsize: "0.95rem",
  fontWeight: 200,
  pointerEvents: "none",
  textShadow: "0 4px 12px rgba(0,0,0,.6)",
  [theme.breakpoints.up("md")]: {
    fontSize: "1.15rem",
  },
}));

export const CardInfos = styled(Stack)(({ theme }) => ({
  bottom: 12,
  left: 12,
  position: "absolute",
  [theme.breakpoints.up("md")]: {
    bottom: 20,
    left: 20,
  },
}));

export const CardAmount = styled(Typography)(({ theme }) => ({
  color: "#fff",
  fontSize: "1.15rem",
  fontWeight: 900,
  lineHeight: 1,
  [theme.breakpoints.up("md")]: {
    fontSize: "1.8rem",
  },
}));

export const CardSubtitle = styled(Typography)(({ theme }) => ({
  color: "#fff",
  fontSize: ".8rem",
  fontWeight: 500,
  [theme.breakpoints.up("md")]: {
    fontSize: "1rem",
  },
}));

export const ArrowContainer = styled(Box)(({ theme }) => ({
  bottom: 10,
  position: "absolute",
  right: 10,
  "& svg": {
    height: 22,
    width: 22,
  },
  [theme.breakpoints.up("md")]: {
    bottom: 20,
    right: 15,
    "& svg": {
      height: 36,
      width: 36,
    },
  },
}));
