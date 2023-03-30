import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IShopInfoState } from "./IShopInfoState";
import { getCurrentProfit } from "./ShopsInfoThunks";

const initialState: IShopInfoState = {
  isLoadingCurrentProfit: false,
};

const shopInfoSlice = createSlice({
  name: "shopInfo",
  initialState,
  reducers: {},
  extraReducers: {
    [getCurrentProfit.fulfilled.type]: (state, action: PayloadAction<number>) => {
      state.currentProfit = action.payload;
      state.isLoadingCurrentProfit = false;
    },
    [getCurrentProfit.pending.type]: (state) => {
      state.isLoadingCurrentProfit = true;
    },
  },
});

/**
 * Reducer
 */

export const shopInfoReducer = shopInfoSlice.reducer;
