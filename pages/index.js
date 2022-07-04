import Link from "next/link";
import ThreeScene from "../components/ThreeScene";
import Box from "../components/Box";
import { OrbitControls } from "@react-three/drei";
import { useLoader, Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Layout from "../components/Layout";
import Camera from "../components/Camera";
import styles from "../styles/index.module.css";
import HomeContent from "../components/HomeContent";
import { useRef } from "react";
import { useGLTF } from "@react-three/drei";

// function Model({ ...props }) {
//   const group = useRef();
//   const { nodes, materials } = useGLTF("/scene.gltf");
//   return (
//     <group ref={group} {...props} dispose={null}>
//       <group rotation={[-Math.PI / 2, 0, 0]}>
//         <mesh
//           geometry={nodes.Object_2.geometry}
//           material={materials.material_0}
//         />
//       </group>
//     </group>
//   );
// }

// useGLTF.preload("/scene.gltf");

export default function Home() {
  return (
    <div className={styles.container}>
      <Layout>
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <HomeContent />
          </div>
          <div className={styles.scene}>
            <ThreeScene>
              <Box />
              <ambientLight />
              <Camera />
              {/* <Suspense fallback={null}>
                <Model />
              </Suspense> */}
              <OrbitControls />
            </ThreeScene>
          </div>
        </div>
      </Layout>
    </div>
  );
}
