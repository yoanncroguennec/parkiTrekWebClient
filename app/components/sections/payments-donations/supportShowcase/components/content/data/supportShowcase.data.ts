import { IconType } from "react-icons";
import { FaRegHandshake, FaRegHeart } from "react-icons/fa6";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { PiChartLineUpLight } from "react-icons/pi";
import { LuMountainSnow } from "react-icons/lu";

export const supportShowcaseItemIds = [
  "funding-objective",
  "sponsors",
  "donors",
  "partners",
] as const;

export type SupportShowcaseItemId = (typeof supportShowcaseItemIds)[number];

export interface SupportShowcaseItem {
  id: SupportShowcaseItemId;
  icon: IconType;
  url: string;
}

export const data_SupportShowcase: SupportShowcaseItem[] = [
  {
    id: "funding-objective",
    icon: PiChartLineUpLight,
    url: "",
  },
  {
    id: "sponsors",
    icon: LiaUserFriendsSolid,
    url: "",
  },
  {
    id: "donors",
    icon: FaRegHeart,
    url: "",
  },
  {
    id: "partners",
    icon: FaRegHandshake,
    url: "",
  },
];

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
];
