import type { IconType } from "react-icons";

import { GiRunningShoe } from "react-icons/gi";
import { LuBrain } from "react-icons/lu";
import { IoHeartOutline } from "react-icons/io5";
import { TiGroupOutline } from "react-icons/ti";

export interface TrainingBenefit {
  id: string;
  icon: IconType;
  color: string;
  text: string;
}

export const trainingBenefits: TrainingBenefit[] = [
  {
    id: "activity",
    icon: GiRunningShoe,
    color: "#4CAF50",
    text: "Restez actif à son rythme",
  },
  {
    id: "motor-symptoms",
    icon: LuBrain,
    color: "#2196F3",
    text: "Réduire les symptômes moteurs",
  },
  {
    id: "well-being",
    icon: IoHeartOutline,
    color: "#E91E63",
    text: "Améliorer le bien-être global",
  },
  {
    id: "community",
    icon: TiGroupOutline,
    color: "#9C27B0",
    text: "Une communauté soudée et bienveillante",
  },
];
