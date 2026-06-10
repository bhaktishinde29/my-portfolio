import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";

function SimpleGirl() {
  return (
    <group>
      {/* Head */}
      <mesh position={[0, 1.2, 0]}>
        <sphereGeometry args={[0.4, 32, 32]} />
        <meshStandardMaterial color="#f4c7a1" />
      </mesh>

      {/* Body */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[0.8, 1.2, 0.5]} />
        <meshStandardMaterial color="#7c3aed" />
      </mesh>

      {/* Laptop */}
      <mesh position={[0, -0.8, 0.3]}>
        <boxGeometry args={[1.2, 0.1, 0.8]} />
        <meshStandardMaterial color="#111" />
      </mesh>
    </group>
  );
}

export default function DevGirl3D() {
  return (
    <Canvas style={{ height: "400px", width: "400px" }}>
      <ambientLight intensity={1} />
      <directionalLight position={[2, 2, 2]} intensity={1} />

      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <SimpleGirl />
      </Float>

      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}