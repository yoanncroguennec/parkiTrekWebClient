import { Box, styled } from "@mui/material";

export const MusicContainer = styled(Box)({
  width: "100%",
  height: "100px",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "space-between",
});

export const MusicBar_Styles = styled(Box)<{
  delay: number;
  color: string;
}>(({ delay, color }) => ({
  width: 12,
  height: 2,
  borderRadius: 10,
  background: color,
  animation: "loader 1.5s ease-in-out infinite",
  animationDelay: `${delay}s`,

  "@keyframes loader": {
    "0%,100%": {
      height: 2,
    },
    "50%": {
      height: 80,
    },
  },
}));
