import { createSlice } from "@reduxjs/toolkit";
import { IEventTrackingState } from "./IEventTrackingState";

const initialState: IEventTrackingState = {
  isAmplitudeInitialized: false,
  isSegmentInitialized: false,
  isSegmentNodeInitialized: false,
};

const eventTrackingSlice = createSlice({
  name: "eventTracking",
  initialState,
  reducers: {
    markAmplitudeAsInitialized: (state) => {
      state.isAmplitudeInitialized = true;
    },
    markSegmentAsInitialized: (state) => {
      state.isSegmentInitialized = true;
    },
    markSegmentNodeAsInitialized: (state) => {
      state.isSegmentNodeInitialized = true;
    },
  },
});

/**
 * Actions
 */
export const {
  markAmplitudeAsInitialized,
  markSegmentAsInitialized,
  markSegmentNodeAsInitialized,
} = eventTrackingSlice.actions;

/**
 * Reducers
 */
export const eventTrackingReducer = eventTrackingSlice.reducer;
