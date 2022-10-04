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
      className={
        data.status === "Alive"
          ? styles.characterCard + " " + styles.characterAlive
          : styles.characterCard + " " + styles.characterDead
      }
    >
      <h1
        className={
          data.status === "Alive"
            ? styles.title + " " + styles.titleAlive
            : styles.title + " " + styles.titleDead
        }
      >
        {data.name}
      </h1>

      <div className={styles.dataContainer}>
        <div
          className={
            data.status === "Alive"
              ? styles.circle + " " + styles.circleAlive
              : styles.circle + " " + styles.circleDead
          }
        >
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
