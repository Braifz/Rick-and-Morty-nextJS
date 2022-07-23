import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../styles/character.module.css";

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
    <div className={styles.characterCard}>
      <Favourite data={data} id={id} />
      <div className={styles.dataContainer}>
        <h1>{data.name}</h1>
        <p>status: {data.status}</p>
        <p>specie: {data.species}</p>
      </div>
      <Image
        className={styles.image}
        src={data.image}
        width={200}
        height={200}
        alt={data.name}
      />
    </div>
  );
};

export default Character;
