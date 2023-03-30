import { RootState } from "state/store";
import { filterProductsForUnderLegalAge } from "utils/productUtils";

import { IProduct } from "../IProduct";

/**
 * Selector to get the recommendations from a selected product
 * @param {RootState} state the root state
 * @returns {IProduct[]} the recommended products
 */
export const selectRecommendedProducts = (state: RootState): IProduct[] =>
  filterProductsForUnderLegalAge(
    state.products.recommendedProducts.recommendedProducts,
    !!state.legalAge.isUserUnderLegalAge
  );
