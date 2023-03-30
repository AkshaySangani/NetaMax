import { IPagedData, IPaginatedMetadata } from "dataflows/IPagedData";
import { RootState } from "state/store";
import { filterProductsForUnderLegalAge } from "utils/productUtils";

import { IProduct } from "../IProduct";

/**
 * Selector to get the node products.
 * @param {RootState} state the root state
 * @returns {IProduct[]} the node products.
 */
export const selectNodeProducts = (state: RootState): IProduct[] =>
  filterProductsForUnderLegalAge(
    state.products.nodeProducts.products,
    !!state.legalAge.isUserUnderLegalAge
  );
/**
 * Selector to get the node products page metadata state from the state.
 * @param {RootState} state the root state
 * @returns {boolean} the node products page metadata
 */
export const selectNodeProductsPageMetadata = (state: RootState): IPaginatedMetadata => ({
  currentPage: state.products.nodeProducts.currentPage,
  perPage: state.products.nodeProducts.productsPerPage,
  totalPages: state.products.nodeProducts.totalPages,
});

/**
 * Selector to get the isLoadingNodeProductsSection state from the state.
 * @param {RootState} state the root state
 * @returns {boolean} the selectIsLoadingNodeProductsSect state
 */
export const selectIsLoadingNodeProducts = (state: RootState): boolean =>
  state.products.nodeProducts.isLoading;

/**
 * Selector to get the home node products.
 * @param {RootState} state the root state
 * @returns {Record<string, IPagedData<IProduct>>} the home node products.
 */
export const selectHomeNodeProducts = (state: RootState): Record<string, IPagedData<IProduct>> =>
  state.products.nodeProducts.homeNodeProducts;

/**
 * Selector to get the isLoadingHomeNodeProducts
 * @param {RootState} state the root state.
 * @returns {boolean} the isLoadingHomeNodeProducts.
 */
export const selectIsLoadingHomeNodeProducts = (state: RootState): boolean =>
  state.products.nodeProducts.isLoadingHomeNodeProducts;
