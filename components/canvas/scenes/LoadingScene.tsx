"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

/**
 * Loading — deliberately the lightest scene in the app. This mounts as a
 * Suspense fallback, potentially for a single frame, so it skips
 * particles/bloom/multiple lights and dpr is fixed at 1. A single
 * low-poly core pulsing + one ring is enough to read as "working."
 */

const COLOR = "#38BDF8";

function Pulse() {
  const coreRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (coreRef.current) {
      const s = 1 + Math.sin(t * 2.4) * 0.15;
      coreRef.current.scale.setScalar(s);
      coreRef.current.rotation.y += 0.02;
    }
    if (ringRef.current) {
      const ringT = (t * 0.6) % 1;
      ringRef.current.scale.setScalar(0.6 + ringT * 2);
      (ringRef.current.material as THREE.MeshBasicMaterial).opacity = (1 - ringT) * 0.4;
    }
  });

  return (
    <group>
      <mesh ref={coreRef}>
        <icosahedronGeometry args={[0.4, 0]} />
        <meshStandardMaterial color={COLOR} emissive={COLOR} emissiveIntensity={0.6} roughness={0.3} />
      </mesh>
      <mesh ref={ringRef} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.7, 0.01, 6, 32]} />
        <meshBasicMaterial color={COLOR} transparent opacity={0.4} />
      </mesh>
    </group>
  );
}

export default function LoadingScene() {
  return (
    <div className="fixed inset-0 z-0">
      <Canvas dpr={1} camera={{ position: [0, 0, 4], fov: 40 }} gl={{ antialias: false, alpha: false, powerPreference: "low-power" }}>
        <color attach="background" args={["#050b14"]} />
        <ambientLight intensity={0.6} />
        <pointLight position={[2, 2, 3]} intensity={1} color={COLOR} />
        <Pulse />
      </Canvas>
    </div>
  );
}