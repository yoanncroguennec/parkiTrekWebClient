// GOOD
import Image from "next/image";
import { Box, styled } from "@mui/material";

export const ImageContainer = styled(Box)(() => ({
  position: "relative",
  width: "100%",
  height: "100%",
  overflow: "hidden",
}));

export const HeroBackgroundImage = styled(Image)(() => ({
  objectFit: "cover",
  objectPosition: "center",
}));
