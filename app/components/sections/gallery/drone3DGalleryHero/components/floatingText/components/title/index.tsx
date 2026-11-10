import { Text } from "@react-three/drei";

import { CANELA_FONT } from "../../constants/title.constants";
import type { FloatingLayout } from "../../types/floatingText.types";

type TitleProps = {
  layout: FloatingLayout;
};

export default function Title({ layout }: TitleProps) {
  return (
    <>
      {layout.lines.map((line) => (
        <Text
          key={line.text}
          position={[0, line.y, 0]}
          anchorX="left"
          anchorY="middle"
          font={CANELA_FONT}
          fontSize={layout.titleSize}
        >
          {line.text}
        </Text>
      ))}
    </>
  );
}
