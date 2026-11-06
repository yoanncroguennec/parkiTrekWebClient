// GOOD
import { Box, BoxProps, Stack, StackProps, styled } from "@mui/material";
// SHAPES
import { menuMobileDrawerBG_ClipPath } from "@/app/components/common/shapes";
import { zIndex } from "@/app/utils/constants/styles/theme/ZIndex";

const bgImgMainMenuCellular = "/assets/imgs/menu/mobile/bgImgMainMenuCellular.png";

export const MainMenuContainer = styled(Stack)<StackProps>(() => ({
  height: "100vh",
  inset: 0,
  overflow: "hidden",
  position: "fixed",
  width: "100vw",
  zIndex: zIndex.fullScreenMenu,
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
  clipPath: menuMobileDrawerBG_ClipPath,
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
