import { configureStore } from "@reduxjs/toolkit";
import data_reducer from "./data_reducer"; // Import your slice

export const storeRedux = configureStore({
  reducer: {
    data: data_reducer, // Add reducers here
  },
});
