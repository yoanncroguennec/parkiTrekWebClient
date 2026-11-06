"use client";

import { zIndex } from "@/app/utils/constants/styles/theme/ZIndex";
import { Box, styled } from "@mui/material";

export const CursorWrapper = styled(Box)({
  position: "fixed",
  inset: 0,
  pointerEvents: "none",
  zIndex: zIndex.cursor,
});

/* Point central */
export const Dot = styled(Box)({
  position: "fixed",
  left: 0,
  top: 0,
  width: 8,
  height: 8,
  borderRadius: "50%",
  background: "#FFF",
  transform: "translate(-50%, -50%)",
  pointerEvents: "none",
  zIndex: zIndex.cursorDot,
  boxShadow: `
    0 0 6px rgba(255,255,255,.9),
    0 0 12px rgba(255,255,255,.7),
    0 0 24px rgba(255,255,255,.5)
  `,
});

/* Cercle principal */
export const Circle = styled(Box)({
  position: "fixed",
  left: 0,
  top: 0,
  width: 56,
  height: 56,
  borderRadius: "50%",
  transform: "translate(-50%, -50%)",
  pointerEvents: "none",
  zIndex: zIndex.cursorCircle,

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  border: "1.5px solid rgba(255,255,255,.75)",
  background: "rgba(255,255,255,.04)",
  backdropFilter: "blur(8px)",
  WebkitBackdropFilter: "blur(8px)",

  boxShadow: `
    0 0 12px rgba(255,51,255,.35),
    0 0 30px rgba(255,51,255,.2),
    inset 0 0 12px rgba(255,255,255,.08)
  `,

  willChange: "transform",
});

/* Texte du curseur */
export const CursorText = styled("span")({
  position: "absolute",
  inset: 0,

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  color: "#ffffff",
  fontSize: 10,
  fontWeight: 700,
  letterSpacing: "0.14em",
  textTransform: "uppercase",

  opacity: 0,
  transform: "scale(.7)",

  userSelect: "none",
  whiteSpace: "nowrap",
  pointerEvents: "none",

  textShadow: `
    0 0 8px rgba(255,255,255,.8),
    0 0 16px rgba(255,51,255,.7)
  `,

  willChange: "transform, opacity",
});
