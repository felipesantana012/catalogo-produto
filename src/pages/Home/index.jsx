import { useState } from "react";
import Categorias from "../../components/Categorias";
import Produtos from "../../components/Produtos";
import styles from "./Home.module.scss";
const Home = () => {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(4);
  return (
    <section className={styles.home}>
      <Categorias onCategoriaSelecionada={setCategoriaSelecionada} />
      <Produtos categoriaSelecionada={categoriaSelecionada} />
    </section>
  );
};

export default Home;
