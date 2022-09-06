import { useState, useEffect, useContext } from "react";
import Layout from "../../components/Layout";
import Characters from "../../components/Characters";
import styles from "../../styles/explore.module.css";
import SearchCharacter from "../../components/SeachCharacter";
import { FavoriteContext } from "../../contexts/favorite";

let page = 1;

const handleClickPrev = (page) => {
  console.log(page);
  if (page === 1) {
    return page;
  }
  return page - 1;
};

const handleClickNext = (page) => {
  console.log(page);
  if (page === 42) {
    return page;
  }
  return page + 1;
};

const Explore = ({ data }) => {
  const [state, setState] = useState(page);

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <Layout>
      <div className={styles.container}>
        <SearchCharacter />
        <Characters data={data.results} />
        <div>
          <button onClick={handleClickPrev(page)}>Prev</button>
          <button onClick={handleClickNext(page)}>Next</button>
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
    `https://rickandmortyapi.com/api/character?page=${page}`
  );
  const data = await res.json();
  return { props: { data } };
}

export default Explore;
