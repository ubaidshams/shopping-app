import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../features/cart/cartSlice";
import productSlice from "../features/products/productSlice";
import wishlistSlice from "../features/wishlist/wishlistSlice";

const store = configureStore({
  reducer: {
    product: productSlice,
    cart: cartSlice,
    wishlist: wishlistSlice,
  },
});

export default store;
