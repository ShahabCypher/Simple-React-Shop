import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Card from "../components/Card";
import Loader from "../components/Loader";
import SearchBox from "../components/SearchBox";
import Sidebar from "../components/Sidebar";
import { fetchProducts } from "../features/product/productSlice";
import {
  searchProducts,
  filterProducts,
  getInitialQuery,
} from "../helpers/helper";

import styles from "./styles/ProductsPage.module.css";

const ProductsPage = () => {
  const dispatch = useDispatch();
  const { products, loading } = useSelector((store) => store.product);

  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState({});

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  useEffect(() => {
    setDisplayedProducts(products);
    setQuery(getInitialQuery(searchParams));
  }, [products]);

  useEffect(() => {
    setSearchParams(query);
    setSearch(query.search || "");
    let finalProducts = searchProducts(products, query.search);
    finalProducts = filterProducts(finalProducts, query.category);

    setDisplayedProducts(finalProducts);
  }, [query]);

  return (
    <>
      <SearchBox search={search} setSearch={setSearch} setQuery={setQuery} />
      <div className={styles.container}>
        <div className={styles.products}>
          {loading && <Loader />}
          {displayedProducts.map((p) => (
            <Card key={p.id} data={p} />
          ))}
        </div>
        <Sidebar query={query} setQuery={setQuery} />
      </div>
    </>
  );
};

export default ProductsPage;
