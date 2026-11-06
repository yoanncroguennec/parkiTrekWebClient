import { Box, styled } from "@mui/material";

import { TIME_CONFIG } from "./constants/Time.constants";

export const TimeContainer = styled(Box)({
  position: "absolute",

  top: TIME_CONFIG.position.top,
  right: TIME_CONFIG.position.right,
});

export const TimeCard = styled(Box)({
  padding: TIME_CONFIG.card.padding,
  borderRadius: TIME_CONFIG.card.borderRadius,
  backdropFilter: TIME_CONFIG.card.backdropFilter,
  background: TIME_CONFIG.colors.background,
  border: TIME_CONFIG.colors.border,
  boxShadow: TIME_CONFIG.colors.shadow,
  minWidth: TIME_CONFIG.card.minWidth,
});

export const TimeSeparator = styled(Box)({
  background: TIME_CONFIG.colors.primary,
  height: TIME_CONFIG.separator.height,
  margin: TIME_CONFIG.separator.margin,
  width: TIME_CONFIG.separator.width,
});

export const TimeRow = styled(Box)({
  alignItems: "center",
  display: "flex",
  justifyContent: "center",
});
