import { Box, Typography } from "@mui/material";
import { C } from "../../data/calendar.data";

export default function Footer() {
  return (
    <Box
      sx={{
        mt: 4,
        pt: 2.5,
        borderTop: `1px solid ${C.border}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 2,
        flexWrap: "wrap",
      }}
    >
      <Typography
        sx={{
          fontFamily: "Georgia, serif",
          fontStyle: "italic",
          fontSize: 15,
          color: C.greenDark,
        }}
      >
        Le mouvement est un chemin.
      </Typography>

      <Typography
        sx={{
          color: C.muted,
          fontSize: 9,
          fontWeight: 800,
          letterSpacing: "0.12em",
        }}
      >
        PARKI TREK — CONTINUONS D&apos;AVANCER
      </Typography>
    </Box>
  );
}
