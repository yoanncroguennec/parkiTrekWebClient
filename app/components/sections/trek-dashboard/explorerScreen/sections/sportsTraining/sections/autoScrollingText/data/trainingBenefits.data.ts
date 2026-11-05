// GOOD
import type { IconType } from "react-icons";
import { GiMountainRoad } from "react-icons/gi";
import {
  FaUsers,
  FaComments,
  FaHeart,
  FaHandHoldingHeart,
} from "react-icons/fa";
import { FaPersonWalking } from "react-icons/fa6";

export interface TrainingBenefit {
  id: string;
  icon: IconType;
  color: string;
  text: string;
}

export const trainingBenefits: TrainingBenefit[] = [
  {
    id: "community",
    icon: FaUsers,
    color: "#4CAF50",
    text: "Une communauté soudée",
  },
  {
    id: "adventure",
    icon: GiMountainRoad,
    color: "#FF9800",
    text: "Vivez une aventure collective",
  },
  {
    id: "support",
    icon: FaHandHoldingHeart,
    color: "#E91E63",
    text: "Ne restez plus seul face à Parkinson",
  },
  {
    id: "sharing",
    icon: FaComments,
    color: "#2196F3",
    text: "Partage & conseils",
  },
  {
    id: "progress",
    icon: FaPersonWalking,
    color: "#8BC34A",
    text: "Avancez ensemble, pas à pas",
  },
  {
    id: "connection",
    icon: FaHeart,
    color: "#9C27B0",
    text: "Créez du lien, partagez vos expériences",
  },
];
