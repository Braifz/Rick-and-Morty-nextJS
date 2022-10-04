import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import styles from "../styles/header.module.css";
import favImg from "../public/images/favorite-star.svg";
import rickAndMortyLogo from "../public/rickandmorty.svg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => setIsOpen(!isOpen);

  return (
    <header className={styles.header}>
      <Link href="/">
        <a>
          <Image
            src={rickAndMortyLogo}
            height={150}
            width={250}
            alt="rick and morty logo"
          />
        </a>
      </Link>
      <nav className={styles.navbar}>
        <ul
          className={
            isOpen === false
              ? styles.navmenu
              : styles.navmenu + " " + styles.active
          }
        >
          <li className={styles.navitem}>
            <Link href="/explore">
              <a
                className={
                  isOpen === false
                    ? styles.navlink
                    : styles.navlink + " " + styles.active
                }
              >
                Explore
              </a>
            </Link>
          </li>
          <li className={styles.navitem}>
            <Link href="/favourites">
              <a
                className={
                  isOpen === false
                    ? styles.navlink
                    : styles.navlink + " " + styles.active
                }
              >
                Favorite
              </a>
            </Link>
          </li>
        </ul>
        <button
          onClick={openMenu}
          className={
            isOpen === false
              ? styles.hamburger
              : styles.hamburger + " " + styles.active
          }
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </button>
      </nav>
    </header>
  );
};
export default Header;
