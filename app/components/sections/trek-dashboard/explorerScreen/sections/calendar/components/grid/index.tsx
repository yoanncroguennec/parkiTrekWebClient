"use client";

import { useState } from "react";
import { Calendar } from "react-big-calendar";
import type { View } from "react-big-calendar";
import { Box, Stack, Typography } from "@mui/material";
import { format } from "date-fns";
import {
  C,
  localizer,
  categoryColors,
  categoryTextColors,
  type CalendarEvent,
} from "../../data/calendar.data";

import { EventDetailsCard, Legend, Toolbar } from "./components";
import OrganicImageShape from "./components/organicImageShape";

interface CalendarGridProps {
  date: Date;
  view: View;
  events: CalendarEvent[];
  onNavigate: (date: Date) => void;
  onViewChange: (view: View) => void;
  ////
  monthLabel: string;
  PreviousMonth: () => void;
  NextMonth: () => void;
}

export default function Grid({
  date,
  view,
  events,
  onNavigate,
  onViewChange,
  ////
  monthLabel,
  PreviousMonth,
  NextMonth,
}: CalendarGridProps) {
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(
    null,
  );

  const [cardOpen, setCardOpen] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);

  const handleSelectEvent = (event: CalendarEvent) => {
    setSelectedEvent(event);
    setAnimationKey((prev) => prev + 1);
    setCardOpen(true);
  };

  const eventPropGetter = (event: CalendarEvent) => ({
    style: {
      backgroundColor: categoryColors[event.category],
      color: categoryTextColors[event.category],
      border: "none",
      borderLeft: `3px solid ${
        event.category === "Trek" ? C.greenDark : C.dark
      }`,
    },
  });

  const firstEvent = [...events]
    .filter((event) => event.start instanceof Date)
    .sort(
      (a, b) => (a.start as Date).getTime() - (b.start as Date).getTime(),
    )[0];

  const firstEventDate =
    firstEvent?.start instanceof Date ? firstEvent.start : null;

  return (
    <Stack
      direction="row"
      spacing={3}
      sx={{
        width: cardOpen ? "calc(100% - 350px)" : "100%",
        alignItems: "stretch",
        overflow: "visible",
        paddingBottom: "15px",
      }}
    >
      {/* Signature en bas à gauche */}
      <Stack
        sx={{
          flexShrink: 0,
          alignItems: "flex-start",
          justifyContent: "flex-end",
          color: C.dark,
        }}
      >
        {/* Image et badge superposé */}
        <Box
          sx={{
            position: "relative",
            width: { xs: 210, md: 280 },
          }}
        >
          <OrganicImageShape
            src="/assets/imgs/trek-dashboard/explorerScreen/calendar/eventDetailsCard/bgCardItem.jpg"
            alt="Sentier de montagne traversant une forêt"
            width="100%"
            height={760}
          />

          {/* Badge circulaire */}
          <Stack
            sx={{
              position: "absolute",
              bottom: { xs: -40, md: 40 },
              right: { xs: -15, md: -25 },
              zIndex: 2,
              width: { xs: 150, md: 210 },
              height: { xs: 150, md: 210 },
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid rgba(52, 108, 69, 0.55)",
              borderRadius: "50%",
              bgcolor: "#F4F2EC",
            }}
          >
            <Stack
              sx={{
                width: "82%",
                height: "82%",
                alignItems: "center",
                justifyContent: "center",
                border: "1px dashed rgba(52, 108, 69, 0.45)",
                borderRadius: "50%",
              }}
            >
              <Typography
                sx={{
                  color: "#346C45",
                  fontSize: { xs: 8, md: 10 },
                  fontWeight: 700,
                  letterSpacing: ".24em",
                }}
              >
                PARKI TREK
              </Typography>

              <Typography
                component="div"
                sx={{
                  fontFamily:
                    '"Bodoni Moda", "Didot", "Times New Roman", serif',
                  fontSize: { xs: 48, md: 82 },
                  fontWeight: 400,
                  fontStyle: "italic",
                  lineHeight: 0.78,
                  letterSpacing: "-0.075em",
                }}
              >
                {firstEventDate ? format(firstEventDate, "dd") : "--"}
              </Typography>

              <Typography
                component="div"
                sx={{
                  mt: 2,
                  ml: 0.5,
                  fontFamily: '"Montserrat", "Arial", sans-serif',
                  fontSize: { xs: 9, md: 13 },
                  fontWeight: 700,
                  letterSpacing: { xs: "0.2em", md: "0.38em" },
                  lineHeight: 1.4,
                  whiteSpace: "nowrap",
                }}
              >
                RENDEZ-VOUS
              </Typography>

              <Typography
                sx={{
                  mt: 1,
                  color: "#111",
                  fontSize: { xs: 7, md: 9 },
                  fontWeight: 600,
                  letterSpacing: ".16em",
                }}
              >
                BOUGER · PARTAGER
              </Typography>
            </Stack>
          </Stack>
        </Box>
      </Stack>

      {/* Calendrier à droite */}
      <Box
        sx={{
          position: "relative",
          overflow: "visible",
          flex: 1,
          minWidth: 0,
        }}
      >
        <Toolbar
          date={date}
          monthLabel={monthLabel}
          view={view}
          navigatePrevious={PreviousMonth}
          navigateNext={NextMonth}
          onViewChange={onViewChange}
        />

        <Calendar<CalendarEvent>
          localizer={localizer}
          events={events}
          date={date}
          view={view}
          onNavigate={onNavigate}
          onView={onViewChange}
          startAccessor="start"
          endAccessor="end"
          titleAccessor="title"
          culture="fr"
          views={["month", "week", "day", "agenda"]}
          popup
          selectable={false}
          eventPropGetter={eventPropGetter}
          onSelectEvent={handleSelectEvent}
          messages={{
            today: "Aujourd'hui",
            previous: "Précédent",
            next: "Suivant",
            month: "Mois",
            week: "Semaine",
            day: "Jour",
            agenda: "Agenda",
            date: "Date",
            time: "Heure",
            event: "Événement",
            noEventsInRange: "Aucune étape sur cette période.",
            showMore: (total) => `+ ${total} étapes`,
          }}
          style={{
            height: view === "month" ? 720 : 620,
          }}
        />
        <Legend />

        {/* Carte des détails flottante */}
        {selectedEvent && (
          <Box
            key={animationKey}
            sx={{
              position: "fixed",
              top: 120,
              right: 32,
              zIndex: 1500,
              width: 345,
              maxWidth: "calc(100vw - 32px)",
              opacity: cardOpen ? 1 : 0,
              transform: cardOpen ? "translateX(0)" : "translateX(350px)",
              animation: cardOpen
                ? "eventCardSlideIn 450ms cubic-bezier(0.22, 1, 0.36, 1) both"
                : "none",
              pointerEvents: cardOpen ? "auto" : "none",
              "@keyframes eventCardSlideIn": {
                from: {
                  opacity: 0,
                  transform: "translateX(350px)",
                },
                to: {
                  opacity: 1,
                  transform: "translateX(0)",
                },
              },
            }}
          >
            <EventDetailsCard
              event={selectedEvent}
              open={cardOpen}
              onClose={() => setCardOpen(false)}
            />
          </Box>
        )}
      </Box>
    </Stack>
  );
}
