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

export default ProductsProvider;
export { useProducts };
