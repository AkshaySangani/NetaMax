import { ICustomer } from "dataflows/Auth/ICustomer";
import { IBasketItem } from "dataflows/Basket/IBasketItem";
import { IChallenge } from "dataflows/GanaDinero/IChallenge";
import { ICoins } from "dataflows/GanaDinero/ICoins";

export interface IGanaDineroContainerProps {
  /**
   * The Count Down Number.
   * @type {string}
   */
  countDown: number;

  /**
   * The user object.
   * @type {ICustomer}
   */
  user?: ICustomer;

  /**
   * The Coins object.
   * @type {ICoins}
   */
  coins?: ICoins;

  /**
   * The isLoading coins flag.
   * @type {boolean}
   */
  isCoinsLoading: boolean;

  /**
   * Handle the open login flow.
   * @type {() => void}
   */
  onOpenLoginFlow: () => void;

  /**
   * Save the logical coins on the localStorage
   * @type {boolean}
   */
  coinsBeforeLogin: boolean;

  /**
   * Handles redirect to home
   * @type {() => void}
   */
  backToHome: () => void;

  /**
   * The status challenges object.
   * @type {IChallenge}
   */
  statusChallenges: IChallenge[];

  /**
   * The available challenges without logged in.
   * @type {IChallenge}
   */
  availableChallenges: IChallenge[];

  /**
   * Current basket items
   * @type {IBasketItem[]}
   */
  basket: IBasketItem[];

  /**
   * Handle the open login flow.
   * @type {(challengeId: number) => void}
   */
  onChallengeAccepted: (challengeId: number) => void;
}
