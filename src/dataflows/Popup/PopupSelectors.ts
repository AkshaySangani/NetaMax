import { RootState } from "state/store";

import { IPopup } from "./IPopup";

/**
 * Selector to get the popup items from the state.
 * @param {RootState} state the root state
 * @returns {IPopup[]} the popup items
 */
export const selectAllPopups = (state: RootState): IPopup[] => state.popup.popupItems;

/**
 * Selector to get the isLoading state from the state.
 * @param {RootState} state the root state
 * @returns {boolean} the isLoading state
 */
export const selectIsLoadingPopup = (state: RootState): boolean => state?.popup?.isLoadingPopup;

/**
 * Selector to get the selected popup from the state.
 * @param {RootState} state the root state.
 * @returns {IPopup} the selected popup.
 */
export const selectPopup = (state: RootState): IPopup | undefined => state?.popup?.popup;

/**
 * Selector to get if is a new store from the state.
 * @param {RootState} state the root state.
 * @returns {IPopup} the selected popup.
 *
 */
export const selectPopupIsNewStore = (state: RootState): number =>
  state.popup.selectPopupIsNewStore;

/**
 * Selector to get if is a new store from the state.
 * @param {RootState} state the root state.
 * @returns {IPopup} the selected popup.
 *
 */
export const selectShownPopup = (state: RootState): boolean => state.popup.popupShown;
