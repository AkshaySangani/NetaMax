import { CATEGORY_NAME, DISCOVERY_ID, GMV_ID, SKU_NAME } from "constants/ganaDineroContstans";
import { RootState } from "state/store";

import { IChallenge } from "./IChallenge";
import { ICoins } from "./ICoins";

/**
 * Selector to get the countdown timer
 * @param {RootState} state the root state
 * @returns {ICoins} the countdown timer
 */
export const selectGanaDinero = (state: RootState): ICoins | undefined => state.ganaDinero.coins;

/**
 * Selector to get the GanaDinero Loader
 * @param {RootState} state the root state
 * @returns {boolean} the countdown timer
 */
export const selectIsLoadingGanaDinero = (state: RootState): boolean =>
  state.ganaDinero.isLoadingGetCoins;

/**
 * Selector to get the AddCoins Loader
 * @param {RootState} state the root state
 * @returns {boolean} the countdown timer
 */
export const selectIsLoadingAddCoins = (state: RootState): boolean =>
  state.ganaDinero.isLoadingAddCoins;

/**
 * Selector to get the CoinsLoaded flag
 * @param {RootState} state the root state
 * @returns {boolean} the countdown timer
 */
export const selectIsCoinsLoaded = (state: RootState): boolean => state.ganaDinero.coinsLoaded;

/**
 * Selector to get the CoinsLoaded flag
 * @param {RootState} state the root state
 * @returns {boolean} the countdown timer
 */
export const selectSaveCoins = (state: RootState): boolean => state.ganaDinero.coinsBeforeLogin;

/**
 * Selector to get the available challenges.
 * @param {RootState} state the root state
 * @returns {IChallenge} the available challenges
 */
export const selectAvailableChallenges = (state: RootState): IChallenge[] =>
  state.ganaDinero.availableChallenges;

/**
 * Selector to get the available challenges.
 * @param {RootState} state the root state
 * @returns {IChallenge} the available challenges
 */
export const selectWinnerChallenges = (state: RootState): IChallenge[] =>
  state.ganaDinero.statusChallenges;

/**
 * Selector to get the showModal flag
 * @param {RootState} state the root state
 * @returns {boolean} the showModal boolean
 */
export const selectShowChallengeModal = (state: RootState): boolean =>
  state.ganaDinero.showChallengeModal;

/**
 * Selector to get the GMVNotified flag
 * @param {RootState} state the root state
 * @returns {boolean} the GMVNotified flag
 */
export const selectIsGMVNotified = (state: RootState): boolean => state.ganaDinero.isGMVNotified;

/**
 * Selector to get the GMV challenge
 * @param {RootState} state the root state
 * @returns {IChallenge} the GMV challenge
 */
export const selectGMVChallenge = (state: RootState): IChallenge | undefined =>
  state.ganaDinero.availableChallenges?.find((c) => c.PrizeType === GMV_ID);

/**
 * Selector to get the Discovery challenge
 * @param {RootState} state the root state
 * @returns {IChallenge} the GMV challenge
 */
export const selectDiscoveryChallenge = (state: RootState): IChallenge | undefined =>
  state.ganaDinero.availableChallenges?.find((c) => c.PrizeType === DISCOVERY_ID);

/**
 * Selector to get the SKUNotified flag
 * @param {RootState} state the root state
 * @returns {boolean} the SKUNotified flag
 */
export const selectIsSKUNotified = (state: RootState): boolean => state.ganaDinero.isSKUNotified;

/**
 * Selector to get the CategorNotified flag
 * @param {RootState} state the root state
 * @returns {boolean} the CategorNotified flag
 */
export const selectIsCategoryNotified = (state: RootState): boolean =>
  state.ganaDinero.isCategoryNotified;

/**
 * Selector to get the SKU challenge
 * @param {RootState} state the root state
 * @returns {IChallenge} the GMV challenge
 */
export const selectSKUChallenge = (state: RootState): IChallenge | undefined =>
  state.ganaDinero.availableChallenges?.find((c) => c.PrizeCategoryName === SKU_NAME);

/**
 * Selector to get the SKU challenge
 * @param {RootState} state the root state
 * @returns {IChallenge []} the GMV challenge
 */
export const selectSKUChallenges = (state: RootState): IChallenge[] | undefined =>
  state.ganaDinero.availableChallenges?.filter((c) => c.PrizeCategoryName === SKU_NAME);

/**
 * Selector to get the Challenge challenge
 * @param {RootState} state the root state
 * @returns {IChallenge} the GMV challenge
 */
export const selectCategoryChallenge = (state: RootState): IChallenge | undefined =>
  state.ganaDinero.availableChallenges?.find((c) => c.PrizeCategoryName === CATEGORY_NAME);

/**
 * Selector to get the Challenge challenge
 * @param {RootState} state the root state
 * @returns {IChallenge []} the GMV challenge
 */
export const selectCategoryChallenges = (state: RootState): IChallenge[] | undefined =>
  state.ganaDinero.availableChallenges?.filter((c) => c.PrizeCategoryName === CATEGORY_NAME);

/**
 * Selector to get the awarded coins when completing an order
 * @param {RootState} state the root state
 * @returns {number} awarded coins amount
 */
export const selectAwardCoins = (state: RootState): number => state.ganaDinero.awardedCoins;
