import { RootState } from "state/store";

import { INearestStore } from "./INearestStore";
import { IStore } from "./IStore";
import { ILocation } from "./IStoreState";

/**
 * Selector to get the sales products.
 * @param {RootState} state the root state
 * @returns {IProduct[]} the sales products.
 */
export const selectStore = (state: RootState): IStore | undefined => state?.store?.store;

/**
 * Selector to get the isLoadingSalesSection state from the state.
 * @param {RootState} state the root state
 * @returns {boolean} the isLoadingSalesSection state
 */
export const selectIsLoadingStore = (state: RootState): boolean => state?.store?.isLoadingStore;

/**
 * Selector to get the nearest stores
 * @param {RootState} state the root state
 * @returns {Array} the nearest stores
 */
export const selectNearestStores = (state: RootState): INearestStore[] => state.store.nearestStores;

/**
 * Selector to get if is loading nearest stores
 * @param {RootState} state the root state
 * @returns {boolean} loading nearest stores
 */
export const selectLoadingNearestStores = (state: RootState): boolean =>
  state.store.isLoadingNearestStores;

/**
 * Gets the error message
 * @param {RootState} state the root state
 * @returns {string | undefined} the error message
 */
export const selectErrorMessage = (state: RootState): string | undefined =>
  state.store.errorMessage;

/**
 * Gets the user location
 * @param {RootState} state the root state
 * @returns {ILocation | undefined} the user location
 */
export const selectUserLocation = (state: RootState): ILocation | undefined =>
  state.store.userLocation;

/**
 * Gets the selected store
 * @param {RootState} state the root state
 * @returns {INearestStore | undefined} the selected store
 */
export const selectSelectedStore = (state: RootState): INearestStore | undefined =>
  state.store.selectedStore;

/**
 * Gets the circle distance
 * @param {RootState} state the root state
 * @returns {number} the error message
 */
export const selectCircleDistance = (state: RootState): number => state.store.circleDistance;
