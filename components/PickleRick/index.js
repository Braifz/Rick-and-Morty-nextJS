/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: MarproZ (https://sketchfab.com/MarproZ)
license: SKETCHFAB Editorial (https://sketchfab.com/licenses)
source: https://sketchfab.com/3d-models/pickle-rick-rick-and-morty-99ab8570705f4e0db247138adb4ff32f
title: Pickle Rick - Rick and Morty
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Model = (props) => {
  const mesh = useRef();

  useFrame(() => {
    mesh.current.rotation.y = mesh.current.rotation.y + 0.01;
  });

  const { nodes, materials } = useGLTF("/pickle_rick_-_rick_and_morty.glb");
  return (
    <group ref={mesh} {...props} dispose={null} args={[1, 1, 1]}>
      <group rotation={[-Math.PI / 2, 0, 0]} args={[1, 1, 1]}>
        <mesh
          geometry={nodes.Object_2.geometry}
          material={materials.material_0}
        />
      </group>
    </group>
  );
};

useGLTF.preload("/pickle_rick_-_rick_and_morty.glb");

export default Model;
