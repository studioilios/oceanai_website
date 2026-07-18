"use client";

import { useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

/**
 * Home page = an organism (the health journey). Playground = a machine
 * (the AI system you're now driving). Same "no imported assets" rule, but a
 * completely different visual language: crisp wireframe polyhedron, thin
 * rotating rings, a sparse point field — a control-room/HUD feel instead of
 * the pulsing, organic orb.
 */

export type PlaygroundVariant = "upload" | "insurance" | "organs" | "voice" | "appointment" | "hub";

const VARIANT_CONFIG: Record<
  PlaygroundVariant,
  { core: string; ring: string; particle: string; speed: number; detail: number }
> = {
  upload: { core: "#38BDF8", ring: "#0EA5E9", particle: "#7DD3FC", speed: 0.14, detail: 1 },
  insurance: { core: "#A78BFA", ring: "#7C3AED", particle: "#C4B5FD", speed: 0.09, detail: 2 },
  organs: { core: "#34D399", ring: "#059669", particle: "#6EE7B7", speed: 0.05, detail: 1 },
  voice: { core: "#FB7185", ring: "#E11D48", particle: "#FDA4AF", speed: 0.2, detail: 0 },
  appointment: { core: "#FBBF24", ring: "#D97706", particle: "#FCD34D", speed: 0.07, detail: 1 },
  // The /playground index previews all 5 demos at once — its rings borrow
  // one color from each of them instead of a single accent.
  hub: { core: "#E0EAFB", ring: "#38BDF8", particle: "#93C5FD", speed: 0.05, detail: 2 },
};

// Only "hub" needs distinct per-ring colors; every other variant repeats its
// single ring color across all rings.
const HUB_RING_COLORS = ["#38BDF8", "#A78BFA", "#34D399", "#FB7185", "#FBBF24"];
const HUB_RADII = [1.15, 1.45, 1.75, 2.05, 2.35];
const DEFAULT_RADII = [1.35, 1.75, 2.15];

function Lattice({ variant }: { variant: PlaygroundVariant }) {
  const cfg = VARIANT_CONFIG[variant];
  const isHub = variant === "hub";
  const radii = isHub ? HUB_RADII : DEFAULT_RADII;
  const groupRef = useRef<THREE.Group>(null);
  const ringRefs = useRef<(THREE.Mesh | null)[]>([]);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * cfg.speed;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.12) * 0.18;
      groupRef.current.position.x = THREE.MathUtils.damp(groupRef.current.position.x, mouse.current.x * 0.3, 3, delta);
      groupRef.current.position.y = THREE.MathUtils.damp(groupRef.current.position.y, -mouse.current.y * 0.2, 3, delta);
    }
    ringRefs.current.forEach((ring, i) => {
      if (!ring) return;
      ring.rotation.z += delta * (0.12 + i * 0.05) * (i % 2 === 0 ? 1 : -1);
    });
  });

  return (
    <group ref={groupRef}>
      <mesh>
        <icosahedronGeometry args={[1.9, cfg.detail]} />
        <meshBasicMaterial color={cfg.core} wireframe transparent opacity={0.4} />
      </mesh>
      {radii.map((r, i) => (
        <mesh
          key={r}
          ref={(el) => {
            ringRefs.current[i] = el;
          }}
          rotation={[(Math.PI / 2) * (i % 2), i * 0.7, 0]}
        >
          <torusGeometry args={[r, 0.006, 8, 96]} />
          <meshBasicMaterial color={isHub ? HUB_RING_COLORS[i] : cfg.ring} transparent opacity={0.5} />
        </mesh>
      ))}
    </group>
  );
}

function Drift({ variant }: { variant: PlaygroundVariant }) {
  const cfg = VARIANT_CONFIG[variant];
  const count = 420;

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 2.6 + Math.random() * 3.4;
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
    if (ref.current) ref.current.rotation.y -= delta * 0.025;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color={cfg.particle} size={0.028} transparent opacity={0.55} sizeAttenuation />
    </points>
  );
}

export default function PlaygroundScene({ variant }: { variant: PlaygroundVariant }) {
  return (
    <div className="fixed inset-0 z-0">
      <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 7.5], fov: 42 }} gl={{ antialias: true, alpha: false, powerPreference: "low-power" }}>
        <color attach="background" args={["#050b14"]} />
        <ambientLight intensity={0.7} />
        <Lattice variant={variant} />
        <Drift variant={variant} />
      </Canvas>
    </div>
  );
}