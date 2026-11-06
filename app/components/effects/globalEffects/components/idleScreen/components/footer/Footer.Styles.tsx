import { Box, Typography, styled } from "@mui/material";

const textColor = "#8BC34A";
const secondaryColor = "#E3E4D8";

export const Container = styled(Box)({
  position: "absolute",
  bottom: 60,
  width: "100%",
  textAlign: "center",
  color: textColor,
  letterSpacing: "0.3em",
  fontSize: "0.85rem",
  textTransform: "uppercase",
});

export const PrimaryText = styled(Typography)({
  color: textColor,
  textAlign: "center",
});

export const SecondaryText = styled(Typography)({
  color: secondaryColor,
  textAlign: "center",
});

export const InstructionContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  marginTop: "16px",
  opacity: 0.2,
});

export const MouseIcon = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "25px",
});

export const InstructionText = styled(Typography)({
  color: textColor,
  textAlign: "center",
  marginTop: "4px",
});
