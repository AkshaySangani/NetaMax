import { RootState } from "state/store";

import { IOrderDetails } from "./IOrderDetails";

/**
 * Selector to get the order items from the state.
 * @param {RootState} state the root state.
 * @returns {any} the selected orders.
 */
export const selectOrder = (state: RootState): IOrderDetails | undefined =>
  state?.nopOrders?.orderDetails;

/**
 * Selector to get the isLoadingOrder state from the state.
 * @param {RootState} state the root state
 * @returns {boolean} the isLoadingOrder state
 */
export const selectIsLoadingOrder = (state: RootState): boolean => state?.nopOrders?.isLoadingOrder;
