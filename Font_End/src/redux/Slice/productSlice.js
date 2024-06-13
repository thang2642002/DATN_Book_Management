import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  quantity: 0,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    updateProduct: (state, action) => {
      const { quantity = 0 } = action.payload;
      state.quantity = quantity ? quantity : state.quantity;
      console.log("acctions:", action);
    },
    resert: (state) => {
      state.quantity = 0;
    },
  },
});

export const { updateProduct, resert } = productSlice.actions;
export default productSlice.reducer;
