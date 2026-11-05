import { styled, Stack, Typography } from "@mui/material";

export const AudioHeader = styled(Stack)({
  alignItems: "center",
  flexDirection: "row",
  gap: 16,
});

export const AudioInfo = styled(Stack)({
  flex: 1,
});

export const AudioTitle = styled(Typography)({
  fontWeight: 600,
});

export const AudioSubtitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
}));
