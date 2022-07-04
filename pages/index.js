import Link from "next/link";
import ThreeScene from "../components/ThreeScene";
import Box from "../components/Box";
import { OrbitControls } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Suspense } from "react";
import Layout from "../components/Layout";
import Camera from "../components/Camera";
import styles from "../styles/index.module.css";
import HomeContent from "../components/HomeContent";
// const Rick = () => {
//   const { nodes } = useLoader(GLTFLoader, "../public/rick.glb");
//   return (
//     <mesh receiveShadow castShadow geometry={nodes}>
//       <meshStandardMaterial attach="material" color="lightblue" />
//     </mesh>
//   );
// };

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
              {/* <Suspense fallback={null}><Rick /></Suspense> */}
              <OrbitControls />
            </ThreeScene>
          </div>
        </div>
      </Layout>
    </div>
  );
}
