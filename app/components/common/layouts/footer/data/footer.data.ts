import { FiFacebook, FiInstagram, FiLinkedin, FiYoutube } from "@/app/utils/constants/icons";

/* =========================================================
   TYPES
========================================================= */

export type TrekPoint = {
  progress: number;
  title: string;
  description: string;
  value: string;
};

/* =========================================================
   DONNÉES DES ÉTAPES
========================================================= */

export const trekPoints: TrekPoint[] = [
  {
    progress: 0.08,
    title: "Départ",
    description: "Le début de l'aventure Parki Trek.",
    value: "0 km",
  },
  {
    progress: 0.22,
    title: "Première étape",
    description: "Une première ascension symbolique.",
    value: "120 km",
  },
  {
    progress: 0.38,
    title: "Sensibiliser",
    description: "Faire connaître Parkinson autrement.",
    value: "280 km",
  },
  {
    progress: 0.55,
    title: "Deuxième étape",
    description: "Continuer malgré les difficultés.",
    value: "460 km",
  },
  {
    progress: 0.72,
    title: "Rencontre",
    description: "Des rencontres qui donnent du sens.",
    value: "680 km",
  },
  {
    progress: 0.88,
    title: "Objectif",
    description: "Chaque kilomètre compte.",
    value: "920 km",
  },
];

/* =========================================================
   SOURCE UNIQUE DE LA CRÊTE
========================================================= */

export const mountainPathD = `
  M0 108

  L55 95
  L105 105
  L155 78
  L205 92

  L250 63
  L285 78
  L320 52
  L355 71

  L400 38
  L435 57
  L470 25
  L505 55

  L540 43
  L575 67

  L615 48
  L650 72

  L685 34
  L720 61

  L755 19
  L790 53

  L825 8
  L860 54

  L895 30
  L930 66

  L970 42
  L1005 71

  L1040 27
  L1075 62

  L1110 45
  L1145 73

  L1180 31
  L1215 66

  L1250 51
  L1285 75

  L1320 42
  L1355 65

  L1390 34
  L1425 71

  L1460 48
  L1500 82

  L1545 64
  L1600 88
`;

export const socialLinks = [
  {
    label: "Instagram",
    href: "#",
    icon: FiInstagram,
  },
  {
    label: "Facebook",
    href: "#",
    icon: FiFacebook,
  },
  {
    label: "YouTube",
    href: "#",
    icon: FiYoutube,
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: FiLinkedin,
  },
];
