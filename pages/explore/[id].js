import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const IdDinamic = () => {
  const [loaded, setLoaded] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (router.isReady) {
      setLoaded(true);
    }
  }, [router.isReady]);

  if (!loaded) {
    return null;
  }

  return (
    <div>
      <p>Hello! Im dinamic route</p>
    </div>
  );
};

export default IdDinamic;
