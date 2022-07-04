import Link from "next/link";
import styles from "../styles/header.module.css";

const Header = () => {
  return (
    <header className={styles.container}>
      <Link className={styles.element} href="/">
        <a className={styles.element}>Home</a>
      </Link>
      <Link className={styles.element} href="/explore">
        <a className={styles.element}>Explore</a>
      </Link>
      <Link className={styles.element} href="/favourites">
        <a className={styles.element}>Favorites</a>
      </Link>
    </header>
  );
};
export default Header;
