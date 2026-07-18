"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { sampleJourney } from "@/lib/journey";
import { scrollStore } from "@/lib/useScrollProgress";

/**
 * HealthOrb — a fully procedural organ/heart core, no imported 3D assets.
 * Same uniform contract as the mobile app's organ-visualization shader
 * (uBPM, uOxygenLevel, uBlockage, uInflammation, uFatDeposit, uActivity,
 * uSize) so this can later be driven by the same applyAI(json) pipeline —
 * here it's driven by scroll-sampled journey state instead of live vitals.
 */

const vertexShader = /* glsl */ `
  uniform float uTime;
  uniform float uBPM;
  uniform float uBlockage;
  uniform float uInflammation;
  uniform float uActivity;

  varying vec3 vNormal;
  varying vec3 vPosition;
  varying float vDisplace;

  // Simplex-ish noise (Ashima-derived, compact)
  vec3 mod289(vec3 x){return x-floor(x*(1.0/289.0))*289.0;}
  vec4 mod289(vec4 x){return x-floor(x*(1.0/289.0))*289.0;}
  vec4 permute(vec4 x){return mod289(((x*34.0)+1.0)*x);}
  vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}

  float snoise(vec3 v){
    const vec2 C = vec2(1.0/6.0, 1.0/3.0);
    const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
    vec3 i  = floor(v + dot(v, C.yyy));
    vec3 x0 = v - i + dot(i, C.xxx);
    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min(g.xyz, l.zxy);
    vec3 i2 = max(g.xyz, l.zxy);
    vec3 x1 = x0 - i1 + C.xxx;
    vec3 x2 = x0 - i2 + C.yyy;
    vec3 x3 = x0 - D.yyy;
    i = mod289(i);
    vec4 p = permute(permute(permute(
              i.z + vec4(0.0, i1.z, i2.z, 1.0))
            + i.y + vec4(0.0, i1.y, i2.y, 1.0))
            + i.x + vec4(0.0, i1.x, i2.x, 1.0));
    float n_ = 0.142857142857;
    vec3 ns = n_ * D.wyz - D.xzx;
    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_);
    vec4 x = x_ *ns.x + ns.yyyy;
    vec4 y = y_ *ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);
    vec4 b0 = vec4(x.xy, y.xy);
    vec4 b1 = vec4(x.zw, y.zw);
    vec4 s0 = floor(b0)*2.0 + 1.0;
    vec4 s1 = floor(b1)*2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));
    vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
    vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
    vec3 p0 = vec3(a0.xy, h.x);
    vec3 p1 = vec3(a0.zw, h.y);
    vec3 p2 = vec3(a1.xy, h.z);
    vec3 p3 = vec3(a1.zw, h.w);
    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
    p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
    m = m * m;
    return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
  }

  void main(){
    vNormal = normal;
    vPosition = position;

    float pulseHz = uBPM / 60.0;
    float pulse = sin(uTime * pulseHz * 6.2831) * 0.5 + 0.5;
    float pulseAmt = 0.05 + pulse * 0.05 * (0.4 + uActivity);

    float slowNoise = snoise(position * 0.9 + uTime * 0.06) * 0.18;
    float fineNoise = snoise(position * 3.2 + uTime * 0.4) * uBlockage * 0.22;
    float inflameJitter = snoise(position * 5.0 + uTime * 1.8) * uInflammation * 0.06;

    float displace = slowNoise + fineNoise + inflameJitter + pulseAmt;
    vDisplace = displace;

    vec3 displaced = position + normal * displace;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(displaced, 1.0);
  }
`;

const fragmentShader = /* glsl */ `
  uniform float uTime;
  uniform float uOxygenLevel;
  uniform float uInflammation;
  uniform float uBlockage;
  uniform vec3 uColorHealthy;
  uniform vec3 uColorInflamed;
  uniform vec3 uColorDeep;

  varying vec3 vNormal;
  varying vec3 vPosition;
  varying float vDisplace;

  void main(){
    vec3 viewDir = normalize(cameraPosition - vPosition);
    float fresnel = pow(1.0 - max(dot(viewDir, normalize(vNormal)), 0.0), 2.4);

    vec3 base = mix(uColorDeep, uColorHealthy, uOxygenLevel);
    vec3 inflamed = mix(base, uColorInflamed, uInflammation);

    float patch = smoothstep(0.02, 0.16, vDisplace) * uBlockage;
    vec3 withPatch = mix(inflamed, uColorInflamed * 0.7, patch * 0.6);

    vec3 rim = mix(uColorHealthy, uColorInflamed, uInflammation) * fresnel * 1.6;

    vec3 color = withPatch + rim;
    float alpha = 0.86 + fresnel * 0.14;

    gl_FragColor = vec4(color, alpha);
  }
`;

export default function HealthOrb() {
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const groupRef = useRef<THREE.Group>(null);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uBPM: { value: 62 },
      uBlockage: { value: 0.03 },
      uInflammation: { value: 0.04 },
      uOxygenLevel: { value: 0.92 },
      uActivity: { value: 0.6 },
      uColorHealthy: { value: new THREE.Color("#1a6bff") },
      uColorInflamed: { value: new THREE.Color("#ff6b5b") },
      uColorDeep: { value: new THREE.Color("#0db87a") },
    }),
    []
  );

  useFrame((state, delta) => {
    if (!materialRef.current) return;
    const j = sampleJourney(scrollStore?.getSnapshot() ?? 0);
    const u = materialRef.current.uniforms;
    u.uTime.value += delta;
    u.uBPM.value = THREE.MathUtils.damp(u.uBPM.value, j.bpm, 3, delta);
    u.uBlockage.value = THREE.MathUtils.damp(u.uBlockage.value, j.blockage, 3, delta);
    u.uInflammation.value = THREE.MathUtils.damp(u.uInflammation.value, j.inflammation, 3, delta);
    u.uOxygenLevel.value = THREE.MathUtils.damp(u.uOxygenLevel.value, j.oxygen, 3, delta);

    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.06;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.08) * 0.08;
    }
  });

  return (
    <group ref={groupRef}>
      <mesh>
        <icosahedronGeometry args={[1.5, 64]} />
        <shaderMaterial
          ref={materialRef}
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          uniforms={uniforms}
          transparent
        />
      </mesh>
      {/* Inner core glow — sells volume/depth without an extra texture asset */}
      <mesh scale={0.86}>
        <icosahedronGeometry args={[1.5, 16]} />
        <meshBasicMaterial color="#050b14" transparent opacity={0.55} />
      </mesh>
    </group>
  );
}