import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../features/product/productSlice";

const store = configureStore({
  reducer: {
    product: productsReducer,
  },
});

export default store;
