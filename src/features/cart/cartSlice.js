import { createSlice } from "@reduxjs/toolkit";
import { sumPrice, sumQuantity } from "../../helpers/helper";

const initialState = {
  selectedItems: [],
  itemsCounter: 0,
  total: 0, // Fixed the property name from totalPrice to total
  checkout: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      if (!state.selectedItems.find((i) => i.id === action.payload.id)) {
        state.selectedItems.push({ ...action.payload, quantity: 1 });
        state.total = sumPrice(state.selectedItems);
        state.itemsCounter = sumQuantity(state.selectedItems);
        state.checkout = false;
      }
    },
    removeItem: (state, action) => {
      const newSelectedItems = state.selectedItems.filter(
        (i) => i.id !== action.payload.id
      );
      state.selectedItems = newSelectedItems;
      state.total = sumPrice(newSelectedItems);
      state.itemsCounter = sumQuantity(newSelectedItems);
    },
    increase: (state, action) => {
      const index = state.selectedItems.findIndex(
        (i) => i.id === action.payload.id
      );
      state.selectedItems[index].quantity++;
      state.total = sumPrice(state.selectedItems);
      state.itemsCounter = sumQuantity(state.selectedItems);
    },
    decrease: (state, action) => {
      const index = state.selectedItems.findIndex(
        (i) => i.id === action.payload.id
      );
      state.selectedItems[index].quantity--;
      state.total = sumPrice(state.selectedItems);
      state.itemsCounter = sumQuantity(state.selectedItems);
    },
    checkout: (state) => {
      state.selectedItems = [];
      state.checkout = true;
      state.total = 0;
      state.itemsCounter = 0;
      localStorage.removeItem("cart");
    },
  },
});

export default cartSlice.reducer;
export const { addItem, removeItem, increase, decrease, checkout } =
  cartSlice.actions;
