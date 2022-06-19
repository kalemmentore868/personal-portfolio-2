import React, { useRef } from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import { TextureLoader } from "three";
import * as THREE from "three";
import { Sphere } from "@react-three/drei";

const Planet = ({ texture, scale }) => {
  // const [x, y, z] = Array(3)
  //   .fill()
  //   .map(() => THREE.MathUtils.randFloatSpread(8));

  const x = THREE.MathUtils.randFloatSpread(8);
  const y = THREE.MathUtils.randFloatSpread(6);
  const z = THREE.MathUtils.randFloatSpread(5);

  const planetTexture = useLoader(TextureLoader, texture);

  const mesh = useRef();
  useFrame(() => {
    mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
  });

  return (
    <Sphere ref={mesh} scale={scale} position={[x, y, z]}>
      <meshStandardMaterial
        map={planetTexture}
        attach="material"
        color="white"
      />
    </Sphere>
  );
};

export default Planet;
