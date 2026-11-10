// GOOD
import { Stack, StackProps, styled } from "@mui/material";

export const ContentContainer = styled(Stack)<StackProps>(({ theme }) => ({
  position: "relative",
  zIndex: 5,

  width: "100%",
  height: "100vh",

  overflowY: "auto",
  overflowX: "hidden",
  flexDirection: "column",

  justifyContent: "space-between",

  padding: "70px 10px 15px 10px",

  [theme.breakpoints.up("md")]: {
    padding: "100px 80px",
  },

  scrollbarWidth: "none",

  "&::-webkit-scrollbar": {
    display: "none",
  },
}));
