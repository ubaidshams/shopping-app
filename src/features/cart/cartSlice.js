import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  cartTotal: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cartItems.push(action.payload);
    },
    getCartTotal: state => {
      state.cartTotal = state.cartItems.reduce(
        (acc, item) => acc + item.price,
        0
      );
    },
    removeFromCart: (state, action) => {
      state.cartItems.splice(action.payload, 1);
    },
  },
});
export default cartSlice.reducer;
export const { addToCart, getCartTotal, removeFromCart } = cartSlice.actions;
