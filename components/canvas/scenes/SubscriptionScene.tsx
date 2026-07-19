"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

/** Subscription — three floating ring platforms at ascending heights, each with an orbiting crystal (the three plans). */

const TIERS = [
  { y: -1.6, r: 1.5, color: "#94A3B8" },
  { y: 0, r: 1.9, color: "#38BDF8" },
  { y: 1.6, r: 1.4, color: "#FBBF24" },
];

function TierPlatform({ y, r, color, index }: { y: number; r: number; color: string; index: number }) {
  const ringRef = useRef<THREE.Mesh>(null);
  const crystalRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (ringRef.current) ringRef.current.rotation.z += delta * (0.1 + index * 0.03);
    if (crystalRef.current) {
      crystalRef.current.rotation.y += delta * 0.6;
      crystalRef.current.position.y = y + 0.55 + Math.sin(state.clock.elapsedTime * 0.8 + index) * 0.08;
    }
  });

  return (
    <group>
      <mesh ref={ringRef} position={[0, y, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[r, 0.03, 8, 64]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.4} roughness={0.3} />
      </mesh>
      <mesh ref={crystalRef} position={[0, y + 0.55, 0]}>
        <octahedronGeometry args={[0.22, 0]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.6} roughness={0.15} metalness={0.3} transparent opacity={0.92} />
      </mesh>
    </group>
  );
}

function Stack() {
  const groupRef = useRef<THREE.Group>(null);
  useFrame((_, delta) => {
    if (groupRef.current) groupRef.current.rotation.y += delta * 0.05;
  });
  return (
    <group ref={groupRef}>
      {TIERS.map((t, i) => (
        <TierPlatform key={i} y={t.y} r={t.r} color={t.color} index={i} />
      ))}
    </group>
  );
}

export default function SubscriptionScene() {
  return (
    <div className="fixed inset-0 z-0">
      <Canvas dpr={[1, 1.5]} camera={{ position: [4, 1, 7], fov: 42 }} gl={{ antialias: true, alpha: false, powerPreference: "low-power" }}>
        <color attach="background" args={["#050b14"]} />
        <ambientLight intensity={0.55} />
        <pointLight position={[4, 4, 5]} intensity={1.5} color="#38BDF8" />
        <Stack />
      </Canvas>
    </div>
  );
}