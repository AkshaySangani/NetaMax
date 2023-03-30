import { IPaginatedMetadata } from "dataflows/IPagedData";
import { RootState } from "state/store";

import { IOrderShops } from "../IOrderShops";
import { ISummary } from "../ISummary";

/**
 * Selector to get the invoices
 * @param {RootState} state the root state
 * @returns {IInvoiceProps[]} the invoice items
 */
export const selectOrders = (state: RootState): IOrderShops[] | undefined =>
  state.shops.sales.orders?.records;

/**
 * Selector to get the invoices
 * @param {RootState} state the root state
 * @returns {IInvoiceProps[]} the invoice items
 */
export const selectOrdersMetadata = (state: RootState): IPaginatedMetadata | undefined =>
  state.shops.sales.orders?.metadata;

/**
 * Selector to get the summary
 * @param {RootState} state the root state
 * @returns {ISummaryProps[]} the summary items
 */
export const selectSummary = (state: RootState): ISummary | undefined => state.shops.sales.summary;

/**
 * Selector to get the selectIsLoadingInvoices state from the state.
 * @param {RootState} state the root state
 * @returns {boolean} the selectIsLoadingInvoices state
 */
export const selectIsLoadingSales = (state: RootState): boolean => state.shops.sales.isLoadingSales;
