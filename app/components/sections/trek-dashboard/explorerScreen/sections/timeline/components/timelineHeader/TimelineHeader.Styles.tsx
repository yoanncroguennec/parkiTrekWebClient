import { styled, Box, Typography, BoxProps } from "@mui/material";

export const TimelineHeaderContainer = styled(Box)<BoxProps>({
  maxWidth: "900px",
  margin: "0 auto 220px",
  position: "relative",
  zIndex: 2,
});

export const HeaderEyebrow = styled(Box)<BoxProps>({
  display: "flex",
  alignItems: "center",
  gap: "14px",
  marginBottom: "35px",
  fontSize: "11px",
  fontWeight: "700",
  letterSpacing: "0.25em",
  color: "#888",
  "& span": {
    width: "35px",
    height: "1px",
    background: "#888",
  },
});

export const HeaderTitle = styled(Typography)({
  margin: 0,
  fontSize: "clamp(70px, 11vw, 180px)",
  lineHeight: 0.82,
  letterSpacing: "-0.075em",
  fontWeight: "500",
  "& em": {
    fontFamily: "Georgia, serif",
    fontWeight: "400",
  },
});

export const HeaderDescription = styled(Typography)({
  maxWidth: "430px",
  margin: "55px 0 0 auto",
  fontSize: "15px",
  lineHeight: 1.7,
  color: "#898989",
});
