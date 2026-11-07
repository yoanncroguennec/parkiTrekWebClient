"use client";

import { Stack, styled } from "@mui/material";
import type { StackProps } from "@mui/material";

const imgBG_container = "/assets/imgs/payments-donations/donationSelection/bg_1.png"

export const RoDonationSelectionContainerot = styled(Stack)<StackProps>(({ theme }) => ({
  width: "100%",
  minHeight: "100vh",
  padding: "150px 50px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  alignItems: "center",

  backgroundImage: `url("${imgBG_container}")`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",

  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
  },
}));
