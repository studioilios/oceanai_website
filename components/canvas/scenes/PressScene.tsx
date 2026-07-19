"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

/** Press — a camera-aperture blade ring, opening/closing, with light beams. */

const BLADE_COUNT = 7;
const COLOR = "#FBBF24";

function Aperture() {
  const groupRef = useRef<THREE.Group>(null);
  const bladeRefs = useRef<(THREE.Group | null)[]>([]);

  useFrame((state, delta) => {
    if (groupRef.current) groupRef.current.rotation.z += delta * 0.05;
    const open = (Math.sin(state.clock.elapsedTime * 0.4) * 0.5 + 0.5) * 0.5 + 0.35;
    bladeRefs.current.forEach((b, i) => {
      if (!b) return;
      const angle = (i / BLADE_COUNT) * Math.PI * 2;
      b.rotation.z = angle + open;
    });
  });

  return (
    <group ref={groupRef}>
      {Array.from({ length: BLADE_COUNT }).map((_, i) => (
        <group
          key={i}
          ref={(el) => {
            bladeRefs.current[i] = el;
          }}
        >
          <mesh position={[1.1, 0, 0]}>
            <coneGeometry args={[0.7, 1.9, 3]} />
            <meshStandardMaterial color={COLOR} emissive={COLOR} emissiveIntensity={0.3} roughness={0.35} metalness={0.2} side={THREE.DoubleSide} />
          </mesh>
        </group>
      ))}
      <mesh>
        <icosahedronGeometry args={[0.3, 1]} />
        <meshStandardMaterial color="#F5F9FF" emissive="#F5F9FF" emissiveIntensity={1} />
      </mesh>
    </group>
  );
}

function Beams() {
  const ref = useRef<THREE.Group>(null);
  const beams = useMemo(() => Array.from({ length: 10 }, (_, i) => (i / 10) * Math.PI * 2), []);
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.z -= delta * 0.025;
  });
  return (
    <group ref={ref}>
      {beams.map((angle, i) => (
        <mesh key={i} rotation={[0, 0, angle]} position={[Math.cos(angle) * 3.2, Math.sin(angle) * 3.2, -1]}>
          <planeGeometry args={[0.02, 4]} />
          <meshBasicMaterial color={COLOR} transparent opacity={0.12} side={THREE.DoubleSide} />
        </mesh>
      ))}
    </group>
  );
}

export default function PressScene() {
  return (
    <div className="fixed inset-0 z-0">
      <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 7], fov: 42 }} gl={{ antialias: true, alpha: false, powerPreference: "low-power" }}>
        <color attach="background" args={["#050b14"]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[3, 3, 4]} intensity={1.6} color={COLOR} />
        <Beams />
        <Aperture />
      </Canvas>
    </div>
  );
}