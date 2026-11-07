import { Stack, Typography, TypographyProps, styled } from "@mui/material";

export const ContentContainer = styled(Stack)({
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
  minHeight: "100vh",
  width: "100%",
});

export const Title = styled(Typography)<TypographyProps>(({ theme }) => ({
  fontFamily: "var(--font-dahlia)",
  fontSize: "38px",
  fontWeight: 900,
  letterSpacing: "4px",
  lineHeight: 1.05,
  textAlign: "center",
  textShadow: "0 4px 20px rgba(0,0,0,.5)",
  [theme.breakpoints.up("md")]: {
    color: "inherit",
    fontSize: "77px",
    letterSpacing: "8px",
    textShadow: "none",
  },
}));

export const Subtitle = styled(Typography)<TypographyProps>(({ theme }) => ({
  fontWeight: 600,
  fontSize: "14px",
  letterSpacing: "0.15em",
  textAlign: "center",
  textShadow: "0 4px 20px rgba(0,0,0,.5)",
  textTransform: "uppercase",
  [theme.breakpoints.up("md")]: {
    color: "inherit",
    fontSize: "21px",
    letterSpacing: "0.2em",
    textShadow: "none",
  },
}));

//////////
// GRID //
//////////

export const Grid = styled(Stack)(({ theme }) => ({
  display: "grid",
  gap: "24px",
  gridTemplateColumns: "1fr",
  marginTop: "32px",
  [theme.breakpoints.up("md")]: {
    gridTemplateColumns: "repeat(2, 1fr)",
  },
}));

//////////
// CARD //
//////////

export const Card = styled(Stack)(({ theme }) => ({
  alignItems: "center",
  background: "rgba(255,255,255,.08)",
  backdropFilter: "blur(24px)",
  border: "1px solid rgba(255,255,255,.12)",
  borderRadius: "25px",
  boxShadow: "0 10px 40px rgba(0,0,0,.15)",
  cursor: "pointer",
  justifyContent: "center",
  padding: "16px",
  transformStyle: "preserve-3d",
  [theme.breakpoints.up("md")]: {
    padding: "24px",
  },
}));

export const IconCard = styled(Stack)(() => ({
  alignItems: "center",
  background: "linear-gradient(to left,#A5FECB,#20BDFF,#5433FF)",
  borderRadius: "50%",
  justifyContent: "center",
  margin: "12px 0",
  padding: "8px",
}));

export const TitleCard = styled(Typography)<TypographyProps>(({ theme }) => ({
  color: "#FEFEFE",
  fontSize: "14px",
  letterSpacing: "2px",
  textAlign: "center",
  textShadow: "2px 2px 2px #000",
  textTransform: "uppercase",
  [theme.breakpoints.up("md")]: {
    fontSize: "16px",
  },
}));

export const ValueCard = styled(Typography)<TypographyProps>(({ theme }) => ({
  background: "linear-gradient(135deg,#06B6D4,#8B5CF6)",
  position: "relative",
  fontSize: "29px",
  fontWeight: 900,
  letterSpacing: "-0.05em",
  lineHeight: 1,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  zIndex: 2,
  [theme.breakpoints.up("md")]: {
    fontSize: "40px",
  },
}));
