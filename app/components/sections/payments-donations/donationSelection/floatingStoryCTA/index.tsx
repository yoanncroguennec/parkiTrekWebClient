import { Box, Button, Stack, Typography } from "@mui/material";
import { ClipPath, CurvedPath } from "@/app/components/common/shapes";
import { Tooltip } from "@/app/components/ui";

export default function FloatingStoryCTA() {
  return (
    <Stack
      sx={{
        position: "absolute",
        bottom: 40,
        right: 40,
        zIndex: 20,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          bottom: "70px",
          right: "40px",
          transform: "rotate(-15deg)",
          pointerEvents: "none",
        }}
      >
        <CurvedPath />
      </Box>

      <Tooltip title="Voir la vidéo">
        <Button
          component="button"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 1,
          }}
        >
          <ClipPath form="arrow_1" width="200px" height="150px">
            <video autoPlay muted loop playsInline>
              <source
                src="/assets/videos/Summiting the Matterhorn with an FPV Drone.mp4"
                type="video/mp4"
              />
            </video>
          </ClipPath>

          <Typography
            sx={{
              color: "#FFF",
              fontWeight: 900,
              textAlign: "center",
            }}
            variant="h6"
          >
            Découvrir l&apos;histoire
            <br />
            de Parki Trek
          </Typography>
        </Button>
      </Tooltip>
    </Stack>
  );
}
