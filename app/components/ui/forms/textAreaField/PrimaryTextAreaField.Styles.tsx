// GOOD
import { styled, TextField, TextFieldProps } from "@mui/material";

export const TextAreaField = styled(TextField)<TextFieldProps>(({ theme }) => ({
  width: "100%",

  "& .MuiInputBase-input": {
    color: "#8bf094",
    fontWeight: 900,

    "&::placeholder": {
      color: "#8bf094",
      opacity: 1,
    },
  },

  "& .MuiInputLabel-root": {
    color: "#8bf094",
    fontWeight: 900,
  },

  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "#FFF",
  },

  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: "#FFF",
  },

  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "#FFF",
  },

  [theme.breakpoints.up("md")]: {
    width: "650px",
  },
}));
