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
    resetProduct: (state) => {
      state.quantity = 0;
    },
  },
});

export const { updateProduct, resetProduct } = productSlice.actions;
export default productSlice.reducer;
