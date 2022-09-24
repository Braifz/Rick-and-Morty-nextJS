import Link from "next/link";
import ThreeScene from "../components/ThreeScene";
import { OrbitControls } from "@react-three/drei";
import { useLoader, Canvas } from "@react-three/fiber";
import { Suspense, lazy } from "react";
import Layout from "../components/Layout";
import Camera from "../components/Camera";
import styles from "../styles/index.module.css";
import HomeContent from "../components/HomeContent";
import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { PickleRick } from "../components/PickleRick";

// const Box = lazy(() => import("../components/Box"));

const KeyLight = ({ brightness, color }) => {
  return (
    <rectAreaLight
      width={3}
      height={3}
      color={color}
      intensity={brightness}
      position={[-2, 0, 5]}
      lookAt={[0, 0, 0]}
      penumbra={1}
      castShadow
    />
  );
};
const FillLight = ({ brightness, color }) => {
  return (
    <rectAreaLight
      width={3}
      height={3}
      intensity={brightness}
      color={color}
      position={[2, 1, 4]}
      lookAt={[0, 0, 0]}
      penumbra={2}
      castShadow
    />
  );
};

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
              <Suspense fallback={null}>
                {/* <Box /> */}
                {/* <PickleRick /> */}
                <ambientLight />
              </Suspense>
              <Camera />
              <KeyLight brightness={5.6} color={"#fff"} />
              <FillLight brightness={2.6} color={"#fff"} />
              <OrbitControls />
            </ThreeScene>
          </div>
        </div>
      </Layout>
    </div>
  );
}
