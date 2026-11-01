import { Box, styled } from "@mui/material";

export const MarkerDot = styled(Box)({
  width: 18,
  height: 18,

  borderRadius: "50%",

  background: "#B4FF39",

  border: "3px solid #fff",

  boxShadow: `
    0 0 20px #B4FF39,
    0 0 50px rgba(180,255,57,.6)
  `,

  position: "relative",

  "&::before": {
    content: '""',

    position: "absolute",
    inset: -8,

    borderRadius: "50%",

    border: "1px solid rgba(180,255,57,.5)",

    animation: "markerPulse 2s ease-out infinite",
  },

  "@keyframes markerPulse": {
    "0%": {
      transform: "scale(.7)",
      opacity: 0.8,
    },

    "100%": {
      transform: "scale(1.8)",
      opacity: 0,
    },
  },
});
