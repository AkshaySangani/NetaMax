import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IStore } from "./IStore";
import { IStoreState } from "./IStoreState";
import { getNearestStores, getStoreByName } from "./StoreThunks";

const initialState: IStoreState = {
  store: undefined,
  isLoadingStore: false,
  nearestStores: [],
  isLoadingNearestStores: false,
  circleDistance: 2500,
};

const storeSlice = createSlice({
  name: "store",
  initialState,
  reducers: {
    resetNearestStores: (state) => {
      state.nearestStores = [];
    },
    setStoreAsSelected: (state, action: PayloadAction<IStore>) => {
      state.store = action.payload;
    },
    setUserLocation: (state, action) => {
      state.userLocation = action.payload;
    },
    setSelectedStore: (state, action) => {
      state.selectedStore = action.payload;
    },
    clearSelectedStore: (state) => {
      state.selectedStore = undefined;
    },
    clearErrorMessage: (state) => {
      state.errorMessage = undefined;
    },
  },
  extraReducers: {
    [getStoreByName.pending.type]: (state) => {
      state.isLoadingStore = true;
    },
    [getStoreByName.fulfilled.type]: (state, action) => {
      state.store = action.payload;
      state.isLoadingStore = false;
    },
    [getNearestStores.pending.type]: (state) => {
      state.isLoadingNearestStores = true;
      state.nearestStores = [];
      state.circleDistance = 2500;
      state.errorMessage = undefined;
    },
    [getNearestStores.fulfilled.type]: (state, action) => {
      state.isLoadingNearestStores = false;
      state.nearestStores = action.payload.nearestStores;
      state.circleDistance = action.payload.distance;
      state.errorMessage = undefined;
    },
    [getNearestStores.rejected.type]: (state) => {
      state.isLoadingNearestStores = false;
      state.nearestStores = [];
      state.circleDistance = 2500;
      state.errorMessage =
        "No encontramos tienditas cercanas a la dirección añadida, intenta con otra.";
    },
  },
});

/**
 * Actions
 */
export const {
  resetNearestStores,
  setStoreAsSelected,
  setUserLocation,
  setSelectedStore,
  clearSelectedStore,
  clearErrorMessage,
} = storeSlice.actions;

/**
 * Reducers
 */
export const storeReducer = storeSlice.reducer;
