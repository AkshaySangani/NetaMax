import { IPaginatedMetadata } from "dataflows/IPagedData";
import { RootState } from "state/store";

import { IOrder } from "./IOrder";
import { IOrderDetail } from "./IOrderDetail";

/**
 * Selector loading getOrderByOrderId
 * @param {RootState} state the root state
 * @returns {boolean} the countdown timer
 */
export const selectIsLoadingGetOrderByOrderId = (state: RootState): boolean =>
  state.misCompras.isLoadingGetOrderByOrderId;

/**
 * Selector to get object of order
 * @param {RootState} state the root state
 * @returns {IOrder} the countdown timer
 */
export const selectOrders = (state: RootState): IOrder[] | undefined =>
  state.misCompras.orders?.records;

/**
 * Selector to get the order detail.
 * @param {RootState} state the root state
 * @returns {IOrderDetail} the countdown timer
 */
export const selectOrderDetail = (state: RootState): IOrderDetail | undefined =>
  state.misCompras.order;

/**
 * Selector to get the order page metadata
 * @param {RootState} state the root state
 * @returns {IPaginatedMetadata} the order page metadata
 */
export const selectOrdersMetadata = (state: RootState): IPaginatedMetadata =>
  state.misCompras.orders.metadata;

/**
 * Selector to get the orders Loader
 * @param {RootState} state the root state
 * @returns {boolean} the orders Loader
 */
export const selectIsLoadingOrders = (state: RootState): boolean =>
  state.misCompras.isLoadingOrders;
