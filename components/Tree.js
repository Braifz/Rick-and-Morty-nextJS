import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF(
    "https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/models/react-logo/model.gltf"
  );
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.Cube.geometry}
        material={nodes.Cube.material}
        position={[0, 1.31, 0]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.27}
      >
        <mesh
          geometry={nodes.Torus001.geometry}
          material={nodes.Torus001.material}
          position={[0.34, -0.08, 0.02]}
          rotation={[-0.16, 0, -Math.PI / 2]}
          scale={[3.75, 1.47, 3]}
        />
        <mesh
          geometry={nodes.Torus003.geometry}
          material={nodes.Torus003.material}
          position={[-0.04, -0.11, 0]}
          rotation={[0.89, 0, -Math.PI / 2]}
          scale={[3.75, 1.47, 3]}
        />
        <mesh
          geometry={nodes.Torus002.geometry}
          material={nodes.Torus002.material}
          position={[-0.52, -0.1, 0.16]}
          rotation={[-1.18, 0, -Math.PI / 2]}
          scale={[3.75, 1.47, 3]}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload(
  "https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/models/react-logo/model.gltf"
);
