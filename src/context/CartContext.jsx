import { createContext, useContext, useReducer, useEffect } from "react";
import { sumProducts } from "../helpers/helper";

const getInitialState = () => {
  const savedCart = localStorage.getItem("cart");
  return savedCart
    ? JSON.parse(savedCart)
    : {
        selectedItems: [],
        itemsCounter: 0,
        totalPrice: 0,
        checkout: false,
      };
};

const reducer = (state, action) => {
  let newState;

  switch (action.type) {
    case "ADD_ITEM":
      if (!state.selectedItems.find((item) => item.id === action.payload.id)) {
        state.selectedItems.push({ ...action.payload, quantity: 1 });
      }
      newState = {
        ...state,
        checkout: false,
        ...sumProducts(state.selectedItems),
      };
      break;

    case "INCREASE":
      const indexI = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItems[indexI].quantity++;
      newState = {
        ...state,
        ...sumProducts(state.selectedItems),
      };
      break;

    case "DECREASE":
      const indexD = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItems[indexD].quantity--;
      newState = {
        ...state,
        ...sumProducts(state.selectedItems),
      };
      break;

    case "CHECKOUT":
      newState = {
        selectedItems: [],
        itemsCounter: 0,
        totalPrice: 0,
        checkout: true,
      };
      break;

    case "REMOVE_ITEM":
      const newSelectedItems = state.selectedItems.filter(
        (item) => item.id !== action.payload.id
      );
      newState = {
        ...state,
        selectedItems: [...newSelectedItems],
        ...sumProducts(newSelectedItems),
      };
      break;

    default:
      throw new Error("Invalid action");
  }

  localStorage.setItem("cart", JSON.stringify(newState));
  return newState;
};

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, getInitialState());

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => {
  const context = useContext(CartContext);
  return [context.state, context.dispatch];
};

export default CartProvider;
export { useCart };
