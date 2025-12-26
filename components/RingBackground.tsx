import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Ring, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

const AnimatedRing = () => {
  const mesh = useRef<THREE.Mesh>(null!);
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    mesh.current.rotation.x = Math.cos(t / 3) / 3;
    mesh.current.rotation.y = t / 4;
  });

  return (
    <Float speed={1.2} rotationIntensity={0.6} floatIntensity={0.8}>
      <Ring ref={mesh} args={[1, 1.5, 32]} scale={2}>
        <MeshDistortMaterial
          color="#ef4444"
          attach="material"
          distort={0.2}
          speed={1.5}
          roughness={0.4}
          metalness={0.6}
        />
      </Ring>
    </Float>
  );
};

const RingBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 -z-10 opacity-15 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={0.9} />
        <pointLight position={[-5, -5, -5]} intensity={0.3} />
        <AnimatedRing />
      </Canvas>
    </div>
  );
};

export default RingBackground;