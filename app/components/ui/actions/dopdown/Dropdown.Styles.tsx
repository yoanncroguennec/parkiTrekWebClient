import { Box, Button, Typography, styled } from "@mui/material";

export const DropdownButton = styled(Button)(() => ({
  alignItems: "center",
  display: "flex",
}));

export const DropdownLabel = styled(Typography)(() => ({
  display: "flex",
  alignItems: "center",
}));

export const DropdownIcon = styled(Box, {
  shouldForwardProp: (prop) => prop !== "open",
})<{ open: boolean }>(({ open }) => ({
  alignItems: "center",
  display: "flex",
  transition: "transform .25s ease",
  transform: open ? "rotate(180deg)" : "rotate(0deg)",
}));

export const DropdownItem = styled(Box)(() => ({
  alignItems: "center",
  display: "flex",
  padding: "10px 16px",
  cursor: "pointer",
}));
