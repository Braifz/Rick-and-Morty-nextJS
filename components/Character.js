import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "../styles/character.module.css";

const Character = ({ data }) => {
  const [id, setId] = useState("");
  useEffect(() => {
    const id = data.url
      .split("/")
      .filter((x) => x)
      .pop();
    setId(id);
  }, []);
  console.log(id);

  return (
    <div className={styles.characterCard}>
      <h1>{data.name}</h1>
      <div className={styles.dataContainer}>
        <p>status: {data.status}</p>
        <p>specie: {data.species}</p>
      </div>
      <Image
        className={styles.image}
        src={data.image}
        width={300}
        height={300}
        alt={data.name}
      />
    </div>
  );
};

export default Character;
