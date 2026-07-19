"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

/** 404 — "Signal lost": a dim core, a searching ping that keeps expanding
 * and fading without ever finding anything, and a few fragments that drift
 * outward and never come back. */

const COLOR = "#38BDF8";

function Core() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    const pulse = 1 + Math.sin(state.clock.elapsedTime * 0.8) * 0.05;
    ref.current.scale.setScalar(pulse);
    ref.current.rotation.y += 0.0015;
  });
  return (
    <mesh ref={ref}>
      <icosahedronGeometry args={[0.55, 1]} />
      <meshStandardMaterial color={COLOR} wireframe transparent opacity={0.4} />
    </mesh>
  );
}

function SearchPing() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    const t = (state.clock.elapsedTime * 0.35) % 1;
    ref.current.scale.setScalar(0.6 + t * 3.4);
    (ref.current.material as THREE.MeshBasicMaterial).opacity = (1 - t) * 0.35;
  });
  return (
    <mesh ref={ref} rotation={[Math.PI / 2, 0, 0]}>
      <torusGeometry args={[1, 0.01, 8, 64]} />
      <meshBasicMaterial color={COLOR} transparent opacity={0.3} />
    </mesh>
  );
}

function DriftingFragments() {
  const groupRef = useRef<THREE.Group>(null);
  const fragRefs = useRef<(THREE.Mesh | null)[]>([]);

  const fragments = useMemo(
    () =>
      Array.from({ length: 5 }, (_, i) => {
        const dir = new THREE.Vector3(
          Math.cos((i / 5) * Math.PI * 2),
          Math.sin(i * 1.7) * 0.4,
          Math.sin((i / 5) * Math.PI * 2)
        ).normalize();
        return { dir, speed: 0.15 + Math.random() * 0.1, phase: Math.random() * Math.PI * 2 };
      }),
    []
  );

  useFrame((state) => {
    if (groupRef.current) groupRef.current.rotation.y += 0.0008;
    fragments.forEach((f, i) => {
      const el = fragRefs.current[i];
      if (!el) return;
      const t = ((state.clock.elapsedTime * f.speed + f.phase) % 4) / 4;
      const dist = 0.8 + t * 3.5;
      el.position.copy(f.dir).multiplyScalar(dist);
      (el.material as THREE.MeshStandardMaterial).opacity = 1 - t;
      el.rotation.x += 0.01;
      el.rotation.y += 0.008;
    });
  });

  return (
    <group ref={groupRef}>
      {fragments.map((_, i) => (
        <mesh
          key={i}
          ref={(el) => {
            fragRefs.current[i] = el;
          }}
        >
          <octahedronGeometry args={[0.1, 0]} />
          <meshStandardMaterial color={COLOR} emissive={COLOR} emissiveIntensity={0.5} transparent opacity={0.8} />
        </mesh>
      ))}
    </group>
  );
}

export default function NotFoundScene() {
  return (
    <div className="fixed inset-0 z-0">
      <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 6.5], fov: 42 }} gl={{ antialias: true, alpha: false, powerPreference: "low-power" }}>
        <color attach="background" args={["#050b14"]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[3, 3, 4]} intensity={1.2} color={COLOR} />
        <Core />
        <SearchPing />
        <DriftingFragments />
      </Canvas>
    </div>
  );
}