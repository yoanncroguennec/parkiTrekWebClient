import { createTheme } from "@mui/material/styles";
// import typography from "./typography";
import { zIndex } from "./ZIndex";

export const getTheme = (mode: "light" | "dark") =>
  createTheme({
    palette: {
      mode,

      primary: {
        main: "#7c3aed",
      },

      secondary: {
        main: "#06b6d4",
      },

      background: {
        default: mode === "dark" ? "#09090b" : "#ffffff",

        paper: mode === "dark" ? "#18181b" : "#ffffff",
      },
    },

    // typography,

    shape: {
      borderRadius: 20,
    },

    zIndex,
  });
