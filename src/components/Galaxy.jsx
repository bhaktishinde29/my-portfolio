import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { useMemo } from "react";

function SpiralGalaxy({
  position = [0, 0, 0],
  color = "#a855f7",
  radius = 16,
  count = 5500,
}) {
  const geometry = useMemo(() => {
    const points = [];

    const arms = 19;
    const turns = 10;

    for (let i = 0; i < count; i++) {
      const ratio = i / count;

      const angle = ratio * Math.PI * 2 * turns;
      const armOffset = (i % arms) * ((Math.PI * 2) / arms);

      const r = ratio * radius;

      const x = Math.cos(angle + armOffset) * r;
      const z = Math.sin(angle + armOffset) * r;
      const y = (Math.random() - 0.5) * 0.6;

      points.push(new THREE.Vector3(x, y, z));
    }

    return new THREE.BufferGeometry().setFromPoints(points);
  }, [radius, count]);

  return (
    <group position={position}>
      <points geometry={geometry}>
        <pointsMaterial
          color={color}
          size={0.045}
          sizeAttenuation
        />
      </points>
    </group>
  );
}

export default function Galaxy() {
  return (
    <div className="galaxy-canvas">
     <Canvas
  camera={{
    position: [0, 2, 12],
    fov: 80,
  }}
>
        <ambientLight intensity={0.8} />

        {/* Tilt whole galaxy cluster */}
        <group
  rotation={[0, 0, Math.PI / 4]}
  scale={[6, 17, 3]}
>
          {/* Main galaxy */}
          <SpiralGalaxy
            position={[0, 0, 0]}
            color="#a855f7"
            radius={16}
          />

          {/* Overlapping galaxies */}
          <SpiralGalaxy
            position={[4, 0, 2]}
            color="#9333ea"
            radius={14}
          />

          <SpiralGalaxy
            position={[-4, 0, -2]}
            color="#c084fc"
            radius={14}
          />

          <SpiralGalaxy
            position={[0, 0, -4]}
            color="#d8b4fe"
            radius={13}
          />
        </group>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.6}
        />
      </Canvas>
    </div>
  );
}