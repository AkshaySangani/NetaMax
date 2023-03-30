export interface IBalanceCardStyle {
  /**
   * Background color of balance card.
   * @type {string}
   **/
  cardBackground: string;

  /**
   * BoxShadow of balance card.
   * @type {string}
   **/
  boxShadow: string;

  /**
   * Color text of balance card.
   * @type {string}
   **/
  cardTextColor: string;

  /**
   * Amount number of balance card.
   * @type {string}
   **/
  amountCoinText: string;
}

export interface ICoinStyle {
  /**
   * Box shadow style for the Coin Icon.
   * @type {string}
   **/
  boxShadowCoin: string;

  /**
   * Background color for the Coin Icon.
   * @type {string}
   **/
  bgColorCoin: string;

  /**
   * Border color for the Coin Icon.
   * @type {string}
   **/
  borderCoin: string;

  /**
   * Text color for the number into the Coin Icon.
   * @type {string}
   **/
  textColorCoin: string;
}
