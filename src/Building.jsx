/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useAnimations, useGLTF, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Building = (props) => {
  const { nodes, materials, animations, scene } = useGLTF("/model.glb");

  const buildingRef = useRef();
  const scroll = useScroll();

  console.log(buildingRef);

  const initialPosition = { x: 1, y: -1, z: 0 }; // Adjust Z if needed
  const initialRotation = { x: 0, y: 0, z: 0 }; // Adjust if the model starts rotated

  useFrame(() => {
    if (buildingRef.current) {
      // Get the scroll position (0 to 1)
      const scrollPosition = scroll.offset;
      // console.log(scroll);

      // Update rotation based on scroll position
      buildingRef.current.rotation.y = initialRotation.y + scrollPosition * 3;

      // Adjust position on the Y and X axes (moving up/down and left/right)
      buildingRef.current.position.y = initialPosition.y + scrollPosition * 2;
      buildingRef.current.position.x = initialPosition.x + scrollPosition * 2;

      // Optional: Update rotation based on scroll position
      buildingRef.current.rotation.x = initialRotation.x + scrollPosition * 2;
    }
  });

  return (
    <group {...props} dispose={null} ref={buildingRef}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["0003"].geometry}
        material={materials["0001.001"]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["0003015"].geometry}
        material={materials["Material.002"]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.InnerRenderNew001.geometry}
        material={materials["InnerRenderNew.001"]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["0003002"].geometry}
        material={materials["0002.001"]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Top_View002.geometry}
        material={materials["Top View.001"]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001.geometry}
        material={materials["Material.002"]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["0003012"].geometry}
        material={materials["Material.002"]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["0003001"].geometry}
        material={materials["0000.001"]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ground001.geometry}
        material={materials["TopViewSides.001"]}
        position={[5.671, 0.1, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ground.geometry}
        material={materials["TopViewSides.001"]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["0003003"].geometry}
        material={materials["0003.001"]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Component#614"].geometry}
          material={materials["[Cladding Stucco White]"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Component#614_1"].geometry}
          material={materials["*74"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Component#614_2"].geometry}
          material={materials["[Small Aggregate]"]}
        />
      </group>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Top_View.geometry}
          material={materials["Top View.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Top_View_1.geometry}
          material={materials["Material.001"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TopViewSides.geometry}
        material={materials["TopViewSides.001"]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials["Material.002"]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.InnerRenderNew.geometry}
        material={materials["InnerRenderNew.001"]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
    </group>
  );
};

useGLTF.preload("/model.glb");

export default Building;
