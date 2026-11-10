// COMPONENTS
import { CurvedText } from "..";
// TYPES
import type { FloatingLayout } from "../../types/floatingText.types";
// CONSTANTS
import { Text } from "@react-three/drei";
import {
  DAHLIA_FONT,
  EXPLORE_GROUP_POSITION,
  EXPLORE_LABEL,
} from "../../constants/explore.constants";

type ExploreProps = {
  layout: FloatingLayout;
};

export default function Explore({ layout }: ExploreProps) {
  return (
    <group position={EXPLORE_GROUP_POSITION}>
      <Text font={DAHLIA_FONT} fontSize={layout.exploreSize}>
        {EXPLORE_LABEL}
      </Text>

      <CurvedText />
    </group>
  );
}
