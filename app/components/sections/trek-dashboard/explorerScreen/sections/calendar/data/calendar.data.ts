import { dateFnsLocalizer, type Event, type View } from "react-big-calendar";

import { format, parse, startOfWeek, getDay } from "date-fns";

import { fr } from "date-fns/locale";

// THEME PARKI TREK

export const C = {
  bg: "#F4F2EC",
  card: "#FFFEFA",
  dark: "#111111",
  muted: "#777970",
  green: "#72C889",
  greenDark: "#346C45",
  border: "#E4E2D9",
  amber: "#D9A441",
  rose: "#C86F72",
  purple: "#7D83C9",
};

// CONFIGURATION CALENDRIER

export const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek: (date: Date) => startOfWeek(date, { weekStartsOn: 1 }),
  getDay,
  locales: { fr },
});

// TYPES

export type Category =
  "Trek" | "Sport" | "Sensibilisation" | "Live" | "Rencontre";

export type CalendarEvent = Event & {
  id: number;
  category: Category;
  location?: string;
};

// COULEURS DES CATÉGORIES

export const categoryColors: Record<Category, string> = {
  Trek: C.green,
  Sport: C.dark,
  Sensibilisation: C.amber,
  Live: C.rose,
  Rencontre: C.purple,
};

export const categoryTextColors: Record<Category, string> = {
  Trek: C.dark,
  Sport: "#FFFFFF",
  Sensibilisation: C.dark,
  Live: "#FFFFFF",
  Rencontre: "#FFFFFF",
};

// CATÉGORIES

export const categories: Category[] = [
  "Trek",
  "Sport",
  "Sensibilisation",
  "Live",
  "Rencontre",
];

// ÉVÉNEMENTS DE DÉMONSTRATION

export const initialEvents: CalendarEvent[] = [
  {
    id: 1,
    title: "Randonnée Parki Trek",
    start: new Date(2026, 9, 12, 9, 0),
    end: new Date(2026, 9, 12, 12, 0),
    category: "Trek",
    location: "Saint-Brieuc",
  },
  {
    id: 2,
    title: "Préparation physique",
    start: new Date(2026, 9, 14, 14, 0),
    end: new Date(2026, 9, 14, 16, 0),
    category: "Sport",
    location: "Salle de sport",
  },
  {
    id: 3,
    title: "Parlons Parkinson",
    start: new Date(2026, 9, 17, 18, 0),
    end: new Date(2026, 9, 17, 19, 0),
    category: "Sensibilisation",
    location: "En ligne",
  },
  {
    id: 4,
    title: "Live communautaire",
    start: new Date(2026, 9, 20, 19, 0),
    end: new Date(2026, 9, 20, 20, 30),
    category: "Live",
    location: "TikTok",
  },
  {
    id: 5,
    title: "Rencontre des marcheurs",
    start: new Date(2026, 9, 23, 10, 0),
    end: new Date(2026, 9, 23, 12, 0),
    category: "Rencontre",
    location: "Côtes-d'Armor",
  },
];

// OPTIONS D'AFFICHAGE

export const viewOptions: { value: View; label: string }[] = [
  { value: "month", label: "Mois" },
  { value: "week", label: "Semaine" },
  { value: "day", label: "Jour" },
  { value: "agenda", label: "Agenda" },
];
