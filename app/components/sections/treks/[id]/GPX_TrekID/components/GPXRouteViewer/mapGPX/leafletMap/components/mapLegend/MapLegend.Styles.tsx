import { Box, Button, Stack, styled, Typography } from "@mui/material";

export const LegendContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== "infoOpen",
})<{
  infoOpen: boolean;
}>(({ theme, infoOpen }) => ({
  position: "absolute",

  right: 25,
  bottom: infoOpen ? 310 : 25,

  zIndex: 50,

  padding: 16,

  borderRadius: "25px",

  background: "rgba(15,15,15,.65)",

  backdropFilter: "blur(20px)",

  color: "#fff",

  border: "1px solid rgba(255,255,255,.08)",

  boxShadow: "0 20px 60px rgba(0,0,0,.3)",

  transition: "bottom .7s cubic-bezier(.22,1,.36,1)",

  // MOBILE : comportement actuel
  [theme.breakpoints.down("md")]: {
    right: 16,
    bottom: 16,

    padding: 0,

    borderRadius: "18px",

    transition: "none",
  },
}));

export const LegendTrigger = styled(Stack)({
  width: "fit-content",

  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",

  gap: 20,

  cursor: "pointer",

  minHeight: 42,

  padding: "0 14px",

  userSelect: "none",
});

export const LegendTriggerContent = styled(Stack)({
  flexDirection: "row",
  alignItems: "center",
  gap: 10,
});

export const LegendIndicator = styled(Box)({
  width: 7,
  height: 7,

  borderRadius: "50%",

  background: "#B4FF39",

  boxShadow: "0 0 12px rgba(180,255,57,.8)",
});

export const LegendTriggerText = styled(Typography)({
  color: "#fff",

  fontSize: 11,
  fontWeight: 600,

  letterSpacing: 2,
  textTransform: "uppercase",
});

export const LegendArrow = styled(Box, {
  shouldForwardProp: (prop) => prop !== "open",
})<{
  open: boolean;
}>(({ open }) => ({
  width: 7,
  height: 7,

  borderRight: "1px solid rgba(255,255,255,.8)",
  borderBottom: "1px solid rgba(255,255,255,.8)",

  transform: open ? "rotate(225deg) translateY(-2px)" : "rotate(45deg) translateY(-2px)",

  transition: "transform .35s cubic-bezier(.22,1,.36,1)",
}));

export const LegendContent = styled(Stack, {
  shouldForwardProp: (prop) => prop !== "open",
})<{
  open: boolean;
}>(({ open }) => ({
  overflow: "hidden",

  width: "100%",

  maxHeight: open ? 300 : 0,

  opacity: open ? 1 : 0,

  padding: open ? "8px 14px 14px" : "0 14px",

  transform: open ? "translateY(0)" : "translateY(-6px)",

  transition:
    "max-height .45s cubic-bezier(.22,1,.36,1), " +
    "opacity .3s ease, " +
    "padding .45s cubic-bezier(.22,1,.36,1), " +
    "transform .45s cubic-bezier(.22,1,.36,1)",
}));

export const LegendItem = styled(Stack)({
  flexDirection: "row",
  alignItems: "center",

  gap: 10,

  minHeight: 25,
});

export const LegendDot = styled(Box, {
  shouldForwardProp: (prop) => prop !== "dotColor",
})<{
  dotColor: string;
}>(({ dotColor }) => ({
  width: 9,
  height: 9,

  flexShrink: 0,

  borderRadius: "50%",

  background: dotColor,

  boxShadow: `0 0 12px ${dotColor}`,
}));

export const LegendLabel = styled(Typography)({
  color: "rgba(255,255,255,.72)",

  fontSize: 11,

  letterSpacing: ".04em",
});

export const InfoButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== "active",
})<{
  active: boolean;
}>(({ active }) => ({
  width: "100%",
  minWidth: 140,
  height: 38,

  marginTop: 12,

  padding: "0 18px",

  borderRadius: "999px",

  color: active ? "#07110b" : "rgba(255,255,255,.75)",

  background: active ? "linear-gradient(135deg, #B4FF39, #22d3ee)" : "rgba(255,255,255,.06)",

  border: "1px solid rgba(255,255,255,.08)",

  fontSize: 11,
  fontWeight: 600,

  letterSpacing: ".1em",

  textTransform: "uppercase",

  transition:
    "background .35s ease, " +
    "color .35s ease, " +
    "transform .35s cubic-bezier(.22,1,.36,1), " +
    "box-shadow .35s ease",

  "&:hover": {
    background: active ? "linear-gradient(135deg, #B4FF39, #22d3ee)" : "rgba(255,255,255,.1)",

    transform: "translateY(-2px)",

    boxShadow: "0 8px 25px rgba(0,0,0,.25)",
  },

  "&:active": {
    transform: "translateY(0) scale(.97)",
  },

  "& .MuiButton-startIcon": {
    marginRight: 6,

    "& svg": {
      fontSize: 17,
    },
  },
}));
