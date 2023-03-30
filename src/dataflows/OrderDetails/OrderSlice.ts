import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IOrderDetails } from "./IOrderDetails";
import { IOrderState } from "./IOrderState";
import { getOrderItems } from "./OrderThunks";

const initialState: IOrderState = {
  orderDetails: {
    items: [],
    order_total: 0,
    order_subtotal_excl_tax: 0,
    order_discount: 0,
  },
  isLoadingOrder: false,
};

const nopOrdersSlice = createSlice({
  name: "nopOrders",
  initialState,
  reducers: {
    selectOrder: (state, action: PayloadAction<IOrderDetails>) => {
      state.orderDetails = action.payload;
    },
  },
  extraReducers: {
    [getOrderItems.pending.type]: (state) => {
      state.isLoadingOrder = true;
    },
    [getOrderItems.fulfilled.type]: (state, action) => {
      state.orderDetails = action.payload;
      state.isLoadingOrder = false;
    },
  },
});

/**
 * Actions
 */
export const { selectOrder } = nopOrdersSlice.actions;

/**
 * Reducers
 */
export const nopOrdersReducer = nopOrdersSlice.reducer;
