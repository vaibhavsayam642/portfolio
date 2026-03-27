import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function Model() {
  const { scene } = useGLTF("/Robot.glb");

  return (
    <primitive 
      object={scene} 
      scale={15}              // 🔥 BIG SIZE (increase more if needed)
      position={[0, -2, 0]}   // 🔥 adjust vertical
    />
  );
}

export default function ModelCanvas() {
  return (
    <Canvas camera={{ position: [0, 2, 10], fov: 50 }}>
      
      {/* 🔥 STRONG LIGHT */}
      <ambientLight intensity={2} />
      <directionalLight position={[5, 5, 5]} intensity={3} />

      <Model />

      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}