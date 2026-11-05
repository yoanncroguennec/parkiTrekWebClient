// DATA
import { Area } from "@/app/utils/constants/data/treks/map/data";
// ICONS
import {
  FaRoute,
  FaCalendarAlt,
  FaWalking,
  FaHeart,
  FaMapMarkerAlt,
  FaFlagCheckered,
} from "@/app/utils/constants/icons";

export const heroStats = (selectedArea: Area) => [
  {
    icon: FaRoute,
    value: selectedArea.km ?? 0,
    unit: "km",
    title: "Distance",
    color: "#22c55e",
  },
  {
    icon: FaCalendarAlt,
    value: selectedArea.days ?? 0,
    unit: "jours",
    title: "Aventure",
    color: "#3b82f6",
  },
  {
    icon: FaWalking,
    value: selectedArea.numberObjective ?? "",
    unit: "objectif",
    title: "Dépasser Parkinson",
    color: "#f59e0b",
  },
  {
    icon: FaHeart,
    value: "∞",
    unit: "",
    title: "Espoir",
    color: "#ef4444",
  },
  {
    icon: FaMapMarkerAlt,
    value: selectedArea.name ?? "",
    unit: "",
    title: "Département",
    color: "#a855f7",
  },
  {
    icon: FaFlagCheckered,
    value: selectedArea.stages ?? 0,
    unit: "étapes",
    title: "Parcours",
    color: "#06b6d4",
  },
];

export const data_MyTreks = [
  {
    title: "GR34",
    desc: "En 5 jours, j'ai parcouru 150 km à pied en randonnant. On se fait emporter par les richesses intérieures (vallons, menhirs et manoirs, ...) entre terre et mer.",
    infos: [
      { type: "start", value: "Saint-Brieuc" },
      { type: "finish", value: "Morlaix" },
      { type: "duration", value: "5 jours" },
      { type: "distance", value: "150 km" },
      { type: "elevation", value: "1 550 m" },
      { type: "difficulty", value: "medium" },
      { type: "challenge", value: ["fatigue", "douleur"] },
    ],
    // imgCover: '/assets/imgs/hikingTrails/test.jpg',
    status: "done",
    file_GPX: "/assets/data/gpx/grr34_saint_brieuc_a_morlaix.gpx",
  },
];
