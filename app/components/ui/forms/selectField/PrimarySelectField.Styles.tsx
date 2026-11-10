// GOOD
import { FormControl, styled } from "@mui/material";

export const SelectField = styled(FormControl)(({ theme }) => ({
  margin: "10px 0",
  width: "100%",

  "& .MuiInputBase-input": {
    color: "#FFF",
  },

  "& .MuiInputLabel-root": {
    color: "#8bf094",
    fontWeight: 900,
  },

  "& .MuiSelect-select": {
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

  "& .MuiSelect-icon": {
    color: "#FFF",
  },

  [theme.breakpoints.up("md")]: {
    width: "650px",
  },
}));
