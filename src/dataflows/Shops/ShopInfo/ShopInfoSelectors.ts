import { RootState } from "state/store";

/**
 * Selector to get store's current profit
 * @param {RootState} state the root state
 * @returns {IProfit} the current profit value
 */
export const selectCurrentProfit = (state: RootState): number | undefined =>
  state.shops.shopInfo.currentProfit;

/**
 * Indicates if it is loading
 * @param {RootState} state the root state
 * @returns {boolean} true if is loading
 */
export const selectIsLoadingCurrentProfit = (state: RootState): boolean =>
  state.shops.shopInfo.isLoadingCurrentProfit;
