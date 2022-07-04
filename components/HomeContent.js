import Link from "next/link";
import styles from "../styles/homeContent.module.css";

const HomeContent = () => {
  return (
    <div className={styles.content}>
      <h1>Welcome to Rick and Morty App</h1>
      <p>
        loremId duis irure voluptate tempor voluptate irure duis excepteur aute
        mollit non. Deserunt eu nisi Lorem culpa irure amet amet dolor excepteur
        dolore officia commodo. Anim non eu cupidatat ullamco ea incididunt
        excepteur id. Aliquip ea aute reprehenderit fugiat qui sunt elit velit
        sunt in do irure velit. Aliqua ea eu sunt in duis veniam. Sit tempor
        elit voluptate cupidatat ex. Nisi commodo sunt tempor amet reprehenderit
        exercitation tempor adipisicing enim dolor eu sit duis eu. Do
        adipisicing sit non qui cupidatat nostrud. Incididunt dolore pariatur
        amet proident Lorem cupidatat aliquip laboris culpa. Minim nulla laboris
        qui et consectetur eiusmod est ad enim culpa aute laboris consequat.
      </p>
      <Link href="/explore">
        <button>Explore</button>
      </Link>
    </div>
  );
};

export default HomeContent;
