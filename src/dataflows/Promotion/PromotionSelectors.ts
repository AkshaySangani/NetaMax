import { RootState } from "state/store";
import { filterPromotionsForUnderLegalAge } from "utils/productUtils";

import { IPromotion } from "./IPromotion";

/**
 * Selector to get the sales products.
 * @param {RootState} state the root state
 * @returns {IPromotion[]} the sales products.
 */
export const selectAllPromotions = (state: RootState): IPromotion[] =>
  filterPromotionsForUnderLegalAge(
    state.promotion.promotionItems,
    !!state.legalAge.isUserUnderLegalAge
  );

/**
 * Selector to get the isLoadingSalesSection state from the state.
 * @param {RootState} state the root state
 * @returns {boolean} the isLoadingSalesSection state
 */
export const selectIsLoadingPromotionSection = (state: RootState): boolean =>
  state.promotion.isLoadingPromotionSection;

/**
 * Selector to get the selectedProduct state from the state.
 * @param {RootState} state the root state
 * @returns {IPromotion} the selectedProduct state
 */
export const selectSelectedPromotion = (state: RootState): IPromotion | undefined =>
  state.promotion.selectedPromotion;
