import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function Particles() {
  const mesh = useRef();

  useFrame((state) => {
    mesh.current.rotation.y += 0.002;
    mesh.current.rotation.x += 0.001;

    // floating animation
    mesh.current.position.y = Math.sin(state.clock.elapsedTime) * 0.3;
  });

  return (
    <mesh ref={mesh}>
      <sphereGeometry args={[1.5, 64, 64]} />
      <meshStandardMaterial
        color="#00ffff"
        wireframe
      />
    </mesh>
  );
}