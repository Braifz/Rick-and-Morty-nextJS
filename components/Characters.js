import Character from "./Character";
import styles from "../styles/characters.module.css";

const Characters = ({ data }) => {
  return (
    <div className={styles.container}>
      {data.length > 0 && data.map((e) => <Character key={e.id} data={e} />)}
    </div>
  );
};

export default Characters;
