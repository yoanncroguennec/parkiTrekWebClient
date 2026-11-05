import { Stack, styled } from "@mui/material";

export const FooterMountainWrapper = styled(Stack)({
  position: "absolute",
  top: "-95px",
  left: 0,
  width: "100%",
  height: "130px",
  zIndex: 5,
  pointerEvents: "none",
});

export const FooterMountainSvg = styled("svg")({
  width: "100%",
  height: "100%",
  display: "block",
  overflow: "visible",
});
