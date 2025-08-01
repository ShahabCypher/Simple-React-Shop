import { Link } from "react-router-dom";
import { PiShoppingCartSimpleBold } from "react-icons/pi";

import { useCart } from "../context/CartContext";

import styles from "./styles/Layout.module.css";

const Layout = ({ children }) => {
  const [state] = useCart();
  return (
    <>
      <header className={styles.header}>
        <Link to="/products">QuickCart</Link>
        <Link to="/checkout">
          <div className={styles.cartIcon}>
            <PiShoppingCartSimpleBold />
            {!!state.itemsCounter && <span>{state.itemsCounter}</span>}
          </div>
        </Link>
      </header>
      {children}
      <footer className={styles.footer}>
        <p>
          Developed by{" "}
          <a href="https://github.com/ShahabCypher" target="_blank">
            Cypher
          </a>{" "}
          with ❤️
        </p>
      </footer>
    </>
  );
};

export default Layout;
