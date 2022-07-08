import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import styles from "../styles/header.module.css";
import NavImg from "../public/nav-ico.png";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleNav = () => {
    setIsActive(!isActive);
  };
  console.log(isActive);

  return (
    <header className={styles.container}>
      <nav className={styles.nav}>
        <Link className={styles.element} href="/">
          <a className={styles.element}>Home</a>
        </Link>
        <Link className={styles.element} href="/explore">
          <a className={styles.element}>Explore</a>
        </Link>
        <Link className={styles.element} href="/favourites">
          <a className={styles.element}>Favorites</a>
        </Link>
      </nav>
      <button onClick={toggleNav} className={styles.navIco}>
        <Image src={NavImg} alt="nav-ico" width={50} height={50} />
      </button>
    </header>
  );
};
export default Header;
