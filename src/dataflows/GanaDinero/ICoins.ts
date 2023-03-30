export interface ICoins {
  /**
   * The customer's id number.
   * @type {number}
   */
  Id: number;

  /**
   * The customer's phone number.
   * @type {string}
   */
  Username: string;

  /**
   * The netaWallet amount
   * @type {string}
   **/
  customerCurrentNetaWallet: string;

  /**
   * Coin creation date in UTC format.
   * @type {Date}
   */
  createdOnUTC: Date;

  /**
   * Conditional for disable/enable button.
   * @type {number}
   */
  canAddCoin: number;

  /**
   * Time remaining to allow add more coins
   * @type {string}
   */
  timeRemaining: string;
}
