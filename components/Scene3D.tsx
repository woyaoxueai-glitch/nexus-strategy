'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function Particles({ count = 2000 }) {
  const mesh = useRef<THREE.Points>(null!);
  
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      // 修复后的算法：使用球坐标生成，避免 NaN
      const theta = 2 * Math.PI * Math.random();
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 2.5; 
      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
    }
    return positions;
  }, [count]);

  useFrame((state: any) => {
    if (!mesh.current) return;
    const time = state.clock.getElapsedTime();
    mesh.current.rotation.y = time * 0.15;
    mesh.current.rotation.x = time * 0.05;
    const scale = Math.max(0.8, 1 + Math.sin(time * 1.5) * 0.1);
    mesh.current.scale.set(scale, scale, scale);
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[particlesPosition, 3]}
          count={particlesPosition.length / 3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color="#00f0ff"
        transparent
        opacity={0.8}
        sizeAttenuation={true}
        depthWrite={false}
      />
    </points>
  );
}

export default function Scene3D() {
  return (
    <div className="absolute inset-0 -z-10 bg-[#050505]">
      <Canvas camera={{ position: [0, 0, 6], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <Particles />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
}