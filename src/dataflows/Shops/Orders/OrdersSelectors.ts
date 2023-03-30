import { RootState } from "state/store";

import { IItem } from "../IItem";
import { IOrderShops } from "../IOrderShops";

/**
 * Selector to get the orders list
 * @param {RootState} state the root state
 * @returns {IOrderProps} the order value
 */
export const selectOrders = (state: RootState): IOrderShops[] => state.shops.orders.orders;

/**
 * Selector to get the selectIsLoadingOrders state
 * @param {RootState} state the root state
 * @returns {Boolean} the selectIsLoadingOrders state
 */
export const selectIsLoadingOrders = (state: RootState): boolean =>
  state.shops.orders.isLoadingOrders;

/**
 * Selector to get the order items list
 * @param {RootState} state the root state
 * @returns {IObjectProps} the item value
 */
export const selectOrderItems = (state: RootState): IItem[] => state.shops.orders.orderItems;

/**
 * Selector to get the selectIsLoadingOrderItems state
 * @param {RootState} state the root state
 * @returns {Boolean} the selectIsLoadingOrderItems state
 */
export const selectIsLoadingOrderItems = (state: RootState): boolean =>
  state.shops.orders.isLoadingOrderItems;
