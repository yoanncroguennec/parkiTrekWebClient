export type CalendarCategory =
  "trek" | "sport" | "sensibilisation" | "live" | "rencontre" | "autre";

export type CalendarEvent = {
  id: string;

  title: string;

  description: string;

  start: string;

  end: string;

  category: CalendarCategory;

  color: string;

  location: string;

  imageUrl?: string;

  allDay: boolean;

  published: boolean;

  createdAt: string;

  updatedAt: string;
};

export type CalendarEventForm = {
  title: string;

  description: string;

  start: string;

  end: string;

  category: CalendarCategory;

  color: string;

  location: string;

  imageUrl: string;

  allDay: boolean;

  published: boolean;
};

export type CalendarViewEvent = CalendarEvent & {
  startDate: Date;

  endDate: Date;
};
