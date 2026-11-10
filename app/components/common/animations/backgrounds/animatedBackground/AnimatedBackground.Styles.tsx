import { Box, styled } from "@mui/material";

export const Root = styled(Box)({
  position: "relative",

  minHeight: "100vh",

  width: "100%",

  overflow: "hidden",
});

export const BackgroundLayer = styled(Box)({
  position: "absolute",

  inset: 0,

  zIndex: 0,

  background: `
    radial-gradient(
      circle at 20% 20%,
      rgba(255, 120, 190, 0.85) 0%,
      rgba(255, 120, 190, 0) 45%
    ),

    radial-gradient(
      circle at 80% 80%,
      rgba(170, 80, 255, 0.75) 0%,
      rgba(170, 80, 255, 0) 45%
    ),

    linear-gradient(
      135deg,
      #ff5ca8 0%,
      #e83e91 45%,
      #8f3dff 100%
    )
  `,

  clipPath: "url(#footer-wave-clip)",
});

export const BackgroundLayerAnimated = styled(Box)({
  position: "absolute",

  inset: 0,

  zIndex: 1,

  opacity: 0,

  background: `
      radial-gradient(
        circle at 18% 18%,
        rgba(255, 255, 255, 0.95) 0%,
        rgba(255, 255, 255, 0.4) 20%,
        transparent 42%
      ),

      radial-gradient(
        circle at 82% 78%,
        rgba(185, 100, 255, 0.65) 0%,
        transparent 45%
      ),

      radial-gradient(
        circle at 20% 75%,
        rgba(255, 125, 195, 0.65) 0%,
        transparent 42%
      ),

      linear-gradient(
        135deg,
        #ffffff 0%,
        #ffe5f2 30%,
        #ffb3d8 55%,
        #d89aff 78%,
        #9c63ff 100%
      )
    `,

  clipPath: "url(#footer-wave-clip)",
});

export const Content = styled(Box)({
  position: "relative",

  zIndex: 2,

  minHeight: "100vh",

  padding: "250px 0 100px 0",
});
