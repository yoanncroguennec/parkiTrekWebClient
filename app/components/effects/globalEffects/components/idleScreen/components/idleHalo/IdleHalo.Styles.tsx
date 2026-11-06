import { Box, styled } from "@mui/material";
import { IDLE_HALO_CONFIG } from "./constants/IdleHalo.constants";

export const IdleHaloOverlay = styled(Box)({
  position: "absolute",

  width: IDLE_HALO_CONFIG.size,
  height: IDLE_HALO_CONFIG.size,

  borderRadius: "50%",

  transform: "translate(-50%, -50%)",

  backgroundColor: IDLE_HALO_CONFIG.backgroundColor,

  filter: `blur(${IDLE_HALO_CONFIG.blur}px)`,

  pointerEvents: "none",
});
