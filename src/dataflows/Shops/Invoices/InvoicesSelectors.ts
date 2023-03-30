import { RootState } from "state/store";

import { IInvoice } from "../IInvoice";

/**
 * Selector to get the invoices
 * @param {RootState} state the root state
 * @returns {IInvoiceProps[]} the invoice items
 */
export const selectInvoices = (state: RootState): IInvoice[] => state.shops.invoices.invoices;

/**
 * Selector to get the selectIsLoadingInvoices state from the state.
 * @param {RootState} state the root state
 * @returns {boolean} the selectIsLoadingInvoices state
 */
export const selectIsLoadingInvoices = (state: RootState): boolean =>
  state.shops.invoices.isLoadingInvoices;
