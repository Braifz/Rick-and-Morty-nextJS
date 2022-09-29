import Link from "next/link";
import styles from "../styles/homeContent.module.css";

const HomeContent = () => {
  return (
    <div className={styles.content}>
      <h1>Welcome to Rick and Morty App</h1>
      <h3>
        The place where you find your favourite character of rick and morty
        serie
      </h3>
      <Link href="/explore">
        <button>Explore</button>
      </Link>
    </div>
  );
};

export default HomeContent;
