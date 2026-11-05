import { Box, Stack, styled, Typography, TypographyProps } from "@mui/material";

export const QuoteCard = styled(Stack)(({ theme }) => ({
  position: "relative",
  width: "100%",
  maxWidth: "450px",
  minWidth: 0,
  boxSizing: "border-box",
  alignItems: "center",
  justifyContent: "center",
  background: "rgba(255, 255, 255, 0.88)",
  backdropFilter: "blur(12px)",
  color: "#000",
  borderRadius: "20px",
  boxShadow: "0 20px 60px rgba(0,0,0,0.08)",
  padding: theme.spacing(4, 2.5),

  [theme.breakpoints.up("md")]: {
    width: "450px",
    minWidth: "400px",
    borderRadius: "25px",
    padding: theme.spacing(4, 3),
    backdropFilter: "blur(20px)",
  },
}));

export const QuoteText = styled(Typography)<TypographyProps>(({ theme }) => ({
  width: "100%",
  fontWeight: "bold",
  textAlign: "center",
  fontSize: "14px",
  lineHeight: 1.6,

  [theme.breakpoints.up("sm")]: {
    fontSize: "16px",
  },

  [theme.breakpoints.up("md")]: {
    fontSize: "20px",
  },
}));

// /* =========================================================
//    QUOTE ICONS
// ========================================================= */

export const QuoteIconLeft = styled(Box)(({ theme }) => ({
  position: "absolute",

  top: "12px",
  left: "12px",

  [theme.breakpoints.up("md")]: {
    top: "15px",
    left: "15px",
  },
}));

export const QuoteIconRight = styled(Box)(({ theme }) => ({
  position: "absolute",

  bottom: "12px",
  right: "12px",

  [theme.breakpoints.up("md")]: {
    bottom: "15px",
    right: "15px",
  },
}));

// /* =========================================================
//    AUTHOR
// ========================================================= */

export const QuoteAuthor = styled(Stack)(({ theme }) => ({
  width: "100%",

  padding: theme.spacing(2, 2, 0),

  [theme.breakpoints.up("sm")]: {
    padding: theme.spacing(2, 3, 0),
  },
}));

interface QuoteAuthorRoleProps extends TypographyProps {
  italic?: boolean;
}

export const QuoteAuthorRole = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "italic",
})<QuoteAuthorRoleProps>(({ theme, italic }) => ({
  fontSize: "14px",
  fontWeight: "bold",

  [theme.breakpoints.up("md")]: {
    fontSize: "16px",
  },

  ...(italic && {
    textAlign: "right",
    fontStyle: "italic",
  }),
}));
