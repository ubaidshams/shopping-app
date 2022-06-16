import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
  productList: [],
};
const fetchProducts = createAsyncThunk('product/fetchProducts', () => {
     axios.get('https://dummyjson.com/products').then(res=>)
})
const productSlice = createSlice({
  name: "product",
  initialState,
});
