"use client";

import { useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

/**
 * Home = an organism (shader-displaced orb). Playground = a machine
 * (wireframe lattice + rings). Features = a crystal — a faceted core with
 * solid, lit shards orbiting it on tilted paths. Each feature page gets its
 * own color; the shard-orbit motion is the same rig everywhere so the whole
 * section still feels like one system.
 */

export type FeatureVariant =
  | "hub"
  | "file-intelligence"
  | "insurance-ai"
  | "local-llm"
  | "ai-history"
  | "appointments"
  | "blood-donor"
  | "family"
  | "organs"
  | "voice"
  | "watch";

const VARIANT_COLOR: Record<FeatureVariant, string> = {
  hub: "#60A5FA",
  "file-intelligence": "#38BDF8",
  "insurance-ai": "#A78BFA",
  "local-llm": "#8B5CF6",
  "ai-history": "#818CF8",
  appointments: "#2DD4BF",
  "blood-donor": "#FB7185",
  family: "#34D399",
  organs: "#10B981",
  voice: "#F472B6",
  watch: "#FBBF24",
};

const HUB_SHARD_COLORS = ["#38BDF8", "#A78BFA", "#FB7185", "#34D399", "#FBBF24", "#F472B6"];

function Crystal({ variant }: { variant: FeatureVariant }) {
  const color = VARIANT_COLOR[variant];
  const isHub = variant === "hub";
  const groupRef = useRef<THREE.Group>(null);
  const shardRefs = useRef<(THREE.Group | null)[]>([]);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  const shardCount = isHub ? 6 : 5;
  const shards = useMemo(
    () =>
      Array.from({ length: shardCount }, (_, i) => ({
        radius: 2.1 + (i % 3) * 0.5,
        speed: 0.16 + i * 0.035,
        tilt: (i / shardCount) * Math.PI,
        offset: (i / shardCount) * Math.PI * 2,
        scale: 0.22 + (i % 3) * 0.07,
        color: isHub ? HUB_SHARD_COLORS[i % HUB_SHARD_COLORS.length] : color,
      })),
    [shardCount, isHub, color]
  );

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime;
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.05;
      groupRef.current.position.x = THREE.MathUtils.damp(groupRef.current.position.x, mouse.current.x * 0.28, 3, delta);
      groupRef.current.position.y = THREE.MathUtils.damp(groupRef.current.position.y, -mouse.current.y * 0.18, 3, delta);
    }
    shards.forEach((s, i) => {
      const el = shardRefs.current[i];
      if (!el) return;
      const angle = t * s.speed + s.offset;
      el.position.set(
        Math.cos(angle) * s.radius,
        Math.sin(angle * 0.6) * s.radius * 0.35,
        Math.sin(angle) * s.radius * Math.cos(s.tilt)
      );
      el.rotation.x += delta * 0.6;
      el.rotation.y += delta * 0.4;
    });
  });

  return (
    <group ref={groupRef}>
      {/* Core — wireframe, ties back to the same visual grammar as home/playground */}
      <mesh>
        <icosahedronGeometry args={[1.15, 1]} />
        <meshBasicMaterial color={color} wireframe transparent opacity={0.35} />
      </mesh>
      <mesh>
        <icosahedronGeometry args={[1.15, 0]} />
        <meshStandardMaterial color={color} transparent opacity={0.06} emissive={color} emissiveIntensity={0.4} />
      </mesh>

      {/* Orbiting shards — solid, lit, faceted */}
      {shards.map((s, i) => (
        <group key={i} ref={(el) => { shardRefs.current[i] = el; }}>
          <mesh scale={s.scale}>
            <icosahedronGeometry args={[1, 0]} />
            <meshStandardMaterial
              color={s.color}
              emissive={s.color}
              emissiveIntensity={0.35}
              roughness={0.25}
              metalness={0.15}
              transparent
              opacity={0.85}
            />
          </mesh>
        </group>
      ))}
    </group>
  );
}

function Dust({ variant }: { variant: FeatureVariant }) {
  const color = VARIANT_COLOR[variant];
  const count = 260;
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 3.2 + Math.random() * 3.6;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, []);
  const ref = useRef<THREE.Points>(null);
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.015;
  });
  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color={color} size={0.02} transparent opacity={0.4} sizeAttenuation />
    </points>
  );
}

export default function FeatureScene({ variant }: { variant: FeatureVariant }) {
  const color = VARIANT_COLOR[variant];
  return (
    <div className="fixed inset-0 z-0">
      <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 7.5], fov: 40 }} gl={{ antialias: true, alpha: false, powerPreference: "low-power" }}>
        <color attach="background" args={["#050b14"]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[4, 3, 5]} intensity={1.6} color={color} />
        <pointLight position={[-4, -2, -3]} intensity={0.8} color="#1A6BFF" />
        <Crystal variant={variant} />
        <Dust variant={variant} />
      </Canvas>
    </div>
  );
}