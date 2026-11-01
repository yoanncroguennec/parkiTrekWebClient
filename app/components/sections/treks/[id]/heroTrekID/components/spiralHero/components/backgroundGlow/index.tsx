import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export default function BackgroundGlow() {
  const meshRef = useRef<THREE.Mesh>(null);
  const { camera } = useThree();

  useFrame(() => {
    if (!meshRef.current) return;

    meshRef.current.position.y = camera.position.y;
    meshRef.current.position.z = camera.position.z - 15;
  });

  return (
    <mesh ref={meshRef} position={[0, 0, -15]}>
      <planeGeometry args={[12, 20]} />
      {/* <planeGeometry args={[ LARGEUR, HAUTEUR]} /> */}
      <shaderMaterial
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        vertexShader={`
          varying vec2 vUv;

          void main() {
            vUv = uv;

            gl_Position =
              projectionMatrix *
              modelViewMatrix *
              vec4(position,1.0);
          }
        `}
        fragmentShader={`
          varying vec2 vUv;

          void main(){

            vec2 uv = vUv - 0.5;

            float d = length(uv);

            float glow =
              smoothstep(0.45,0.0,d);

            vec3 color =
              vec3(1.0);

            gl_FragColor =
              vec4(color,glow*0.25);
          }
        `}
      />
    </mesh>
  );
}
