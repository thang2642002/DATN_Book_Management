import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Slice/counterSlice";
import userSlice from "./Slice/userSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userSlice,
  },
});
