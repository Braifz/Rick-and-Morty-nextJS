import { useState, useEffect, useContext } from "react";
import Layout from "../../components/Layout";
import Characters from "../../components/Characters";
import styles from "../../styles/explore.module.css";
import SearchCharacter from "../../components/SeachCharacter";
import { FavoriteContext } from "../../contexts/favorite";

const Explore = () => {
  const [page, setPage] = useState(1);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetchData(page);
  }, [page]);

  const fetchData = async (page) => {
    try {
      const res = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page}`
      );
      const data = await res.json();
      console.log(data);
      setCharacters(data);
    } catch (e) {
      console.log(e);
    }
  };

  const handleClickPrev = () => {
    console.log(page);
    if (page === 1) {
      return page;
    }
    setPage(page - 1);
  };

  const handleClickNext = () => {
    console.log(page);
    if (page === 42) {
      return page;
    }
    setPage(page + 1);
  };

  return (
    <Layout>
      <div className={styles.container}>
        <SearchCharacter />
        <Characters data={characters.results} />
        <div>
          <button onClick={handleClickPrev}>Prev</button>
          <button onClick={handleClickNext}>Next</button>
        </div>
      </div>
      <style jsx>
        {`
          button {
            margin: 32px;
            padding: 16px;
            transition: all 0.3s;
            border-radius: 16px;
            background-color: #fff;
            color: var(--primary-bg-color);
          }
          button:hover {
            box-shadow: 1px 1px 5px #fff;
            transform: scale(1.5);
          }
        `}
      </style>
    </Layout>
  );
};

// export async function getStaticProps() {
//   const res = await fetch(
//     `https://rickandmortyapi.com/api/character?page=${page}`
//   );
//   const data = await res.json();
//   return { props: { data } };
// }

export default Explore;
