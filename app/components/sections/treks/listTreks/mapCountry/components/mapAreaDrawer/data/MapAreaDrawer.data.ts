import type { IconType } from "react-icons";

import {
  IoFlagOutline,
  IoLocationOutline,
  IoPeopleOutline,
  IoTrophyOutline,
  IoVideocamOutline,
  IoWalkOutline,
  IoWaterOutline,
} from "react-icons/io5";

export type TrekStep = {
  title: string;
  location: string;
  icon: IconType;
  color: string;
};

export const trekSteps: TrekStep[] = [
  {
    title: "Départ",
    location: "Saint-Brieuc",
    icon: IoFlagOutline,
    color: "#22c55e",
  },
  {
    title: "Étape 1",
    location: "Plérin",
    icon: IoWalkOutline,
    color: "#38bdf8",
  },
  {
    title: "Étape 2",
    location: "Mur-de-Bretagne",
    icon: IoWalkOutline,
    color: "#38bdf8",
  },
  {
    title: "Étape actuelle",
    location: "Morbihan",
    icon: IoLocationOutline,
    color: "#f97316",
  },
];

export const trekSponsors = ["Parkinson France", "Sponsor Local", "Partenaire Santé"];

export const trekHighlights = [
  {
    title: "Plus haute étape",
    description: "Point culminant du parcours réalisé.",
    icon: IoTrophyOutline,
    color: "#f97316",
  },
  {
    title: "Passage en bord de mer",
    description: "Traversée des côtes bretonnes.",
    icon: IoWaterOutline,
    color: "#38bdf8",
  },
  {
    title: "Tournage vidéo",
    description: "Captation et création de contenu.",
    icon: IoVideocamOutline,
    color: "#a855f7",
  },
  {
    title: "Rencontre partenaire",
    description: "Échanges avec les soutiens du projet.",
    icon: IoPeopleOutline,
    color: "#22c55e",
  },
];
