import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IProduct } from "../IProduct";
import { ISelectedProductState } from "./ISelectedProductState";
import { getProductById } from "./SelectedProductThunks";

const initialState: ISelectedProductState = {
  product: undefined,
  isLoading: false,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    selectProduct: (state, action: PayloadAction<IProduct>) => {
      state.product = action.payload;
    },
  },
  extraReducers: {
    [getProductById.pending.type]: (state) => {
      state.isLoading = true;
    },
    [getProductById.fulfilled.type]: (state, action) => {
      state.product = action.payload;
      state.isLoading = false;
    },
    [getProductById.rejected.type]: (state) => {
      state.isLoading = false;
    },
  },
});

/**
 * Actions
 */
export const { selectProduct } = productSlice.actions;

/**
 * Reducers
 */
export const productReducer = productSlice.reducer;
