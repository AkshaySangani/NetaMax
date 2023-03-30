import { BASE_ITEMS_PER_PAGE } from "constants/productConstants";
import { IPagedData } from "dataflows/IPagedData";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IProduct } from "../IProduct";
import { IPromotionProductState } from "./IPromotionProductsState";
import { getPromotionProductsPage } from "./PromotionProductsThunks";

const initialState: IPromotionProductState = {
  products: [],
  productsPerPage: BASE_ITEMS_PER_PAGE,
  currentPage: 1,
  totalPages: 1,
  isLoading: false,
};

const promotionProductSlice = createSlice({
  name: "promotionProducts",
  initialState,
  reducers: {
    clearPromotionProducts: (state) => {
      state.products = [];
      state.currentPage = 1;
      state.totalPages = 1;
      state.isLoading = false;
    },
  },
  extraReducers: {
    [getPromotionProductsPage.pending.type]: (state) => {
      state.isLoading = true;
    },
    [getPromotionProductsPage.fulfilled.type]: (
      state,
      action: PayloadAction<IPagedData<IProduct>>
    ) => {
      if (Array.isArray(action.payload.records)) {
        for (let i = 0; i < action.payload.records.length; i++) {
          const product = action.payload.records[i];
          if (product && state.products.find((p) => p.id === product.id) === undefined) {
            state.products.push(product);
          }
        }

        state.currentPage = Number(action.payload.metadata.currentPage);
        state.productsPerPage = Number(action.payload.metadata.perPage);
        state.totalPages = action.payload.metadata.totalPages;
      }

      state.isLoading = false;
    },
    [getPromotionProductsPage.rejected.type]: (state) => {
      state.isLoading = false;
    },
  },
});

/**
 * Actions
 */
export const { clearPromotionProducts } = promotionProductSlice.actions;

/**
 * Reducers
 */
export const promotionProductsReducer = promotionProductSlice.reducer;
