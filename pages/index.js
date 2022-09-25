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

const Box = lazy(() => import("../components/Box"));
const PickleRick = lazy(() => import("../components/PickleRick"));

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
                <PickleRick />
                <ambientLight />
                <Camera />
                <OrbitControls />
              </Suspense>
            </ThreeScene>
          </div>
        </div>
      </Layout>
    </div>
  );
}
