// GOOD
import { Box, Stack, Typography, TypographyProps, styled } from "@mui/material";

export const DividerContainer = styled(Stack)(({ theme }) => ({
  alignItems: "center",
  width: "100%",

  [theme.breakpoints.up("md")]: {
    width: "30vw",
  },
}));

export const Divider = styled(Box)(({ theme }) => ({
  width: "60%",
  height: "3px",
  margin: "10px 0",
  borderRadius: "40px",
  background: "rgba(255, 255, 255, 0.8)",

  [theme.breakpoints.up("md")]: {
    width: "15vw",
  },
}));

export const FooterGrid = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(1, 1fr)",
  justifyContent: "center",

  [theme.breakpoints.up("md")]: {
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: 16,
  },
}));

export const FooterColumn = styled(Box, {
  shouldForwardProp: (prop) => prop !== "$isFirst",
})<{ $isFirst: boolean }>(({ theme, $isFirst }) => ({
  padding: "18px",
  position: "relative",

  ...($isFirst
    ? {
        // MOBILE
        "&::after": {
          content: '""',
          position: "absolute",
          left: "50%",
          bottom: 0,
          width: "60%",
          height: "1px",
          transform: "translateX(-50%)",
          background:
            "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,.6) 50%, rgba(255,255,255,0) 100%)",
        },

        // DESKTOP
        [theme.breakpoints.up("md")]: {
          "&::after": {
            right: 0,
            left: "auto",
            top: "50%",
            bottom: "auto",
            width: "1px",
            height: "60%",
            transform: "translateY(-50%)",
            background:
              "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,.6) 50%, rgba(255,255,255,0) 100%)",
          },
        },
      }
    : {}),
}));

export const ColumnTitle = styled(Typography)<TypographyProps>(({ theme }) => ({
  color: "#8bf094",
  fontSize: "14px",
  fontWeight: 600,
  letterSpacing: ".2em",
  textTransform: "uppercase",
  opacity: 0.9,

  [theme.breakpoints.up("md")]: {
    fontSize: "16px",
  },
}));

export const FooterLink = styled(Stack)({
  alignItems: "center",
  flexDirection: "row",
  justifyContent: "space-between",
  cursor: "pointer",
  padding: "4px",

  transition: "transform .4s cubic-bezier(.22,1,.36,1)",

  "&:hover": {
    transform: "translateX(6px)",
  },
});

export const FooterLinkLabel = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "$isSocial",
})<{ $isSocial: boolean } & TypographyProps>(({ theme, $isSocial }) => ({
  color: "#FFF",
  fontSize: "14px",
  opacity: 0.9,
  letterSpacing: $isSocial ? ".08em" : "normal",
  textTransform: $isSocial ? "uppercase" : "none",

  [theme.breakpoints.up("md")]: {
    fontSize: "15px",
  },
}));

export const FooterLinkIcon = styled(Box)({
  display: "flex",
  flexShrink: 0,

  "& svg": {
    color: "#FFF",
    transition: "all .4s cubic-bezier(.22,1,.36,1)",
  },

  [`${FooterLink}:hover & svg`]: {
    transform: "translate(4px,-4px) rotate(-8deg)",
  },
});
