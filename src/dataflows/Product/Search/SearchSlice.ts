import { IPagedData } from "dataflows/IPagedData";
import { filterProductsForUnderLegalAge } from "utils/productUtils";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IProduct } from "../IProduct";
import { ISearchState } from "./ISearchState";
import { getSearchBarProducts, getSearchProducts } from "./SearchThunks";

const initialState: ISearchState = {
  products: [],
  searchBarProducts: [],
  metadata: {
    currentPage: 1,
    perPage: 20,
    totalPages: 0,
  },
  isLoading: false,
  hasMoreProducts: false,
  isLoadingSearchBarProducts: false,
  emptySearchMessage: "",
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    clearSearchProducts: (state) => {
      state.products = [];
      state.metadata = initialState.metadata;
    },
    clearSearchBarProducts: (state) => {
      state.searchBarProducts = [];
      state.emptySearchMessage = "";
      state.hasMoreProducts = false;
    },
  },
  extraReducers: {
    [getSearchProducts.pending.type]: (state) => {
      state.isLoading = true;
    },
    [getSearchProducts.fulfilled.type]: (state, action: PayloadAction<IPagedData<IProduct>>) => {
      if (Array.isArray(action.payload.records)) {
        for (let i = 0; i < action.payload.records.length; i++) {
          const product = action.payload.records[i];
          if (product && state.products.find((p) => p.id === product.id) === undefined) {
            state.products.push(product);
          }
        }

        state.metadata.currentPage = Number(action.payload.metadata.currentPage);
        state.metadata.perPage = Number(action.payload.metadata.perPage);
        state.metadata.totalPages = action.payload.metadata.totalPages;

        state.isLoading = false;
      }
    },
    [getSearchProducts.rejected.type]: (state) => {
      state.isLoading = false;
    },
    [getSearchBarProducts.fulfilled.type]: (
      state,
      action: PayloadAction<IPagedData<IProduct> & { isUserUnderLegalAge: boolean }>
    ) => {
      const filterLegalAgeProducts = filterProductsForUnderLegalAge(
        action.payload.records,
        action.payload.isUserUnderLegalAge
      );
      state.searchBarProducts = filterLegalAgeProducts;
      state.hasMoreProducts =
        action.payload.metadata.totalPages > 1 && filterLegalAgeProducts.length === 4;
      if (filterLegalAgeProducts.length === 0) {
        state.emptySearchMessage = "No se encontraron resultados";
      }
      state.isLoadingSearchBarProducts = false;
    },
    [getSearchBarProducts.pending.type]: (state) => {
      state.isLoadingSearchBarProducts = true;
    },
    [getSearchBarProducts.rejected.type]: (state) => {
      state.isLoadingSearchBarProducts = false;
      state.emptySearchMessage = "No se encontraron resultados";
    },
  },
});

/**
 * Actions
 */
export const { clearSearchProducts, clearSearchBarProducts } = searchSlice.actions;

/**
 * Reducer
 */

export const searchReducer = searchSlice.reducer;
