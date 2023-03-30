import { IPagedData } from "dataflows/IPagedData";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { getMonetasHistory } from "./HistorialMonetasThunk";
import { IHistorialMonetas } from "./IHistorialMonetas";
import { IHistorialMonetasState } from "./IHistorialMonetasState";

const initialState: IHistorialMonetasState = {
  isLoadingMonetas: false,
  monetasItems: {
    records: [],
    metadata: { currentPage: 1, totalPages: 1, perPage: 1 },
  },
};

const historialMonetasSlice = createSlice({
  name: "historialMonetas",
  initialState,
  reducers: {},
  extraReducers: {
    [getMonetasHistory.pending.type]: (state) => {
      state.isLoadingMonetas = true;
    },
    [getMonetasHistory.fulfilled.type]: (
      state,
      action: PayloadAction<IPagedData<IHistorialMonetas>>
    ) => {
      if (Array.isArray(action.payload.records)) {
        state.monetasItems = { ...action.payload };
      }
      state.isLoadingMonetas = false;
    },
    [getMonetasHistory.rejected.type]: (state) => {
      state.isLoadingMonetas = false;
    },
  },
});

/**
 * Reducers
 */
export const historialMonetasReducer = historialMonetasSlice.reducer;
