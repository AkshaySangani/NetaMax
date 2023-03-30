import { createSlice } from "@reduxjs/toolkit";

import { ITrackingState } from "./ITrackingState";
import { getLastTrackingUrl, getTrackingUrl } from "./TrackingThunks";

const initialState: ITrackingState = {
  loading: false,
  trackingUrl: [],
  lastTrackingUrl: "",
};

const trackingSlice = createSlice({
  name: "tracking",
  initialState,
  reducers: {
    clearUrl: (state) => {
      state.trackingUrl = [];
    },
  },
  extraReducers: {
    [getLastTrackingUrl.pending.type]: (state) => {
      state.loading = true;
    },
    [getLastTrackingUrl.fulfilled.type]: (state, action) => {
      state.lastTrackingUrl = action.payload;
      state.loading = false;
    },
    [getLastTrackingUrl.rejected.type]: (state) => {
      state.loading = false;
    },
    [getTrackingUrl.pending.type]: (state) => {
      state.loading = true;
    },
    [getTrackingUrl.fulfilled.type]: (state, action) => {
      state.trackingUrl = [...state.trackingUrl, action.payload];
      state.loading = false;
    },
    [getTrackingUrl.rejected.type]: (state) => {
      state.loading = false;
    },
  },
});

/* Actions */
export const { clearUrl } = trackingSlice.actions;

export const trackingReducer = trackingSlice.reducer;
