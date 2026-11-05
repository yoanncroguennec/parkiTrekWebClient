// UI
import { QuoteDefault } from "@/app/components/ui";
// COMPONENTS
import { CardLineChart, CinematicDonut, NextTrekCard } from "./components";
// DATA
import { quoteLines } from "./data.quoteLines";

export const dashboardCards = [
  {
    id: "next-trek",
    component: <NextTrekCard />,
    bordered: true,
  },
  {
    id: "donut",
    component: <CinematicDonut />,
    bordered: true,
  },
  {
    id: "quote",
    component: <QuoteDefault quote={quoteLines[0]} />,
    bordered: false,
  },
  {
    id: "line-chart",
    component: <CardLineChart />,
    bordered: true,
  },
];
