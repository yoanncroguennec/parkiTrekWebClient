import Image from "next/image";
import {
  Box,
  BoxProps,
  Container,
  ContainerProps,
  styled,
} from "@mui/material";

export const BackgroundImageStyles = styled(Box)<BoxProps>(() => ({
  position: "relative",
  width: "100%",
  minHeight: "100vh",
  overflow: "hidden",
}));

export const ImageStyles = styled(Image)<BoxProps>(() => ({
  objectFit: "cover" as const,
  objectPosition: "center center",
  userSelect: "none" as const,
  pointerEvents: "none" as const,
}));

export const GlobalOverlayStyles = styled(Box)<BoxProps>(() => ({
  position: "absolute",
  inset: 0,
  zIndex: 1,
  background:
    "linear-gradient(to bottom, rgba(0,0,0,.45), rgba(0,0,0,.55), rgba(0,0,0,.85))",
}));

export const BottomGradientStyles = styled(Box)<BoxProps>(() => ({
  position: "absolute",
  bottom: 0,
  left: 0,
  width: "100%",
  height: "35%",
  zIndex: 2,
  background: "linear-gradient(to top, #050505 0%, transparent 100%)",
  pointerEvents: "none",
}));

export const ContentStyles = styled(Container)<ContainerProps>(() => ({
  position: "relative",
  zIndex: 3,
  width: "100%",
  height: "100%",
  padding: "150px 10px",
}));
