"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function Box() {
  return (
    <mesh>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="#b08968" />
    </mesh>
  );
}

export default function MiniatureViewer() {
  return (
    <div className="w-full h-[400px] rounded-3xl overflow-hidden bg-[#f8f5f2]">

      <Canvas camera={{ position: [0, 0, 5] }}>

        <ambientLight intensity={1.5} />

        <directionalLight position={[2, 2, 2]} />

        <Box />

        <OrbitControls />

      </Canvas>

    </div>
  );
}
