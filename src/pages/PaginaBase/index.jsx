import Footer from "../../components/Footer";
import Header from "../../components/Header";
import styles from "./PaginaBase.module.scss";
import { Outlet } from "react-router-dom";
const PaginaBase = () => {
  return (
    <>
      <Header />
      <main className={styles.container}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default PaginaBase;
