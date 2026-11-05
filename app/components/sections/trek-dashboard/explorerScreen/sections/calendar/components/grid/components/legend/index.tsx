import { Box, Typography } from "@mui/material";
import { C, categories, categoryColors } from "../../../../data/calendar.data";

export default function Legend() {
  return (
    <Box
      sx={{
        mt: 3,
        display: "flex",
        alignItems: "center",
        gap: { xs: 1.5, md: 2.5 },
        flexWrap: "wrap",
      }}
    >
      {categories.map((category) => (
        <Box
          key={category}
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 0.75,
          }}
        >
          <Box
            sx={{
              width: 9,
              height: 9,
              flexShrink: 0,
              borderRadius: "50%",
              backgroundColor: categoryColors[category],
            }}
          />

          <Typography
            sx={{
              color: C.muted,
              fontSize: 10,
              fontWeight: 700,
            }}
          >
            {category}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}
