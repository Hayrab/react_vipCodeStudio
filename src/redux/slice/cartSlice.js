import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    data: JSON.parse(localStorage.getItem("cart")) || [],
  },
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.data.find(
        (item) => item.id === action.payload.id
      );
      itemInCart ? itemInCart.qty++ : state.data.push(action.payload);
    },
    incrementQuantity: (state, action) => {
      const itemInCart = state.data.find((item) => item.id === action.payload);
      itemInCart.qty++;
    },
    decrementQuantity: (state, action) => {
      const itemInCart = state.data.find((item) => item.id === action.payload);
      if (itemInCart.qty === 1) {
        itemInCart.qty === 1;
      } else {
        itemInCart.qty--;
      }
    },
    removeItem: (state, action) => {
      const removeItem = state.data.filter(
        (item) => item.id !== action.payload
      );
      state.data = removeItem;
    },
    totalCart: (state, action) => {},
  },
});

export const { addToCart, removeItem, decrementQuantity, incrementQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
