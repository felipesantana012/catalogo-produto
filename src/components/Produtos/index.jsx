import styles from "./Produtos.module.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../Loading";

const Produtos = ({ categoriaSelecionada }) => {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);
  const URL = "https://api.escuelajs.co/api/v1/products/?categoryId=";

  useEffect(() => {
    if (categoriaSelecionada) {
      setLoading(true);
      axios
        .get(URL + categoriaSelecionada)
        .then((response) => {
          setProdutos(response.data.slice(0, 10));
          setLoading(false);
        })
        .catch((error) => {
          console.error("Erro ao buscar produtos:", error);
          setLoading(false);
        });
    }
  }, [categoriaSelecionada]);

  if (loading) {
    return <Loading />;
  }
  return (
    <section className={styles.produtos}>
      <h2>Produtos</h2>
      <ul>
        {produtos.map((produto) => (
          <li key={produto.id}>
            <img src={produto.images[0] || imgTeste} alt={produto.title} />
            <p className={styles.nome}>{produto.title}</p>
            <p className={styles.preco}>
              <samp>Por apenas: </samp>
              {produto.price.toFixed(2)} R$
            </p>
            <p className={styles.descricao}>{produto.description}</p>
            <button>Comprar</button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Produtos;
