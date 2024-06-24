import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  quantity: 0,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    updateProduct: (state, action) => {
      const quantity = action.payload;
      state.quantity = quantity ? quantity : state.quantity;
    },
    pushProduct: (state, action) => {
      const quantity = action.payload;
      state.quantity += quantity;
    },
    decrementProduct: (state) => {
      state.quantity -= 1;
    },

    incrementProduct: (state) => {
      state.quantity += 1;
    },
    resetProduct: (state) => {
      state.quantity = 0;
    },
  },
});

export const {
  updateProduct,
  resetProduct,
  pushProduct,
  decrementProduct,
  incrementProduct,
} = productSlice.actions;
export default productSlice.reducer;
