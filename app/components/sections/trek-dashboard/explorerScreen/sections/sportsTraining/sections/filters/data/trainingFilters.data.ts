import type { PrimaryButtonItem } from "@/app/components/ui/actions/buttons/primaryButton";

// ICONS
import {
  LuDumbbell,
  LuHeartPulse,
  LuLayoutGrid,
  LuPersonStanding,
  LuStretchHorizontal,
} from "@/app/utils/constants/icons";

export const trainingFilterButtons: PrimaryButtonItem[] = [
  {
    text: "Tous",
    icon: LuLayoutGrid,
    variant: "contained",
    active: true,
  },
  {
    text: "Cardio",
    icon: LuHeartPulse,
    variant: "contained",
    active: false,
  },
  {
    text: "Renforcement",
    icon: LuDumbbell,
    variant: "contained",
    active: false,
  },
  {
    text: "Équilibre",
    icon: LuPersonStanding,
    variant: "contained",
    active: false,
  },
  {
    text: "Souplesse",
    icon: LuStretchHorizontal,
    variant: "contained",
    active: false,
  },
];
