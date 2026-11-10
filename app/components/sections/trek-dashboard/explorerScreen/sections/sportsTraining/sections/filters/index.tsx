"use client";

import { useState } from "react";
import { useMediaQuery, useTheme } from "@mui/material";
// UI
import { PrimaryButton, CurvedArrowDownLeft, PrimaryDropdown } from "@/app/components/ui";
// DATA
import { trainingFilterButtons } from "./data/trainingFilters.data";
// STYLES
import {
  FiltersContainer,
  FiltersHeading,
  FiltersEyebrow,
  FiltersTitle,
  FilterButtons,
  FilterHint,
  FilterHintText,
  FilterDropdownContainer,
} from "./Filters.Styles";

export default function Filters() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  const [selectedFilter] = useState("Tous");

  const dropdownItems = trainingFilterButtons.map((button) => ({
    label: button.text,
    href: "#",
  }));

  return (
    <FiltersContainer>
      <FiltersHeading>
        <FiltersEyebrow>Explorer mes activités</FiltersEyebrow>

        <FiltersTitle>Choisir l&apos;activité</FiltersTitle>
      </FiltersHeading>

      {isDesktop ? (
        <FilterButtons>
          <PrimaryButton buttons={trainingFilterButtons} />
        </FilterButtons>
      ) : (
        <FilterDropdownContainer>
          <PrimaryDropdown label={selectedFilter} items={dropdownItems} isDesktop={false} />
        </FilterDropdownContainer>
      )}

      {isDesktop && (
        <FilterHint>
          <CurvedArrowDownLeft />
          <FilterHintText>Filtrez par activité</FilterHintText>
        </FilterHint>
      )}
    </FiltersContainer>
  );
}
