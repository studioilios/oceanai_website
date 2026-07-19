"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

/** Privacy — a locked, faceted shield: dodecahedron core wrapped in a slow-rotating hex-panel shell. */

const COLOR = "#10B981";

function Shield() {
  const outerRef = useRef<THREE.Group>(null);
  const innerRef = useRef<THREE.Mesh>(null);
  const panelRefs = useRef<(THREE.Mesh | null)[]>([]);

  const panels = useMemo(
    () =>
      Array.from({ length: 12 }, (_, i) => {
        const phi = Math.acos(1 - (2 * (i + 0.5)) / 12);
        const theta = Math.PI * (1 + Math.sqrt(5)) * i;
        return {
          x: Math.sin(phi) * Math.cos(theta),
          y: Math.sin(phi) * Math.sin(theta),
          z: Math.cos(phi),
        };
      }),
    []
  );

  useFrame((state, delta) => {
    if (outerRef.current) outerRef.current.rotation.y += delta * 0.06;
    if (innerRef.current) innerRef.current.rotation.y -= delta * 0.03;
    const pulse = 1 + Math.sin(state.clock.elapsedTime * 1.2) * 0.03;
    panelRefs.current.forEach((p) => p?.scale.setScalar(pulse));
  });

  return (
    <group ref={outerRef}>
      <mesh ref={innerRef}>
        <dodecahedronGeometry args={[1, 0]} />
        <meshStandardMaterial color={COLOR} wireframe transparent opacity={0.5} />
      </mesh>
      {panels.map((p, i) => (
        <mesh
          key={i}
          position={[p.x * 1.9, p.y * 1.9, p.z * 1.9]}
          ref={(el) => {
            panelRefs.current[i] = el;
            if (el) el.lookAt(0, 0, 0);
          }}
        >
          <octahedronGeometry args={[0.28, 0]} />
          <meshStandardMaterial color={COLOR} emissive={COLOR} emissiveIntensity={0.3} roughness={0.25} metalness={0.25} transparent opacity={0.9} />
        </mesh>
      ))}
    </group>
  );
}

export default function PrivacyScene() {
  return (
    <div className="fixed inset-0 z-0">
      <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 6.5], fov: 40 }} gl={{ antialias: true, alpha: false, powerPreference: "low-power" }}>
        <color attach="background" args={["#050b14"]} />
        <ambientLight intensity={0.55} />
        <pointLight position={[3, 3, 4]} intensity={1.4} color={COLOR} />
        <Shield />
      </Canvas>
    </div>
  );
}