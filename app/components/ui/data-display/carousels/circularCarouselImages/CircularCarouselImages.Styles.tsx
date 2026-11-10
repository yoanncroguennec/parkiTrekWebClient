import { Box, BoxProps, styled } from "@mui/material";
import { CARD_HEIGHT, CARD_WIDTH } from "./constants/carousel.constants";

export const CarouselContainer = styled(Box)<BoxProps>(() => ({
  alignItems: "center",
  display: "flex",
  height: "100%",
  justifyContent: "center",
  perspective: "2000px",
  position: "relative",
  transform: "translateX(280px)",
  width: "55%",
  zIndex: 0,
}));

export const RightFogOverlay = styled(Box)<BoxProps>(({}) => ({
  background: "linear-gradient(to left, #000 0%, rgba(0,0,0,.85) 30%, rgba(0,0,0,0) 100%)",
  height: "100%",
  pointerEvents: "none",
  position: "absolute",
  right: 0,
  top: 0,
  width: "350px",
  zIndex: 5,
}));

export const BackgroundHalo = styled(Box)<BoxProps>(({}) => ({
  background: "radial-gradient(circle, rgba(238, 23, 23, 0.12) 0%, transparent 70%)",
  borderRadius: "50%",
  filter: "blur(180px)",
  height: "1200px",
  pointerEvents: "none",
  position: "absolute",
  width: "1200px",
}));

export const CarouselWheel = styled(Box)<BoxProps>(({}) => ({
  height: 0,
  position: "relative",
  transformStyle: "preserve-3d",
  width: 0,
}));

export const CarouselCard = styled(Box)<BoxProps>(({}) => ({
  borderRadius: "24px",
  boxShadow: "0 30px 80px rgba(0,0,0,.45)",
  overflow: "hidden",
  position: "absolute",
  width: CARD_WIDTH,
  height: CARD_HEIGHT,

  left: -(CARD_WIDTH / 2),
  top: -(CARD_HEIGHT / 2),
  "&::after": {
    background: "linear-gradient(to top, rgba(0,0,0,.35), transparent 40%)",
    content: '""',
    inset: 0,
    position: "absolute",
  },
}));

export const CarouselImage = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  display: "block",
});
