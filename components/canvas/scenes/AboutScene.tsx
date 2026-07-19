"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

/**
 * About — a network graph. Nodes drift on independent slow orbits; edges
 * are drawn between nearby nodes each frame, so the graph's connections
 * visibly reform as it moves — literally "a studio and its connected work."
 */

const NODE_COUNT = 9;
const COLOR = "#38BDF8";
const COLOR_B = "#34D399";

function Graph() {
  const groupRef = useRef<THREE.Group>(null);
  const nodeRefs = useRef<(THREE.Mesh | null)[]>([]);

  const nodes = useMemo(
    () =>
      Array.from({ length: NODE_COUNT }, (_, i) => ({
        radius: 1.6 + (i % 4) * 0.55,
        speed: 0.05 + (i % 5) * 0.02,
        offset: (i / NODE_COUNT) * Math.PI * 2,
        yAmp: 0.6 + (i % 3) * 0.3,
        yFreq: 0.15 + (i % 4) * 0.04,
      })),
    []
  );

  const positions = useRef<THREE.Vector3[]>(nodes.map(() => new THREE.Vector3()));

  useFrame((state, delta) => {
    if (groupRef.current) groupRef.current.rotation.y += delta * 0.03;
    const t = state.clock.elapsedTime;
    nodes.forEach((n, i) => {
      const angle = t * n.speed + n.offset;
      const p = positions.current[i];
      p.set(Math.cos(angle) * n.radius, Math.sin(t * n.yFreq + n.offset) * n.yAmp, Math.sin(angle) * n.radius);
      const el = nodeRefs.current[i];
      if (el) el.position.copy(p);
    });
  });

  // Edges recomputed once per mount from initial layout — a stable "wiring"
  // that then drifts with the nodes, rather than a fully dynamic nearest-
  // neighbor recompute every frame (cheaper, and reads more like a fixed
  // org chart than random noise).
  const edges = useMemo(() => {
    const pairs: [number, number][] = [];
    for (let i = 0; i < NODE_COUNT; i++) {
      pairs.push([i, (i + 1) % NODE_COUNT]);
      if (i % 2 === 0) pairs.push([i, (i + 3) % NODE_COUNT]);
    }
    return pairs;
  }, []);

  return (
    <group ref={groupRef}>
      {nodes.map((n, i) => (
        <mesh
          key={i}
          ref={(el) => {
            nodeRefs.current[i] = el;
          }}
        >
          <sphereGeometry args={[i === 0 ? 0.16 : 0.09, 16, 16]} />
          <meshStandardMaterial
            color={i % 3 === 0 ? COLOR_B : COLOR}
            emissive={i % 3 === 0 ? COLOR_B : COLOR}
            emissiveIntensity={0.6}
            roughness={0.3}
          />
        </mesh>
      ))}
      <EdgeLines edges={edges} positions={positions.current} />
    </group>
  );
}

function EdgeLines({ edges, positions }: { edges: [number, number][]; positions: THREE.Vector3[] }) {
  const linesRef = useRef<(THREE.Line | null)[]>([]);
  useFrame(() => {
    edges.forEach(([a, b], i) => {
      const line = linesRef.current[i];
      if (!line) return;
      const geom = line.geometry as THREE.BufferGeometry;
      const pos = geom.attributes.position as THREE.BufferAttribute;
      pos.setXYZ(0, positions[a].x, positions[a].y, positions[a].z);
      pos.setXYZ(1, positions[b].x, positions[b].y, positions[b].z);
      pos.needsUpdate = true;
    });
  });

  return (
    <>
      {edges.map(([a, b], i) => (
        <primitive
          key={i}
          object={
            new THREE.Line(
              new THREE.BufferGeometry().setFromPoints([positions[a], positions[b]]),
              new THREE.LineBasicMaterial({ color: "#60A5FA", transparent: true, opacity: 0.35 })
            )
          }
          ref={(el: THREE.Line) => {
            linesRef.current[i] = el;
          }}
        />
      ))}
    </>
  );
}

export default function AboutScene() {
  return (
    <div className="fixed inset-0 z-0">
      <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0.4, 7], fov: 42 }} gl={{ antialias: true, alpha: false, powerPreference: "low-power" }}>
        <color attach="background" args={["#050b14"]} />
        <ambientLight intensity={0.6} />
        <pointLight position={[4, 3, 5]} intensity={1.4} color={COLOR} />
        <Graph />
      </Canvas>
    </div>
  );
}