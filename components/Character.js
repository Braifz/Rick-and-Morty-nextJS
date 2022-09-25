import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../styles/character.module.css";
import { motion } from "framer-motion";

import Favourite from "./Favourite";

const Character = ({ data }) => {
  const [id, setId] = useState("");
  useEffect(() => {
    const id = data.url
      .split("/")
      .filter((x) => x)
      .pop();
    setId(id);
  }, []);

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5 }}
      className={styles.characterCard}
    >
      <h1 className={styles.title}>{data.name}</h1>

      <div className={styles.dataContainer}>
        <div className={styles.circle}>
          <Image
            className={styles.image}
            src={data.image}
            width={150}
            height={150}
            alt={data.name}
          />
        </div>
        <p>status: {data.status}</p>
        <p>specie: {data.species}</p>
      </div>
      <Favourite data={data} id={id} />
    </motion.div>
  );
};

export default Character;
