import { styled, Stack } from "@mui/material";

export const DrawerContent = styled(Stack)({
  flex: 1,
  overflowY: "auto",
  padding: "40px 32px",
  gap: 32,
  "&::-webkit-scrollbar": {
    width: 4,
  },
  "&::-webkit-scrollbar-track": {
    background: "transparent",
  },
  "&::-webkit-scrollbar-thumb": {
    borderRadius: 999,
    background: "rgba(0,0,0,.18)",
  },
});
