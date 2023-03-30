import { COUNTDOWN_TIMER_SECONDS } from "constants/checkoutConstants";
import {
  ERROR_MESSAGE_INVALID_CODE,
  ERROR_MESSAGE_INVALID_NUMBER,
  ERROR_MESSAGE_NO_STORE,
  ShopsLoginWizardSteps,
} from "constants/shopsConstants";
import { logInStore, sendOtpCode } from "dataflows/Shops/Login/LoginThunks";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IResponseLogInOtp } from "../IResponseLogInOtp";
import { ILoginState } from "./ILoginState";

const initialState: ILoginState = {
  currentStep: ShopsLoginWizardSteps.PHONE_NUMBER,
  countDown: COUNTDOWN_TIMER_SECONDS,
  isSendingOtpCode: false,
  otpCodeError: "",
  isLoadingLogIn: false,
  isAuth: false,
  isOtpDrawerOpen: false,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setCurrentStep: (state, action: PayloadAction<ShopsLoginWizardSteps>) => {
      state.currentStep = action.payload;
    },
    moveToPreviousStep: (state) => {
      state.isOtpDrawerOpen = false;
    },
    setCountDown: (state, action: PayloadAction<number>) => {
      state.countDown = action.payload;
    },
    resetCountDown: (state) => {
      state.countDown = COUNTDOWN_TIMER_SECONDS;
    },
    setIsSendingOtpCode: (state, action: PayloadAction<boolean>) => {
      state.isSendingOtpCode = action.payload;
    },
    setIsLoadingLogIn: (state, action: PayloadAction<boolean>) => {
      state.isLoadingLogIn = action.payload;
    },
    LogOut: (state) => {
      state.currentStep = ShopsLoginWizardSteps.PHONE_NUMBER;
      state.token = undefined;
      state.shopUser = undefined;
      state.isAuth = false;
    },
  },
  extraReducers: {
    [sendOtpCode.pending.type]: (state) => {
      state.isSendingOtpCode = true;
    },
    [sendOtpCode.fulfilled.type]: (state) => {
      state.isSendingOtpCode = false;
      state.currentStep = ShopsLoginWizardSteps.VERIFICATION_CODE;
      state.isOtpDrawerOpen = true;
    },
    [sendOtpCode.rejected.type]: (state) => {
      state.isSendingOtpCode = false;
      state.otpCodeError = ERROR_MESSAGE_INVALID_NUMBER;
    },
    // Authenticate user from OTP
    [logInStore.pending.type]: (state) => {
      state.isAuth = false;
    },
    [logInStore.fulfilled.type]: (state, action: PayloadAction<IResponseLogInOtp>) => {
      if (action.payload.store.length) {
        state.isAuth = true;
        state.token = action.payload.token;
        state.shopUser = action.payload.store;
        state.otpCodeError = "";
        state.countDown = 0;
      } else {
        state.isAuth = false;
        state.otpCodeError = ERROR_MESSAGE_NO_STORE;
      }
    },
    [logInStore.rejected.type]: (state) => {
      state.otpCodeError = ERROR_MESSAGE_INVALID_CODE;
    },
  },
});

/**
 * Actions
 */
/* Actions */
export const {
  setCurrentStep,
  moveToPreviousStep,
  setCountDown,
  resetCountDown,
  setIsLoadingLogIn,
  LogOut,
} = loginSlice.actions;

/**
 * Reducer
 */

export const loginReducer = loginSlice.reducer;
