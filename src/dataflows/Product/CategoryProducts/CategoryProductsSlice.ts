import { BASE_ITEMS_PER_PAGE } from "constants/productConstants";
import { IPagedData } from "dataflows/IPagedData";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IProduct } from "../IProduct";
import { getCategoryProductsPage, getHomeCategoryProductsPage } from "./CategoryProductsThunk";
import { ICategoryProductState } from "./ICategoryProductState";

const initialState: ICategoryProductState = {
  products: [],
  homeCategoryProducts: {},
  productsPerPage: BASE_ITEMS_PER_PAGE,
  currentPage: 1,
  totalPages: 1,
  isLoading: false,
  isLoadingHomeCategoryProducts: false,
};

const categoryProductSlice = createSlice({
  name: "categoryProducts",
  initialState,
  reducers: {
    clearCategoryProducts: (state) => {
      state.products = [];
      state.currentPage = 1;
      state.totalPages = 1;
      state.isLoading = false;
    },
  },
  extraReducers: {
    [getCategoryProductsPage.pending.type]: (state) => {
      state.isLoading = true;
    },
    [getCategoryProductsPage.fulfilled.type]: (
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
    [getCategoryProductsPage.rejected.type]: (state) => {
      state.isLoading = false;
    },
    [getHomeCategoryProductsPage.pending.type]: (state) => {
      state.isLoadingHomeCategoryProducts = true;
    },
    [getHomeCategoryProductsPage.fulfilled.type]: (
      state,
      action: PayloadAction<{ categoryId: string; pagedData: IPagedData<IProduct> }>
    ) => {
      if (state.homeCategoryProducts[action.payload.categoryId] === undefined) {
        state.homeCategoryProducts[action.payload.categoryId] = action.payload.pagedData;
      } else {
        for (let i = 0; i < action.payload.pagedData.records.length; i++) {
          const product = action.payload.pagedData.records[i];
          if (
            product &&
            state.homeCategoryProducts[action.payload.categoryId]?.records.find(
              (p) => p.id === product.id
            ) === undefined
          ) {
            state.homeCategoryProducts[action.payload.categoryId]?.records.push(product);
          }
        }
        const homeCategoryProducts = state.homeCategoryProducts[action.payload.categoryId];
        if (!!homeCategoryProducts) {
          homeCategoryProducts.metadata = action.payload.pagedData.metadata;
        }
      }
      state.isLoadingHomeCategoryProducts = false;
    },
    [getHomeCategoryProductsPage.rejected.type]: (state) => {
      state.isLoadingHomeCategoryProducts = false;
    },
  },
});

/**
 * Actions
 */

export const { clearCategoryProducts } = categoryProductSlice.actions;

/**
 * Reducers
 */
export const categoryProductsReducer = categoryProductSlice.reducer;
