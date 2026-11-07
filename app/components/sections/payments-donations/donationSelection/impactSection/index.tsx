"use client";

import { Fragment } from "react";
import { Box, Stack, Typography } from "@mui/material";
// import CurvedLine from "@/app/components/common/ui/graphics/lines/curvedLine";

import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import { FaRegHeart } from "react-icons/fa6";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { CurvedLine } from "@/app/components/common/shapes";

const donationStats = [
  {
    id: 1,
    icon: HiOutlineUserGroup,
    value: "+12 K",
    label: "€ Collectés",
  },
  {
    id: 2,
    icon: FaRegHeart,
    value: "87",
    label: "Donateurs",
  },
];

const glassCardSx = {
  alignItems: "center",
  border: "1px solid rgba(255,255,255,.35)",
  borderRadius: "32px",
  backdropFilter: "blur(30px) saturate(180%)",
  background:
    "linear-gradient(135deg, rgba(255,255,255,.55), rgba(255,255,255,.18))",
  boxShadow: `
    0 30px 60px rgba(15,23,42,.15),
    inset 0 1px 1px rgba(255,255,255,.75),
    inset 0 -1px 1px rgba(255,255,255,.1)
  `,
  opacity: 0.9,
  padding: 6,
};

const centerSx = {
  alignItems: "center",
  justifyContent: "center",
  margin: "56px 0",
};

export default function ImpactSection() {
  return (
    <Stack spacing={6} sx={centerSx}>
      {/* HEADER */}
      <Stack spacing={1} sx={centerSx}>
        <Typography
          variant="h6"
          sx={{
            color: "#F29305",
            fontWeight: 900,
          }}
        >
          Ensemble, laissons une empreinte
        </Typography>

        <CurvedLine />
      </Stack>

      {/* IMPACT CARD */}
      <Stack spacing={4} sx={glassCardSx}>
        <Typography
          variant="h6"
          sx={{
            color: "#FFF",
            textTransform: "uppercase",
          }}
        >
          Notre impact ensemble
        </Typography>

        <Stack sx={{ alignItems: "center", flexDirection: "row" }} spacing={2}>
          {donationStats.map(({ id, icon: Icon, value, label }) => (
            <Fragment key={id}>
              <Stack spacing={1} sx={centerSx}>
                <Stack
                  sx={{
                    ...centerSx,
                    background: "rgba(255,255,255,.5)",
                    borderRadius: "50%",
                    p: 1.5,
                  }}
                >
                  <Icon size={30} color="#F29305" />
                </Stack>

                <Typography variant="h6" color="#FFF">
                  {value}
                </Typography>

                <Typography variant="body1" color="#FFF">
                  {label}
                </Typography>
              </Stack>

              {id !== donationStats.length && (
                <Box
                  sx={{
                    width: 2,
                    height: 50,
                    bgcolor: "rgba(255,255,255,.3)",
                  }}
                />
              )}
            </Fragment>
          ))}
        </Stack>
      </Stack>

      {/* QUOTE */}
      <Stack spacing={1} sx={{ alignItems: "center", flexDirection: "row" }}>
        <ImQuotesLeft
          size={50}
          color="#BDBDBD"
          style={{
            filter: "drop-shadow(0 4px 8px rgba(0,0,0,.35))",
          }}
        />

        <Typography
          variant="h6"
          sx={{
            color: "#FFF",
            fontWeight: 900,
          }}
        >
          La solidarité
          <br />
          est le plus beau
        </Typography>

        <Stack spacing={1} sx={{ alignItems: "center", flexDirection: "row" }}>
          <Typography
            variant="h6"
            sx={{
              color: "#FFF",
              fontWeight: 900,
            }}
          >
            des
          </Typography>

          <Typography
            variant="h6"
            sx={{
              color: "#F29305",
              fontWeight: 900,
            }}
          >
            sommets.
          </Typography>

          <ImQuotesRight
            size={50}
            color="#BDBDBD"
            style={{
              filter: "drop-shadow(0 4px 8px rgba(0,0,0,.35))",
            }}
          />
        </Stack>
      </Stack>
    </Stack>
  );
}
