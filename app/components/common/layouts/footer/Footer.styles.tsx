"use client";

import { Stack, styled } from "@mui/material";

interface FooterBackgroundProps {
  showWave?: boolean;
}

export const FooterWaveDefinition = styled("svg")({
  position: "absolute",

  width: 0,
  height: 0,

  overflow: "hidden",

  pointerEvents: "none",
});
export const FooterRoot = styled(Stack)({
  position: "relative",
  width: "100%",
  overflow: "visible",
  zIndex: 10,
});

export const FooterBackground = styled(Stack, {
  shouldForwardProp: (prop) => prop !== "showWave",
})<FooterBackgroundProps>(({ showWave }) => ({
  position: "relative",

  width: "100%",
  height: "85vh",

  top: showWave ? "-150px" : 0,
  marginBottom: showWave ? "-150px" : 0,

  backgroundImage: 'url("/assets/imgs/components/common/layouts/footer/bgFooterDesktop.png")',

  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",

  flexShrink: 0,

  ...(showWave && {
    clipPath: "url(#footer-wave-clip)",
  }),
}));

export const FooterWhitePanel = styled(Stack)({
  position: "relative",

  width: "100%",

  height: "200vh",

  marginTop: "-5vh",

  backgroundColor: "#fff",

  borderRadius: "60px 60px 0 0",

  overflow: "visible",

  willChange: "transform",

  zIndex: 2,
});
