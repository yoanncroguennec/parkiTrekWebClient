import { ContainerApp } from '@/app/components/common/layouts'
import { Stack, Typography } from '@mui/material'
import React from 'react'

export default function Home() {
  return (
    <ContainerApp>
        <Stack sx={{ alignItems: "center", height: "100vh", justifyContent: "center", width: "100vw" }}>
            <Typography sx={{ color: "red", fontSize: "25px", fontWeight: "900" }}>ACCUEIL</Typography>
        </Stack>
    </ContainerApp>
  )
}
