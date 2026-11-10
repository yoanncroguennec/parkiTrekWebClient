"use client";

import { categories, categoryColors } from "../../data/calendar.data";

// STYLES
import {
  CalendarLegendFooterContainer,
  CalendarLegendContainer,
  CalendarLegendItem,
  CalendarLegendColor,
  CalendarLegendLabel,
  FooterSignature,
  FooterBrand,
} from "./CalendarLegendFooter.Styles";

export default function CalendarLegendFooter() {
  return (
    <CalendarLegendFooterContainer>
      {/* ======================================
          CALENDAR LEGEND
      ====================================== */}

      <CalendarLegendContainer>
        {categories.map((category) => (
          <CalendarLegendItem key={category}>
            <CalendarLegendColor dotColor={categoryColors[category]} />

            <CalendarLegendLabel>{category}</CalendarLegendLabel>
          </CalendarLegendItem>
        ))}
      </CalendarLegendContainer>

      {/* ======================================
          EDITORIAL SIGNATURE
      ====================================== */}

      <FooterSignature>Le mouvement est un chemin.</FooterSignature>

      {/* ======================================
          BRAND IDENTITY
      ====================================== */}

      <FooterBrand>PARKI TREK — CONTINUONS D&apos;AVANCER</FooterBrand>
    </CalendarLegendFooterContainer>
  );
}
