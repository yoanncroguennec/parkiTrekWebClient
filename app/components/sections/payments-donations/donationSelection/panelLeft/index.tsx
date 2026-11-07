// import CurvedLine from "@/app/components/common/ui/graphics/lines/curvedLine";
import { Box, Stack, Typography } from "@mui/material";

export default function PanelLeft() {
  return (
    <Stack
      sx={{
        alignItems: "center",
        //   background: "green",
        flexDirection: "column",
        // height: "100vh",
        justifyContent: "space-evenly",
        // width: "50%",
      }}
    >
      <Box sx={{}}>
        <Typography
          sx={{
            color: "#F29305",
            fontWeight: "900",
            textTransform: "uppercase",
          }}
          variant="h5"
        >
          Soutenir l&apos;aventure
        </Typography>
        <Box
          sx={{
            background: "#F29305",
            borderRadius: "25px",
            height: "5px",
            width: "320px",
          }}
        />

        <Stack sx={{ alignItems: "center", flexDirection: "row" }} spacing={1}>
          <Typography
            gutterBottom
            variant="h2"
            sx={{
              color: "#FFF",
              fontWeight: 900,
            }}
          >
            Faire un
          </Typography>

          <Typography
            gutterBottom
            variant="h2"
            sx={{
              color: "#F29305",
              fontWeight: 900,
            }}
          >
            don
          </Typography>
        </Stack>
      </Box>

      <Typography
        gutterBottom
        variant="h6"
        sx={{
          color: "#FFF",
          fontWeight: 900,
        }}
      >
        Chaque contribution participa à la réussite de Parki Trek
        <br />
        et à la sensibilisation autour de la maladie de Parkinson{" "}
      </Typography>
    </Stack>
  );
}
