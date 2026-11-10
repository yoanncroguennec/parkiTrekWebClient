// ICONS
import {
  type IconType,
  IoHeartOutline,
  LuMountain,
  LuBrain,
  TiGroupOutline,
} from "@/app/utils/constants/icons";

export interface TrainingBenefit {
  id: string;
  icon: IconType;
  color: string;
  text: string;
}

export const trainingBenefits: TrainingBenefit[] = [
  {
    id: "body",
    icon: LuMountain,
    color: "#4CAF50",
    text: "1 corps et\n1 mental plus fort",
  },
  {
    id: "mind",
    icon: LuBrain,
    color: "#2196F3",
    text: "1 esprit plus serein",
  },
  {
    id: "heart",
    icon: IoHeartOutline,
    color: "#E91E63",
    text: "1 pas vers demain",
  },
  {
    id: "group",
    icon: TiGroupOutline,
    color: "#9C27B0",
    text: "Vivre une aventure collective",
  },
];
