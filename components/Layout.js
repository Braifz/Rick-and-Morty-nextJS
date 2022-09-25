import Header from "./Header";
import Footer from "./Footer";
import styles from "../styles/layout.module.css";
import { motion } from "framer-motion";

const Layout = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Header />
      <div className={styles.childrenContainer}>{children}</div>
      <Footer />
    </motion.div>
  );
};

export default Layout;
