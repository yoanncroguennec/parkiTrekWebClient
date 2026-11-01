import { Box, Button, styled } from "@mui/material";

export type MapMode = "simple" | "satellite";

export const ControlsContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== "mobile",
})<{
  mobile: boolean;
}>(({ mobile }) => ({
  position: mobile ? "relative" : "absolute",

  ...(mobile
    ? {
        bottom: "auto",
        left: "auto",
        transform: "none",
      }
    : {
        bottom: 30,
        left: "50%",
        transform: "translateX(-50%)",
      }),

  zIndex: 20,

  display: "flex",

  flexShrink: 0,

  padding: 4,

  borderRadius: "999px",

  background: "rgba(10,10,10,.6)",

  backdropFilter: "blur(24px)",

  border: "1px solid rgba(255,255,255,.1)",

  boxShadow: "0 20px 60px rgba(0,0,0,.35)",
}));

export const ActiveBackground = styled(Box, {
  shouldForwardProp: (prop) => prop !== "active",
})<{
  active: MapMode;
}>(({ active }) => ({
  position: "absolute",

  top: 4,
  bottom: 4,

  left: active === "simple" ? 4 : "50%",

  width: "calc(50% - 4px)",

  borderRadius: "999px",

  background: "linear-gradient(135deg, #B4FF39, #22d3ee)",

  boxShadow: "0 0 25px rgba(180,255,57,.25)",

  transition: "left .55s cubic-bezier(.22,1,.36,1)",

  pointerEvents: "none",
}));

export const ControlButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== "active" && prop !== "mobile",
})<{
  active: boolean;
  mobile: boolean;
}>(({ active, mobile }) => ({
  position: "relative",

  zIndex: 1,

  minWidth: mobile ? 38 : 110,

  width: mobile ? 38 : "auto",

  height: mobile ? 34 : 42,

  padding: mobile ? 0 : "0 18px",

  borderRadius: "999px",

  color: active ? "#07110b" : "rgba(255,255,255,.65)",

  fontSize: 12,

  fontWeight: 600,

  letterSpacing: ".08em",

  textTransform: "uppercase",

  transition: "color .35s ease",

  "&:hover": {
    background: "transparent",
  },

  "& svg": {
    fontSize: mobile ? 18 : 21,

    transition: "transform .35s cubic-bezier(.22,1,.36,1)",
  },

  "&:hover svg": {
    transform: "scale(1.1)",
  },
}));
