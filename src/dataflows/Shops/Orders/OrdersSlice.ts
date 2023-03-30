import { createSlice } from "@reduxjs/toolkit";

import { IOrdersState } from "./IOrdersState";
import { getOrders, getOrderItems } from "./OrdersThunks";

const initialState: IOrdersState = {
  orders: [],
  isLoadingOrders: false,
  orderItems: [],
  isLoadingOrderItems: false,
};

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {},
  extraReducers: {
    [getOrders.pending.type]: (state) => {
      state.isLoadingOrders = true;
    },
    [getOrders.fulfilled.type]: (state, action) => {
      state.orders = action.payload;
      state.isLoadingOrders = false;
    },
    [getOrders.rejected.type]: (state) => {
      state.isLoadingOrders = false;
    },
    [getOrderItems.pending.type]: (state) => {
      state.isLoadingOrderItems = true;
    },
    [getOrderItems.fulfilled.type]: (state, action) => {
      state.orderItems = action.payload;
      state.isLoadingOrderItems = false;
    },
    [getOrderItems.rejected.type]: (state) => {
      state.isLoadingOrderItems = false;
    },
  },
});

/* Actions */

export const ordersReducer = ordersSlice.reducer;
