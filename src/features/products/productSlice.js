import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  productList: [],
};
export const fetchProducts = createAsyncThunk("product/fetchProducts", () => {
  return axios.get("https://dummyjson.com/products");
});
const productSlice = createSlice({
  name: "product",
  initialState,
  extraReducers: builder => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.productList = action.payload.data.products;
    });
  },
});
export default productSlice.reducer;
