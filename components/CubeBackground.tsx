import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Box, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

const AnimatedCube = () => {
  const mesh = useRef<THREE.Mesh>(null!);
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    mesh.current.rotation.x = t / 2;
    mesh.current.rotation.y = t / 3;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
      <Box ref={mesh} args={[2, 2, 2]} scale={1.5}>
        <MeshDistortMaterial
          color="#10b981"
          attach="material"
          distort={0.3}
          speed={2}
          roughness={0.1}
          metalness={0.9}
        />
      </Box>
    </Float>
  );
};

const CubeBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 -z-10 opacity-25 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} />
        <pointLight position={[-5, -5, -5]} intensity={0.4} />
        <AnimatedCube />
      </Canvas>
    </div>
  );
};

export default CubeBackground;