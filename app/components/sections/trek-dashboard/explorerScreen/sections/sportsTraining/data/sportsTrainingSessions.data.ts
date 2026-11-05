import type { IconType } from "react-icons";

import {
  MdDirectionsBike,
  MdSelfImprovement,
  MdSportsMma,
  MdDirectionsWalk,
  MdFitnessCenter,
  MdTheaterComedy,
  MdFavorite,
  MdMusicNote,
  MdHiking,
} from "react-icons/md";

export type TrainingCategory =
  | "Agilité"
  | "Attention"
  | "Articulation"
  | "Cardio"
  | "Communication"
  | "Coordination"
  | "Endurance"
  | "Endurance cardiovasculaire"
  | "Équilibre"
  | "Expression corporelle"
  | "Expression faciale"
  | "Interaction sociale"
  | "Mémoire"
  | "Mobilité"
  | "Mobilité fonctionnelle"
  | "Multitâche"
  | "Posture"
  | "Rythme"
  | "Réactivité"
  | "Renforcement"
  | "Renforcement des jambes"
  | "Renforcement musculaire"
  | "Respiration"
  | "Souplesse"
  | "Voix"
  | "Voix et articulation";

export interface TrainingAdditionalInfo {
  text: string;
  tooltip?: string;
}

export interface SportsTrainingSession {
  mainImage: string;
  categories: TrainingCategory[];
  decorativeIcon: string;
  sport: string;
  iconSport: IconType;
  additionalInfo?: TrainingAdditionalInfo[];
  practiceDuration: string;
  benefitsForSymptoms: string[];
}

export const sportsTrainingSessions: SportsTrainingSession[] = [
  {
    mainImage:
      "/assets/imgs/trek-dashboard/explorerScreen/sportsTraingSessions/streching.jpg",
    categories: [
      "Souplesse",
      "Mobilité",
      "Posture",
      "Équilibre",
      "Respiration",
    ],
    decorativeIcon: "",
    sport: "Streching / Gymnastique",
    iconSport: MdSelfImprovement,
    practiceDuration: "2 à 4h",
    benefitsForSymptoms: [
      "Réduire la raideur",
      "Maintenir l'amplitude articulaire",
      "Améliorer la posture / mobilité",
      "Les étirements sont recommandés",
    ],
  },
  {
    mainImage:
      "/assets/imgs/trek-dashboard/explorerScreen/sportsTraingSessions/boxing.jpg",
    categories: [
      "Coordination",
      "Agilité",
      "Équilibre",
      "Renforcement",
      "Cardio",
      "Réactivité",
      "Multitâche",
      "Endurance cardiovasculaire",
      "Mobilité",
    ],
    decorativeIcon: "",
    sport: "Boxe anglaise",
    iconSport: MdSportsMma,
    practiceDuration: "2 à 4h",
    benefitsForSymptoms: [
      "Solliciter les grands mouvements",
      "La coordination",
      "L'agilité, L'équilibre",
      "Le cardio",
      "Contribuer à travailler la mobilité et certains symptômes moteurs",
    ],
  },
  {
    mainImage:
      "/assets/imgs/trek-dashboard/explorerScreen/sportsTraingSessions/briskWalking.jpg",
    categories: [
      "Endurance cardiovasculaire",
      "Mobilité",
      "Équilibre",
      "Coordination",
    ],
    decorativeIcon: "",
    sport: "Marche rapide",
    iconSport: MdDirectionsWalk,
    practiceDuration: "2 à 4h",
    benefitsForSymptoms: [
      "Améliore l'endurance",
      "Améliorer la mobilité et l'équilibre",
    ],
  },
  {
    mainImage:
      "/assets/imgs/trek-dashboard/explorerScreen/sportsTraingSessions/weightTraining.jpg",
    categories: [
      "Renforcement musculaire",
      "Posture",
      "Mobilité fonctionnelle",
      "Équilibre",
    ],
    decorativeIcon: "",
    sport: "Musculation",
    iconSport: MdFitnessCenter,
    additionalInfo: [
      {
        text: "Avec coach privé",
      },
    ],
    practiceDuration: "2 à 4h",
    benefitsForSymptoms: [
      "Renforcer les membres inférieurs, supérieurs et surtout le dos",
      "Le renforcement peut aider la force musculaire",
      "Améliore la mobilité et les mouvements fonctionnels, ainsi que la posture",
    ],
  },
  {
    mainImage:
      "/assets/imgs/trek-dashboard/explorerScreen/sportsTraingSessions/theatre.jpg",
    categories: [
      "Communication",
      "Expression faciale",
      "Voix",
      "Articulation",
      "Mémoire",
      "Attention",
      "Coordination",
      "Interaction sociale",
    ],
    decorativeIcon: "",
    sport: "Théâtre",
    iconSport: MdTheaterComedy,
    practiceDuration: "2 à 4h",
    benefitsForSymptoms: [
      "Activité complémentaire :",
      "le travail de la voix, de l'articulation, de la respiration, des gestes et de l'expression peut être intéressant pour les difficultés de communication associées à Parkinson",
      "La Parkinson Foundation recommande notamment le travail de la voix, de l'articulation, de la posture et des expressions/gestes",
    ],
  },
  {
    mainImage:
      "/assets/imgs/trek-dashboard/explorerScreen/sportsTraingSessions/cardio.jpg",
    categories: [
      "Renforcement",
      "Endurance",
      "Cardio",
      "Mobilité",
      "Coordination",
    ],
    decorativeIcon: "",
    sport: "Renforcement musculaire / Cardio",
    iconSport: MdFavorite,
    additionalInfo: [
      {
        text: "Avec APA",
        tooltip: "Activité Physique Adaptée",
      },
    ],
    practiceDuration: "2 à 4h",
    benefitsForSymptoms: [
      "Combine deux composantes essentielles : le travail cardiovasculaire et le renforcement",
      "Améliorer l'endurance, la force et les capacités fonctionnelles",
    ],
  },
  {
    mainImage:
      "/assets/imgs/trek-dashboard/explorerScreen/sportsTraingSessions/zumba.jpg",
    categories: [
      "Cardio",
      "Coordination",
      "Équilibre",
      "Agilité",
      "Mobilité",
      "Rythme",
      "Multitâche",
    ],
    decorativeIcon: "",
    sport: "Zumba / Danse",
    iconSport: MdMusicNote,
    practiceDuration: "2 à 4h",
    benefitsForSymptoms: [
      "La danse sollicite simultanément le rythme, la coordination, l'équilibre, les changements de direction et l'endurance",
      "Des études citées par la Parkinson Foundation rapportent des améliorations de symptômes moteurs, de l'équilibre et de la vitesse de marche avec certaines pratiques de danse",
    ],
  },
  {
    mainImage:
      "/assets/imgs/trek-dashboard/explorerScreen/sportsTraingSessions/hiking.jpg",
    categories: [
      "Endurance",
      "Équilibre",
      "Mobilité",
      "Coordination",
      "Agilité",
      "Renforcement des jambes",
    ],
    decorativeIcon: "",
    sport: "Randonnées (Hors des treks)",
    iconSport: MdHiking,
    practiceDuration: "2 à 4h",
    benefitsForSymptoms: [
      "Combine endurance et déplacement sur terrain variable. Les changements de surface, les montées/descentes et les obstacles peuvent solliciter l'équilibre et l'agilité",
    ],
  },
  {
    mainImage:
      "/assets/imgs/trek-dashboard/explorerScreen/sportsTraingSessions/cycling.jpg",
    categories: [
      "Endurance",
      "Cardio",
      "Renforcement des jambes",
      "Coordination",
      "Mobilité",
      "Équilibre",
    ],
    decorativeIcon: "",
    sport: "Vélo de course / Cyclisme",
    iconSport: MdDirectionsBike,
    practiceDuration: "2 à 4h",
    benefitsForSymptoms: [
      "Adaptées au travail cardiovasculaire chez les personnes avec Parkinson",
      "Améliore l'endurance et certaines fonctions motrices",
    ],
  },
];
