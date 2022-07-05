import Header from "./Header";
import Footer from "./Footer";
import styles from "../styles/layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className={styles.childrenContainer}>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
