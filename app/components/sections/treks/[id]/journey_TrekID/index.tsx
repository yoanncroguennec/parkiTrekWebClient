import { Stack, Typography } from "@mui/material";
import React from "react";

export default function Journey_TrekID_Section() {
  return (
    <div>
      <Stack id="jour-1" sx={{ minHeight: "100vh" }}>
        <Typography variant="h2">Jour 1</Typography>
      </Stack>

      <Stack id="jour-2" sx={{ minHeight: "100vh" }}>
        <Typography variant="h2">Jour 2</Typography>
      </Stack>

      <Stack id="jour-3" sx={{ minHeight: "100vh" }}>
        <Typography variant="h2">Jour 3</Typography>
      </Stack>
    </div>
  );
}
