import {
  Box,
  BoxProps,
  Chip,
  ChipProps,
  Stack,
  styled,
  Typography,
  TypographyProps,
} from "@mui/material";

export const HeroIntroContainer = styled(Stack)(({ theme }) => ({
  width: "100%",
  maxWidth: "650px",
  minWidth: 0,
  gap: theme.spacing(2),
  textAlign: "center",
  alignItems: "center",

  [theme.breakpoints.up("md")]: {
    width: "auto",
    textAlign: "left",
    alignItems: "flex-start",
  },
}));

export const IntroTitleHighlight = styled(Box)<BoxProps>(({ theme }) => ({
  fontSize: "clamp(28px, 7vw, 36px)",
  fontWeight: "bold",
  letterSpacing: "1px",
  lineHeight: 1.05,
  background: "linear-gradient(90deg,#22c55e,#84cc16,#facc15)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",

  [theme.breakpoints.up("md")]: {
    fontSize: "42px",
    letterSpacing: "2px",
  },
}));

export const IntroDescription = styled(Typography)<TypographyProps>(({ theme }) => ({
  color: "#FFF",
  fontFamily: "canela",
  fontSize: "16px",
  letterSpacing: "0.3px",
  lineHeight: 1.5,
  textAlign: "center",
  overflowWrap: "break-word",
  textShadow: "2px 2px 5px rgba(0,0,0,0.9)",

  [theme.breakpoints.up("md")]: {
    fontSize: "20px",
    letterSpacing: "1px",
    textAlign: "left",
  },
}));

export const HeroChips = styled(Stack)(({ theme }) => ({
  width: "100%",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: theme.spacing(1),

  [theme.breakpoints.up("md")]: {
    justifyContent: "flex-start",
  },
}));

export const HeroChip = styled(Chip)<ChipProps>(({ theme }) => ({
  background: "#F3E5F5",
  border: "1px solid #2fff13",
  fontWeight: 600,
  maxWidth: "100%",
  height: "auto",

  "& .MuiChip-label": {
    whiteSpace: "normal",
    textAlign: "center",
    padding: theme.spacing(0.75, 1),
  },
}));
