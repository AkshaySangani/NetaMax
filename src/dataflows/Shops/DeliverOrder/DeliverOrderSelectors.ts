import { RootState } from "state/store";

import { IPickedUpOrderDetail } from "./IPickedUpOrderDetail";

/**
 * Selector to get the pick up authentication panel state
 * @param {RootState} state the root state
 * @returns {boolean} true if it is open, false otherwise
 */
export const selectIsOpen = (state: RootState): boolean => state.shops.deliverOrder.isOpen;

/**
 * Indicates if it is loading
 * @param {RootState} state the root state
 * @returns {boolean} true if is loading
 */
export const selectIsLoadingPickUpToken = (state: RootState): boolean =>
  state.shops.deliverOrder.isLoadingPickUpToken;

/**
 * Indicates if it is delivering the order
 * @param {RootState} state the root state
 * @returns {boolean} true if is currently delivering
 */
export const selectIsDeliveringOrder = (state: RootState): boolean =>
  state.shops.deliverOrder.isDeliveringOrder;

/**
 * Gets the token error message
 * @param {RootState} state the root state
 * @returns {string | undefined} the token error message
 */
export const selectTokenErrorMessage = (state: RootState): string | undefined =>
  state.shops.deliverOrder.tokenErrorMessage;

/**
 * Gets the deliver error message
 * @param {RootState} state the root state
 * @returns {string | undefined} the token error message
 */
export const selectDeliverErrorMessage = (state: RootState): string | undefined =>
  state.shops.deliverOrder.deliverErrorMessage;

/**
 * Gets the picked up order detail
 * @param {RootState} state the root state
 * @returns {IPickedUpOrderDetail | undefined} the picked up order detail
 */
export const selectPickedUpOrderDetail = (state: RootState): IPickedUpOrderDetail | undefined =>
  state.shops.deliverOrder.orderDetail;

/**
 * Indicates if the order was delivered correctly
 * @param {RootState} state the root state
 * @returns {boolean} if the order was delivered correctly
 */
export const selectDeliverSuccess = (state: RootState): boolean =>
  state.shops.deliverOrder.deliverSuccess;
