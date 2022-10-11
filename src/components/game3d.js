import React, { Suspense, useEffect, useRef } from "react";
import { Canvas } from "react-three-fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useAnimations } from "@react-three/drei";

function Model(props) {
  const group = useRef();
  const { scene, animations } = useGLTF("/cart.glb");
  const { actions } = useAnimations(animations, group);
  useEffect(() => {
    console.log(actions);
    actions.Girar.play();
  });
  return <primitive ref={group} object={scene} dispose={null} />;
}

export default function Game3d() {
  return (
    <Canvas pixelratio={[1, 2]} camera={{ position: [-10, 0, 15], fov: 4 }}>
      <Suspense fallback={null}>
        <ambientLight intensity={1} />
        <Model />
        <OrbitControls />
      </Suspense>
    </Canvas>
  );
}
