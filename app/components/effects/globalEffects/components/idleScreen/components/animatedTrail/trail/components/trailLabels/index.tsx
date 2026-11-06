"use client";

// import type { RefObject } from "react";
import * as THREE from "three";

import {
  TRAIL_CONFIG,
  TRAIL_LABEL_COLOR,
  type TrailLabel as TrailLabelData,
} from "../../constants";

import TrailLabelText from "./trailLabelText";

interface Props {
  label: TrailLabelData;
  index: number;
  setLabelRef: (index: number, element: THREE.Group | null) => void;
}

export default function TrailLabel({ label, index, setLabelRef }: Props) {
  return (
    <group
      ref={(element) => {
        setLabelRef(index, element);
      }}
      position={[label.point.x, label.point.y + 0.12, label.point.z]}
      scale={[0, 0, 0]}
    >
      {/* Point */}
      <mesh>
        <sphereGeometry
          args={[
            TRAIL_CONFIG.labelMarkerRadius,
            TRAIL_CONFIG.labelMarkerSegments,
            TRAIL_CONFIG.labelMarkerSegments,
          ]}
        />

        <meshBasicMaterial color={TRAIL_LABEL_COLOR} toneMapped={false} />
      </mesh>

      {/* Ligne */}
      <line>
        <bufferGeometry
          onUpdate={(geometry) => {
            geometry.setFromPoints([
              new THREE.Vector3(0, 0, 0),
              new THREE.Vector3(
                TRAIL_CONFIG.labelLineLength,
                TRAIL_CONFIG.labelLineHeight,
                0,
              ),
            ]);
          }}
        />

        <lineBasicMaterial color={TRAIL_LABEL_COLOR} toneMapped={false} />
      </line>

      {/* Textes */}
      <TrailLabelText
        city={label.city}
        distance={label.distance}
        time={label.time}
      />
    </group>
  );
}
