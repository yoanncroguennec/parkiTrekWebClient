"use client";

import { Box, IconButton, Stack, Typography } from "@mui/material";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

import { C } from "../../../../data/calendar.data";
import { ViewSelector } from "./components";
import type { View } from "react-big-calendar";

interface CalendarToolbarProps {
  date: Date;
  monthLabel: string;
  view: View;
  navigatePrevious: () => void;
  navigateNext: () => void;
  onViewChange: (view: View) => void;
}

export default function Toolbar({
  date,
  monthLabel,
  view,
  navigatePrevious,
  navigateNext,
  onViewChange,
}: CalendarToolbarProps) {
  const now = new Date();

  const minimumDate = new Date(now.getFullYear(), now.getMonth() - 2, 1);

  const canNavigatePrevious =
    date.getFullYear() > minimumDate.getFullYear() ||
    (date.getFullYear() === minimumDate.getFullYear() &&
      date.getMonth() > minimumDate.getMonth());

  return (
    <Stack
      sx={{
        flexDirection: "row",
        width: "100%",
      }}
    >
      {/* Navigation du calendrier */}
      <Stack
        sx={{
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          gap: 1,
          minWidth: 0,
        }}
      >
        {canNavigatePrevious && (
          <IconButton
            aria-label="Période précédente"
            onClick={navigatePrevious}
            sx={{
              width: 42,
              height: 42,
              flexShrink: 0,
              border: `1px solid ${C.border}`,
              borderRadius: "50%",
              color: C.dark,
              transition: "all 200ms ease",
              "&:hover": {
                backgroundColor: C.green,
                borderColor: C.green,
                transform: "translateX(-2px)",
              },
            }}
          >
            <FiArrowLeft size={17} />
          </IconButton>
        )}
        <Typography
          component="h2"
          sx={{
            mt: 0.75,
            fontSize: { xs: 28, md: 38 },
            fontWeight: 900,
            letterSpacing: "-0.06em",
            textTransform: "capitalize",
            whiteSpace: "nowrap",
          }}
        >
          {monthLabel}
        </Typography>

        <IconButton
          aria-label="Période suivante"
          onClick={navigateNext}
          sx={{
            width: 42,
            height: 42,
            flexShrink: 0,
            border: `1px solid ${C.border}`,
            borderRadius: "50%",
            color: C.dark,
            transition: "all 200ms ease",
            "&:hover": {
              backgroundColor: C.green,
              borderColor: C.green,
              transform: "translateX(2px)",
            },
          }}
        >
          <FiArrowRight size={17} />
        </IconButton>
      </Stack>

      {/* Sélecteur de vue à droite */}
      <Box
        sx={{
          flexShrink: 0,
          ml: 2,
        }}
      >
        <ViewSelector view={view} onChange={onViewChange} />
      </Box>
    </Stack>
  );
}
