import { RefObject, useEffect } from "react";
import * as THREE from "three";

interface Props {
  meshRef: RefObject<THREE.Mesh | null>;
}

export default function useTrailAnimation({ meshRef }: Props) {
  useEffect(() => {
    if (!meshRef.current) return;

    const geometry = meshRef.current.geometry as THREE.TubeGeometry;

    const total = geometry.index?.count ?? geometry.attributes.position.count;

    geometry.setDrawRange(0, 0);

    let progress = 0;

    const animate = () => {
      progress += total * 0.01;

      geometry.setDrawRange(0, progress);

      if (progress < total) {
        requestAnimationFrame(animate);
      }
    };

    animate();
  }, [meshRef]);
}
