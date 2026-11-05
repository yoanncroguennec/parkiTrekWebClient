import { Box } from "@mui/material";

export default function CurvedPath() {
  return (
    <Box
      component="svg"
      viewBox="0 0 500 180"
      sx={{
        width: "100%",
        height: 280,
        overflow: "visible",
      }}
    >
      <Box
        component="path"
        d="M10 150 C120 140,140 40,250 80 S380 140,490 40"
        sx={{
          fill: "none",
          stroke: "#fff",
          strokeWidth: 3,
          strokeLinecap: "round",
          strokeDasharray: "8 8",
        }}
      />

      <Box
        component="circle"
        cx="490"
        cy="40"
        r="8"
        sx={{
          fill: "#fff",
        }}
      />
    </Box>
  );
}
