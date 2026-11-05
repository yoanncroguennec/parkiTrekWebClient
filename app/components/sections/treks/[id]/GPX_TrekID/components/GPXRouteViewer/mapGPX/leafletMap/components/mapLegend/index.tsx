"use client";

import { useState } from "react";
import { useMediaQuery, useTheme } from "@mui/material";
// ICONS
import { MdInfoOutline } from "@/app/utils/constants/icons";
// STYLES
import {
  LegendContainer,
  LegendTrigger,
  LegendTriggerContent,
  LegendIndicator,
  LegendTriggerText,
  LegendArrow,
  LegendContent,
  LegendItem,
  LegendDot,
  LegendLabel,
  InfoButton,
} from "./MapLegend.Styles";

const legendItems = [
  ["#8B0000", "> 15 %"],
  ["#ff0000", "10 - 15 %"],
  ["#ff9900", "5 - 10 %"],
  ["#ffff00", "2 - 5 %"],
  ["#00ff00", "-2 à 2 %"],
  ["#00c8ff", "-5 à -2 %"],
  ["#0000ff", "< -5 %"],
] as const;

type Props = {
  infoOpen: boolean;
  onInfoToggle: () => void;
};

export default function MapLegend({ infoOpen, onInfoToggle }: Props) {
  const theme = useTheme();

  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  const [open, setOpen] = useState(false);

  /*
   * Desktop :
   * toujours ouvert.
   *
   * Mobile :
   * fermé par défaut.
   */
  const isOpen = isDesktop || open;

  return (
    <LegendContainer infoOpen={isDesktop && infoOpen}>
      {/* MOBILE */}
      {!isDesktop && (
        <LegendTrigger onClick={() => setOpen((value) => !value)}>
          <LegendTriggerContent>
            <LegendIndicator />

            <LegendTriggerText>Légende des pentes</LegendTriggerText>
          </LegendTriggerContent>

          <LegendArrow open={open} />
        </LegendTrigger>
      )}

      <LegendContent open={isOpen}>
        {legendItems.map(([color, label]) => (
          <LegendItem key={label}>
            <LegendDot dotColor={color} />

            <LegendLabel>{label}</LegendLabel>
          </LegendItem>
        ))}
      </LegendContent>

      {/* DESKTOP UNIQUEMENT */}
      {isDesktop && (
        <InfoButton
          active={infoOpen}
          onClick={onInfoToggle}
          startIcon={<MdInfoOutline />}
        >
          {infoOpen ? "Fermer" : "Plus d'infos"}
        </InfoButton>
      )}
    </LegendContainer>
  );
}
