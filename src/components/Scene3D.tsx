"use client";

import { Points, PointMaterial } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function ParticleSphere() {
  const groupRef = useRef<THREE.Group>(null);
  const timeRef = useRef(0);
  const positions = useMemo(() => {
    const count = 1100;
    const pts = new Float32Array(count * 3);
    const offset = 2 / count;
    const increment = Math.PI * (3 - Math.sqrt(5));
    // 限制 y 范围在 [-0.9, 0.9] 以避免极点聚集，并整体缩放
    const yRange = 0.9;
    for (let i = 0; i < count; i += 1) {
      const y = ((i * offset - 1) + offset / 2) * yRange;
      const r = Math.sqrt(Math.max(0, 1 - y * y));
      const phi = i * increment;
      pts[i * 3] = Math.cos(phi) * r;
      pts[i * 3 + 1] = y;
      pts[i * 3 + 2] = Math.sin(phi) * r;
    }
    return pts;
  }, []);

  useFrame((_, delta) => {
    // 呼吸动画：仅做平滑缩放，无交互旋转
    timeRef.current += delta * 0.5;
    const base = 0.75;
    const breathScale = base + Math.sin(timeRef.current) * 0.06;

    if (!groupRef.current) return;
    groupRef.current.scale.set(breathScale, breathScale, breathScale);
  });

  return (
    <group ref={groupRef}>
      <Points
        positions={positions}
        stride={3}
        frustumCulled={false}
        rotation={[0.2, 0.6, 0]}
      >
        <PointMaterial
          color="#00f0ff"
          transparent
          size={0.012}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

export default function Scene3D() {
  return (
    <div className="pointer-events-none absolute inset-0">
      <Canvas
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
        camera={{ position: [0, 0, 2.6], fov: 50 }}
      >
        <fog attach="fog" args={["#050505", 2.5, 6]} />
        <ambientLight intensity={0.45} />
        <directionalLight position={[2, 3, 2]} intensity={0.35} />
        <ParticleSphere />
      </Canvas>
    </div>
  );
}

