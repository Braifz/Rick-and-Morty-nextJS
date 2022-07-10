import styles from "../styles/seachCharacter.module.css";

const SearchCharacter = () => {
  return (
    <div className={styles.container}>
      <h1>Search your favourite character</h1>
      <input
        placeholder="Search your favourite character"
        type={"text"}
      ></input>
    </div>
  );
};

export default SearchCharacter;
