// GOOD
import { Box, Stack, styled } from "@mui/material";
import { keyframes } from "@emotion/react";

const marquee = keyframes`
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-50%);
  }
`;

export const Marquee = styled(Box)(({ theme }) => ({
  width: "100%",
  margin: "15px 0",
  overflow: "hidden",
  whiteSpace: "nowrap",

  [theme.breakpoints.up("md")]: {
    // Desktop
  },
}));

export const MarqueeTrack = styled(Stack)(({ theme }) => ({
  flexDirection: "row",
  width: "max-content",

  animation: `${marquee} 50s linear infinite`,

  [theme.breakpoints.up("md")]: {
    animationDuration: "50s",
  },
}));

export const MarqueeItem = styled(Stack)(({ theme }) => ({
  alignItems: "center",
  flexDirection: "row",
  flexShrink: 0,

  padding: "0 20px",

  fontSize: "14px",
  fontWeight: 600,

  "&::after": {
    content: '"✦"',
    marginLeft: "20px",
    fontSize: "18px",
  },

  [theme.breakpoints.up("md")]: {
    padding: "0 40px",

    fontSize: "16px",

    "&::after": {
      marginLeft: "40px",
      fontSize: "20px",
    },
  },
}));

export const TrainingMarqueeIcon = styled(Box)({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",

  fontSize: "18px",

  "&:first-child": {
    marginRight: "10px",
  },

  "&:last-child": {
    marginLeft: "10px",
  },
});
