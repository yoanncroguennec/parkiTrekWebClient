import React from "react";
import { ContainerApp } from "../../common/layouts";
import { Stack, Typography } from "@mui/material";

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
