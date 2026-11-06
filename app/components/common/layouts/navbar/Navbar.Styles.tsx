"use client";

import Image from "next/image";
import { Stack, StackProps, styled } from "@mui/material";
import { zIndex } from "@/app/utils/constants/styles/theme/ZIndex";

export const NavbarContainer = styled(Stack)<StackProps>(({ theme }) => ({
  alignItems: "center",
  background: "rgba(0, 0, 0, 0.2)",
  flexDirection: "row",
  justifyContent: "space-between",
  padding: "10px",
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  zIndex: zIndex.appBar,
  [theme.breakpoints.up("md")]: {
    background: "rgba(255,255,255,.08)",
    backdropFilter: "blur(24px)",
    border: "1px solid rgba(255,255,255,.12)",
    borderRadius: "999px",
    boxShadow: "0 10px 40px rgba(0,0,0,.15)",
    top: "20px",
    left: "50%",
    transform: "translateX(-50%)",
    width: "70vw",
  },
}));

export const ImgLogo = styled(Image)(({ theme }) => ({
  height: "28px",
  width: "28px",
  [theme.breakpoints.up("md")]: {
    height: "32px",
    width: "32px",
  },
}));

export const Actions = styled(Stack)<StackProps>(() => ({
  alignItems: "center",
  flexDirection: "row",
  gap: 50,
  justifyContent: "space-between",
}));

export const Action = styled(Stack)<StackProps>(() => ({
  alignItems: "center",
}));
