import { Box, Button } from "@mui/material";
import type { View } from "react-big-calendar";
import { C, viewOptions } from "../../../../../../data/calendar.data";

interface CalendarViewSelectorProps {
  view: View;
  onChange: (view: View) => void;
}

export default function ViewSelector({
  view,
  onChange,
}: CalendarViewSelectorProps) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 0.5,
        mb: 2.5,
        p: 0.5,
        backgroundColor: "#EAE9E1",
        borderRadius: 100,
        width: "fit-content",
        maxWidth: "100%",
        overflowX: "auto",
      }}
    >
      {viewOptions.map((option) => (
        <Button
          key={option.value}
          onClick={() => onChange(option.value)}
          sx={{
            minWidth: "auto",
            whiteSpace: "nowrap",
            px: { xs: 1.5, md: 2.5 },
            py: 1,
            borderRadius: 100,
            textTransform: "none",
            fontSize: 12,
            fontWeight: 800,
            color: view === option.value ? C.card : C.muted,
            backgroundColor: view === option.value ? C.dark : "transparent",
            "&:hover": {
              backgroundColor: view === option.value ? "#30362F" : "#E0DFD7",
            },
          }}
        >
          {option.label}
        </Button>
      ))}
    </Box>
  );
}
