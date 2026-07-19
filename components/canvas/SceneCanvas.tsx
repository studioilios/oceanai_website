"use client";

import { Canvas } from "@react-three/fiber";
import { EffectComposer, Bloom, Vignette } from "@react-three/postprocessing";
import { Suspense } from "react";
import HealthOrb from "./Healthorb";
import DataField from "./Datafield";
import CameraRig from "./Camerarig";

export default function SceneCanvas() {
  return (
    <div className="canvas-fixed">
      <Canvas
        dpr={[1, 1.8]}
        gl={{ antialias: true, alpha: false, powerPreference: "high-performance" }}
        camera={{ position: [0, 0, 6.2], fov: 42, near: 0.1, far: 60 }}
      >
        <color attach="background" args={["#050b14"]} />
        <fog attach="fog" args={["#050b14", 6, 16]} />

        <ambientLight intensity={0.35} />
        <pointLight position={[4, 3, 5]} intensity={2.2} color="#1a6bff" />
        <pointLight position={[-4, -2, 3]} intensity={1.4} color="#0db87a" />

        <Suspense fallback={null}>
          <HealthOrb />
          <DataField />
        </Suspense>

        <CameraRig />

        <EffectComposer multisampling={0}>
          <Bloom intensity={0.55} luminanceThreshold={0.18} luminanceSmoothing={0.35} mipmapBlur />
          <Vignette eskil={false} offset={0.15} darkness={0.65} />
        </EffectComposer>
      </Canvas>
    </div>
  );
}