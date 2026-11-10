import React from "react";
import { Stack, Typography } from "@mui/material";
import { ContainerApp } from "@/app/components/common/layouts";

export default function Page() {
  return (
    <ContainerApp>
      <Stack
        sx={{ alignItems: "center", height: "100vh", justifyContent: "center", width: "100vw" }}
      >
        <Typography sx={{ fontSize: "20px" }}>PAGE</Typography>
      </Stack>
    </ContainerApp>
  );
}
