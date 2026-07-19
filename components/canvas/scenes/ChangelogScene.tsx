"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

/** Changelog — a rising helix of release markers, camera drifting along it. */

const MARKER_COUNT = 26;
const COLOR = "#A78BFA";
const COLOR_B = "#7C3AED";

function Helix() {
  const groupRef = useRef<THREE.Group>(null);

  const markers = useMemo(
    () =>
      Array.from({ length: MARKER_COUNT }, (_, i) => {
        const t = i / MARKER_COUNT;
        const angle = t * Math.PI * 6;
        const r = 1.8;
        return {
          x: Math.cos(angle) * r,
          z: Math.sin(angle) * r,
          y: t * 5.2 - 2.6,
          major: i % 6 === 0,
        };
      }),
    []
  );

  useFrame((_, delta) => {
    if (groupRef.current) groupRef.current.rotation.y += delta * 0.09;
  });

  return (
    <group ref={groupRef}>
      {/* Spine */}
      <mesh>
        <cylinderGeometry args={[0.01, 0.01, 5.4, 8]} />
        <meshBasicMaterial color={COLOR} transparent opacity={0.2} />
      </mesh>
      {markers.map((m, i) => (
        <mesh key={i} position={[m.x, m.y, m.z]}>
          <sphereGeometry args={[m.major ? 0.14 : 0.06, 14, 14]} />
          <meshStandardMaterial
            color={m.major ? COLOR_B : COLOR}
            emissive={m.major ? COLOR_B : COLOR}
            emissiveIntensity={m.major ? 0.7 : 0.35}
            roughness={0.3}
          />
        </mesh>
      ))}
    </group>
  );
}

export default function ChangelogScene() {
  return (
    <div className="fixed inset-0 z-0">
      <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 7.5], fov: 44 }} gl={{ antialias: true, alpha: false, powerPreference: "low-power" }}>
        <color attach="background" args={["#050b14"]} />
        <ambientLight intensity={0.55} />
        <pointLight position={[4, 3, 5]} intensity={1.5} color={COLOR} />
        <Helix />
      </Canvas>
    </div>
  );
}