import { useContext, useState, useEffect } from "react";

import Layout from "../components/Layout";
import styles from "../styles/favorites.module.css";
import { FavoriteContext } from "../contexts/favorite";
import Characters from "../components/Characters";

const Favourites = () => {
  const [data, setData] = useState([]);

  const { state } = useContext(FavoriteContext);

  useEffect(() => {
    setData(state);
  }, [state]);

  const handleClick = () => {
    console.log("hello", state, data);
  };

  return (
    <Layout>
      <div className={styles.container}>
        <h1 className={styles.text}>favourites</h1>
        <button className={styles.text} onClick={handleClick}>
          getFavorite
        </button>
        {data.favorites?.length > 0 ? (
          <Characters data={data.favorites} />
        ) : (
          <p>No hay favoritos</p>
        )}
      </div>
    </Layout>
  );
};

export default Favourites;
