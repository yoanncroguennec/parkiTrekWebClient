// GOOD
import { Box, BoxProps, Stack, StackProps, styled } from "@mui/material";

// SHAPES
import { mobileDrawerBG_ClipPath } from "./shapes/mobileDrawerBG";

const bgImgMainMenuCellular = "/assets/imgs/menu/mobile/bgImgMainMenuCellular.png";

export const MainMenuContainer = styled(Stack)<StackProps>(() => ({
  height: "100vh",
  inset: 0,
  overflow: "hidden",
  position: "fixed",
  width: "100vw",
  zIndex: 9999,
}));

export const Background = styled(Box)<BoxProps>(() => ({
  backgroundImage: `url(${bgImgMainMenuCellular})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",

  inset: 0,
  position: "absolute",
}));

export const Shadow = styled(Box)<BoxProps>(() => ({
  background: "#ECE8DF",
  clipPath: mobileDrawerBG_ClipPath,
  filter: "blur(12px)",
  inset: 0,
  position: "absolute",
  transform: "translateX(18px)",
  zIndex: 0,
}));

export const CloseButton = styled(Stack)(() => ({
  position: "absolute",
  right: 50,
  top: 50,
  cursor: "pointer",
  alignItems: "center",
  justifyContent: "center",
}));
