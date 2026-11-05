import Image from "next/image";
import {
  styled,
  Box,
  Typography,
  BoxProps,
  TypographyProps,
} from "@mui/material";

type TimelineItem_Props = {
  left: boolean;
};

type CardContentProps = {
  open: boolean;
};

export const TimelineItem = styled(Box, {
  shouldForwardProp: (prop) => prop !== "left",
})<BoxProps & TimelineItem_Props>(({ theme, left }) => ({
  position: "relative",
  minHeight: "auto",
  display: "block",
  background: "red",
  // padding: "150px 0 100px",
  "&:not(:last-child)": {
    marginBottom: 0,
  },
  [theme.breakpoints.up("md")]: {
    // minHeight: "720px",
    display: "flex",
    alignItems: "center",
    justifyContent: left ? "flex-start" : "flex-end",
    ...(left
      ? {
          paddingRight: "calc(50% + 100px)",
        }
      : {
          paddingLeft: "calc(50% + 100px)",
        }),
    "&:not(:last-child)": {
      marginBottom: "100px",
    },
  },
}));

export const TimelineYear = styled(Box)<BoxProps>(({ theme }) => ({
  position: "absolute",
  top: "70px",
  left: 0,
  transform: "none",
  zIndex: 0,
  fontSize: "110px",
  lineHeight: 1,
  letterSpacing: "-0.08em",
  fontWeight: 700,
  color: "rgba(60, 253, 12, 0.13)",
  whiteSpace: "nowrap",
  pointerEvents: "none",
  [theme.breakpoints.up("md")]: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    fontSize: "clamp(100px, 15vw, 240px)",
  },
}));

export const TimelineDotWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  position: "absolute",
  top: "80px",
  left: "8px",
  width: "16px",
  height: "16px",
  transform: "translate(-50%, -50%)",
  zIndex: 5,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  [theme.breakpoints.up("md")]: {
    top: "50%",
    left: "50%",
  },
}));

export const TimelineDot = styled(Box)<BoxProps>({
  width: "8px",
  height: "8px",
  borderRadius: "50%",
  background: "#f5f3ee",
  boxShadow: "0 0 0 5px #04f810, 0 0 0 6px rgba(32, 232, 6, 0.7)",
});

export const TimelineCard = styled(Box)<BoxProps>(({ theme }) => ({
  position: "relative",
  width: "100%",
  background: "#fff",
  border: "1px solid rgba(0, 0, 0, 0.08)",
  overflow: "hidden",
  cursor: "pointer",

  "&:hover .timeline-image": {
    filter: "grayscale(0%)",
    transform: "scale(1.06)",
  },

  "&:hover .hover-hint": {
    opacity: 0,
    transform: "translateY(15px)",
  },

  [theme.breakpoints.up("md")]: {
    width: "min(100%, 570px)",
  },
}));

export const ImageWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  position: "relative",
  width: "100%",
  height: "280px",
  overflow: "hidden",

  "&::after": {
    content: '""',
    position: "absolute",
    top: 0,
    left: "-100%",
    width: "50%",
    height: "100%",
    zIndex: 10,

    background:
      "linear-gradient(90deg, transparent, rgba(255,255,255,0.45), transparent)",

    transform: "skewX(-20deg)",

    animation: "shine 2s ease-in-out 1s infinite",

    pointerEvents: "none",
  },

  "@keyframes shine": {
    "0%": {
      left: "-100%",
    },

    "100%": {
      left: "150%",
    },
  },

  [theme.breakpoints.up("md")]: {
    height: "350px",
  },
}));

export const TimelineImage = styled(Image)({
  position: "absolute",
  inset: "-10%",

  width: "120%",
  height: "120%",

  objectFit: "cover",

  filter: "grayscale(100%)",

  transition: "filter 0.7s ease, transform 1s cubic-bezier(0.22, 1, 0.36, 1)",
});

export const ImageOverlay = styled(Box)<BoxProps>({
  position: "absolute",
  inset: 0,
  background:
    "linear-gradient(to bottom, transparent 50%, rgba(0, 0, 0, 0.75))",
});

export const ImageNumber = styled(Typography)<TypographyProps>({
  position: "absolute",
  top: "25px",
  left: "25px",
  fontSize: "11px",
  letterSpacing: "0.15em",
  color: "#000",
});

export const ImageCategory = styled(Typography)<TypographyProps>({
  position: "absolute",
  right: "25px",
  bottom: "25px",
  fontSize: "10px",
  letterSpacing: "0.2em",
  color: "#000",
});

export const CardContent = styled(Box, {
  shouldForwardProp: (prop) => prop !== "open",
})<BoxProps & CardContentProps>(({ theme, open }) => ({
  position: "relative",

  maxHeight: open ? "500px" : "0px",

  opacity: open ? 1 : 0,

  transform: open ? "translateY(0)" : "translateY(-30px)",

  overflow: "hidden",

  padding: open ? "30px" : "0 30px",

  pointerEvents: open ? "auto" : "none",

  transition: `
    max-height 0.7s cubic-bezier(0.22, 1, 0.36, 1),
    opacity 0.45s ease,
    transform 0.7s cubic-bezier(0.22, 1, 0.36, 1),
    padding 0.7s cubic-bezier(0.22, 1, 0.36, 1)
  `,

  [theme.breakpoints.up("md")]: {
    padding: open ? "40px 42px 35px" : "0 42px",
  },
}));

export const CardTitle = styled(Typography)<TypographyProps>({
  margin: 0,
  fontSize: "clamp(35px, 4vw, 52px)",
  lineHeight: 0.95,
  fontWeight: 500,
  letterSpacing: "-0.055em",
});

export const CardSubtitle = styled(Typography)<TypographyProps>({
  margin: "18px 0 25px",
  fontFamily: "Georgia, serif",
  fontStyle: "italic",
  fontSize: "18px",
  color: "#aaa",
});

export const CardDescription = styled(Typography)<TypographyProps>({
  maxWidth: "450px",
  margin: 0,
  fontSize: "14px",
  lineHeight: 1.7,
  color: "#777",
});

export const CardFooter = styled(Box)<BoxProps>({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginTop: "35px",
  paddingTop: "20px",
  borderTop: "1px solid rgba(255, 255, 255, 0.1)",
  fontSize: "10px",
  letterSpacing: "0.2em",
  color: "#999",
});

export const Arrow = styled(Box)<BoxProps>({
  fontSize: "24px",
  lineHeight: 1,
  color: "#000",
  transition: "transform 0.4s ease",
});

export const HoverHint = styled(Box)({
  position: "absolute",

  right: "25px",
  bottom: "25px",

  zIndex: 20,

  display: "flex",
  alignItems: "center",
  gap: "10px",

  padding: "10px 14px",

  background: "rgba(0, 0, 0, 0.4)",

  border: "1px solid rgba(255, 255, 255, 0.35)",

  color: "#fff",

  transition: "opacity 0.4s ease, transform 0.4s ease",

  pointerEvents: "none",
});

export const HoverText = styled(Box)({
  fontSize: "9px",
  fontWeight: 700,
  letterSpacing: "0.2em",
});

export const HoverIcon = styled(Box)({
  width: "22px",
  height: "22px",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  borderRadius: "50%",

  border: "1px solid rgba(255, 255, 255, 0.4)",

  fontSize: "13px",

  color: "#fff",

  animation: "hoverArrowMove 2.5s ease-in-out infinite",

  "@keyframes hoverArrowMove": {
    "0%, 100%": {
      transform: "translate(0, 0)",
    },

    "50%": {
      transform: "translate(2px, -2px)",
    },
  },
});
