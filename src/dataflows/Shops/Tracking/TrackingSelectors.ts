import { RootState } from "state/store";
import { ITrackingURL } from "./ITrackingState";

/**
 * Selector to get the last tracking url
 * @param {RootState} state the root state
 * @returns {string} the string url
 */
export const selectLastTrackingUrl = (state: RootState): string => state.tracking.lastTrackingUrl;

/**
 * Selector to get the tracking url array
 * @param {RootState} state the root state
 * @returns {ITrackingURL[]} the array of tracking urls
 */
export const selectTrackingUrls = (state: RootState): ITrackingURL[] => state.tracking.trackingUrl;

/**
 * Selector to get the selectIsLoadingTracking state from the state.
 * @param {RootState} state the root state
 * @returns {boolean} the selectIsLoadingTracking state
 */
export const selectIsLoadingTracking = (state: RootState): boolean => state.tracking.loading;
