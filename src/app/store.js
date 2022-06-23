import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../features/cart/cartSlice";
import LoginSlice from "../features/Login/LoginSlice";
import productSlice from "../features/products/productSlice";

const store = configureStore({
  reducer: {
    product: productSlice,
    cart: cartSlice,
    Login:LoginSlice,
  },
});

export default store;
