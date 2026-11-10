import { Box, Stack, Typography, styled } from "@mui/material";

export const StatsGrid = styled(Box)(({ theme }) => ({
  display: "grid",
  gap: "20px",
  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
  width: "100%",
  [theme.breakpoints.up("md")]: {
    gap: "30px",
    gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
  },
}));

export const StatCard = styled(Stack)(({ theme }) => ({
  alignItems: "center",
  backgroundColor: theme.palette.background.paper,
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: "16px",
  boxShadow: "0 8px 30px rgba(0, 0, 0, 0.08)",
  gap: theme.spacing(1),
  justifyContent: "center",
  padding: theme.spacing(2),
  textAlign: "center",
  transition: "transform 0.25s ease, box-shadow 0.25s ease",
  "&:hover": {
    transform: "translateY(-3px)",
    boxShadow: "0 12px 35px rgba(0, 0, 0, 0.12)",
  },
  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
  },
}));

export const StatIcon = styled(Stack, {
  // Empêcher la transmission de $background au DOM
  shouldForwardProp: (prop) => prop !== "$background",
})<{
  $background: string;
}>(({ $background }) => ({
  flexShrink: 0,
  width: "52px",
  height: "52px",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "50%",
  backgroundColor: $background,
  color: "#17362D",
  fontSize: "24px",
}));

export const StatContent = styled(Stack)(() => ({}));

export const StatTitle = styled(Typography)(({ theme }) => ({
  fontSize: "13px",
  fontWeight: 600,
  lineHeight: 1.35,
  color: theme.palette.text.primary,
  [theme.breakpoints.up("md")]: {
    fontSize: "14px",
  },
}));

export const StatValue = styled(Typography)(({ theme }) => ({
  marginTop: "4px",
  fontSize: "16px",
  fontWeight: 700,
  lineHeight: 1.2,
  color: theme.palette.text.primary,
  [theme.breakpoints.up("md")]: {
    fontSize: "19px",
  },
}));
