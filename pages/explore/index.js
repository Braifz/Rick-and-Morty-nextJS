import { useState } from "react";
import Layout from "../../components/Layout";
import Characters from "../../components/Characters";
import styles from "../../styles/explore.module.css";

const Explore = ({ data }) => {
  const [page, setPage] = useState(1);

  const handleClick = (numPag) => {
    if (page === 1) {
      setPage(page);
    }
    numPag ? setPage(page + 1) : setPage(page - 1);
  };
  console.log(data);
  return (
    <Layout>
      <div className={styles.container}>
        <h1>Aca se van a buscar los personajes</h1>
        <Characters data={data} />
        <button onClick={handleClick(true)}>Prev</button>
        <button onClick={handleClick(false)}>Next</button>
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  const res = await fetch(
    `https://rickandmortyapi.com/api/character?page=${1}`
  );
  const data = await res.json();
  return { props: { data } };
}

export default Explore;
