import { IPagedData } from "dataflows/IPagedData";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IProduct } from "../IProduct";
import { IMegaPromosSectionState } from "./IMegaPromosSectionState";
import { getMegaPromosSectionPage } from "./MegaPromosSectionThunks";

const initialState: IMegaPromosSectionState = {
  products: [],
  //TODO: we're trying to get all product in promo.
  //      but we need to know how many products are in promo.
  //      so we need to get the number of products in promo or create a paginated carousel.
  productsPerPage: 20,
  currentPage: 1,
  totalPages: 1,
  isLoading: false,
};

const megaPromosSectionSlice = createSlice({
  name: "megaPromosSection",
  initialState,
  reducers: {},
  extraReducers: {
    [getMegaPromosSectionPage.pending.type]: (state) => {
      state.isLoading = true;
    },
    [getMegaPromosSectionPage.fulfilled.type]: (
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

        state.isLoading = false;
      }
    },
    [getMegaPromosSectionPage.rejected.type]: (state) => {
      state.isLoading = false;
    },
  },
});

/**
 * Reducers
 */
export const megaPromosSectionReducer = megaPromosSectionSlice.reducer;
