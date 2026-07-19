"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

/** Who We Are — a studio core with six shipped-product satellites in independent orbits. */

const SATELLITES = [
  { color: "#38BDF8", radius: 2.1, speed: 0.22, tilt: 0.1 },
  { color: "#A78BFA", radius: 2.6, speed: 0.16, tilt: 0.6 },
  { color: "#34D399", radius: 3.1, speed: 0.12, tilt: 1.1 },
  { color: "#FB7185", radius: 2.35, speed: 0.19, tilt: 1.9 },
  { color: "#FBBF24", radius: 2.85, speed: 0.14, tilt: 2.4 },
  { color: "#818CF8", radius: 1.85, speed: 0.26, tilt: 2.9 },
];

function Studio() {
  const groupRef = useRef<THREE.Group>(null);
  const satRefs = useRef<(THREE.Mesh | null)[]>([]);
  const trailRefs = useRef<(THREE.Mesh | null)[]>([]);

  useFrame((state, delta) => {
    if (groupRef.current) groupRef.current.rotation.y += delta * 0.02;
    const t = state.clock.elapsedTime;
    SATELLITES.forEach((s, i) => {
      const angle = t * s.speed;
      const x = Math.cos(angle) * s.radius;
      const z = Math.sin(angle) * s.radius;
      const y = Math.sin(angle * 1.3 + s.tilt) * 0.6;
      const sat = satRefs.current[i];
      if (sat) {
        sat.position.set(x, y, z);
        sat.rotation.x += delta * 0.5;
        sat.rotation.y += delta * 0.3;
      }
      const ring = trailRefs.current[i];
      if (ring) ring.rotation.x = Math.PI / 2 + s.tilt * 0.15;
    });
  });

  return (
    <group ref={groupRef}>
      {/* Core */}
      <mesh>
        <icosahedronGeometry args={[0.7, 1]} />
        <meshStandardMaterial color="#F5F9FF" emissive="#60A5FA" emissiveIntensity={0.5} roughness={0.2} metalness={0.3} />
      </mesh>
      {SATELLITES.map((s, i) => (
        <group key={i}>
          <mesh
            ref={(el) => {
              trailRefs.current[i] = el;
            }}
            rotation={[Math.PI / 2, 0, 0]}
          >
            <torusGeometry args={[s.radius, 0.004, 8, 80]} />
            <meshBasicMaterial color={s.color} transparent opacity={0.18} />
          </mesh>
          <mesh
            ref={(el) => {
              satRefs.current[i] = el;
            }}
          >
            <octahedronGeometry args={[0.16, 0]} />
            <meshStandardMaterial color={s.color} emissive={s.color} emissiveIntensity={0.5} roughness={0.25} />
          </mesh>
        </group>
      ))}
    </group>
  );
}

export default function WhoWeAreScene() {
  return (
    <div className="fixed inset-0 z-0">
      <Canvas dpr={[1, 1.5]} camera={{ position: [0, 1.4, 8], fov: 42 }} gl={{ antialias: true, alpha: false, powerPreference: "low-power" }}>
        <color attach="background" args={["#050b14"]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[3, 3, 4]} intensity={1.4} color="#60A5FA" />
        <Studio />
      </Canvas>
    </div>
  );
}