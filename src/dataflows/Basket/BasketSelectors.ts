import { selectCustomer } from "dataflows/Auth/AuthSelectors";
import { RootState } from "state/store";

import { IBasketItem } from "./IBasketItem";
import { selectPayWithMonetas } from "../Checkout/CheckoutSelectors";

/**
 * Selector to get the basket items from the state.
 * @param {RootState} state the root state
 * @returns {IBasketItem[]} the basket items
 */
export const selectBasketItems = (state: RootState): IBasketItem[] => state.basket.basketItems;

/**
 * Selector to get the basket total from the state.
 * @param {RootState} state the root state
 * @returns {number} the basket total
 */
export const selectTotalBasketItems = (state: RootState): number =>
  state.basket.basketItems.reduce((total, item) => total + item.quantity, 0);

/**
 * Selector to get the basket total from the state.
 * @param {RootState} state the root state
 * @returns {number} the basket total
 */
export const selectTotalBasketPrice = (state: RootState): number =>
  state.basket.basketItems.reduce((total, item) => total + item.price * item.quantity, 0);

/**
 * Selector to get the total discount from the state.
 * @param {RootState} state the root state
 * @returns {number} the basket total
 */
export const selectTotalDiscountPrice = (state: RootState): number =>
  state.basket.basketItems.reduce((total, item) => {
    if (item.oldPrice > item.price) {
      return total + (item.oldPrice - item.price) * item.quantity;
    } else return total;
  }, 0);

/**
 * The selector to get the discount amount based on coupon.
 * @param {RootState} state the root state
 * @returns {ReactElement} the discount amount
 */
export const selectDiscountAmount = (state: RootState): number => {
  const coupon = state.checkout.coupon;
  const actualCoupon = coupon && coupon[0];
  const totalNetPrice = selectTotalBasketPrice(state);

  const isPercentDiscount = Number(actualCoupon?.discountPercentage) > 0;
  if (actualCoupon === undefined) {
    return 0;
  }
  return isPercentDiscount
    ? (totalNetPrice * Number(actualCoupon?.discountPercentage)) / 100
    : Number(actualCoupon?.discountAmount);
};

/**
 * The selector to get the wallet amount.
 * @param {RootState} state the root state
 * @returns {ReactElement} the discount amount
 */
export const selectWalletAmount = (state: RootState): number => {
  const totalNetPrice = selectTotalBasketPrice(state);
  const discountAmount = selectDiscountAmount(state);
  const totalNetAmount = totalNetPrice - discountAmount;
  const customer = selectCustomer(state);
  const netaWallet = Number(customer?.customerCurrentNetaWallet) || 0;
  if (totalNetAmount <= 0) {
    return 0;
  }
  if (totalNetAmount > netaWallet) {
    return netaWallet;
  } else {
    return totalNetAmount;
  }
};

/**
 * The selector to get the total amount based on coupon and netaWallet.
 * @param {RootState} state the root state
 * @returns {ReactElement} the total amount
 */
export const selectTotalAmount = (state: RootState): number => {
  const totalNetPrice = selectTotalBasketPrice(state);
  const discountAmount = selectDiscountAmount(state);
  const netaWallet = selectWalletAmount(state);
  const payWithMonetas = selectPayWithMonetas(state);
  const totalAmount = payWithMonetas
    ? totalNetPrice - discountAmount - netaWallet
    : totalNetPrice - discountAmount;
  if (totalAmount > 0) {
    return totalAmount;
  } else {
    return 0;
  }
};
