import { Box } from "@mui/material";

export default function CurvedLine() {
  return (
    <Box
      component="svg"
      viewBox="0 0 200 20"
      sx={{
        // background: "red",
        width: 420,
        height: 40,
      }}
    >
      <Box
        component="path"
        d="M10 12 Q100 4 190 12"
        sx={{
          fill: "none",
          stroke: "#E7A37B",
          strokeWidth: 2,
          strokeLinecap: "round",
        }}
      />
    </Box>
  );
}
