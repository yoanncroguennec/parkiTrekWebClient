import { Typography, TypographyProps, styled } from "@mui/material";

export const PlatformName = styled(Typography)<TypographyProps>({
  display: "inline-block",
  fontWeight: 800,
  color: "#fff",
  textAlign: "right",
  willChange: "transform, opacity, filter",
});
