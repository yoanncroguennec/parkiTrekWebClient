"use client";

import { Text } from "@react-three/drei";

import { TRAIL_LABEL_COLOR } from "../../../constants";

import { getTrailLabelTextItems } from "./constants/trailLabelText.constants";

interface Props {
  city: string;
  distance: string;
  time: string;
}

export default function TrailLabelText({ city, distance, time }: Props) {
  const textItems = getTrailLabelTextItems({
    city,
    distance,
    time,
  });

  return (
    <>
      {textItems.map(({ key, value, config }) => (
        <Text
          key={key}
          position={config.position}
          fontSize={config.fontSize}
          anchorX="left"
          anchorY="middle"
          color={TRAIL_LABEL_COLOR}
        >
          {value}
        </Text>
      ))}
    </>
  );
}
