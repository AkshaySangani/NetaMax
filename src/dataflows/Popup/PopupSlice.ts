import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { getPopup } from "./PopupThunks";
import { IPopupState } from "./IPopupState";
import { IPopup } from "./IPopup";

const initialState: IPopupState = {
  popupItems: [],
  popup: undefined,
  isLoadingPopup: false,
  selectPopupIsNewStore: 0,
  popupShown: false,
};

const popupSlice = createSlice({
  name: "popup",
  initialState,
  reducers: {
    selectPopup: (state, action: PayloadAction<IPopup>) => {
      state.popup = action.payload;
    },
    markPopupAsShown: (state) => {
      state.popupShown = true;
    },
  },
  extraReducers: {
    [getPopup.pending.type]: (state) => {
      state.isLoadingPopup = true;
    },
    [getPopup.fulfilled.type]: (state, action) => {
      state.popup = action.payload;
      state.isLoadingPopup = false;
    },
    [getPopup.rejected.type]: (state) => {
      state.isLoadingPopup = false;
    },
  },
});

/**
 * Actions
 */
export const { selectPopup, markPopupAsShown } = popupSlice.actions;

/**
 * Reducers
 */
export const popupReducer = popupSlice.reducer;
