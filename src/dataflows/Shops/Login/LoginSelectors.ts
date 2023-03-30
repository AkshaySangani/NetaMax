import { ShopsLoginWizardSteps } from "constants/shopsConstants";
import { RootState } from "state/store";

import { IShopUser } from "../IShopUser";

/**
 * Selector to get the current step
 * @param {RootState} state the root state
 * @returns {ShopsLoginWizardSteps} the current step
 */
export const selectCurrentStep = (state: RootState): ShopsLoginWizardSteps =>
  state.shops.login.currentStep;

/**
 * Selector to get the countdown timer
 * @param {RootState} state the root state
 * @returns {boolean} the countdown timer
 */
export const selectCountDown = (state: RootState): number => state.shops.login.countDown;

/**
 * The JWT auth token
 * @param {RootState} state the root state
 * @returns {string | undefined} the token
 */
// export const selectToken = (state: RootState): string | undefined => state.shops.login.token;

/**
 * Indicates if it is loading
 * @param {RootState} state the root state
 * @returns {boolean} true if is loading
 */
export const selectIsLoadingLogIn = (state: RootState): boolean => state.shops.login.isLoadingLogIn;

/**
 * Indicates if it is loading
 * @param {RootState} state the root state
 * @returns {boolean} true if is loading
 */
export const selectIsSendingOtpCode = (state: RootState): boolean =>
  state.shops.login.isSendingOtpCode;

/**
 * Gets the value of isAuth
 * @param {RootState} state the root state
 * @returns {boolean} the value in boolean
 */
export const selectIsAuth = (state: RootState): boolean | undefined => state.shops.login.isAuth;

/**
 * Gets the error message
 * @param {RootState} state the root state
 * @returns {string | undefined} the error message
 */
export const selectOtpCodeError = (state: RootState): string | undefined =>
  state.shops.login.otpCodeError;

/**
 * Selector to get the Shop User's info
 * @param {RootState} state the root state
 * @returns {IShopUser} the Shop User info
 */
export const selectShopUser = (state: RootState): IShopUser[] | undefined =>
  state.shops.login.shopUser;

/**
 * Selector to get the Shop User's info
 * @param {RootState} state the root state
 * @returns {IShopUser} the Shop User info
 */
export const selectIsOtpDrawerOpen = (state: RootState): boolean =>
  state.shops.login.isOtpDrawerOpen;
