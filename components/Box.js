import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const Box = (props) => {
  const mesh = useRef();
  useFrame(() => {
    mesh.current.rotation.x = mesh.current.rotation.x + 0.01;
    mesh.current.rotation.y = mesh.current.rotation.y + 0.01;
  });

  return (
    <mesh ref={mesh} {...props} scale={[1, 1, 1]}>
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={"#fff"} wireframe />
    </mesh>
  );
};
export default Box;
