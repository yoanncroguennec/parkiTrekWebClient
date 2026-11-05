import { Box, Stack, Typography, styled } from "@mui/material";

/* =========================================================
   GRID
========================================================= */

export const StatsGrid = styled(Box)(({ theme }) => ({
  width: "100%",

  display: "grid",

  gridTemplateColumns: "1fr",

  gap: "20px",

  alignItems: "stretch",

  [theme.breakpoints.up("md")]: {
    gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
  },
}));

/* =========================================================
   STAT CARD
========================================================= */
export const StatCard = styled(Stack)(({ theme }) => ({
  width: "100%",
  height: "100%",

  minWidth: 0,
  minHeight: "150px",

  display: "flex",
  flexDirection: "row",
  alignItems: "center",

  gap: "16px",
  padding: "24px",

  borderRadius: "24px",

  backgroundColor: theme.palette.background.paper,

  boxShadow: "0 8px 30px rgba(0, 0, 0, 0.08)",

  transition: "transform 0.25s ease, box-shadow 0.25s ease",

  "&:hover": {
    transform: "translateY(-3px)",
    boxShadow: "0 12px 35px rgba(0, 0, 0, 0.12)",
  },

  [theme.breakpoints.down("sm")]: {
    padding: "20px",
  },
}));

/* =========================================================
   STAT ICON
========================================================= */

export const StatIcon = styled(Stack)<{
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

/* =========================================================
   STAT CONTENT
========================================================= */

export const StatContent = styled(Stack)(() => ({
  minWidth: 0,

  justifyContent: "center",

  flex: 1,
}));

/* =========================================================
   STAT TITLE
========================================================= */

export const StatTitle = styled(Typography)(({ theme }) => ({
  fontSize: "13px",

  fontWeight: 600,

  lineHeight: 1.35,

  color: theme.palette.text.primary,

  [theme.breakpoints.up("md")]: {
    fontSize: "14px",
  },
}));

/* =========================================================
   STAT VALUE
========================================================= */

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
