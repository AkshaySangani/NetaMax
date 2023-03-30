import { createSlice } from "@reduxjs/toolkit";

import { IInvoicesState } from "./IInvoicesState";
import { getInvoices } from "./InvoicesThunks";

const initialState: IInvoicesState = {
  invoices: [],
  isLoadingInvoices: true,
};

const invoicesSlice = createSlice({
  name: "invoices",
  initialState,
  reducers: {},
  extraReducers: {
    [getInvoices.pending.type]: (state) => {
      state.isLoadingInvoices = true;
    },
    [getInvoices.fulfilled.type]: (state, action) => {
      state.invoices = action.payload;
      state.isLoadingInvoices = false;
    },
    [getInvoices.rejected.type]: (state) => {
      state.isLoadingInvoices = false;
    },
  },
});

export const invoicesReducer = invoicesSlice.reducer;
