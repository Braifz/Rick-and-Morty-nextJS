import Layout from "../components/Layout";
import Character from "../components/Character";
import Characters from "../components/Characters";
import styles from "../styles/explore.module.css";

const Hello = ({ data }) => {
  console.log(data);
  return (
    <div className={styles.container}>
      <Layout>
        <h1>Aca se van a buscar los personajes</h1>
        <Characters data={data} />
      </Layout>
    </div>
  );
};

export async function getServerSideProps() {
  const res = await fetch("https://rickandmortyapi.com/api/character");
  const data = await res.json();
  return { props: { data } };
}

export default Hello;
