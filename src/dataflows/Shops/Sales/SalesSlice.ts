import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ISales } from "./ISales";
import { ISalesState } from "./ISalesState";
import { getSales } from "./SalesThunk";

const initialState: ISalesState = {
  summary: undefined,
  orders: undefined,
  isLoadingSales: true,
};

const salesSlice = createSlice({
  name: "sales",
  initialState,
  reducers: {},
  extraReducers: {
    [getSales.pending.type]: (state) => {
      state.isLoadingSales = true;
    },
    [getSales.fulfilled.type]: (state, action: PayloadAction<ISales>) => {
      state.summary = action.payload.summary;
      state.orders = { records: action.payload.records, metadata: action.payload.metadata };
      state.isLoadingSales = false;
    },
    [getSales.rejected.type]: (state) => {
      state.isLoadingSales = false;
    },
  },
});

export const salesReducer = salesSlice.reducer;
