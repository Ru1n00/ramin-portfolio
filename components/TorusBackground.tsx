import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Torus, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

const AnimatedTorus = () => {
  const mesh = useRef<THREE.Mesh>(null!);
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    mesh.current.rotation.x = Math.sin(t / 4) / 2;
    mesh.current.rotation.z = t / 2;
  });

  return (
    <Float speed={1} rotationIntensity={0.8} floatIntensity={1.2}>
      <Torus ref={mesh} args={[1.5, 0.5, 16, 100]} scale={1.2}>
        <MeshDistortMaterial
          color="#f59e0b"
          attach="material"
          distort={0.4}
          speed={1.2}
          roughness={0.3}
          metalness={0.7}
        />
      </Torus>
    </Float>
  );
};

const TorusBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 -z-10 opacity-20 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} />
        <AnimatedTorus />
      </Canvas>
    </div>
  );
};

export default TorusBackground;