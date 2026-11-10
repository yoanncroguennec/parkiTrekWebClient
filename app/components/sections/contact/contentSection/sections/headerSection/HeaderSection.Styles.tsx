import { Stack, styled, Typography, TypographyProps } from "@mui/material";

export const HeaderContainer = styled(Stack)({
  width: "100%",
});

export const Title = styled(Typography)<TypographyProps>(({ theme }) => ({
  color: "#FFF",
  fontFamily: "canela",
  fontWeight: 900,
  fontSize: "24px",
  letterSpacing: "1.5px",
  lineHeight: 1.15,
  margin: "20px 0",
  maxWidth: "700px",

  [theme.breakpoints.up("md")]: {
    fontSize: "32px",
    lineHeight: 1.1,
    margin: "25px 0",
  },
}));

export const SubTitle = styled(Typography)<TypographyProps>(({ theme }) => ({
  color: "#FFF",
  fontFamily: "canela",
  fontSize: "14px",
  letterSpacing: "1.8px",
  lineHeight: 1.4,
  maxWidth: "650px",

  [theme.breakpoints.up("md")]: {
    fontSize: "18px",
    lineHeight: 1.5,
  },
}));
