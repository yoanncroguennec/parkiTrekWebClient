import { styled, Box, Button } from "@mui/material";
import { C } from "../../../../data/calendar.data";

// Conteneur principal
export const ViewSelectorContainer = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  gap: 4,
  marginBottom: 20,
  padding: 4,
  backgroundColor: "#EAE9E1",
  borderRadius: 100,
  width: "fit-content",
  maxWidth: "100%",
  overflowX: "auto",
}));

// Bouton de sélection
export const ViewSelectorButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== "active",
})<{ active: boolean }>(({ theme, active }) => ({
  minWidth: "auto",
  whiteSpace: "nowrap",
  padding: theme.spacing(1, 1.5),
  borderRadius: 100,
  textTransform: "none",
  fontSize: 12,
  fontWeight: 800,
  color: active ? C.card : C.muted,
  backgroundColor: active ? C.dark : "transparent",

  "&:hover": {
    backgroundColor: active ? "#30362F" : "#E0DFD7",
  },

  [theme.breakpoints.up("md")]: {
    paddingLeft: theme.spacing(2.5),
    paddingRight: theme.spacing(2.5),
  },
}));
