import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ILegalAgeState } from "./ILegalAgeState";

const initialState: ILegalAgeState = {
  isUserUnderLegalAge: undefined,
};

const legalAgeSlice = createSlice({
  name: "legalAge",
  initialState,
  reducers: {
    setLegalAge: (state, action: PayloadAction<boolean>) => {
      state.isUserUnderLegalAge = action.payload;
    },
  },
});

/**
 * Actions
 */
export const { setLegalAge } = legalAgeSlice.actions;

/**
 * Reducers
 */
export const legalAgeReducer = legalAgeSlice.reducer;
