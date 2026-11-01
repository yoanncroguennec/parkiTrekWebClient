import { Stack, styled } from "@mui/material";

export const NavigationContainer = styled(Stack)(({ theme }) => ({
  alignItems: "center",
  // background: "red",
  flexDirection: "row",
  justifyContent: "center",
  margin: "0px 0",
  width: "100%",
  [theme.breakpoints.up("md")]: {},
}));
