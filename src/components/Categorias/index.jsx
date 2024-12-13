import axios from "axios";
import styles from "./Categorias.module.scss";
import { useState } from "react";
import { useEffect } from "react";

const Categorias = ({ onCategoriaSelecionada }) => {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.escuelajs.co/api/v1/categories")
      .then((response) => {
        setCategorias(response.data.slice(0, 5));
        categorias.map((categoria) => {
          console.log(categoria.id);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <section className={styles.categorias}>
      <h2>Categorias</h2>
      <ul>
        {categorias.map((categoria) => (
          <li key={categoria.id}>
            <button onClick={() => onCategoriaSelecionada(categoria.id)}>
              {categoria.name}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Categorias;
