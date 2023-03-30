import { RootState } from "state/store";

/**
 * Selector to get the legal age from the state.
 * @param {RootState} state the root state.
 * @returns {any} the selected legal age.
 */
export const selectIsUserUnderLegalAge = (state: RootState): boolean | undefined =>
  state.legalAge.isUserUnderLegalAge;
