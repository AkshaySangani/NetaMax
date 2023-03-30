import { CheckoutWizardSteps, OrderStatus } from "constants/checkoutConstants";
import { RootState } from "state/store";

import { ICoupon } from "./ICoupon";

/**
 * Selector to get the checkout panel state
 * @param {RootState} state the root state
 * @returns {boolean} true if it is open, false otherwise
 */
export const selectIsOpen = (state: RootState): boolean => state.checkout.isOpen;

/**
 * Selector to get the current step
 * @param {RootState} state the root state
 * @returns {CheckoutWizardSteps} the current step
 */
export const selectCurrentStep = (state: RootState): CheckoutWizardSteps =>
  state.checkout.currentStep;

/**
 * Selector to get the current order status
 * @param {RootState} state the root state
 * @returns {OrderStatus} the current order status
 */
export const selectOrderStatus = (state: RootState): OrderStatus => state.checkout.orderStatus;

/**
 * Selector to get the placing order status
 * @param {RootState} state the root state
 * @returns {boolean} the current placing order status
 */
export const selectPlacingOrderStatus = (state: RootState): boolean =>
  state.checkout.isPlacingOrder;

/**
 * Selector to get the countdown timer
 * @param {RootState} state the root state
 * @returns {boolean} the countdown timer
 */
export const selectCountDown = (state: RootState): number => state.checkout.countDown;

/**
 * Selector to get the placing order status
 * @param {RootState} state the root state
 * @returns {boolean} the current placing order status
 */
export const selectIsCheckingCoupon = (state: RootState): boolean =>
  state.checkout.isCheckingCoupon;

/**
 * Selector to get the countdown timer
 * @param {RootState} state the root state
 * @returns {string} the countdown timer
 */
export const selectCoupon = (state: RootState): ICoupon[] | undefined => state.checkout.coupon;

/**
 * The selector to get the error message
 * @param {RootState} state the root state
 * @returns {ReactElement} the error message
 */
export const selectPlaceOrderErrorMessage = (state: RootState): string | undefined =>
  state.checkout.placeOrderErrorMessage;

/**
 * The selector to get the coupon error message
 * @param {RootState} state the root state
 * @returns {ReactElement} the coupon error message
 */
export const selectCouponErrorMessage = (state: RootState): string | undefined =>
  state.checkout.couponErrorMessage;

/**
 * Selector to get if the user pays with monetas
 * @param {RootState} state the root state
 * @returns {boolean} the pay with monetas flag
 */
export const selectPayWithMonetas = (state: RootState): boolean => state.checkout.payWithMonetas;

/** The selector for the flag to indicate only login steps
 * @param {RootState} state the root state
 * @returns {boolean} the flag to indicate only login steps
 */
export const selectOnlyLoginSteps = (state: RootState): boolean => state.checkout.onlyLoginSteps;
