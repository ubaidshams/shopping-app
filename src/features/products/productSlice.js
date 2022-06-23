import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  productList: [],
};
export const fetchProducts = createAsyncThunk("product/fetchProducts", () => {
  return axios.get("http://localhost:3001/api/allProduct");
});
const productSlice = createSlice({
  name: "product",
  initialState,
  extraReducers:{
 [fetchProducts.fulfilled]: (state, action) => {
      state.productList = action.payload.data;
    },
  },
});
export default productSlice.reducer;
