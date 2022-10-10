import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function Model(props) {
  const { scene } = useGLTF("/game.glb");
  return <primitive object={scene} />;
}

export default function Game3d() {
  return (
    <Canvas pixelRatio={[1, 2]} camera={{ position: [-10, 15, 15], fov: 7 }}>
      <Suspense fallback={null}>
        <ambientLight intensity={1} />
        <Model />
        <OrbitControls />
      </Suspense>
    </Canvas>
  );
}
