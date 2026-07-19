"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

/** Contact — a beacon sending pulses out while particles drift in toward it. */

const COLOR = "#38BDF8";
const RING_COUNT = 4;

function Beacon() {
  const coreRef = useRef<THREE.Mesh>(null);
  const ringRefs = useRef<(THREE.Mesh | null)[]>([]);
  const state = useMemo(() => Array.from({ length: RING_COUNT }, (_, i) => ({ phase: (i / RING_COUNT) * 2 })), []);

  useFrame((s, delta) => {
    if (coreRef.current) {
      const pulse = 1 + Math.sin(s.clock.elapsedTime * 2) * 0.08;
      coreRef.current.scale.setScalar(pulse);
    }
    state.forEach((st, i) => {
      const ring = ringRefs.current[i];
      if (!ring) return;
      const t = ((s.clock.elapsedTime * 0.5 + st.phase) % 2) / 2;
      ring.scale.setScalar(0.4 + t * 3.2);
      const mat = ring.material as THREE.MeshBasicMaterial;
      mat.opacity = (1 - t) * 0.5;
    });
  });

  return (
    <group>
      <mesh ref={coreRef}>
        <icosahedronGeometry args={[0.4, 2]} />
        <meshStandardMaterial color={COLOR} emissive={COLOR} emissiveIntensity={0.8} roughness={0.2} />
      </mesh>
      {state.map((_, i) => (
        <mesh
          key={i}
          ref={(el) => {
            ringRefs.current[i] = el;
          }}
          rotation={[Math.PI / 2, 0, 0]}
        >
          <torusGeometry args={[1, 0.012, 8, 64]} />
          <meshBasicMaterial color={COLOR} transparent opacity={0.4} />
        </mesh>
      ))}
    </group>
  );
}

function InboundDrift() {
  const count = 220;
  const ref = useRef<THREE.Points>(null);
  const data = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const speeds = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      const r = 3 + Math.random() * 3;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
      speeds[i] = 0.3 + Math.random() * 0.4;
    }
    return { positions, speeds };
  }, []);

  useFrame((_, delta) => {
    if (!ref.current) return;
    const pos = ref.current.geometry.attributes.position as THREE.BufferAttribute;
    for (let i = 0; i < count; i++) {
      const x = pos.getX(i);
      const y = pos.getY(i);
      const z = pos.getZ(i);
      const len = Math.sqrt(x * x + y * y + z * z) || 1;
      const s = data.speeds[i] * delta;
      let nx = x - (x / len) * s;
      let ny = y - (y / len) * s;
      let nz = z - (z / len) * s;
      if (len < 0.5) {
        const r = 5 + Math.random() * 2;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        nx = r * Math.sin(phi) * Math.cos(theta);
        ny = r * Math.sin(phi) * Math.sin(theta);
        nz = r * Math.cos(phi);
      }
      pos.setXYZ(i, nx, ny, nz);
    }
    pos.needsUpdate = true;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[data.positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#7DD3FC" size={0.025} transparent opacity={0.6} sizeAttenuation />
    </points>
  );
}

export default function ContactScene() {
  return (
    <div className="fixed inset-0 z-0">
      <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 7.5], fov: 42 }} gl={{ antialias: true, alpha: false, powerPreference: "low-power" }}>
        <color attach="background" args={["#050b14"]} />
        <ambientLight intensity={0.55} />
        <pointLight position={[3, 2, 4]} intensity={1.3} color={COLOR} />
        <Beacon />
        <InboundDrift />
      </Canvas>
    </div>
  );
}