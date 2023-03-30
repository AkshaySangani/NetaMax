import { RootState } from "state/store";

import { IProduct } from "../IProduct";

/**
 * Selector to get the selectedProduct state from the state.
 * @param {RootState} state the root state
 * @returns {IProduct} the selectedProduct state
 */
export const selectSelectedProduct = (state: RootState): IProduct | undefined =>
  state.products.selectedProduct.product;

/**
 * Selector to get the isLoadingSelectedProduct state from the state.
 * @param {RootState} state the root state
 * @returns {boolean} the isLoadingSelectedProduct state
 */
export const selectIsLoadingSelectedProduct = (state: RootState): boolean =>
  state.products.selectedProduct.isLoading;
