import { createContext, useReducer } from "react";

const initialState = {};

const reducer = (state, action) => {};

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <CartContext.Provider value={state}>{children}</CartContext.Provider>;
};

export default CartProvider;
