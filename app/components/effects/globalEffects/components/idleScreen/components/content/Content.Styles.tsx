import { Box, Typography, TypographyProps, styled } from "@mui/material";
import Image from "next/image";

export const Container = styled(Box)({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  transformStyle: "preserve-3d",
  perspective: "1500px",
});

export const Title = styled(Typography)<TypographyProps>(({ theme }) => ({
  color: "#E3E4D8",
  fontSize: "30px",
  fontWeight: 900,
  letterSpacing: "0.8em",
  textAlign: "center",
  textTransform: "uppercase",
  [theme.breakpoints.up("md")]: {
    fontSize: "100px",
  },
}));

export const Subtitle = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "32px",
}));

export const Separator = styled(Box)({
  height: "4px",
  background: "linear-gradient(to right, transparent, rgba(139,146,112,.5), transparent)",
});

export const SubtitleText = styled(Typography)<TypographyProps>(({ theme }) => ({
  color: "#8B9270",
  fontSize: "20px",
  fontWeight: 900,
  letterSpacing: "0.8em",
  textAlign: "center",
  textTransform: "uppercase",
  [theme.breakpoints.up("md")]: {
    fontSize: "30px",
  },
}));

export const LogoContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const Logo = styled(Image)({
  width: "55px",
  height: "100px",
  transform: `rotate(50deg)`,
});
