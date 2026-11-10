"use client";

import { useState } from "react";
import type { View } from "react-big-calendar";

// COMPONENTS
import {
  EventDetailsCard,
  Header,
  CalendarSignature,
  Toolbar,
  CalendarView,
  CalendarLegendFooter,
} from "./components";
// DATA
import { initialEvents, type CalendarEvent } from "./data/calendar.data";

// STYLES
import {
  CalendarEventDetailsContainer,
  CalendarGridContainer,
  CalendarSectionContainer,
  Separator,
} from "./CalendarSection.Styles";

export default function CalendarSection() {
  // ==========================================
  // EVENTS
  // ==========================================

  const [events] = useState<CalendarEvent[]>(initialEvents);

  // Événement actuellement sélectionné
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(null);

  // ==========================================
  // CALENDAR STATE
  // ==========================================

  // Date actuellement affichée
  const [currentCalendarDate, setCurrentCalendarDate] = useState(new Date());

  // Vue active : mois, semaine, jour ou agenda
  const [activeCalendarView, setActiveCalendarView] = useState<View>("month");

  // ==========================================
  // EVENT DETAILS STATE
  // ==========================================

  // Contrôle de l'ouverture de la fiche événement
  const [isEventDetailsOpen, setIsEventDetailsOpen] = useState<boolean>(false);

  // Clé permettant de relancer l'animation
  const [eventDetailsAnimationKey, setEventDetailsAnimationKey] = useState<number>(0);

  // ==========================================
  // CHANGE VIEW
  // ==========================================

  function handleViewChange(nextView: View) {
    setActiveCalendarView(nextView);
  }

  // ==========================================
  // SELECT EVENT
  // ==========================================

  function handleSelectEvent(event: CalendarEvent) {
    setSelectedEvent(event);
    setEventDetailsAnimationKey((previous) => previous + 1);
    setIsEventDetailsOpen(true);
  }

  return (
    <>
      <Header />

      <CalendarSectionContainer isEventDetailsOpen={isEventDetailsOpen}>
        <CalendarSignature events={events} />

        <CalendarGridContainer>
          {/* NAVIGATION ET SÉLECTEUR DE VUE */}
          <Toolbar
            currentCalendarDate={currentCalendarDate}
            setCurrentCalendarDate={setCurrentCalendarDate}
            activeCalendarView={activeCalendarView}
            onViewChange={handleViewChange}
          />

          {/* CALENDRIER */}
          <CalendarView
            events={events}
            currentCalendarDate={currentCalendarDate}
            setCurrentCalendarDate={setCurrentCalendarDate}
            activeCalendarView={activeCalendarView}
            handleViewChange={handleViewChange}
            onSelectEvent={handleSelectEvent}
          />

          {/* LÉGENDE DES ÉVÉNEMENTS + FOOTER */}
          <CalendarLegendFooter />

          {/* FICHE DÉTAILLÉE DE L'ÉVÉNEMENT */}
          {selectedEvent && (
            <CalendarEventDetailsContainer
              key={eventDetailsAnimationKey}
              isEventDetailsOpen={isEventDetailsOpen}
            >
              <EventDetailsCard
                event={selectedEvent}
                isEventDetailsOpen={isEventDetailsOpen}
                onClose={() => setIsEventDetailsOpen(false)}
              />
            </CalendarEventDetailsContainer>
          )}
        </CalendarGridContainer>
      </CalendarSectionContainer>

      <Separator />
    </>
  );
}
