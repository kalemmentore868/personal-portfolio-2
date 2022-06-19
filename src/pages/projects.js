import React, { useRef, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import styled from "styled-components";
import { OrbitControls, Sphere } from "@react-three/drei";
import StarryBackground from "../components/ThreeDObjects/StarryBackground";
import Planet from "../components/ThreeDObjects/Planet";

const Wrapper = styled.div`
  position: relative;
  padding-top: 100px;

  canvas {
    height: 100vh;
  }
`;

const projects = () => {
  return (
    <Wrapper>
      <Canvas>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} />
        <StarryBackground />
        <OrbitControls />
        <Suspense fallback={null}>
          <Planet texture="/images/accounting-site.PNG" scale={0.3} />
          <Planet texture="/images/calculator-app.PNG" scale={0.5} />
          <Planet texture="/images/easy-bank.PNG" scale={0.3} />
          <Planet texture="/images/gaming-site.PNG" scale={0.7} />
        </Suspense>
      </Canvas>
    </Wrapper>
  );
};

export default projects;
