import { Canvas, useFrame } from "@react-three/fiber";
import React, { Suspense, useEffect, useRef } from "react";
import { angleToRadiants } from "./angleToRadiants";
import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import * as THREE from "three";
import gsap from "gsap";

const Ball = () => {
  const orbitControlRef = useRef(null);
  const ballRef = useRef(null);

  useFrame((state) => {
    const { x, y } = state.pointer;
    if (orbitControlRef.current) {
      orbitControlRef.current.setAzimuthalAngle(-x * angleToRadiants(45));
      orbitControlRef.current.setPolarAngle((y + 1) * angleToRadiants(60));
    }
  });

  useEffect(() => {
    if (!!ballRef.current) {
      gsap.to(ballRef.current.position, {
        x: 1,
        duration: 1,
        ease: "power1.in",
      });
      gsap.to(ballRef.current.position, {
        y: 0.5,
        duration: 1,
        ease: "bounce.inOut",
      });
    }
  }, [ballRef.current]);

  return (
    <>
      {/* Camera */}
      <PerspectiveCamera makeDefault position={[0, 1, 5]} />
      <OrbitControls
        ref={orbitControlRef}
        minPolarAngle={angleToRadiants(60)}
        maxPolarAngle={angleToRadiants(80)}
      />

      {/* Ball */}
      <mesh position={[-1, 3, 0]} castShadow ref={ballRef}>
        <sphereGeometry args={[0.5, 25, 25]} />
        <meshStandardMaterial color="#ffffff" metalness={0.5} roughness={0.2} />
      </mesh>

      {/* Floor */}
      <mesh rotation={[-angleToRadiants(90), 0, 0]} receiveShadow>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial color="#1ed3d8" />
      </mesh>

      <ambientLight args={["#ffffff", 0.25]} />
      <spotLight
        args={["#ffffff", 10, 8, angleToRadiants(45), 0.4]}
        position={[-3, 1, 0]}
        castShadow
      />
      {/* Environment */}
      <Environment background>
        <mesh>
          <sphereGeometry args={[50, 100, 100]} />
          <meshBasicMaterial side={THREE.BackSide} color="#2266cc" />
        </mesh>
      </Environment>
    </>
  );
};

export default Ball;
