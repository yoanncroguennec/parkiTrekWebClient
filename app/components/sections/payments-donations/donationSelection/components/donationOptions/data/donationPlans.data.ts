import { type IconType, LuMountainSnow } from "@/app/utils/constants/icons";

export interface DonationOption {
  id: number;
  icon: IconType;
  value: number;
  desc: string;
  url: string;
}

export interface DonationPlan {
  id: number;
  label: string;
  values: DonationOption[];
}

export const donationPlans = [
  {
    id: 1,
    label: "Une seule fois",
    values: [
      {
        id: 1,
        icon: LuMountainSnow,
        value: 5,
        desc: "Un petit geste\nqui compte",
        url: "",
      },
      {
        id: 2,
        icon: LuMountainSnow,
        value: 50,
        desc: "Vous faites\nla différence",
        url: "",
      },
      {
        id: 3,
        icon: LuMountainSnow,
        value: 100,
        desc: "Un soutien fort\net essentiel",
        url: "",
      },
    ],
  },
  {
    id: 2,
    label: "Par mois",
    values: [
      {
        id: 1,
        icon: LuMountainSnow,
        value: 10,
        desc: "Chaque mois\nvous soutenez le projet",
        url: "",
      },
      {
        id: 2,
        icon: LuMountainSnow,
        value: 20,
        desc: "Un engagement\nsur la durée",
        url: "",
      },
      {
        id: 3,
        icon: LuMountainSnow,
        value: 50,
        desc: "Un impact\nexceptionnel",
        url: "",
      },
    ],
  },
  {
    id: 3,
    label: "Par an",
    values: [
      {
        id: 1,
        icon: LuMountainSnow,
        value: 100,
        desc: "Un soutien\nannuel",
        url: "",
      },
      {
        id: 2,
        icon: LuMountainSnow,
        value: 250,
        desc: "Vous participez\nà l'aventure",
        url: "",
      },
      {
        id: 3,
        icon: LuMountainSnow,
        value: 500,
        desc: "Vous devenez\nun partenaire majeur",
        url: "",
      },
    ],
  },
] satisfies DonationPlan[];
