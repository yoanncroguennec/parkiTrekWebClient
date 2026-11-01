import { Stack, styled } from "@mui/material";

interface PaginationDotProps {
  active: boolean;
}

export const PaginationContainer = styled(Stack)(({ theme }) => ({
  flexDirection: "row",
  padding: "25px 0",
  [theme.breakpoints.up("md")]: {
    padding: 0,
  },
}));

export const PaginationDot = styled("button", {
  shouldForwardProp: (prop) => prop !== "active",
})<PaginationDotProps>(({ active }) => ({
  width: active ? 30 : 12,
  height: 12,

  padding: 0,

  border: "none",
  borderRadius: 999,

  backgroundColor: active ? "#22c55e" : "rgba(0,0,0,.2)",

  transition: "width .4s, background-color .4s",

  cursor: "pointer",
}));
