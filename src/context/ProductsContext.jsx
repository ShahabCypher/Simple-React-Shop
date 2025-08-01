import { createContext, useState, useEffect, useContext } from "react";
import api from "../services/config";

const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setProducts(await api.get("/products"));
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <ProductsContext.Provider value={products}>
      {children}
    </ProductsContext.Provider>
  );
};

const useProducts = () => {
  const products = useContext(ProductsContext);
  return products;
};

const useProductDetails = (id) => {
  console.log(id);
  const products = useContext(ProductsContext);
  console.log(products);
  const result = products.find((product) => product.id === id);
  return result;
};

export default ProductsProvider;
export { useProducts, useProductDetails };
