import { Box, Stack, Typography } from "@mui/material";
import { C } from "../../data/calendar.data";

export default function Header() {
  return (
    <Stack
      sx={{
        backgroundImage:
          "url('/assets/imgs/trek-dashboard/explorerScreen/calendar/bgHeader.png')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        borderTopLeftRadius: "100px",
        borderTopRightRadius: "100px",
      }}
    >
      <Stack
        sx={{
          background: "rgba(0, 0, 0, 0.3)",
          borderTopLeftRadius: "100px",
          borderTopRightRadius: "100px",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: "50px",
          width: "100%",
        }}
      >
        <Typography
          sx={{
            color: "#FFF",

            fontFamily: '"Bodoni Moda", "Didot", "Times New Roman", serif',
            fontSize: { xs: 72, md: 80 },
            fontWeight: 400,
            lineHeight: 0.78,
            letterSpacing: "0.05em",
            fontStyle: "italic",
            padding: "25px 0",
            textTransform: "uppercase",
            textAlign: "center",
          }}
        >
          Les rendez-vous
          <br />
          qui font avancer <br />
          L&apos;aventure.
        </Typography>

        {/* Badge circulaire */}
        <Box
          sx={{
            width: { xs: 76, md: 116 },
            height: { xs: 76, md: 116 },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            border: `1px solid ${C.greenDark}`,
            borderRadius: "50%",
            transform: "rotate(-15deg)",
          }}
        >
          <Box
            component="svg"
            viewBox="0 0 100 100"
            aria-hidden="true"
            sx={{
              width: "85%",
              height: "85%",
            }}
          >
            <circle
              cx="50"
              cy="50"
              r="42"
              fill="none"
              stroke={C.greenDark}
              strokeDasharray="2 5"
            />

            <path
              d="M22 68 L39 52 L50 60 L75 30"
              fill="none"
              stroke={C.greenDark}
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            <circle
              cx="75"
              cy="30"
              r="5"
              fill={C.green}
              stroke={C.greenDark}
              strokeWidth="1.5"
            />

            <circle cx="22" cy="68" r="3" fill={C.dark} />
          </Box>
        </Box>
      </Stack>
    </Stack>
  );
}
