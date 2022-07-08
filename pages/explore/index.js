import Layout from "../../components/Layout";
import Character from "../../components/Character";
import Characters from "../../components/Characters";
import styles from "../../styles/explore.module.css";

const Hello = ({ data }) => {
  console.log(data);
  return (
    <Layout>
      <div className={styles.container}>
        <h1>Aca se van a buscar los personajes</h1>
        <Characters data={data} />
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  const res = await fetch("https://rickandmortyapi.com/api/character");
  const data = await res.json();
  return { props: { data } };
}

export default Hello;
