import { Area } from "@/app/utils/constants/data/treks/map/data";
import { defaultStyle, selectedStyle, visitedStyle } from "../styles/LeafletMap.Styles";

export function getAreaStyle(area: Area | undefined, selectedArea?: Area) {
  if (selectedArea?.code === area?.code) {
    return selectedStyle;
  }

  if (area?.visited) {
    return visitedStyle;
  }

  return defaultStyle;
}
