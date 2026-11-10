"use client";

import type { Dispatch, SetStateAction } from "react";
import type { View } from "react-big-calendar";

import { FiArrowLeft, FiArrowRight } from "@/app/utils/constants/icons";

import { addMonths, format, subMonths } from "date-fns";
import { fr } from "date-fns/locale";

import { ViewSelector } from "./components";

import {
  ToolbarContainer,
  ToolbarNavigation,
  ToolbarPreviousButton,
  ToolbarNextButton,
  ToolbarMonthTitle,
  ToolbarViewContainer,
} from "./Toolbar.Styles";

interface CalendarToolbarProps {
  currentCalendarDate: Date;
  setCurrentCalendarDate: Dispatch<SetStateAction<Date>>;
  activeCalendarView: View;
  onViewChange: (view: View) => void;
}

export default function Toolbar({
  currentCalendarDate,
  setCurrentCalendarDate,
  activeCalendarView,
  onViewChange,
}: CalendarToolbarProps) {
  const now = new Date();

  const minimumDate = new Date(now.getFullYear(), now.getMonth() - 2, 1);

  // Vérifier si la navigation précédente est autorisée
  const canNavigatePrevious =
    currentCalendarDate.getFullYear() > minimumDate.getFullYear() ||
    (currentCalendarDate.getFullYear() === minimumDate.getFullYear() &&
      currentCalendarDate.getMonth() > minimumDate.getMonth());

  // Libellé du mois
  const monthLabel = format(currentCalendarDate, "MMMM yyyy", {
    locale: fr,
  });

  // Navigation précédente
  function PreviousMonth() {
    setCurrentCalendarDate((current) => {
      if (activeCalendarView === "month") {
        return subMonths(current, 1);
      }

      const next = new Date(current);

      next.setDate(next.getDate() + (activeCalendarView === "week" ? -7 : -1));

      return next;
    });
  }

  // Navigation suivante
  function NextMonth() {
    setCurrentCalendarDate((current) => {
      if (activeCalendarView === "month") {
        return addMonths(current, 1);
      }

      const next = new Date(current);

      next.setDate(next.getDate() + (activeCalendarView === "week" ? 7 : 1));

      return next;
    });
  }

  return (
    <ToolbarContainer>
      {/* Navigation du calendrier */}
      <ToolbarNavigation>
        {canNavigatePrevious && (
          <ToolbarPreviousButton aria-label="Période précédente" onClick={PreviousMonth}>
            <FiArrowLeft size={17} />
          </ToolbarPreviousButton>
        )}

        <ToolbarMonthTitle component="h2">{monthLabel}</ToolbarMonthTitle>

        <ToolbarNextButton aria-label="Période suivante" onClick={NextMonth}>
          <FiArrowRight size={17} />
        </ToolbarNextButton>
      </ToolbarNavigation>

      {/* Sélecteur de vue */}
      <ToolbarViewContainer>
        <ViewSelector view={activeCalendarView} onChange={onViewChange} />
      </ToolbarViewContainer>
    </ToolbarContainer>
  );
}
