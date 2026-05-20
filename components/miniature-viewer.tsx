"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function Model() {
  const model = useGLTF("/models/miniature.glb");

  return (
    <primitive
      object={model.scene}
      scale={2}
    />
  );
}

export default function MiniatureViewer() {
  return (
    <div className="w-full h-[500px] rounded-3xl overflow-hidden bg-[#f8f5f2]">

      <Canvas camera={{ position: [0, 0, 5] }}>

        <ambientLight intensity={1.5} />

        <directionalLight position={[2, 2, 2]} intensity={2} />

        <Model />

        <OrbitControls
          enableZoom={true}
          autoRotate={true}
        />

      </Canvas>

    </div>
  );
}
