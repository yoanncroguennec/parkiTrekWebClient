// GOOD
import { Box } from "@mui/material";

export default function HeroShape_TrekDashboard() {
  return (
    <Box
      component="svg"
      viewBox="0 0 600 450"
      preserveAspectRatio="none"
      sx={{
        position: "absolute",

        inset: 0,

        width: "100%",
        height: "100%",

        zIndex: 2,

        pointerEvents: "none",
      }}
    >
      <path
        d="
          M 0 0

          H 0

          C 45 25,
            75 55,
            95 85

          C 120 120,
            150 140,
            150 175

          C 150 205,
            125 220,
            115 245

          C 105 270,
            135 290,
            175 310

          C 210 327,
            235 345,
            225 370

          C 215 395,
            235 420,
            280 450

          H 0

          Z
        "
        fill="#ffffff"
      />
    </Box>
  );
}
