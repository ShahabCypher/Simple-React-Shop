import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { PiShoppingCartSimpleBold } from "react-icons/pi";

import styles from "./styles/Layout.module.css";

const Layout = ({ children }) => {
  const state = useSelector((store) => store.cart);

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
