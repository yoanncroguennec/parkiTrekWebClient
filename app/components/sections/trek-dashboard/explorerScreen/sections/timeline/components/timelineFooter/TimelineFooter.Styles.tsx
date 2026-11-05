import { styled, Box, BoxProps } from "@mui/material";

export const TimelineFooterContainer = styled(Box)<BoxProps>({
  maxWidth: "900px",
  margin: "200px auto 0",
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "space-between",
});

export const FooterLine = styled(Box)<BoxProps>({
  position: "absolute",
  left: 0,
  right: 0,
  height: "1px",
  background: "rgba(255, 255, 255, 0.1)",
});

export const FooterText = styled(Box)<BoxProps>({
  paddingTop: "80px",
  fontSize: "clamp(40px, 6vw, 80px)",
  lineHeight: 0.85,
  letterSpacing: "-0.06em",
  color: "#000",
});

export const FooterArrow = styled(Box)<BoxProps>({
  fontSize: "40px",
  paddingBottom: "10px",
  color: "#777",
});
