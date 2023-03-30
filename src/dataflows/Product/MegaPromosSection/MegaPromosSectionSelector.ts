import { IPaginatedMetadata } from "dataflows/IPagedData";
import { RootState } from "state/store";
import { filterProductsForUnderLegalAge } from "utils/productUtils";

import { IProduct } from "../IProduct";

/**
 * Selector to get the promotion products.
 * @param {RootState} state the root state
 * @returns {IProduct[]} the promotion products.
 */
export const selectMegaPromosSectionProducts = (state: RootState): IProduct[] =>
  filterProductsForUnderLegalAge(
    state.products.megaPromosSection.products,
    !!state.legalAge.isUserUnderLegalAge
  );

/**
 * Selector to get the promotion products page metadata state from the state.
 * @param {RootState} state the root state
 * @returns {boolean} the promotion products page metadata
 */
export const selectMegaPromosSectionPageMetadata = (state: RootState): IPaginatedMetadata => ({
  currentPage: state.products.megaPromosSection.currentPage,
  perPage: state.products.megaPromosSection.productsPerPage,
  totalPages: state.products.megaPromosSection.totalPages,
});

/**
 * Selector to get the isLoadingSalesSectionSection state from the state.
 * @param {RootState} state the root state
 * @returns {boolean} the selectIsLoadingSalesSectionSect state
 */
export const selectIsLoadingMegaPromosSection = (state: RootState): boolean =>
  state.products.megaPromosSection.isLoading;
