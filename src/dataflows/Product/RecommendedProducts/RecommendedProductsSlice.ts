import { createSlice } from "@reduxjs/toolkit";

import { getProductRecommendations } from "./RecommendedProductsThunk";
import { IRecommendedProductsState } from "./IRecommendedProductsState";

const initialState: IRecommendedProductsState = {
  recommendedProducts: [],
  isLoading: false,
};

const recommendedProductsSlice = createSlice({
  name: "recommendedProducts",
  initialState,
  reducers: {
    clearRecommendedProducts: (state) => {
      state.recommendedProducts = [];
      state.isLoading = false;
    },
  },
  extraReducers: {
    [getProductRecommendations.pending.type]: (state) => {
      state.isLoading = true;
    },
    [getProductRecommendations.fulfilled.type]: (state, action) => {
      state.recommendedProducts = action.payload;
      state.isLoading = false;
    },
    [getProductRecommendations.rejected.type]: (state) => {
      state.isLoading = false;
    },
  },
});

/**
 * Actions
 */

export const { clearRecommendedProducts } = recommendedProductsSlice.actions;

/**
 * Reducers
 */
export const recommendedProductsReducer = recommendedProductsSlice.reducer;
