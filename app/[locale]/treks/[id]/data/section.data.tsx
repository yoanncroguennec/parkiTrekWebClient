// SECTIONS
import {
  // Gallery_TrekID,
  GPX_TrekID,
  HeroTrekIDSection,
  // Journey_TrekID,
} from "@/app/components/sections/treks/[id]";
// DATAS
import { cards } from "@/app/utils/constants/data/treks/map/data";

type SelectedArea = (typeof cards)[number]["areas"][number];

export function getSectionsTrekID(selectedArea: SelectedArea) {
  return [
    {
      id: "introduction",
      component: () => <HeroTrekIDSection selectedArea={selectedArea} />,
    },
    {
      id: "parcours",
      component: () => <GPX_TrekID />,
    },
    // {
    //   id: "journey",
    //   component: () => <Journey_TrekID />,
    // },
    // {
    //   id: "galerie",
    //   component: () => <Gallery_TrekID />,
    // },
  ];
}
