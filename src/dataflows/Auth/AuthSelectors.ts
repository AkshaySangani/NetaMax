import { RootState } from "state/store";

import { ICustomer } from "./ICustomer";

/**
 * The JWT auth token
 * @param {RootState} state the root state
 * @returns {string | undefined} the token
 */
export const selectToken = (state: RootState): string | undefined => state.auth.accessToken;

/**
 * The customer
 * @param {RootState} state the root state
 * @returns {ICustomer | undefined} the customer
 */
export const selectCustomer = (state: RootState): ICustomer | undefined => state.auth.customer;

/**
 * Indicates if it is loading
 * @param {RootState} state the root state
 * @returns {boolean} true if is loading
 */
export const selectIsLoadingLogIn = (state: RootState): boolean => state.auth.isLoadingLogIn;

/**
 * Indicates if it is loading
 * @param {RootState} state the root state
 * @returns {boolean} true if is loading
 */
export const selectIsSendingOtpCode = (state: RootState): boolean => state.auth.isSendingOtpCode;

/**
 * Indicates if the customer is logged in
 * @param {RootState} state the root state
 * @returns {boolean} true if the customer is logged in
 */
export const selectIsLoggedIn = (state: RootState): boolean => !!state.auth.accessToken;

/**
 * Gets the error message
 * @param {RootState} state the root state
 * @returns {string | undefined} the error message
 */
export const selectErrorMessage = (state: RootState): string | undefined => state.auth.errorMessage;

/**
 * Indicates if the order review screen is loading
 * @param {RootState} state the root state
 * @returns {boolean} true if the order review screen is loading
 */
export const selectIsLoadingOrderReview = (state: RootState): boolean =>
  state.auth.isLoadingOrderReview;

/**
 * Select the device id
 * @param {RootState} state the root state
 * @returns {string} the device id
 */
export const selectDeviceId = (state: RootState): string => state.auth.deviceId;
/**
 * Indicats if the validation otp was success
 * @param {RootState} state the root state
 * @returns {boolean} true if validation otp was success
 */
export const selectSuccessValidationOtp = (state: RootState): boolean | undefined =>
  state.auth.validateOtpSuccess;

/**
 * Indicates if the OTP code was sent successfully
 * @param {RootState} state the root state.
 * @returns {boolean} true if the OTP code was sent successfully
 */
export const selectIsOtpSent = (state: RootState): boolean => state.auth.isOtpSent;

/**
 * Access token for that user can invoke login
 * @param {RootState} state the root state
 * @returns {boolean} true if validation otp was success
 */
export const selectAccessTokenLogin = (state: RootState): string | undefined =>
  state.auth.accessTokenLogin;
