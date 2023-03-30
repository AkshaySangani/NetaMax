import { IPagedData, IPaginatedMetadata } from "dataflows/IPagedData";
import { RootState } from "state/store";

import { IProduct } from "../IProduct";

/**
 * Selector to get the category products.
 * @param {RootState} state the root state
 * @returns {IProduct[]} the category products.
 */
export const selectCategoryProducts = (state: RootState): IProduct[] =>
  state.products.categoryProducts.products;

/**
 * Selector to get the category products page metadata state from the state.
 * @param {RootState} state the root state
 * @returns {boolean} the category products page metadata
 */
export const selectCategoryProductsPageMetadata = (state: RootState): IPaginatedMetadata => ({
  currentPage: state.products.categoryProducts.currentPage,
  perPage: state.products.categoryProducts.productsPerPage,
  totalPages: state.products.categoryProducts.totalPages,
});

/**
 * Selector to get the isLoadingCategoryProductsSection state from the state.
 * @param {RootState} state the root state
 * @returns {boolean} the selectIsLoadingCategoryProductsSect state
 */
export const selectIsLoadingCategoryProducts = (state: RootState): boolean =>
  state.products.categoryProducts.isLoading;

/**
 * Selector to get the home category products.
 * @param {RootState} state the root state
 * @returns {Record<string, IPagedData<IProduct>>} the home category products.
 */
export const selectHomeCategoryProducts = (
  state: RootState
): Record<string, IPagedData<IProduct>> => state.products.categoryProducts.homeCategoryProducts;

/**
 * Selector to get the isLoadingHomeCategoryProducts
 * @param {RootState} state the root state.
 * @returns {boolean} the isLoadingHomeCategoryProducts.
 */
export const selectIsLoadingHomeCategoryProducts = (state: RootState): boolean =>
  state.products.categoryProducts.isLoadingHomeCategoryProducts;
