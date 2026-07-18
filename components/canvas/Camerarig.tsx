"use client";

import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { sampleJourney } from "@/lib/journey";
import { scrollStore } from "@/lib/useScrollProgress";

export default function CameraRig() {
  const { camera } = useThree();
  const perspective = camera as THREE.PerspectiveCamera;
  const currentTarget = useRef(new THREE.Vector3(0, 0, 0));
  const mouse = useRef({ x: 0, y: 0 });

  useFrame((_, delta) => {
    const t = scrollStore?.getSnapshot() ?? 0;
    const j = sampleJourney(t);

    // Gentle parallax from pointer position, layered on top of the scroll path.
    const parallaxX = mouse.current.x * 0.25;
    const parallaxY = mouse.current.y * 0.15;

    camera.position.x = THREE.MathUtils.damp(camera.position.x, j.camera.x + parallaxX, 3, delta);
    camera.position.y = THREE.MathUtils.damp(camera.position.y, j.camera.y + parallaxY, 3, delta);
    camera.position.z = THREE.MathUtils.damp(camera.position.z, j.camera.z, 3, delta);

    currentTarget.current.lerp(j.target, 1 - Math.pow(0.001, delta));
    camera.lookAt(currentTarget.current);

    if (perspective.isPerspectiveCamera) {
      perspective.fov = THREE.MathUtils.damp(perspective.fov, j.fov, 2.5, delta);
      perspective.updateProjectionMatrix();
    }
  });

  // Pointer parallax
  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return null;
}