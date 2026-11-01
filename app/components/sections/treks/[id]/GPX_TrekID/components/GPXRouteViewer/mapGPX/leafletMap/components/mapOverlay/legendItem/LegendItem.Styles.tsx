import { Box, styled, Typography } from "@mui/material";

export const LegendItemContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: 12,
});

export const LegendDot = styled(Box, {
  shouldForwardProp: (prop) => prop !== "dotColor",
})<{
  dotColor: string;
}>(({ dotColor }) => ({
  width: 12,
  height: 12,
  borderRadius: "50%",
  background: dotColor,
  boxShadow: `0 0 20px ${dotColor}`,
}));

export const LegendText = styled(Typography)({
  color: "#d1d5db",
  fontSize: 13,
});
