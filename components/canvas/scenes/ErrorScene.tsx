"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

/** Error — a core that glitches: irregular flicker, jittering shards that
 * momentarily fly apart then snap back, unlike the smooth, calm motion
 * everywhere else in the app. */

const COLOR = "#FB7185";

function GlitchCore() {
  const ref = useRef<THREE.Mesh>(null);
  const matRef = useRef<THREE.MeshStandardMaterial>(null);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    const glitch = Math.random() > 0.93 ? (Math.random() - 0.5) * 0.3 : 0;
    ref.current.rotation.y += 0.006;
    ref.current.rotation.x = Math.sin(t * 0.6) * 0.1 + glitch;
    ref.current.position.x = glitch * 0.4;
    if (matRef.current) {
      matRef.current.emissiveIntensity = 0.4 + Math.max(0, Math.sin(t * 3)) * 0.3 + (Math.random() > 0.95 ? 0.6 : 0);
    }
  });

  return (
    <mesh ref={ref}>
      <icosahedronGeometry args={[0.9, 1]} />
      <meshStandardMaterial ref={matRef} color={COLOR} wireframe emissive={COLOR} emissiveIntensity={0.5} transparent opacity={0.55} />
    </mesh>
  );
}

function Shards() {
  const groupRef = useRef<THREE.Group>(null);
  const shardRefs = useRef<(THREE.Mesh | null)[]>([]);

  const shards = useMemo(
    () =>
      Array.from({ length: 8 }, (_, i) => ({
        base: new THREE.Vector3(Math.cos((i / 8) * Math.PI * 2) * 1.6, Math.sin(i * 1.3) * 0.6, Math.sin((i / 8) * Math.PI * 2) * 1.6),
        phase: Math.random() * Math.PI * 2,
      })),
    []
  );

  useFrame((state, delta) => {
    if (groupRef.current) groupRef.current.rotation.y += delta * 0.04;
    const t = state.clock.elapsedTime;
    shards.forEach((s, i) => {
      const el = shardRefs.current[i];
      if (!el) return;
      const jitter = Math.random() > 0.9 ? (Math.random() - 0.5) * 0.5 : 0;
      el.position.copy(s.base).multiplyScalar(1 + Math.sin(t * 0.5 + s.phase) * 0.06 + jitter);
      el.rotation.x += delta * 0.5;
      el.rotation.y += delta * 0.4;
    });
  });

  return (
    <group ref={groupRef}>
      {shards.map((_, i) => (
        <mesh
          key={i}
          ref={(el) => {
            shardRefs.current[i] = el;
          }}
        >
          <tetrahedronGeometry args={[0.14, 0]} />
          <meshStandardMaterial color={COLOR} emissive={COLOR} emissiveIntensity={0.5} roughness={0.4} />
        </mesh>
      ))}
    </group>
  );
}

export default function ErrorScene() {
  return (
    <div className="fixed inset-0 z-0">
      <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 6.5], fov: 42 }} gl={{ antialias: true, alpha: false, powerPreference: "low-power" }}>
        <color attach="background" args={["#050b14"]} />
        <ambientLight intensity={0.45} />
        <pointLight position={[3, 3, 4]} intensity={1.4} color={COLOR} />
        <GlitchCore />
        <Shards />
      </Canvas>
    </div>
  );
}