import { Box, styled } from "@mui/material";

export const ScrollingTextWrapper = styled(Box)({
  position: "relative",
  flex: 1,
  minWidth: 0,
  overflow: "hidden",

  "&::before": {
    content: '""',
    position: "absolute",
    zIndex: 2,
    top: 0,
    left: 0,
    bottom: 0,
    width: 24,

    background: "linear-gradient(90deg, rgba(20,40,40,1), transparent)",

    pointerEvents: "none",
  },

  "&::after": {
    content: '""',
    position: "absolute",
    zIndex: 2,
    top: 0,
    right: 0,
    bottom: 0,
    width: 24,

    background: "linear-gradient(270deg, rgba(20,40,40,1), transparent)",

    pointerEvents: "none",
  },
});

export const ScrollingTextContent = styled(Box)({
  width: "max-content",

  color: "#F5F5F5",

  fontSize: "0.95rem",
  fontWeight: 500,

  letterSpacing: "-0.02em",

  whiteSpace: "nowrap",

  willChange: "transform",
});
