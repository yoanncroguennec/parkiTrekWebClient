// GOOD
import { styled, TextField, TextFieldProps } from "@mui/material";

export const Input = styled(TextField)<TextFieldProps>(({ theme }) => ({
  margin: "10px 0",
  width: "100%",

  "& .MuiInputBase-root": {
    backgroundColor: "transparent",
  },

  "& .MuiInputBase-input": {
    color: "#FFF",
    backgroundColor: "transparent",

    "&:-webkit-autofill": {
      WebkitBoxShadow: "0 0 0 1000px transparent inset",
      WebkitTextFillColor: "#FFF",
      transition: "background-color 9999s ease-in-out 0s",
    },
  },

  "& .MuiInputLabel-root": {
    color: "#8bf094",
    fontWeight: 900,
  },

  "& .MuiInputLabel-root.Mui-focused": {
    color: "#FFF",
  },

  "& .MuiInput-underline:before": {
    borderBottomColor: "#FFF",
  },

  "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
    borderBottomColor: "#FFF",
  },

  "& .MuiInput-underline:after": {
    borderBottomColor: "#FFF",
  },

  [theme.breakpoints.up("md")]: {
    width: "650px",
  },
}));
