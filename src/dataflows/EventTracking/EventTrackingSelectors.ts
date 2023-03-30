import { RootState } from "state/store";

/**
 * Selector to get the isAmplitudeInitialized state from the state.
 * @param {RootState} state the root state
 * @returns {boolean} the isAmplitudeInitialized state
 */
export const selectIsAmplitudeInitialized = (state: RootState): boolean =>
  state.eventTracking.isAmplitudeInitialized;

/**
 * Selector to get the isSegmentInitialized state from the state.
 * @param {RootState} state the root state
 * @returns {boolean} the isSegmentInitialized state
 */
export const selectIsSegmentInitialized = (state: RootState): boolean =>
  state.eventTracking.isSegmentInitialized;

/**
 * Selector to get the isSegmentNodeInitialized state from the state.
 * @param {RootState} state the root state
 * @returns {boolean} the isSegmentNodeInitialized state
 */
export const selectIsSegmentNodeInitialized = (state: RootState): boolean =>
  state.eventTracking.isSegmentNodeInitialized;
