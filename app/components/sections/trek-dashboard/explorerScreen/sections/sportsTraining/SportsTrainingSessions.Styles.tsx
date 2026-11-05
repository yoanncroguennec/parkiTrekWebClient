import { Box, styled } from "@mui/material";

export const ListSports = styled(Box)(({ theme }) => ({
  width: "100%",

  display: "grid",
  gridTemplateColumns: "1fr",

  gap: "20px",

  alignItems: "stretch",

  [theme.breakpoints.up("md")]: {
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
  },
}));
