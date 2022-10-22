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
      actions.girar.play();
    }
  });
  return <primitive ref={group} object={scene} dispose={null} />;
}

export default function Console3d(props) {
  const { animate, file } = props;
  return (
    <Canvas
      pixelratio={[1, 2]}
      camera={{ position: [-10, 0, 15], fov: 6 }}
      onCreated={({ gl }) => {
        gl.physicallyCorrectLights = true;
      }}
    >
      <Suspense fallback={null}>
        <Model animate={animate} file={file} />
        <OrbitControls />
      </Suspense>
    </Canvas>
  );
}
