import { useState } from "react";
import { ImSearch } from "react-icons/im";

import { useProducts } from "../context/ProductsContext";
import Card from "../components/Card";
import Loader from "../components/Loader";

import styles from "./styles/ProductsPage.module.css";

const ProductsPage = () => {
  const products = useProducts();

  const [search, setSearch] = useState("");

  const searchHandler = () => {};

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
        />
        <button onClick={searchHandler}>
          <ImSearch />
        </button>
      </div>
      <div className={styles.container}>
        <div className={styles.products}>
          {!products.length && <Loader />}
          {products.map((p) => (
            <Card key={p.id} data={p} />
          ))}
        </div>
        <div></div>
      </div>
    </>
  );
};

export default ProductsPage;
