import { IoCalendarOutline, IoFootstepsOutline, IoLocationOutline } from "react-icons/io5";
import type { IconType } from "react-icons";

export interface StatsCard {
  value: number;
  label: string;
  icon: IconType;
  color: string;
}

export interface CreateStatsCardsProps {
  km: number;
  days: number;
  stages: number;
}

export function createStatsCards({ km, days, stages }: CreateStatsCardsProps): StatsCard[] {
  return [
    {
      value: km,
      label: "km",
      icon: IoFootstepsOutline,
      color: "#22c55e",
    },
    {
      value: days,
      label: "jours",
      icon: IoCalendarOutline,
      color: "#f97316",
    },
    {
      value: stages,
      label: "étapes",
      icon: IoLocationOutline,
      color: "#38bdf8",
    },
  ];
}
