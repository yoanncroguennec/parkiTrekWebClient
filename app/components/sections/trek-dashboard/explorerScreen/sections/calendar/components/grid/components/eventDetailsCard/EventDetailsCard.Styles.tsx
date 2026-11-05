import { styled } from "@mui/material/styles";
import { Box, Chip, IconButton, Typography } from "@mui/material";

import {
  C,
  categoryColors,
  categoryTextColors,
  type CalendarEvent,
} from "../../../../data/calendar.data";

interface AnimatedCardProps {
  $open: boolean;
}

export const AnimatedCard = styled(Box, {
  shouldForwardProp: (prop) => prop !== "$open",
})<AnimatedCardProps>(({ $open }) => ({
  position: "fixed",
  top: "50%",
  left: 0,
  zIndex: 1500,
  width: "360px",
  maxWidth: "calc(100vw - 32px)",
  boxSizing: "border-box",
  padding: "24px",
  borderRadius: "0 24px 24px 0",
  backgroundColor: C.card,
  border: `1px solid ${C.border}`,
  boxShadow: "0 25px 80px rgba(17,17,17,0.18)",
  transform: $open ? "translate(300px, -50%)" : "translate(-150%, -50%)",
  opacity: $open ? 1 : 0,
  transition:
    "transform 700ms cubic-bezier(0.16, 1, 0.3, 1), opacity 350ms ease",
  visibility: $open ? "visible" : "hidden",
  pointerEvents: $open ? "auto" : "none",

  "@media (max-width: 600px)": {
    width: "calc(100vw - 32px)",
    transform: $open ? "translate(16px, -50%)" : "translate(-150%, -50%)",
  },
}));

export const CardHeader = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  gap: 16,
});

export const CardTitleContainer = styled(Box)({
  minWidth: 0,
});

export const Eyebrow = styled(Typography)({
  fontSize: 10,
  fontWeight: 800,
  letterSpacing: "0.15em",
  textTransform: "uppercase",
  color: C.greenDark,
});

export const EventTitle = styled(Typography)({
  marginTop: 8,
  fontSize: 25,
  fontWeight: 900,
  lineHeight: 1.1,
  letterSpacing: "-0.05em",
  color: C.dark,
  overflowWrap: "anywhere",
});

export const CloseButton = styled(IconButton)({
  flexShrink: 0,
  color: C.dark,
  backgroundColor: C.bg,
  "&:hover": {
    backgroundColor: C.green,
  },
});

export const CategoryChip = styled(Chip, {
  shouldForwardProp: (prop) => prop !== "eventCategory",
})<{ eventCategory: CalendarEvent["category"] }>(({ eventCategory }) => ({
  marginTop: 16,
  backgroundColor: categoryColors[eventCategory],
  color: categoryTextColors[eventCategory],
  fontWeight: 800,
  borderRadius: 4,
}));

export const CardDivider = styled(Box)({
  height: 1,
  margin: "20px 0",
  backgroundColor: C.border,
});

export const InfoRow = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: 12,
  "& + &": {
    marginTop: 16,
  },
});

export const InfoText = styled(Typography)({
  fontSize: 13,
  color: C.dark,
});
