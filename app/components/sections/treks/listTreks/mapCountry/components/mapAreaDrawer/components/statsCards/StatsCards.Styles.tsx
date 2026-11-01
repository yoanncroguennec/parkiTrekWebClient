// GOOD
import { Box, BoxProps, Stack, styled, Typography, TypographyProps } from "@mui/material";

type BoxIconProps = {
  color: string;
};

export const StatsCardsContainer = styled(Box)<BoxProps>(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: "8px",
  padding: "18px",

  [theme.breakpoints.up("md")]: {
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "16px",
    padding: "32px",
  },
}));

export const StatCard = styled(Box)<BoxProps>(({ theme }) => ({
  cursor: "pointer",
  width: "100%",
  padding: "18px",
  boxSizing: "border-box",
  borderRadius: "20px",
  background: "#fff",
  border: "1px solid rgba(0,0,0,.05)",
  transition: "all .35s ease",

  "&:hover": {
    transform: "translateY(-8px)",
    boxShadow: "0 25px 50px rgba(0,0,0,.08)",
  },

  [theme.breakpoints.up("md")]: {
    padding: "24px",
    borderRadius: "24px",
  },
}));

export const IconContainer = styled(Box)<BoxProps & BoxIconProps>(({ theme, color }) => ({
  color,
  fontSize: "22px",
  marginBottom: "12px",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",

  [theme.breakpoints.up("md")]: {
    fontSize: "24px",
    marginBottom: "16px",
  },
}));

export const StatInfo = styled(Stack)(() => ({
  alignItems: "flex-end",
  flexDirection: "row",
}));

export const Value = styled(Typography)<TypographyProps>(({ theme }) => ({
  fontSize: "28px",
  fontWeight: 900,
  lineHeight: 1,
  marginRight: "8px",

  [theme.breakpoints.up("md")]: {
    fontSize: "34px",
    marginRight: "10px",
  },
}));

export const Label = styled(Typography)<TypographyProps>(({ theme }) => ({
  fontSize: "12px",
  fontWeight: 500,
  marginTop: "6px",

  [theme.breakpoints.up("md")]: {
    fontSize: "16px",
    marginTop: "8px",
  },
}));
