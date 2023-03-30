import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {
  acquireToken,
  getCustomerInfo,
  postSendZipCode,
  sendOtpCodeCore,
  validateOtpCode,
} from "./AuthThunks";
import { IAuthState } from "./IAuthState";
import { ICustomer } from "./ICustomer";

const initialState: IAuthState = {
  isLoadingLogIn: false,
  isSendingOtpCode: false,
  isSendingZipCode: false,
  isLoadingOrderReview: false,
  deviceId: "",
  isOtpSent: false,
  validateOtpSuccess: undefined,
  accessTokenLogin: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    LogOut: (state) => {
      state.accessToken = undefined;
      state.refreshToken = undefined;
      state.customer = undefined;
    },
    setIsNewUserToFalse: (state) => {
      if (state.customer) state.customer.isNewUser = false;
    },
    setJwtToken: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload;
    },
    setDeviceId: (state, action: PayloadAction<string>) => {
      state.deviceId = action.payload;
    },
    clearLoginErrorMessage: (state) => {
      state.errorMessage = undefined;
    },
    clearIsOtpSent: (state) => {
      state.isOtpSent = false;
    },
  },
  extraReducers: {
    [acquireToken.fulfilled.type]: (
      state,
      action: PayloadAction<{
        accessToken: string;
        customer: ICustomer;
        refreshToken: string;
      }>
    ) => {
      state.accessToken = action.payload.accessToken;
      state.customer = action.payload.customer;
      state.refreshToken = action.payload.refreshToken;
      state.isLoadingLogIn = false;
    },
    [acquireToken.pending.type]: (state) => {
      state.isLoadingLogIn = true;
      state.errorMessage = undefined;
    },
    [acquireToken.rejected.type]: (state, payload) => {
      state.isLoadingLogIn = false;
      state.errorMessage = payload.error.message;
      state.accessToken = undefined;
      state.refreshToken = undefined;
      state.customer = undefined;
    },
    [getCustomerInfo.pending.type]: (state) => {
      state.isLoadingOrderReview = true;
    },
    [getCustomerInfo.fulfilled.type]: (state, action) => {
      state.customer = { ...state.customer, ...action.payload } as ICustomer;
      state.isLoadingOrderReview = false;
    },
    [getCustomerInfo.rejected.type]: (state) => {
      if (state.customer) {
        state.customer.customerCurrentNetaWallet = "0";
      }
    },
    [postSendZipCode.fulfilled.type]: (state) => {
      state.isSendingZipCode = false;
    },
    [postSendZipCode.pending.type]: (state) => {
      state.isSendingZipCode = true;
    },
    [postSendZipCode.rejected.type]: (state) => {
      state.isSendingZipCode = false;
    },
    [validateOtpCode.fulfilled.type]: (
      state,
      action: PayloadAction<{
        validateOtpSuccess: boolean;
        message: string;
        accessToken: string;
      }>
    ) => {
      state.accessTokenLogin = action?.payload?.accessToken || undefined;
      state.validateOtpSuccess = action?.payload?.validateOtpSuccess || false;
    },
    [validateOtpCode.rejected.type]: (state) => {
      state.validateOtpSuccess = false;
    },
    [validateOtpCode.pending.type]: (state) => {
      state.errorMessage = undefined;
      state.validateOtpSuccess = undefined;
    },
    [sendOtpCodeCore.fulfilled.type]: (
      state,
      action: PayloadAction<{
        error: boolean;
        message: string;
      }>
    ) => {
      state.errorMessage = undefined;
      state.isSendingOtpCode = false;
      state.isOtpSent = !action.payload.error;
    },
    [sendOtpCodeCore.pending.type]: (state) => {
      state.isOtpSent = false;
      state.errorMessage = undefined;
      state.isSendingOtpCode = true;
    },
    [sendOtpCodeCore.rejected.type]: (state, payload) => {
      state.isSendingOtpCode = false;
      state.isOtpSent = false;
      state.errorMessage = payload.error.message;
    },
  },
});

/**
 * Actions
 */
export const {
  LogOut,
  setIsNewUserToFalse,
  setJwtToken,
  setDeviceId,
  clearLoginErrorMessage,
  clearIsOtpSent,
} = authSlice.actions;

/**
 * Reducers
 */
export const authReducer = authSlice.reducer;
