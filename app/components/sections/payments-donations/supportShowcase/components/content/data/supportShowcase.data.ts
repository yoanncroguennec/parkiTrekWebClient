import {
  type IconType,
  FaRegHandshake,
  FaRegHeart,
  LiaUserFriendsSolid,
  LuMountainSnow,
  PiChartLineUpLight,
} from "@/app/utils/constants/icons";

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
