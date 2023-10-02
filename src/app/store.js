// store.js
import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../features/Product/productsSlice";

const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});

export default store;
