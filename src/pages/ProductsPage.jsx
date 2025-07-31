import { useProducts } from "../context/ProductsContext";
import Card from "../components/Card";

import styles from "./styles/ProductsPage.module.css";

const ProductsPage = () => {
  const products = useProducts();

  return (
    <div className={styles.container}>
      <div className={styles.products}>
        {!products.length && <p>Loading...</p>}
        {products.map((p) => (
          <Card key={p.id} data={p} />
        ))}
      </div>
      <div></div>
    </div>
  );
};

export default ProductsPage;
