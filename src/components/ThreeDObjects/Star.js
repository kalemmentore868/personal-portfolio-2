import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Sphere } from "@react-three/drei";

export default function Star() {
  const [x, y, z] = Array(3)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(100));

  return (
    <mesh position={[x, y, z - 30]}>
      <sphereGeometry args={[0.05, 8, 8]} />
      <meshStandardMaterial attach="material" color="white" />
    </mesh>
  );
}
