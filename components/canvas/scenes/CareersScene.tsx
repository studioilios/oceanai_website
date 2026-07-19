"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

/** Careers — a circle of bars that keep growing, like a team scaling. */

const BAR_COUNT = 14;
const COLOR = "#1A6BFF";
const COLOR_B = "#0DB87A";

function GrowthRing() {
  const groupRef = useRef<THREE.Group>(null);
  const barRefs = useRef<(THREE.Mesh | null)[]>([]);

  const bars = useMemo(
    () =>
      Array.from({ length: BAR_COUNT }, (_, i) => {
        const angle = (i / BAR_COUNT) * Math.PI * 2;
        return {
          x: Math.cos(angle) * 2.6,
          z: Math.sin(angle) * 2.6,
          base: 0.4 + Math.random() * 0.5,
          amp: 0.5 + Math.random() * 1.1,
          speed: 0.4 + Math.random() * 0.5,
          phase: Math.random() * Math.PI * 2,
        };
      }),
    []
  );

  useFrame((state, delta) => {
    if (groupRef.current) groupRef.current.rotation.y += delta * 0.08;
    const t = state.clock.elapsedTime;
    bars.forEach((b, i) => {
      const el = barRefs.current[i];
      if (!el) return;
      const h = b.base + (Math.sin(t * b.speed + b.phase) * 0.5 + 0.5) * b.amp;
      el.scale.y = h;
      el.position.y = h / 2 - 1.4;
    });
  });

  return (
    <group ref={groupRef}>
      {bars.map((b, i) => (
        <mesh
          key={i}
          position={[b.x, 0, b.z]}
          ref={(el) => {
            barRefs.current[i] = el;
          }}
        >
          <boxGeometry args={[0.28, 1, 0.28]} />
          <meshStandardMaterial
            color={i % 2 === 0 ? COLOR : COLOR_B}
            emissive={i % 2 === 0 ? COLOR : COLOR_B}
            emissiveIntensity={0.35}
            roughness={0.4}
            metalness={0.1}
          />
        </mesh>
      ))}
    </group>
  );
}

export default function CareersScene() {
  return (
    <div className="fixed inset-0 z-0">
      <Canvas dpr={[1, 1.5]} camera={{ position: [3, 2, 7], fov: 42 }} gl={{ antialias: true, alpha: false, powerPreference: "low-power" }}>
        <color attach="background" args={["#050b14"]} />
        <ambientLight intensity={0.55} />
        <pointLight position={[5, 5, 5]} intensity={1.6} color={COLOR_B} />
        <GrowthRing />
      </Canvas>
    </div>
  );
}