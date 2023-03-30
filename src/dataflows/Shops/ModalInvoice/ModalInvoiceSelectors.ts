import { RootState } from "state/store";

import { IModalInvoice } from "../IModalInvoice";

/**
 * Selector to get the ModalInvoice props
 * @param {RootState} state the root state
 * @returns {IModalInvoice} the ModalInvoice value
 */
export const selectModalInvoice = (state: RootState): IModalInvoice =>
  state.shops.modalInvoice.modalInvoice;

/**
 * Selector to get the selectIsLoadingModalInvoice state
 * @param {RootState} state the root state
 * @returns {Boolean} the selectIsLoadingModalInvoice state
 */
export const selectIsLoadingModalInvoice = (state: RootState): boolean =>
  state.shops.modalInvoice.isLoadingModalInvoice;
