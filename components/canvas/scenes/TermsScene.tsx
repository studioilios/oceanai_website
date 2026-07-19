"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

/** Terms — a balanced scale that gently tips, plus a stack of document tablets. */

const COLOR = "#94A3B8";

function Scale() {
  const beamRef = useRef<THREE.Group>(null);
  const panLRef = useRef<THREE.Mesh>(null);
  const panRRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const tilt = Math.sin(state.clock.elapsedTime * 0.5) * 0.12;
    if (beamRef.current) beamRef.current.rotation.z = tilt;
    if (panLRef.current) panLRef.current.position.y = -1.1 - tilt * 1.6;
    if (panRRef.current) panRRef.current.position.y = -1.1 + tilt * 1.6;
  });

  return (
    <group position={[0, 0.6, 0]}>
      {/* Post */}
      <mesh position={[0, -1.2, 0]}>
        <cylinderGeometry args={[0.03, 0.05, 2.4, 8]} />
        <meshStandardMaterial color={COLOR} roughness={0.5} />
      </mesh>
      <group ref={beamRef}>
        <mesh rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.025, 0.025, 3.6, 8]} />
          <meshStandardMaterial color={COLOR} roughness={0.4} />
        </mesh>
        <mesh position={[-1.8, 0, 0]} ref={panLRef}>
          <cylinderGeometry args={[0.55, 0.55, 0.03, 24]} />
          <meshStandardMaterial color="#38BDF8" emissive="#38BDF8" emissiveIntensity={0.3} transparent opacity={0.85} />
        </mesh>
        <mesh position={[1.8, 0, 0]} ref={panRRef}>
          <cylinderGeometry args={[0.55, 0.55, 0.03, 24]} />
          <meshStandardMaterial color="#38BDF8" emissive="#38BDF8" emissiveIntensity={0.3} transparent opacity={0.85} />
        </mesh>
      </group>
    </group>
  );
}

function DocStack() {
  const ref = useRef<THREE.Group>(null);
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.15;
  });
  return (
    <group ref={ref} position={[3, -1.6, -1]}>
      {Array.from({ length: 5 }).map((_, i) => (
        <mesh key={i} position={[0, i * 0.09, 0]} rotation={[0, i * 0.15, 0]}>
          <boxGeometry args={[0.9, 0.05, 1.2]} />
          <meshStandardMaterial color="#CBD5E1" roughness={0.6} transparent opacity={0.5} />
        </mesh>
      ))}
    </group>
  );
}

export default function TermsScene() {
  return (
    <div className="fixed inset-0 z-0">
      <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0.5, 8], fov: 42 }} gl={{ antialias: true, alpha: false, powerPreference: "low-power" }}>
        <color attach="background" args={["#050b14"]} />
        <ambientLight intensity={0.6} />
        <pointLight position={[3, 4, 5]} intensity={1.4} color="#38BDF8" />
        <Scale />
        <DocStack />
      </Canvas>
    </div>
  );
}