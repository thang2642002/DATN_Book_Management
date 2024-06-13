import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Slice/counterSlice";
import userSlice from "./Slice/userSlice";
import productSlice from "./Slice/productSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userSlice,
    product: productSlice,
  },
});
