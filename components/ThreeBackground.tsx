
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Define typed constants for Three.js elements to bypass environment-specific JSX intrinsic element errors
const AmbientLight = 'ambientLight' as any;
const DirectionalLight = 'directionalLight' as any;
const PointLight = 'pointLight' as any;

const AnimatedShape = () => {
  const mesh = useRef<THREE.Mesh>(null!);
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    mesh.current.rotation.x = Math.cos(t / 4) / 4;
    mesh.current.rotation.y = Math.sin(t / 4) / 4;
    mesh.current.position.y = (1 + Math.sin(t / 1.5)) / 2;
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={mesh} args={[1, 100, 200]} scale={2.4}>
        <MeshDistortMaterial
          color="#3b82f6"
          attach="material"
          distort={0.4}
          speed={1.5}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
};

const ThreeBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 -z-10 opacity-30 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <AmbientLight intensity={0.5} />
        <DirectionalLight position={[10, 10, 5]} intensity={1} />
        <PointLight position={[-10, -10, -5]} intensity={0.5} />
        <AnimatedShape />
      </Canvas>
    </div>
  );
};

export default ThreeBackground;
