import { Box, Typography, styled } from "@mui/material";

// CONTAINER
export const AnimatedTitleContainer = styled(Box)({
  display: "flex",
  cursor: "none",

  "&:hover .inner": {
    transform: "translateY(-50%)",
  },
});

// LETTER
export const AnimatedLetter = styled(Box)({
  height: "3rem",
  overflow: "hidden",
});

// INNER
export const AnimatedLetterInner = styled(Box)({
  display: "flex",
  flexDirection: "column",
  transition: "transform .6s cubic-bezier(.76,0,.24,1)",
});

// TYPOGRAPHY
export const AnimatedLetterText = styled(Typography)({
  fontSize: "3rem",
  lineHeight: 1.2,
  fontWeight: 700,
  color: "#e3e4d8",
  whiteSpace: "pre",
});

export const AnimatedLetterTextHover = styled(AnimatedLetterText)({
  color: "#FFA500",
});
