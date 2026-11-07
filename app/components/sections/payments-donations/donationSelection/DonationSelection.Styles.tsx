"use client";

import { Stack, StackProps, styled } from "@mui/material";

export const Root = styled(Stack)<StackProps>(({ theme }) => ({
  width: "100%",
  minHeight: "100vh",
  padding: "150px 50px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  alignItems: "center",

  backgroundImage: "url('/assets/imgs/payments-donations/bg_1.png')",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",

  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
  },
}));
