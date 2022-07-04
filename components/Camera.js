import { PerspectiveCamera } from "@react-three/drei";

const Camera = () => {
  return <PerspectiveCamera makeDefault position={[5, 1, 1]} fov={25} />;
};

export default Camera;
