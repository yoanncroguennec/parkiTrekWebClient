// ICONS
import { FaFire, FaHeart, GiConverseShoe } from "@/app/utils/constants/icons";

export const trekStats = [
  {
    id: "distance-completed",
    icon: GiConverseShoe,
    title: "Parcourue",
    value: "250 km",
    background: "#E8F1E6",
  },

  {
    id: "distance-remaining",
    icon: GiConverseShoe,
    title: "A parcourir",
    value: "5 000 km",
    background: "#EEF3E9",
  },

  {
    id: "treks-completed",
    icon: FaHeart,
    title: "Treks réalisées",
    value: "16",
    background: "#F8E9E9",
  },

  {
    id: "trek-days",
    icon: FaFire,
    title: "Jours de trek",
    value: 185,
    background: "#F8EFE1",
  },

  {
    id: "donations",
    icon: FaHeart,
    title: "Dons récoltés",
    value: "0 €",
    background: "#E9F2ED",
  },
] as const;
