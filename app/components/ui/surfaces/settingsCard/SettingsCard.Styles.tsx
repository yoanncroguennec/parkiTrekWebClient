import { Stack, StackProps, styled } from "@mui/material";

export const StyledCard = styled(Stack)<StackProps>(({ theme }) => ({
  background: "linear-gradient(180deg, rgba(255,255,255,.65), rgba(255,255,255,.35))",
  backdropFilter: "blur(24px)",
  border: "1px solid rgba(255,255,255,.45)",
  borderRadius: 24,
  boxShadow: `
    0 20px 60px rgba(0,0,0,.12),
    inset 0 1px 0 rgba(255,255,255,.7)
  `,
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
  padding: theme.spacing(3),
  WebkitBackdropFilter: "blur(24px)",
}));
