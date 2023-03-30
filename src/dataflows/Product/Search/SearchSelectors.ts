import { IPaginatedMetadata } from "dataflows/IPagedData";
import { RootState } from "state/store";
import { filterProductsForUnderLegalAge } from "utils/productUtils";

import { IProduct } from "../IProduct";

/**
 * Selector to get the promotion products.
 * @param {RootState} state the root state
 * @returns {IProduct[]} the category products.
 */
export const selectSearchProducts = (state: RootState): IProduct[] =>
  filterProductsForUnderLegalAge(
    state.products.search.products,
    !!state.legalAge.isUserUnderLegalAge
  );

/**
 * Selector to get the metadata products.
 * @param {RootState} state the root state
 * @returns {IPaginatedMetadata} the metadata.
 */
export const selectSearchMetadata = (state: RootState): IPaginatedMetadata =>
  state.products.search.metadata;

/**
 * Selector to get the isLoadingPromotionProducts state from the state.
 * @param {RootState} state the root state
 * @returns {boolean} the isLoadingPromotionProducts state
 */
export const selectIsLoadingSearchProducts = (state: RootState): boolean =>
  state.products.search.isLoading;

/**
 * Selector to get the searchBarProducts state from the state.
 * @param {RootState} state the root state
 * @returns {IProduct[]} the products
 */
export const selectSearchBarProducts = (state: RootState): IProduct[] =>
  state.products.search.searchBarProducts;

/**
 * Selector to get the isLoadingSearchBarProducts state from the state.
 * @param {RootState} state  the root state
 * @returns {boolean} the isLoadingSearchBarProducts state
 */
export const selectIsLoadingSearchBarProducts = (state: RootState): boolean =>
  state.products.search.isLoadingSearchBarProducts;

/**
 * Selector to get the hasMoreProducts state from the state.
 * @param {RootState} state the root state
 * @returns {boolean} the hasMoreProducts state
 */
export const selectHasMoreProducts = (state: RootState): boolean =>
  state.products.search.hasMoreProducts;

/**
 * Selector to get the emptySearchMessage state from the state.
 * @param {RootState} state the root state
 * @returns {string} the emptySearchMessage state
 */
export const selectEmptySearchMessage = (state: RootState): string =>
  state.products.search.emptySearchMessage;
