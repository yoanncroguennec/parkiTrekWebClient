"use client";

import type { ChangeEvent } from "react";

import { type IconType } from "@/app/utils/constants/icons";

// STYLES
import {
  AwardInputRoot,
  AwardInputStartIcon,
  AwardInputField,
  AwardInputEndIcon,
} from "./AwardInput.Styles";

// ==========================================
// PROPS
// ==========================================

interface AwardInputProps {
  // Icône située à gauche du champ
  iconStart: IconType;

  // Icône située à droite du champ
  iconEnd?: IconType;

  // Texte indicatif
  placeholder?: string;

  // Valeur du champ
  value?: string;

  // Gestion de la modification du champ
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

// ==========================================
// COMPONENT
// ==========================================

export default function AwardInput({
  iconStart: StartIcon,
  iconEnd: EndIcon,
  placeholder,
  value,
  onChange,
}: AwardInputProps) {
  return (
    <AwardInputRoot>
      {/* ======================================
          START ICON
      ====================================== */}

      <AwardInputStartIcon>
        <StartIcon />
      </AwardInputStartIcon>

      {/* ======================================
          INPUT FIELD
      ====================================== */}

      <AwardInputField
        fullWidth
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        inputProps={{
          "aria-label": placeholder ?? "Saisie personnalisée",
        }}
      />

      {/* ======================================
          END ICON
      ====================================== */}

      {EndIcon && (
        <AwardInputEndIcon>
          <EndIcon />
        </AwardInputEndIcon>
      )}
    </AwardInputRoot>
  );
}
