import { Box, styled } from "@mui/material";
import { idleConfig } from "./constants";
import { zIndex } from "@/app/utils/constants/styles/theme/ZIndex";

export const IdleOverlay = styled(Box)(() => ({
  position: "fixed",
  inset: 0,
  backgroundColor: "#000",
  overflow: "hidden",
  cursor: "none",
  visibility: "hidden",
  zIndex: zIndex.idleScreen,
}));

export const IdleBackground = styled(Box)({
  position: "relative",
  width: "100vw",
  height: "100vh",

  backgroundImage: `url("${idleConfig.IDLE_BgImg}")`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
});
