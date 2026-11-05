import { Button, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

/* =========================================================
   CONTAINER
========================================================= */

export const HeaderContainer = styled(Stack)(({ theme }) => ({
  position: "relative",

  width: "100%",

  alignItems: "center",
  justifyContent: "center",

  [theme.breakpoints.up("md")]: {
    minHeight: "80px",
  },
}));

/* =========================================================
   BACK BUTTON
========================================================= */

export const BackButton = styled(Button)(({ theme }) => ({
  position: "absolute",
  left: "0",

  width: "44px",
  minWidth: "44px",
  height: "44px",
  minHeight: "44px",

  padding: "0",
  borderRadius: "50%",

  border: "1px solid #71966C",
  color: "#71966C",

  [theme.breakpoints.up("md")]: {
    width: "56px",
    minWidth: "56px",
    height: "56px",
    minHeight: "56px",
  },

  "& .MuiSvgIcon-root": {
    fontSize: "20px",

    [theme.breakpoints.up("md")]: {
      fontSize: "24px",
    },
  },

  "&:hover": {
    borderColor: "#5F825A",
    backgroundColor: "rgba(113, 150, 108, 0.08)",
  },
}));

/* =========================================================
   TITLE
========================================================= */

export const HeaderTitle = styled(Typography)(({ theme }) => ({
  fontSize: "30px",
  fontWeight: 800,

  lineHeight: 1.1,
  textAlign: "center",

  color: "#17362D",

  [theme.breakpoints.up("sm")]: {
    fontSize: "36px",
  },

  [theme.breakpoints.up("md")]: {
    fontSize: "45px",
  },
}));
