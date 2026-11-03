// SECTIONS
import {
  Gallery_TrekID_Section,
  GPX_TrekID_Section,
  HeroTrekIDSection,
  Journey_TrekID_Section,
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
      component: () => <GPX_TrekID_Section />,
    },
    // {
    //   id: "journey",
    //   component: () => <Journey_TrekID_Section />,
    // },
    {
      id: "galerie",
      component: () => <Gallery_TrekID_Section />,
    },
  ];
}
