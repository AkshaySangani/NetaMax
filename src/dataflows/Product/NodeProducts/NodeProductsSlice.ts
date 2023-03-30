import { BASE_ITEMS_PER_PAGE } from "constants/productConstants";
import { IPagedData } from "dataflows/IPagedData";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IProduct } from "../IProduct";
import { INodeProductState } from "./INodeProductsState";
import { getHomeNodeProductsPage, getNodeProductsPage } from "./NodeProductsThunks";

const initialState: INodeProductState = {
  products: [],
  homeNodeProducts: {},
  productsPerPage: BASE_ITEMS_PER_PAGE,
  currentPage: 1,
  totalPages: 1,
  isLoading: false,
  isLoadingHomeNodeProducts: false,
};

const nodeProductSlice = createSlice({
  name: "nodeProducts",
  initialState,
  reducers: {
    clearNodeProducts: (state) => {
      state.products = [];
      state.currentPage = 1;
      state.totalPages = 1;
      state.isLoading = false;
    },
  },
  extraReducers: {
    [getNodeProductsPage.pending.type]: (state) => {
      state.isLoading = true;
    },
    [getNodeProductsPage.fulfilled.type]: (state, action: PayloadAction<IPagedData<IProduct>>) => {
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
    [getNodeProductsPage.rejected.type]: (state) => {
      state.isLoading = false;
    },
    [getHomeNodeProductsPage.pending.type]: (state) => {
      state.isLoadingHomeNodeProducts = true;
    },
    [getHomeNodeProductsPage.fulfilled.type]: (
      state,
      action: PayloadAction<{ nodeId: string; pagedData: IPagedData<IProduct> }>
    ) => {
      if (state.homeNodeProducts[action.payload.nodeId] === undefined) {
        state.homeNodeProducts[action.payload.nodeId] = action.payload.pagedData;
      } else {
        for (let i = 0; i < action.payload.pagedData.records.length; i++) {
          const product = action.payload.pagedData.records[i];
          if (
            product &&
            state.homeNodeProducts[action.payload.nodeId]?.records.find(
              (p) => p.id === product.id
            ) === undefined
          ) {
            state.homeNodeProducts[action.payload.nodeId]?.records.push(product);
          }
        }
        const homeNodeProducts = state.homeNodeProducts[action.payload.nodeId];
        if (!!homeNodeProducts) {
          homeNodeProducts.metadata = action.payload.pagedData.metadata;
        }
      }
      state.isLoadingHomeNodeProducts = false;
    },
    [getHomeNodeProductsPage.rejected.type]: (state) => {
      state.isLoadingHomeNodeProducts = false;
    },
  },
});

/**
 * Actions
 */
export const { clearNodeProducts } = nodeProductSlice.actions;

/**
 * Reducers
 */
export const nodeProductsReducer = nodeProductSlice.reducer;
