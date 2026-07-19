"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { sampleJourney } from "@/lib/journey";
import { scrollStore } from "@/lib/useScrollProgress";

const COUNT = 2200;

const vertexShader = /* glsl */ `
  attribute float aSeed;
  attribute vec3 aBasePos;
  uniform float uTime;
  uniform float uSpread;   // 0 = tight orbit around orb, 1 = scattered chaos
  uniform float uOxygen;
  varying float vSeed;
  varying float vOxygen;

  void main(){
    vSeed = aSeed;
    vOxygen = uOxygen;

    float angle = uTime * (0.05 + aSeed * 0.04) + aSeed * 62.831;
    vec3 orbit = vec3(cos(angle), sin(angle * 0.7), sin(angle)) * (0.4 + aSeed * 0.6);

    vec3 tight = normalize(aBasePos) * (1.9 + aSeed * 0.5) + orbit * 0.15;
    vec3 scattered = aBasePos * (2.5 + aSeed * 5.0) + orbit;

    vec3 pos = mix(tight, scattered, uSpread);

    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    gl_PointSize = (1.6 + aSeed * 2.4) * (140.0 / -mvPosition.z);
    gl_Position = projectionMatrix * mvPosition;
  }
`;

const fragmentShader = /* glsl */ `
  varying float vSeed;
  varying float vOxygen;
  uniform vec3 uColorA;
  uniform vec3 uColorB;

  void main(){
    vec2 c = gl_PointCoord - 0.5;
    float d = length(c);
    if (d > 0.5) discard;
    float alpha = smoothstep(0.5, 0.0, d);
    vec3 color = mix(uColorB, uColorA, clamp(vOxygen + vSeed * 0.2, 0.0, 1.0));
    gl_FragColor = vec4(color, alpha * 0.85);
  }
`;

export default function DataField() {
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  const { positions, seeds, basePos } = useMemo(() => {
    const positions = new Float32Array(COUNT * 3);
    const seeds = new Float32Array(COUNT);
    const basePos = new Float32Array(COUNT * 3);
    for (let i = 0; i < COUNT; i++) {
      const v = new THREE.Vector3(
        Math.random() * 2 - 1,
        Math.random() * 2 - 1,
        Math.random() * 2 - 1
      );
      basePos[i * 3] = v.x;
      basePos[i * 3 + 1] = v.y;
      basePos[i * 3 + 2] = v.z;
      positions.set([0, 0, 0], i * 3);
      seeds[i] = Math.random();
    }
    return { positions, seeds, basePos };
  }, []);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uSpread: { value: 0.5 },
      uOxygen: { value: 0.6 },
      uColorA: { value: new THREE.Color("#6fd6c4") },
      uColorB: { value: new THREE.Color("#ff6b5b") },
    }),
    []
  );

  useFrame((_, delta) => {
    if (!materialRef.current) return;
    const j = sampleJourney(scrollStore?.getSnapshot() ?? 0);
    const spread = THREE.MathUtils.clamp(1 - j.oxygen, 0, 1);
    const u = materialRef.current.uniforms;
    u.uTime.value += delta;
    u.uSpread.value = THREE.MathUtils.damp(u.uSpread.value, spread, 2.2, delta);
    u.uOxygen.value = THREE.MathUtils.damp(u.uOxygen.value, j.oxygen, 2.2, delta);
  });

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-aBasePos" args={[basePos, 3]} />
        <bufferAttribute attach="attributes-aSeed" args={[seeds, 1]} />
      </bufferGeometry>
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent
        depthWrite={false}
      />
    </points>
  );
}