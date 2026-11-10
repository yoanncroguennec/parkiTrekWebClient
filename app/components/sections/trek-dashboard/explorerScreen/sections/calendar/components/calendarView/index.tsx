"use client";

import type { Dispatch, SetStateAction } from "react";
import { Calendar, type View } from "react-big-calendar";

import "react-big-calendar/lib/css/react-big-calendar.css";

// DATA
import {
  categoryColors,
  categoryTextColors,
  C,
  localizer,
  type CalendarEvent,
} from "../../data/calendar.data";

// STYLES
import { CalendarWrapper } from "./CalendarView.Styles";

// ==========================================
// PROPS
// ==========================================

interface Props {
  // Liste des événements à afficher
  events: CalendarEvent[];

  // Date actuellement affichée
  currentCalendarDate: Date;

  // Fonction permettant de modifier la date
  setCurrentCalendarDate: Dispatch<SetStateAction<Date>>;

  // Vue active du calendrier
  activeCalendarView: View;

  // Fonction permettant de changer de vue
  handleViewChange: (nextView: View) => void;

  // Fonction appelée lors de la sélection d'un événement
  onSelectEvent: (event: CalendarEvent) => void;
}

export default function CalendarView({
  events,
  currentCalendarDate,
  setCurrentCalendarDate,
  activeCalendarView,
  handleViewChange,
  onSelectEvent,
}: Props) {
  // ==========================================
  // NAVIGATION CALENDAR
  // ==========================================

  function handleNavigate(nextDate: Date) {
    setCurrentCalendarDate(nextDate);
  }

  // ==========================================
  // EVENT COLORS
  // ==========================================

  const eventPropGetter = (event: CalendarEvent) => ({
    style: {
      backgroundColor: categoryColors[event.category],
      color: categoryTextColors[event.category],
      border: "none",
      borderLeft: `3px solid ${event.category === "Trek" ? C.greenDark : C.dark}`,
    },
  });

  return (
    <CalendarWrapper>
      <Calendar<CalendarEvent>
        // ======================================
        // LOCALISATION ET FORMATAGE
        // ======================================

        localizer={localizer}
        culture="fr"

        // ======================================
        // DONNÉES
        // ======================================

        events={events}

        // ======================================
        // ÉTAT CONTRÔLÉ
        // ======================================

        date={currentCalendarDate}
        view={activeCalendarView}

        // ======================================
        // NAVIGATION ET CHANGEMENT DE VUE
        // ======================================

        onNavigate={handleNavigate}
        onView={handleViewChange}

        // ======================================
        // CHAMPS DES ÉVÉNEMENTS
        // ======================================

        startAccessor="start"
        endAccessor="end"
        titleAccessor="title"

        // ======================================
        // VUES DISPONIBLES
        // ======================================

        views={["month", "week", "day", "agenda"]}

        // ======================================
        // AFFICHAGE DES ÉVÉNEMENTS SUPPLÉMENTAIRES
        // ======================================

        popup

        // ======================================
        // SÉLECTION
        // ======================================

        selectable={false}
        onSelectEvent={onSelectEvent}

        // ======================================
        // PERSONNALISATION DES ÉVÉNEMENTS
        // ======================================

        eventPropGetter={eventPropGetter}

        // ======================================
        // TRADUCTIONS FRANÇAISES
        // ======================================

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

        // ======================================
        // HAUTEUR DYNAMIQUE
        // ======================================

        style={{
          height: activeCalendarView === "month" ? 720 : 620,
        }}
      />
    </CalendarWrapper>
  );
}
