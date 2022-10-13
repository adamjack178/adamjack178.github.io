import React, { Suspense, useEffect, useRef } from "react";
import { Canvas } from "react-three-fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useAnimations } from "@react-three/drei";

function Model(props) {
  const { animate, file } = props;
  const group = useRef();
  const { scene, animations } = useGLTF(file);
  const { actions } = useAnimations(animations, group);
  useEffect(() => {
    if (animate === 1) {
      actions.Girar.play();
    }
  });
  return <primitive ref={group} object={scene} dispose={null} />;
}

export default function Game3d(props) {
  const { animate, file } = props;
  return (
    <Canvas pixelratio={[1, 2]} camera={{ position: [-10, 0, 15], fov: 4 }}>
      <Suspense fallback={null}>
        <ambientLight intensity={1} />
        <Model animate={animate} file={file} />
        <OrbitControls />
      </Suspense>
    </Canvas>
  );
}
