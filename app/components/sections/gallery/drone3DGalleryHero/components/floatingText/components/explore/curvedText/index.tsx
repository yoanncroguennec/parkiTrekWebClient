import { Text } from "@react-three/drei";

// CONSTANTS
import {
  COMPUTER_MOUSE_POSITION,
  COMPUTER_MOUSE_SCALE,
  CURVE_FONT_SIZE,
  CURVE_RADIUS,
  CURVE_START_OFFSET,
  CURVED_TEXT,
  IS_TOP,
} from "./constants/curvedText.constants";

// MODELS
import ComputerMouseModel from "./models/computerMouse.model";

export default function CurvedText() {
  const startAngle = IS_TOP ? Math.PI + CURVE_START_OFFSET : CURVE_START_OFFSET;

  const endAngle = IS_TOP ? 2 * Math.PI - CURVE_START_OFFSET : Math.PI - CURVE_START_OFFSET;

  return (
    <>
      {CURVED_TEXT.split("").map((letter, index) => {
        const t = index / (CURVED_TEXT.length - 1);
        const angle = startAngle + (endAngle - startAngle) * t;

        const x = Math.cos(angle) * CURVE_RADIUS;
        const y = Math.sin(angle) * CURVE_RADIUS;

        return (
          <Text
            key={`${letter}-${index}`}
            position={[x, y, 0]}
            rotation={[0, 0, angle + Math.PI / 2]}
            fontSize={CURVE_FONT_SIZE}
            color="#000"
            anchorX="center"
            anchorY="middle"
          >
            {letter}
          </Text>
        );
      })}

      <ComputerMouseModel position={COMPUTER_MOUSE_POSITION} scale={COMPUTER_MOUSE_SCALE} />
    </>
  );
}
