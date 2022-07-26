import { useState, useEffect, useContext } from "react";
import Layout from "../../components/Layout";
import Characters from "../../components/Characters";
import styles from "../../styles/explore.module.css";
import SearchCharacter from "../../components/SeachCharacter";
import { FavoriteContext } from "../../contexts/favorite";

const Explore = ({ data }) => {
  const [page, setPage] = useState(5);

  useEffect(() => {
    console.log(page);
  }, []);

  const handleClickPrev = () => {
    if (page === 1) {
      setPage(page);
    } else {
      setPage(page - 1);
    }
  };

  const handleClickNext = () => {
    setPage(page + 1);
  };
  console.log(data);
  return (
    <Layout>
      <div className={styles.container}>
        <SearchCharacter />
        <Characters data={data.results} />
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

export async function getStaticProps() {
  const res = await fetch(
    `https://rickandmortyapi.com/api/character?page=${9}`
  );
  const data = await res.json();
  return { props: { data } };
}

export default Explore;
