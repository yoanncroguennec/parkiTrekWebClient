import { Stack, styled, Typography, TypographyProps } from "@mui/material";

const HERO_BACKGROUND_IMAGE =
  "/assets/imgs/trek-dashboard/explorerScreen/sportsTraingSessions/bgHeroSportsTrainingSessions.png";

export const HeroSection = styled(Stack)(({ theme }) => ({
  backgroundImage: `url("${HERO_BACKGROUND_IMAGE}")`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",

  borderRadius: "20px",
  width: "100%",
  minHeight: "auto",
  boxSizing: "border-box",
  position: "relative",
  overflow: "hidden",

  padding: theme.spacing(2, 2, 3),
  gap: theme.spacing(2),

  [theme.breakpoints.up("md")]: {
    minHeight: "70vh",
    padding: theme.spacing(3, 4),
    gap: 0,
    borderRadius: "25px",
  },
}));

export const TitleHeroSection = styled(Typography)<TypographyProps>(({ theme }) => ({
  color: "#FFF",
  fontFamily: "dahlia",
  fontSize: "30px",
  fontWeight: 900,
  letterSpacing: "2px",
  margin: "8px 0 24px",
  textAlign: "center",
  lineHeight: 1.1,

  [theme.breakpoints.up("md")]: {
    fontSize: "48px",
    letterSpacing: "5px",
    margin: "25px 0 40px",
  },
}));

export const HeroContent = styled(Stack)(({ theme }) => ({
  width: "100%",
  minWidth: 0,
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: theme.spacing(3),

  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
    alignItems: "center",
    gap: theme.spacing(6),
  },
}));
