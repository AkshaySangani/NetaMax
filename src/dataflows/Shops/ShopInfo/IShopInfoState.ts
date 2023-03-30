export interface IShopInfoState {
  /**
   * Shop's current profit
   * @type {number}
   */
  currentProfit?: number;

  /**
   * Indicates whether current profit is loading
   * @type {boolean}
   */
  isLoadingCurrentProfit: boolean;
}
