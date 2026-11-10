import {
  styled,
  Box,
  Button,
  Chip,
  Stack,
  StackProps,
  Typography,
  TypographyProps,
} from "@mui/material";

/* =========================================================
   CARD
========================================================= */

export const CardContainer = styled(Stack)<StackProps>(({ theme }) => ({
  width: "100%",
  padding: "25px 15px",
  gap: 15,
  [theme.breakpoints.up("md")]: {
    padding: "35px 20px",
  },
}));

/* =========================================================
   TITLE
========================================================= */

export const Title = styled(Typography)<TypographyProps>(({ theme }) => ({
  fontSize: "28px",
  fontWeight: 900,
  textAlign: "center",

  [theme.breakpoints.up("md")]: {
    fontSize: "35px",
  },
}));

/* =========================================================
   IMAGE + DATE WRAPPER
========================================================= */

export const TrekImageDateWrapper = styled(Box)(({ theme }) => ({
  position: "relative",

  width: "100%",
  height: "220px",

  marginTop: "8px",
  marginBottom: "16px",

  marginLeft: "auto",
  marginRight: "auto",

  [theme.breakpoints.up("md")]: {
    width: "500px",
    height: "250px",
  },
}));
/* =========================================================
   IMAGE
========================================================= */

export const ImageContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100%",
  height: "100%",
  borderRadius: "20px",
  overflow: "hidden",

  boxShadow: "0 25px 50px rgba(0, 0, 0, 0.18)",

  transition: "transform 0.5s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.5s ease",

  /* Image Next.js */
  "& img": {
    objectFit: "cover",
    objectPosition: "center",
  },

  "&:hover": {
    transform: "translateY(-4px) scale(1.01)",
    boxShadow: "0 35px 65px rgba(0, 0, 0, 0.24)",
  },

  [theme.breakpoints.up("md")]: {
    borderRadius: "25px",
    boxShadow: "0 30px 60px rgba(0, 0, 0, 0.22)",

    "&:hover": {
      transform: "translateY(-6px) scale(1.01)",
      boxShadow: "0 40px 75px rgba(0, 0, 0, 0.28)",
    },
  },
}));

/* =========================================================
   FLOATING DATE
========================================================= */

export const FloatingDateCard = styled(Stack)(({ theme }) => ({
  padding: "8px 15px",
  position: "absolute",
  top: "-12px",
  right: "-8px",
  zIndex: 5,

  alignItems: "center",
  justifyContent: "center",

  backgroundColor: "#fff",
  borderRadius: "20px",

  boxShadow: "0 18px 35px rgba(0, 0, 0, 0.18)",

  transform: "rotate(3deg) translateY(0)",

  transition: "transform 0.45s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.45s ease",

  animation: "floatingDate 4s ease-in-out infinite",

  "@keyframes floatingDate": {
    "0%, 100%": {
      transform: "rotate(3deg) translateY(0)",
    },

    "50%": {
      transform: "rotate(3deg) translateY(-8px)",
    },
  },

  "&:hover": {
    animation: "none",
    transform: "rotate(0deg) translateY(-10px) scale(1.04)",
    boxShadow: "0 28px 55px rgba(0, 0, 0, 0.25)",
  },

  [theme.breakpoints.up("md")]: {
    top: "-18px",
    padding: "15px 25px",
    right: "-18px",

    borderRadius: "25px",
  },
}));

/* =========================================================
   DATE
========================================================= */

export const DateDay = styled(Typography)<TypographyProps>(({ theme }) => ({
  fontSize: "24px",
  fontWeight: 900,
  lineHeight: 1,
  color: "#17362D",

  [theme.breakpoints.up("md")]: {
    fontSize: "28px",
  },
}));

export const DateMonth = styled(Typography)<TypographyProps>(({ theme }) => ({
  marginTop: "4px",

  fontSize: "15px",
  fontWeight: 600,

  textTransform: "uppercase",
  letterSpacing: "0.08em",

  color: "#71966C",

  [theme.breakpoints.up("md")]: {
    fontSize: "17px",
  },
}));

/* =========================================================
   INFORMATIONS
========================================================= */

export const InformationsWrapper = styled(Stack)(({ theme }) => ({
  alignSelf: "stretch",
  gap: "15px",
  flexDirection: "row",
  alignItems: "flex-end",
  [theme.breakpoints.up("md")]: {
    alignSelf: "flex-end",
  },
}));

export const Information = styled(Chip)(({ theme }) => ({
  height: "36px",

  fontSize: "15px",

  fontWeight: 900,

  "& .MuiChip-icon": {
    width: 24,
    height: 24,
    marginLeft: 6,
    marginRight: 4,
  },

  [theme.breakpoints.up("md")]: {
    height: "40px",

    fontSize: "18px",

    "& .MuiChip-icon": {
      width: 28,
      height: 28,
    },
  },
}));

/* =========================================================
   DESTINATION
========================================================= */

export const Destination = styled(Typography)<TypographyProps>(({ theme }) => ({
  fontSize: "18px",
  fontWeight: 900,

  textAlign: "center",

  [theme.breakpoints.up("md")]: {
    fontSize: "22px",
  },
}));

/* =========================================================
   DESCRIPTION
========================================================= */

export const Description = styled(Typography)<TypographyProps>(({ theme }) => ({
  width: "100%",
  fontSize: "16px",
  lineHeight: 1.6,

  textAlign: "justify",
  [theme.breakpoints.up("md")]: {
    fontSize: "18px",
  },
}));

/* =========================================================
   BUTTON
========================================================= */

export const DetailsButton = styled(Button)(({ theme }) => ({
  alignSelf: "flex-end",

  fontSize: "15px",
  fontWeight: 900,

  marginTop: "24px",
  padding: "7px 20px",

  borderRadius: "999px",

  color: "#71966C",
  borderColor: "#71966C",

  transition: "transform 0.3s ease, background-color 0.3s ease, border-color 0.3s ease",

  "&:hover": {
    borderColor: "#5F825A",
    backgroundColor: "rgba(113, 150, 108, 0.08)",
    transform: "translateX(4px)",
  },

  [theme.breakpoints.up("md")]: {
    fontSize: "16px",
    marginTop: "32px",
    padding: "8px 24px",
  },
}));
