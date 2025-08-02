import { configureStore } from "@reduxjs/toolkit";

import productsReducer from "../features/product/productSlice";
import cartReducer from "../features/cart/cartSlice";

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("cart");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const localStorageMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  if (action.type?.startsWith("cart/")) {
    const cartState = store.getState().cart;
    localStorage.setItem("cart", JSON.stringify(cartState));
  }
  return result;
};

const store = configureStore({
  reducer: {
    product: productsReducer,
    cart: cartReducer,
  },
  preloadedState: {
    cart: loadState(),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});

export default store;
