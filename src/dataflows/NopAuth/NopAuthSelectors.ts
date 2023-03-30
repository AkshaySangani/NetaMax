import { RootState } from "state/store";

/**
 * The JWT auth token NopCommerce
 * @param {RootState} state the root state
 * @returns {string | undefined} the token
 */
export const selectToken = (state: RootState): string | undefined => state.nopAuth.token;

/**
 * Selector to get the isLoadingToken state from the state.
 * @param {RootState} state the root state
 * @returns {boolean} the isLoadingToken state
 */
export const selectIsLoadingToken = (state: RootState): boolean => state.nopAuth.isLoadingToken;
