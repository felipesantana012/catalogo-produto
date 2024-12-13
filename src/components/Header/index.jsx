import styles from "./Header.module.scss";
import logo from "../../assets/logo.svg";
const Header = () => {
  return (
    <header className={styles.header}>
      <figure>
        <img src={logo} alt="logo" />
      </figure>

      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#produtos">Produtos</a>
          </li>
          <li>
            <a href="#contato">Contato</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
