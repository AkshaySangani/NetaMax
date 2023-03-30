import { IPaginatedMetadata } from "dataflows/IPagedData";
import { RootState } from "state/store";
import { filterProductsForUnderLegalAge } from "utils/productUtils";

import { IProduct } from "../IProduct";

/**
 * Selector to get the promotion products.
 * @param {RootState} state the root state
 * @returns {IProduct[]} the promotion products.
 */
export const selectPromotionProducts = (state: RootState): IProduct[] =>
  filterProductsForUnderLegalAge(
    state.products.promotionProducts.products,
    !!state.legalAge.isUserUnderLegalAge
  );
/**
 * Selector to get the promotion products page metadata state from the state.
 * @param {RootState} state the root state
 * @returns {boolean} the promotion products page metadata
 */
export const selectPromotionProductsPageMetadata = (state: RootState): IPaginatedMetadata => ({
  currentPage: state.products.promotionProducts.currentPage,
  perPage: state.products.promotionProducts.productsPerPage,
  totalPages: state.products.promotionProducts.totalPages,
});

/**
 * Selector to get the isLoadingPromotionProductsSection state from the state.
 * @param {RootState} state the root state
 * @returns {boolean} the selectIsLoadingPromotionProductsSect state
 */
export const selectIsLoadingPromotionProducts = (state: RootState): boolean =>
  state.products.promotionProducts.isLoading;
