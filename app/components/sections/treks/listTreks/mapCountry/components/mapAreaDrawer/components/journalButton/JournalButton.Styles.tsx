// GOOD
import { Box, Button, styled } from "@mui/material";

export const JournalButtonContainer = styled(Box)(({ theme }) => ({
  position: "sticky",
  bottom: 16,

  display: "flex",
  justifyContent: "flex-end",

  padding: "0 18px",

  zIndex: 10,

  [theme.breakpoints.up("md")]: {
    bottom: 24,
    padding: "0 32px",
  },
}));

export const JournalButtonAction = styled(Button)(({ theme }) => ({
  marginTop: 24,

  width: "100%",

  padding: "14px 16px",

  borderRadius: 999,

  overflow: "hidden",
  position: "relative",

  color: "#fff",

  fontSize: "14px",
  fontWeight: 700,
  letterSpacing: 1,

  textTransform: "none",

  background: "linear-gradient(135deg,#22c55e,#16a34a)",

  boxShadow: "0 15px 35px rgba(34,197,94,.3)",

  transition: "transform .35s ease, box-shadow .35s ease",

  "& .journal-button-arrow": {
    transition: "transform .35s ease",
  },

  "&::before": {
    content: '""',

    position: "absolute",
    top: 0,
    left: "-100%",

    width: "100%",
    height: "100%",

    background: "linear-gradient(90deg,transparent,rgba(255,255,255,.35),transparent)",

    transition: "left .8s ease",
  },

  "&:hover::before": {
    left: "100%",
  },

  [theme.breakpoints.up("md")]: {
    marginTop: 40,
    padding: "16px",

    fontSize: "16px",
  },
}));
