import { Box, styled } from "@mui/material";

export const MapContainer = styled(Box)(({ theme }) => ({
  position: "relative",

  height: 650,

  overflow: "hidden",

  borderRadius: 40,

  boxShadow: "0 50px 150px rgba(0,0,0,.45)",

  [theme.breakpoints.down("md")]: {
    height: 450,
  },
}));

export const MapGlow = styled(Box)({
  position: "absolute",

  top: -200,
  left: -200,

  width: 500,
  height: 500,

  borderRadius: "50%",

  background: "rgba(180,255,57,.08)",

  filter: "blur(140px)",

  zIndex: 10,

  pointerEvents: "none",
});
