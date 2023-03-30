import { BASE_ITEMS_PER_PAGE } from "constants/productConstants";
import { IPagedData } from "dataflows/IPagedData";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IMisComprasState } from "./IMisComprasState";
import { IOrder } from "./IOrder";
import { IOrderDetail } from "./IOrderDetail";
import { getOrders, getOrderByOrderId } from "./MisComprasThunks";

const initialState: IMisComprasState = {
  isLoadingOrders: false,
  isLoadingGetOrderByOrderId: false,
  order: undefined,
  orders: {
    metadata: {
      perPage: BASE_ITEMS_PER_PAGE,
      currentPage: 1,
      totalPages: 1,
    },
    records: [],
  },
};

const misComprasSlice = createSlice({
  name: "misCompras",
  initialState,
  reducers: {},
  extraReducers: {
    [getOrders.pending.type]: (state) => {
      state.isLoadingOrders = true;
    },
    [getOrders.fulfilled.type]: (state, action: PayloadAction<IPagedData<IOrder>>) => {
      state.isLoadingOrders = false;

      for (const order of action.payload.records) {
        if (state.orders.records.find((o) => o.id === order.id) === undefined) {
          // Check if the order in the payload has an id greater than the first order of the records
          // to know where to insert the element (at the end of the array or the beginning)
          const insertIndex =
            state.orders.records[0] && order.id > state.orders.records[0].id
              ? 0
              : state.orders.records.length;
          state.orders.records.splice(insertIndex, 0, order);
        }
      }

      state.orders.metadata.currentPage = Number(action.payload.metadata.currentPage);
      state.orders.metadata.perPage = Number(action.payload.metadata.perPage);
      state.orders.metadata.totalPages = action.payload.metadata.totalPages;
    },
    [getOrders.rejected.type]: (state) => {
      state.isLoadingOrders = false;
    },
    [getOrderByOrderId.pending.type]: (state) => {
      state.isLoadingGetOrderByOrderId = true;
    },
    [getOrderByOrderId.fulfilled.type]: (state, action: PayloadAction<IOrderDetail>) => {
      state.order = action.payload;
      state.isLoadingGetOrderByOrderId = false;
    },
    [getOrderByOrderId.rejected.type]: (state) => {
      state.isLoadingGetOrderByOrderId = false;
    },
  },
});

/**
 * Reducers
 */
export const misComprasReducer = misComprasSlice.reducer;
