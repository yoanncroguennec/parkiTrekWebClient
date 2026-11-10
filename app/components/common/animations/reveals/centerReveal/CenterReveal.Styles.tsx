import { Box, styled, Typography, TypographyProps } from "@mui/material";

export const Root = styled(Box)(() => ({
  position: "fixed",
  inset: 0,
  width: "100%",
  height: "100vh",
  overflow: "hidden",
  zIndex: 9999,
}));

export const Panel = styled(Box)(() => ({
  position: "absolute",
  left: 0,
  width: "100%",
  height: "50%",
  backgroundColor: "#000",
  zIndex: 5,
}));

export const TitleTop = styled(Typography)(() => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",

  color: "#fff",

  fontSize: "6rem",
  fontWeight: 900,
  letterSpacing: ".35rem",
  lineHeight: 1,

  whiteSpace: "nowrap",

  clipPath: "inset(0 0 50% 0)",

  zIndex: 10,

  userSelect: "none",
  pointerEvents: "none",

  "@media (max-width: 600px)": {
    fontSize: "3rem",
  },
}));

export const TitleBottom = styled(Typography)<TypographyProps>(() => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",

  color: "#fff",

  fontSize: "6rem",
  fontWeight: 900,
  letterSpacing: ".35rem",
  lineHeight: 1,

  whiteSpace: "nowrap",

  clipPath: "inset(50% 0 0 0)",

  zIndex: 10,

  userSelect: "none",
  pointerEvents: "none",

  "@media (max-width: 600px)": {
    fontSize: "3rem",
  },
}));

export const Counter = styled(Box)(() => ({
  position: "absolute",
  left: "50%",
  bottom: "150px",
  transform: "translateX(-50%)",

  color: "#fff",

  fontSize: "6rem",
  fontWeight: 900,
  lineHeight: 1,

  zIndex: 20,

  userSelect: "none",
  pointerEvents: "none",
}));
