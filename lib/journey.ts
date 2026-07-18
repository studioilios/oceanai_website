import * as THREE from "three";

/**
 * The whole page is one dive: we open at the surface (a calm, healthy orb),
 * descend through the scale of India's health crisis (the orb inflames and
 * fractures), pass through Ocean AI's organ-level diagnosis (the orb resolves
 * into a beating, legible heart), thread the data/insurance lattice, and
 * resurface into daylight for the close. Camera position/target and orb
 * "physiology" uniforms are both keyed off the same 0..1 scroll progress.
 */
export type Waypoint = {
  id: string;
  at: number; // 0..1 position in the overall scroll
  camera: [number, number, number];
  target: [number, number, number];
  // orb physiology at this waypoint — interpolated between neighbors
  bpm: number; // beats per minute -> pulse frequency
  inflammation: number; // 0..1 redness / turbulence
  blockage: number; // 0..1 surface fracture
  oxygen: number; // 0..1 clarity / blue-teal saturation
  fov: number;
};

export const WAYPOINTS: Waypoint[] = [
  { id: "hero", at: 0.0, camera: [0, 0, 6.2], target: [0, 0, 0], bpm: 62, inflammation: 0.04, blockage: 0.03, oxygen: 0.92, fov: 42 },
  { id: "crisis", at: 0.16, camera: [2.6, 0.4, 4.2], target: [0, 0, 0], bpm: 118, inflammation: 0.82, blockage: 0.66, oxygen: 0.28, fov: 46 },
  { id: "access", at: 0.3, camera: [-2.8, -0.6, 4.6], target: [0.2, 0, 0], bpm: 104, inflammation: 0.7, blockage: 0.74, oxygen: 0.22, fov: 44 },
  { id: "features", at: 0.46, camera: [0, 1.4, 5.4], target: [0, 0, 0], bpm: 72, inflammation: 0.22, blockage: 0.18, oxygen: 0.74, fov: 40 },
  { id: "tech", at: 0.6, camera: [-3.2, 0.2, 3.6], target: [-0.1, 0, 0], bpm: 68, inflammation: 0.1, blockage: 0.08, oxygen: 0.86, fov: 38 },
  { id: "market", at: 0.72, camera: [3.1, -0.3, 3.8], target: [0.1, 0, 0], bpm: 66, inflammation: 0.06, blockage: 0.05, oxygen: 0.9, fov: 40 },
  { id: "business", at: 0.84, camera: [0, -1.4, 5.2], target: [0, 0, 0], bpm: 64, inflammation: 0.05, blockage: 0.04, oxygen: 0.92, fov: 40 },
  { id: "team", at: 0.93, camera: [1.6, 0.8, 5.8], target: [0, 0, 0], bpm: 60, inflammation: 0.03, blockage: 0.02, oxygen: 0.95, fov: 40 },
  { id: "cta", at: 1.0, camera: [0, 0, 7.4], target: [0, 0, 0], bpm: 58, inflammation: 0.02, blockage: 0.0, oxygen: 1.0, fov: 44 },
];

function findSpan(t: number) {
  for (let i = 0; i < WAYPOINTS.length - 1; i++) {
    if (t >= WAYPOINTS[i].at && t <= WAYPOINTS[i + 1].at) return i;
  }
  return WAYPOINTS.length - 2;
}

function smooth(t: number) {
  return t * t * (3 - 2 * t);
}

/** Interpolate the full journey state at scroll progress t (0..1). */
export function sampleJourney(t: number) {
  const clamped = Math.min(1, Math.max(0, t));
  const i = findSpan(clamped);
  const a = WAYPOINTS[i];
  const b = WAYPOINTS[i + 1];
  const span = b.at - a.at || 1;
  const local = smooth(Math.min(1, Math.max(0, (clamped - a.at) / span)));

  const lerp3 = (p: [number, number, number], q: [number, number, number]) =>
    new THREE.Vector3(
      THREE.MathUtils.lerp(p[0], q[0], local),
      THREE.MathUtils.lerp(p[1], q[1], local),
      THREE.MathUtils.lerp(p[2], q[2], local)
    );

  return {
    camera: lerp3(a.camera, b.camera),
    target: lerp3(a.target, b.target),
    bpm: THREE.MathUtils.lerp(a.bpm, b.bpm, local),
    inflammation: THREE.MathUtils.lerp(a.inflammation, b.inflammation, local),
    blockage: THREE.MathUtils.lerp(a.blockage, b.blockage, local),
    oxygen: THREE.MathUtils.lerp(a.oxygen, b.oxygen, local),
    fov: THREE.MathUtils.lerp(a.fov, b.fov, local),
    sectionId: local < 0.5 ? a.id : b.id,
  };
}