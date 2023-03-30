import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IPromotionState } from "./IPromotionState";
import { getPromotions } from "./PromotionThunks";

const initialState: IPromotionState = {
  promotionItems: [],
  isLoadingPromotionSection: false,
};

const promotionSlice = createSlice({
  name: "promotion",
  initialState,
  reducers: {
    selectPromotion: (state, action: PayloadAction<string>) => {
      state.selectedPromotion = state.promotionItems.find(
        (promotion) => promotion.id === action.payload
      );
    },
  },
  extraReducers: {
    [getPromotions.pending.type]: (state) => {
      state.isLoadingPromotionSection = true;
    },
    [getPromotions.fulfilled.type]: (state, action) => {
      state.promotionItems = action.payload;
      state.isLoadingPromotionSection = false;
    },
    [getPromotions.rejected.type]: (state) => {
      state.isLoadingPromotionSection = false;
    },
  },
});

/**
 * Actions
 */
export const { selectPromotion } = promotionSlice.actions;

/**
 * Reducers
 */
export const promotionReducer = promotionSlice.reducer;
