import {
  type IconType,
  FiActivity,
  FiBookOpen,
  FiHeart,
  FiHome,
  FiImage,
  FiMap,
  FiMail,
  FiUser,
} from "@/app/utils/constants/icons";

export interface MainMenuItem {
  id: string;
  icon: IconType;
  url: string;
  color: string;
}

export const dataMainMenu: MainMenuItem[] = [
  {
    id: "home",
    icon: FiHome,
    url: "/home",
    color: "#E6E6E6",
  },
  {
    id: "trek",
    icon: FiMap,
    url: "/treks/listTreks",
    color: "#9BD3AE",
  },
  {
    id: "parkinson",
    icon: FiActivity,
    url: "/parkinson",
    color: "#F7D488",
  },
  {
    id: "story",
    icon: FiUser,
    url: "/my-story",
    color: "#AFCBFF",
  },
  {
    id: "gallery",
    icon: FiImage,
    url: "/gallery",
    color: "#F5A9B8",
  },
  {
    id: "journal",
    icon: FiBookOpen,
    url: "/trek-dashboard",
    color: "#D4B483",
  },
  {
    id: "support",
    icon: FiHeart,
    url: "/payments-donations",
    color: "#FFAAA5",
  },
  {
    id: "contact",
    icon: FiMail,
    url: "/contact",
    color: "#B5EAD7",
  },
];
