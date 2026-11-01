import { Box, Typography } from "@mui/material";

export function StatCard({ title, value }: { title: string; value: string }) {
  return (
    <Box
      sx={{
        borderRadius: "24px",

        background: "rgba(255,255,255,.04)",

        backdropFilter: "blur(20px)",

        border: "1px solid rgba(255,255,255,.08)",
      }}
    >
      <Typography
        sx={{
          fontSize: 12,
          color: "#8f8f8f",
          mb: 1,
        }}
      >
        {title}
      </Typography>

      <Typography
        sx={{
          color: "#fff",
          fontSize: 22,
          fontWeight: 600,
        }}
      >
        {value}
      </Typography>
    </Box>
  );
}
