"use client";

import { useMemo, useRef } from "react";
import * as THREE from "three";

import { TRAIL_CONFIG, labels, trailCurve } from "./constants";

import { useLabelAnimation, useMarkerAnimation, useTrailAnimation, useTrailMotion } from "./hooks";

import { TrailLabels, TrailMarker, TrailMesh } from "./components";

export default function Trail() {
  const groupRef = useRef<THREE.Group>(null);
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.MeshStandardMaterial>(null);

  const markerRef = useRef<THREE.Mesh>(null);
  const haloRef = useRef<THREE.Mesh>(null);

  const progressRef = useRef(0);
  const labelRefs = useRef<(THREE.Group | null)[]>([]);

  const geometry = useMemo(
    () =>
      new THREE.TubeGeometry(
        trailCurve,
        TRAIL_CONFIG.tubularSegments,
        TRAIL_CONFIG.radius,
        TRAIL_CONFIG.radialSegments,
        false
      ),
    []
  );

  useTrailAnimation({
    meshRef,
  });

  useMarkerAnimation({
    groupRef,
    markerRef,
    haloRef,
    materialRef,
    progressRef,
    curve: trailCurve,
  });

  useLabelAnimation({
    labelRefs,
    labels,
    progressRef,
  });

  useTrailMotion({
    groupRef,
  });

  const setLabelRef = (index: number, element: THREE.Group | null) => {
    labelRefs.current[index] = element;
  };

  return (
    <group ref={groupRef}>
      <TrailMesh geometry={geometry} meshRef={meshRef} materialRef={materialRef} />

      <TrailMarker markerRef={markerRef} haloRef={haloRef} />

      {labels.map((label, index) => (
        <TrailLabels key={label.city} label={label} index={index} setLabelRef={setLabelRef} />
      ))}
    </group>
  );
}
