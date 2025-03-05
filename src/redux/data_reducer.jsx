// src/redux/counterSlice.js
import { createSlice } from "@reduxjs/toolkit";

const dataReducer = createSlice({
  name: "data",
  initialState: {
    categories: [],
    products: [],
  },
  reducers: {
    setCategories(state, action) {
      state.categories = action.payload;
    },
    setProducts(state, action) {
      state.products = action.payload;
    },
  },
});

export const { setCategories, setProducts } = dataReducer.actions;
export default dataReducer.reducer;
