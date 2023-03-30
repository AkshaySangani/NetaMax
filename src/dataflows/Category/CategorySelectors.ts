import { CATEGORIES_LEGAL_AGE_REQUIRED } from "constants/legalAgeConstants";
import { RootState } from "state/store";

import { ICategory } from "./ICategory";

/**
 * Selector to get the basket items from the state.
 * @param {RootState} state the root state
 * @returns {ICategory[]} the basket items
 */
export const selectAllCategories = (state: RootState): ICategory[] => {
  if (state.legalAge.isUserUnderLegalAge) {
    return state.category.categoryItems.filter(
      (c) => !CATEGORIES_LEGAL_AGE_REQUIRED.includes(c.id)
    );
  } else {
    return state.category.categoryItems;
  }
};

/**
 * Selector to get the isLoading state from the state.
 * @param {RootState} state the root state
 * @returns {boolean} the isLoading state
 */
export const selectIsLoading = (state: RootState): boolean => state.category.isLoading;

/**
 * Selector to get the selected category from the state.
 * @param {RootState} state the root state.
 * @returns {ICategory} the selected category.
 */
export const selectSelectedCategory = (state: RootState): ICategory | undefined =>
  state.category.selectedCategory;
