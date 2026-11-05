"use client";

import { useState } from "react";
import { Box } from "@mui/material";
import type { View } from "react-big-calendar";
import { addMonths, format, subMonths } from "date-fns";
import { fr } from "date-fns/locale";
import { Header, Grid, Footer } from "./components";
import { initialEvents, type CalendarEvent } from "./data/calendar.data";

import { calendarRootSx } from "./Calendar.styles";

import "react-big-calendar/lib/css/react-big-calendar.css";

export default function ParkiTrekCalendar() {
  const [date, setDate] = useState(new Date());
  const [view, setView] = useState<View>("month");

  const [events] = useState<CalendarEvent[]>(initialEvents);

  const monthLabel = format(date, "MMMM yyyy", {
    locale: fr,
  });

  const navigatePrevious = () => {
    setDate((current) => {
      if (view === "month") return subMonths(current, 1);

      const next = new Date(current);
      next.setDate(next.getDate() + (view === "week" ? -7 : -1));

      return next;
    });
  };

  const navigateNext = () => {
    setDate((current) => {
      if (view === "month") return addMonths(current, 1);

      const next = new Date(current);
      next.setDate(next.getDate() + (view === "week" ? 7 : 1));

      return next;
    });
  };

  return (
    <Box sx={calendarRootSx}>
      <Header />

      <Grid
        date={date}
        view={view}
        events={events}
        onNavigate={setDate}
        onViewChange={setView}
        PreviousMonth={navigatePrevious}
        NextMonth={navigateNext}
        monthLabel={monthLabel}
      />

      <Footer />
    </Box>
  );
}
