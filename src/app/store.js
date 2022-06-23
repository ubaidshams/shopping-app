import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../features/cart/cartSlice";
import LoginSlice from "../features/Login/LoginSlice";
import productSlice from "../features/products/productSlice";
import wishlistSlice from "../features/wishlist/wishlistSlice";

const store = configureStore({
  reducer: {
    product: productSlice,
    cart: cartSlice,
    Login:LoginSlice,
    wishlist: wishlistSlice,
  },
});

export default store;
