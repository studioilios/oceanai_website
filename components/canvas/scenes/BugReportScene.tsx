"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

/** Bug Report — a radar sweep over a wireframe grid, with a few flickering blips (the bugs). */

const COLOR = "#FB7185";

function Grid() {
  const geo = useMemo(() => new THREE.PlaneGeometry(8, 8, 16, 16), []);
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.4, 0]}>
      <primitive object={geo} attach="geometry" />
      <meshBasicMaterial color={COLOR} wireframe transparent opacity={0.18} />
    </mesh>
  );
}

function Sweep() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 1.1;
  });
  return (
    <mesh ref={ref} position={[0, -1.39, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <circleGeometry args={[4, 32, 0, Math.PI / 5]} />
      <meshBasicMaterial color={COLOR} transparent opacity={0.16} side={THREE.DoubleSide} />
    </mesh>
  );
}

function Blips() {
  const blips = useMemo(
    () =>
      Array.from({ length: 6 }, () => ({
        x: (Math.random() - 0.5) * 6,
        z: (Math.random() - 0.5) * 6,
        phase: Math.random() * Math.PI * 2,
      })),
    []
  );
  const refs = useRef<(THREE.Mesh | null)[]>([]);

  useFrame((state) => {
    blips.forEach((b, i) => {
      const el = refs.current[i];
      if (!el) return;
      const flicker = Math.max(0, Math.sin(state.clock.elapsedTime * 1.6 + b.phase));
      (el.material as THREE.MeshBasicMaterial).opacity = flicker * 0.9;
      el.scale.setScalar(0.6 + flicker * 0.6);
    });
  });

  return (
    <>
      {blips.map((b, i) => (
        <mesh
          key={i}
          position={[b.x, -1.35, b.z]}
          rotation={[-Math.PI / 2, 0, 0]}
          ref={(el) => {
            refs.current[i] = el;
          }}
        >
          <ringGeometry args={[0.08, 0.14, 16]} />
          <meshBasicMaterial color={COLOR} transparent opacity={0} />
        </mesh>
      ))}
    </>
  );
}

function Core() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.3;
  });
  return (
    <mesh ref={ref}>
      <tetrahedronGeometry args={[0.7, 0]} />
      <meshStandardMaterial color={COLOR} wireframe transparent opacity={0.6} />
    </mesh>
  );
}

export default function BugReportScene() {
  return (
    <div className="fixed inset-0 z-0">
      <Canvas dpr={[1, 1.5]} camera={{ position: [0, 1.2, 7.5], fov: 44 }} gl={{ antialias: true, alpha: false, powerPreference: "low-power" }}>
        <color attach="background" args={["#050b14"]} />
        <ambientLight intensity={0.55} />
        <pointLight position={[3, 3, 4]} intensity={1.3} color={COLOR} />
        <Core />
        <Grid />
        <Sweep />
        <Blips />
      </Canvas>
    </div>
  );
}