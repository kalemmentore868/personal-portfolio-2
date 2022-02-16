import React, { useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
// import TextureLoader from "three/src/loaders/TextureLoader";

function Box(props) {
  //   const propic = useLoader(TextureLoader, "/images/propic.jpg");
  const mesh = useRef();
  useFrame((state, delta) => {
    mesh.current.rotation.x += 0.01;
    mesh.current.rotation.y += 0.01;
  });

  return (
    <mesh {...props} ref={mesh}>
      <boxGeometry args={[3.1, 3.1, 3.1]} />
      <meshStandardMaterial />
      {/* map={propic} */}
    </mesh>
  );
}

const PropicCube = () => {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box position={[0, 0, 1]} />
    </Canvas>
  );
};

export default PropicCube;
