import { IChallenge } from "./IChallenge";
import { ICoins } from "./ICoins";

export interface IGanaDineroState {
  /**
   * isLoadingGetCoins.
   * @type {boolean}
   */
  isLoadingGetCoins: boolean;

  /**
   * Coins loaded.
   * @type {boolean}
   */
  coinsLoaded: boolean;

  /**
   * isLoadingAddCoins.
   * @type {boolean}
   */
  isLoadingAddCoins: boolean;

  /**
   * isLoading for the AvailableChallenges endpoint.
   * @type {boolean}
   */
  isLoadingAvailableChallenges: boolean;

  /**
   * isLoading for the WinnerChallenges endpoint.
   * @type {boolean}
   */
  isLoadingWinnerChallenges: boolean;

  /**
   * Coins user info.
   * @type {ICoins}
   */
  coins?: ICoins;

  /**
   * State for won coins before register/login.
   * @type {boolean}
   */
  coinsBeforeLogin: boolean;

  /**
   * Available challenges for the user info.
   * @type {IChallenge}
   */
  availableChallenges: IChallenge[];

  /**
   * Winner challenges for each user.
   * @type {IChallenge}
   */
  statusChallenges: IChallenge[];

  /**
   * Shows modal when completing a challenge after purchase
   * @type {boolean}
   */
  showChallengeModal: boolean;

  /**
   * Flag to check if the GMV completion is notified to the tracker apps.
   * @type {boolean}
   */
  isGMVNotified: boolean;

  /**
   * Flag to check if the SKU challenge completion is notified to the tracker apps.
   * @type {boolean}
   */
  isSKUNotified: boolean;

  /**
   * Flag to check if the Category challenge completion is notified to the tracker apps.
   * @type {boolean}
   */
  isCategoryNotified: boolean;

  /**
   * Number of awarded coins when completing an order
   * @type {number}
   */
  awardedCoins: number;
}
