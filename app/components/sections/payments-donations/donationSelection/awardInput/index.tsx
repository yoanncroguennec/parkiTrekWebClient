"use client";

import { alpha, Box, InputBase, useMediaQuery, useTheme } from "@mui/material";
import { IconType } from "react-icons";

interface AwardInputProps {
  iconStart: IconType;
  iconEnd?: IconType;
  placeholder?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function AwardInput({
  iconStart: StartIcon,
  iconEnd: EndIcon,
  placeholder,
  value,
  onChange,
}: AwardInputProps) {
  // RESPONSIVE
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
        width: isDesktop ? "400px" : "70vw",
        height: 72,
        px: 1.2,
        borderRadius: "999px",
        bgcolor: "rgba(255, 255, 255, 0.5)",
        border: "1px solid rgba(255,255,255,.08)",
        transition: ".35s",
        "&:hover": {
          borderColor: "rgba(255,255,255,.18)",
        },
        "&:focus-within": {
          borderColor: "#FFB800",
          boxShadow: `0 0 0 6px ${alpha("#FFB800", 0.08)}`,
        },
      }}
    >
      {/* Icone gauche */}
      <Box
        sx={{
          width: 52,
          height: 52,
          borderRadius: "50%",
          bgcolor: "#1A1A1A",
          display: "grid",
          placeItems: "center",
          color: "#fff",
          flexShrink: 0,
        }}
      >
        <StartIcon size={20} />
      </Box>

      {/* Input */}
      <InputBase
        fullWidth
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        sx={{
          color: "#fff",
          fontSize: 17,
          fontWeight: 500,

          input: {
            py: 1,
          },

          "& input::placeholder": {
            color: "rgba(255,255,255,.45)",
            opacity: 1,
          },
        }}
      />

      {/* Icone droite */}
      {EndIcon && (
        <Box
          sx={{
            width: 80,
            height: 52,
            borderRadius: "50%",
            bgcolor: "#F5F5F5",
            display: "grid",
            placeItems: "center",
            color: "#111",
            cursor: "pointer",
            transition: ".3s",

            "&:hover": {
              transform: "scale(1.08)",
            },
          }}
        >
          <EndIcon size={18} />
        </Box>
      )}
    </Box>
  );
}
