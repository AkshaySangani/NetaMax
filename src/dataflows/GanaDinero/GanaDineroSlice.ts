import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {
  addCoins,
  availableChallenges,
  getCoins,
  getOrderChallengeStatus,
} from "./GanaDineroThunks";
import { IChallenge } from "./IChallenge";
import { ICoins } from "./ICoins";
import { IGanaDineroState } from "./IGanaDineroState";

const initialState: IGanaDineroState = {
  isLoadingGetCoins: false,
  coinsLoaded: false,
  isLoadingAddCoins: false,
  isLoadingAvailableChallenges: false,
  isLoadingWinnerChallenges: false,
  coins: undefined,
  coinsBeforeLogin: false,
  availableChallenges: [],
  statusChallenges: [],
  showChallengeModal: false,
  isGMVNotified: false,
  isSKUNotified: false,
  isCategoryNotified: false,
  awardedCoins: 0,
};

const ganaDineroSlice = createSlice({
  name: "ganaDinero",
  initialState,
  reducers: {
    saveCoins: (state) => {
      state.coinsBeforeLogin = true;
    },
    clearCoins: (state) => {
      state.coinsBeforeLogin = false;
    },
    showChallengeModal: (state) => {
      state.showChallengeModal = true;
    },
    closeChallengeModal: (state) => {
      state.showChallengeModal = false;
    },
    notifyGMVComplete: (state) => {
      state.isGMVNotified = true;
    },
    clearGMVNotified: (state) => {
      state.isGMVNotified = false;
    },
    notifySKUComplete: (state) => {
      state.isSKUNotified = true;
    },
    clearSKUNotified: (state) => {
      state.isSKUNotified = false;
    },
    notifyCategoryComplete: (state) => {
      state.isCategoryNotified = true;
    },
    clearCategoryNotified: (state) => {
      state.isCategoryNotified = false;
    },
  },
  extraReducers: {
    [getCoins.pending.type]: (state) => {
      state.isLoadingGetCoins = true;
    },
    [getCoins.fulfilled.type]: (state, action: PayloadAction<ICoins>) => {
      state.coins = action.payload;
      state.isLoadingGetCoins = false;
    },
    [getCoins.rejected.type]: (state) => {
      state.isLoadingGetCoins = false;
    },
    [addCoins.pending.type]: (state) => {
      state.isLoadingAddCoins = true;
      state.coinsLoaded = false;
    },
    [addCoins.fulfilled.type]: (state) => {
      state.coinsLoaded = true;
      state.isLoadingAddCoins = false;
    },
    [addCoins.rejected.type]: (state) => {
      state.isLoadingAddCoins = false;
      state.coinsLoaded = false;
    },
    [availableChallenges.pending.type]: (state) => {
      state.isLoadingAvailableChallenges = true;
    },
    [availableChallenges.fulfilled.type]: (state, action: PayloadAction<IChallenge[]>) => {
      state.availableChallenges = action.payload;
      state.statusChallenges = action.payload;
      state.isLoadingAvailableChallenges = false;
    },
    [availableChallenges.rejected.type]: (state) => {
      state.isLoadingAvailableChallenges = false;
    },
    [getOrderChallengeStatus.fulfilled.type]: (
      state,
      action: PayloadAction<{ isWinner: boolean; coins: number }>
    ) => {
      state.showChallengeModal = action.payload.isWinner;
      state.awardedCoins = action.payload.coins;
    },
    [getOrderChallengeStatus.rejected.type]: (
      state,
      action: PayloadAction<{ isWinner: boolean }>
    ) => {
      state.showChallengeModal = action.payload.isWinner;
    },
  },
});

/**
 * Actions
 */
export const {
  saveCoins,
  clearCoins,
  showChallengeModal,
  closeChallengeModal,
  notifyGMVComplete,
  clearGMVNotified,
  notifySKUComplete,
  clearSKUNotified,
  notifyCategoryComplete,
  clearCategoryNotified,
} = ganaDineroSlice.actions;

/**
 * Reducers
 */
export const ganaDineroReducer = ganaDineroSlice.reducer;
